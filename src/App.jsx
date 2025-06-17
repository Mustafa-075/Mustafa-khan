import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from"./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";




const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          {/* Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

          {/* Radial Gradient */}
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] z-0"></div>
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-8 space-y-16">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
