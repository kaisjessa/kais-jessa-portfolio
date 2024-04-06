import Link from "next/link";
import About from "./components/about";
import Experience from "./components/experience";
import Profile from "./components/profile";
import Header from "./components/header";
import Projects from "./components/projects";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <Profile />
        <About />
        <Experience />
        <Projects />
      </div>
    </>
  );
}
