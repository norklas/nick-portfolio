const Skills = () => {
  return (
    <div className="my-16 px-3" id="skills">
      <p className="text-3xl font-bold text-mystic">Technologies</p>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 my-8 text-mystic">
        <div>
          <h3 className="text-2xl mb-3">Languages</h3>
          <ul className="pl-7 text-perano text-lg">
            <li>HTML5 (Handlebars)</li>
            <li>CSS3 (SASS)</li>
            <li>JavaScript (ES6)</li>
            <li>SQL/GraphQL</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mb-3">Methods</h3>
          <ul className="pl-7 text-perano text-lg">
            <li>OOP</li>
            <li>Webpack/NPM</li>
            <li>PWAS/Service Workers</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mb-3">Frameworks & Libraries</h3>
          <ul className="pl-7 text-perano text-lg">
            <li>React/Next.js</li>
            <li>jQuery</li>
            <li>TailwindCSS/Bootstrap</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mb-3">Databases & Tools</h3>
          <ul className="pl-7 text-perano text-lg">
            <li>MongoDB (Mongoose)</li>
            <li>MySQL</li>
            <li>Git</li>
            <li>Heroku</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
