#!/usr/bin/bash

set -e
trap clean_up EXIT


# ----------- VARIABLES ------------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
APP_DIR="${SCRIPT_DIR}/../app/"
SECRETS_FILE="${APP_DIR}/.env"
# ----------------------------------

function clean_up() {
  hcp auth logout
  echo "Cleaning up temporary files..."
  rm -rf "$OUPUT_SECRETS_JSON"
}

function print_usage() {
    echo "export \$(grep -v '^#' $PROJECT_DIR/tooling.env | xargs)"
    echo "Usage: $0 [--help]"
    exit 1
}

clean_up
# ----------- PARSING ARGUMENTS ------------
while [[ "$#" -gt 0 ]]; do
  case $1 in
    --help) print_usage ;;
    *) echo "Unknown option: $1"; print_usage ;;
  esac
  shift
done

if [ -z "${HCP_CLIENT_ID}" ]; then
    echo "Error: HCP_CLIENT_ID is not set. Please set it to use hcp."
    print_usage
    exit 1
fi
if [ -z "${HCP_CLIENT_SECRET}" ]; then
    echo "Error: HCP_CLIENT_SECRET is not set. Please set it to use hcp."
    print_usage
    exit 1
fi

# -------------------------------------

if ! hcp auth login --client-id="${HCP_CLIENT_ID}" --client-secret="${HCP_CLIENT_SECRET}"; then
    echo "Error: Failed to authenticate with HCP. Please check your credentials." >&2
    exit 1
fi

OUPUT_SECRETS_JSON="tmp_screts.json"

if ! hcp vault-secrets secrets open "PORTFOLIO_V1_SECRETS" --app reverse-proxy -o $OUPUT_SECRETS_JSON; then
    echo "Error: Failed to retrieve the PORTFOLIO_V1_SECRETS from Vault. Please verify the private path and app name." >&2
    exit 1
fi

hcp auth logout

# ----------- GENERATE .env FILE ------------
echo "Generating $SECRETS_FILE..."

jq -r '
  to_entries[] |
  (.key | ascii_upcase) + "=" +
  (if (.value | type == "string") then "\"" + .value + "\"" else (.value | tostring) end)
' "$OUPUT_SECRETS_JSON" > "$SECRETS_FILE"


echo "Done. File generated at $SECRETS_FILE"
# ---------------------------------------

