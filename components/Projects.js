import Link from "next/link";
import Image from "next/image";
import Card from "/components/Card";
import goFish from "../public/assets/go-fish-home.png";
import whereWander from "../public/assets/where-wander.png";
import giv from "../public/assets/giv.jpg";

const Projects = () => {
  return (
    <div className="my-16 px-3" id="projects">
      <p className="text-3xl font-bold text-mystic">Featured Projects</p>
      <div className="my-8 flex flex-col flex-wrap items-center justify-center gap-10 sm:flex-row">
        <Card
          src={whereWander}
          title={"Where to Wander"}
          description={"HTML/CSS/JavaScript/API"}
          live={"https://norklas.github.io/where-to-wander/"}
          github={"https://github.com/norklas/where-to-wander"}
        />
        <Card
          src={goFish}
          title={"Go Fish"}
          description={"JavaScript/Express/Sequelize/MVC"}
          live={"https://go-fish.up.railway.app/"}
          github={"https://github.com/norklas/go-fish"}
        />
        <Card
          src={giv}
          title={"giv."}
          description={"MERN/GraphQL/Apollo"}
          live={"https://giv-social.up.railway.app/"}
          github={"https://github.com/norklas/giv"}
        />
      </div>
    </div>
  );
};

export default Projects;
