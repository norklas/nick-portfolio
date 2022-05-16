import Link from "next/link";

import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";

import { MdEmail } from "react-icons/md";

import { FaDiscord } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="px-3">
      <p className="text-3xl font-bold text-mystic">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Link href="https://github.com/norklas" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="contact icon"
            className="rounded-lg bg-hippie-blue p-2 text-2xl text-white ring-mystic transition-all duration-150 hover:ring-2"
          >
            <AiOutlineGithub />
          </a>
        </Link>

        <Link href="https://twitter.com/eNeM___" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="contact icon"
            className="rounded-lg bg-hippie-blue p-2 text-2xl text-white ring-mystic transition-all duration-150 hover:ring-2"
          >
            <AiOutlineTwitter />
          </a>
        </Link>

        <Link href="mailto:nickm890@gmail.com" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="contact icon"
            className="rounded-lg bg-hippie-blue p-2 text-2xl text-white ring-mystic transition-all duration-150 hover:ring-2"
          >
            <MdEmail />
          </a>
        </Link>
        <Link href="https://www.discordapp.com/users/norklas#2081" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="contact icon"
            className="rounded-lg bg-hippie-blue p-2 text-2xl text-white ring-mystic transition-all duration-150 hover:ring-2"
          >
            <FaDiscord />
          </a>
        </Link>
        <Link
          href="https://www.linkedin.com/in/nick-melanson-964261110/"
          passHref
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="contact icon"
            className="rounded-lg bg-hippie-blue p-2 text-2xl text-white ring-mystic transition-all duration-150 hover:ring-2"
          >
            <AiOutlineLinkedin />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
