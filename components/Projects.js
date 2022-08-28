import Link from "next/link";
import Image from "next/image";
import Card from "/components/Card";
import goFish from "../public/assets/go-fish-home.png";
import whereWander from "../public/assets/where-wander.png";
import giv from "../public/assets/giv.jpg";
import noteTaker from "../public/assets/note-taker.jpg";
import techBlog from "../public/assets/tech-blog.jpg";
import weatherDash from "../public/assets/weather-dash.jpg";
import reactPortfolio from "../public/assets/react-port.jpg";

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
          live={"https://go-fish-project-two.herokuapp.com/"}
          github={"https://github.com/norklas/go-fish"}
        />
        <Card
          src={giv}
          title={"giv."}
          description={"MERN/GraphQL/Apollo"}
          live={"https://giv-social.herokuapp.com/"}
          github={"https://github.com/norklas/giv"}
        />
        <Card
          src={reactPortfolio}
          title={"React SPA Portfolio"}
          description={"React/TailwindCSS"}
          live={"https://norklas.github.io/nick-port-react/"}
          github={"https://github.com/norklas/nick-port-react"}
        />
        <Card
          src={noteTaker}
          title={"Note Taker"}
          description={"JavaScript/Express/UUID"}
          live={"https://nork-note-taker.herokuapp.com/"}
          github={"https://github.com/norklas/note-taker-app"}
        />
        <Card
          src={techBlog}
          title={"Tech Blog"}
          description={"JavaScript/Express/bCrypt/MVC"}
          live={"https://norklas-tech-blog.herokuapp.com/"}
          github={"https://github.com/norklas/mvc-tech-blog"}
        />
        <Card
          src={weatherDash}
          title={"Weather Dashboard"}
          description={"JavaScript/API/jQuery/Tailwind"}
          live={"https://norklas.github.io/weather-dashboard/"}
          github={"https://github.com/norklas/weather-dashboard"}
        />
      </div>
    </div>
  );
};

export default Projects;
