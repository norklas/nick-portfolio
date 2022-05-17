import Image from "next/image";

const Card = ({ src, href, title, description }) => {
  return (
    <div className="max-w-sm bg-hippie-blue rounded-lg border border-mystic shadow-md relative transform hover:scale-105 transition duration-2000 ease-out">
      <a href={href}>
        <Image
          className="rounded-t-lg"
          src={src}
          alt=""
          layout="intrinsic"
          objectFit="contain"
        />
      </a>
      <div className="p-5">
        <a href={href}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-mystic">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-mystic">{description}</p>
        <a
          href={href}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-mystic bg-blue-jay rounded-lg hover:bg-[#1F3E61] focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          View
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
