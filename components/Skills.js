import { MdOutlineNavigateNext } from "react-icons/md";

const Skills = () => {
  return (
    <div className="my-16 px-3" id="skills">
      <p className="text-3xl font-bold text-mystic">Skills</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg text-mystic">
        <p className="flex flex-row items-center border-b-[0.1px] border-mystic py-1">
          <MdOutlineNavigateNext />
          <span className="text-perano">JavaScript</span>
          &nbsp;as my main language
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-mystic py-1">
          <MdOutlineNavigateNext />
          <span className="text-perano">Next.js</span>
          &nbsp;as my Frontend framework
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-mystic py-1">
          <MdOutlineNavigateNext />
          <span className="text-perano">Tailwind CSS</span>
          &nbsp;as my CSS framework
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-mystic py-1">
          <MdOutlineNavigateNext />
          <span className="text-perano">Express.js</span>
          &nbsp;as my Backend framework
        </p>
      </div>

      <p className="text-lg font-medium text-mystic">
        ... more skills include <span className="text-perano">Sequelize</span>,{" "}
        <span className="text-perano">React.js</span>,{" "}
        <span className="text-perano">SQL</span>{" "}
      </p>
    </div>
  );
};

export default Skills;
