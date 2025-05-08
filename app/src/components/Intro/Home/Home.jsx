import SectionWrapper from "../../../hoc/SectionWrapper";

const HomeSection = () => {
  return (
    <div className="Home-pageContainer">
      <div className="Home-contentSection">
        <pre className="code-snippet">
          <span className="prompt">gwendal@portfolio:~$</span>{" "}
          <span className="command">cd ~</span>
        </pre>
        <div className="bash-function">
          <p className="Home-sectionSubText">
            As a <span className="keyword-purple">full-stack developer</span>,
            each new project is an invitation to{" "}
            <span className="keyword-blue"> creation </span> and{" "}
            <span className="keyword-blue">innovation</span>.
            <br />
            <br />
            My enthusiasm for fresh challenges pairs with a continuous
            exploration of <span className="keyword-purple">
              philosophy
            </span>{" "}
            and <span className="keyword-purple">personal development. </span>
            Always ready for{" "}
            <span className="keyword-blue">new enriching adventures.</span>
          </p>
          <br></br>

          <p className="bash-function-header">
            <span className="func-keyword">func</span>{" "}
            <span className="func-name">explore</span>{" "}
            <span className="bracket-open">{`(){`}</span>
          </p>
          <p
            className="Home-sectionSubText"
            style={{ marginLeft: "15px", marginBottom: 0 }}
          >
            You&apos;ve landed in a space-themed universe, enjoy your voyage as
            you explore my world of code and creativity.
          </p>
          <p className="bash-function-footer" style={{ marginBottom: "0px" }}>
            <span className="bracket-close">{`}`}</span>
          </p>
          <br />
        </div>
        <h2 className="Home-sectionHeadText">
          <span className="hash-symbol">#</span> echo{" "}
          <span className="bracket-close">&quot;</span>
          <span className="keyword-blue">Happy</span>{" "}
          <span className="keyword-purple">Exploring !</span>
          <span className="bracket-close">&quot;</span>
        </h2>
      </div>
    </div>
  );
};

const WrappedHome = SectionWrapper(HomeSection, "HomeSection");
export default WrappedHome;
