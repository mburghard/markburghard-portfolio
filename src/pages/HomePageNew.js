import "bootstrap/dist/js/bootstrap.bundle.min";
import MorphBlob from "../components/MorphBlob";
import "./HomePageNew.css";
//Under Construction.
const HomePageNew = () => {
  return (
    <>
      <section className="purple">
        <h1>Under Construction</h1>
        <p>Coming Soon.</p>
        <MorphBlob />
      </section>
      <div className="spacer layer1"></div>
      <section className="dark">
        <h1>Projects</h1>
      </section>
      <div className="spacer layer1 flip"></div>
      <section className="purple">
        <h1>Skills</h1>
      </section>
      <section className="orange">
        <h1>About Me</h1>
      </section>
      <section className="dark">
        <h1>Contact</h1>
      </section>
    </>
  );
};

export default HomePageNew;
