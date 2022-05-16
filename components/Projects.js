import Link from "next/link";
import Image from "next/image";
import Card from "/components/Card";
import goFish from "../public/assets/go-fish-home.png";
import whereWander from "../public/assets/where-wander.png";

const Projects = () => {
  return (
    <div className="my-16 px-3" id="projects">
      <p className="text-3xl font-bold text-mystic">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Card
          src={whereWander}
          title={"Where to Wander"}
          description={"HTML/CSS/JavaScript/API"}
          href={"https://norklas.github.io/project-one/"}
        />
        <Card
          src={goFish}
          title={"Go Fish"}
          description={"JavaScript/Express/Sequelize/MVC"}
          href={"https://go-fish-project-two.herokuapp.com/"}
        />
      </div>
    </div>
  );
};

export default Projects;
