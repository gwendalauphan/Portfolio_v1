## 🛡️ 1. Identifier les dépendances obsolètes / vulnérables

### ▶️ `npm outdated`

```bash
npm outdated
```

Tu obtiens un tableau avec :

- **Current** (ce que tu utilises)
- **Wanted** (dernière version compatible avec ta version semver)
- **Latest** (la dernière version disponible sur npm)

---

### ▶️ `npm audit`

```bash
npm audit
```

Il détecte les **vulnérabilités de sécurité connues**. Très utile pour voir si certaines mises à jour sont urgentes.

---

## 🔁 2. Mettre à jour progressivement

### 💡 Recommandé : Mise à jour **"safe"**

```bash
npm update
```

> Cela met à jour **les versions mineures et correctives** (patch & minor) selon ton `package.json`.

---

### 🧨 Pour mise à jour totale (avec breaking changes potentielles)

Si tu veux la dernière version de tout :

```bash
npx npm-check-updates -u
npm install
```

🟡 Cela modifie ton `package.json` en mettant **les dernières versions disponibles** (`latest`), même si ça casse ton code. À ne faire que si tu es prêt à tester et corriger.

Installe `npm-check-updates` si besoin :

```bash
npm install -g npm-check-updates
```

---

## 🧰 3. Utilise des outils d’audit & fixes

```bash
npm audit fix
# ou
npm audit fix --force
```

⚠️ `--force` peut casser des dépendances → utilise-le uniquement si tu es prêt à tester derrière.

---

## 🧪 4. Tester après mise à jour

Lance :

```bash
npm run dev
npm run build
```

Et vérifie :

- Que l’app démarre
- Que la build passe sans erreur
- Que ton site fonctionne comme avant

---

## 💡 Astuce bonus : figer les versions

Pour éviter les mauvaises surprises plus tard :

```bash
npm ci
```

Utilise le `package-lock.json` et **installe exactement les versions listées** (pratique en prod/CI).

---

## ✅ Checklist à suivre

| Étape                         | Commande                              |
|------------------------------|----------------------------------------|
| Voir versions obsolètes      | `npm outdated`                        |
| Voir vulnérabilités          | `npm audit`                           |
| Mise à jour mineure / patch  | `npm update`                          |
| Mise à jour complète         | `npx npm-check-updates -u && npm i`   |
| Corriger vulnérabilités      | `npm audit fix [--force]`             |
| Tester après MAJ            | `npm run dev` et `npm run build`      |

---

Souhaites-tu que je t’aide à **passer en revue ton `package.json` actuel** et te propose une mise à jour manuelle propre ? Tu peux me le coller ici.