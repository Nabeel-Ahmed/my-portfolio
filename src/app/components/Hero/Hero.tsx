import Topography from "../../../../public/filledTopography.svg";

export default function Hero() {
  return (
    <div
      className="min-h-screen max-w-screen "
      style={{
        backgroundImage: `url(${Topography.src})`, // Use the imported SVG
      }}
    >
      <div className="text-center flex flex-col items-center justify-center h-screen">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Nabeel Ahmed</h1>
          <p className="p-6">
            A software engineer with over 5 years of experience building
            software in different spaces such as marketplaces, Web 3.0,
            e-commerce, Rail and Transport with both frontend and backend
            experience.
          </p>
        </div>

        {/* todo: Turn into component */}
        <div>
          <div className="overflow-x-hidden max-w-md z-10">
            <div className="py-12 animate-marquee whitespace-nowrap">
              <span className="text-xl mx-4">JavaScript</span>
              <span className="text-xl mx-4">React</span>
              <span className="text-xl mx-4">TypeScript</span>
              <span className="text-xl mx-4">Redux</span>
              <span className="text-xl mx-4">SCSS</span>
              <span className="text-xl mx-4">Tailwind</span>
              <span className="text-xl mx-4">Node.js</span>
              <span className="text-xl mx-4">PHP</span>
              <span className="text-xl mx-4">Laravel</span>
              <span className="text-xl mx-4">Go</span>
              <span className="text-xl mx-4">AWS</span>
              <span className="text-xl mx-4">Puppeteer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
