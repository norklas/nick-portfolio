import Link from "next/link";
import Image from "next/image";
import avatarPic from "../public/assets/avatar.jpg";
import { MdOutlineNavigateNext } from "react-icons/md";

const About = () => {
  return (
    <div
      className="my-8 flex flex-row items-center justify-between text-mystic px-3"
      id="about"
    >
      <div>
        <p className="text-3xl font-bold">Nick Melanson</p>
        <p className="mt-1 text-lg">Frontend Developer, and a Student</p>

        <p className="mt-4 text-perano">
          Proficient in Frontend, dabbling in Backend.
        </p>
        <p className="mt-4 text-perano">
          Dedicated lifelong learner with a commitment to clean, robust code.
        </p>

        <Link
          href="https://www.dropbox.com/s/ok746sulh19ctbo/Resume.pdf?dl=0"
          passHref
        >
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 text-xl text-mystic duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download my resume
            <MdOutlineNavigateNext />
          </a>
        </Link>
      </div>

      <div className="custom:block">
        <Image
          src={avatarPic}
          width="124"
          height="124"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
