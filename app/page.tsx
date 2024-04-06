import About from "./components/about";
import Experience from "./components/experience";
import Profile from "./components/profile";
import Header from "./components/header";
import Projects from "./components/projects";
import Stack from "./components/stack";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <Profile />
        <Stack />
        <About />
        <Experience />
        <Projects />
      </div>
    </>
  );
}
