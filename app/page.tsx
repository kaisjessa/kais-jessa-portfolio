import About from "./components/about";
import Experience from "./components/experience";
import Profile from "./components/profile";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Profile />
        <About />
        <Experience />
      </div>
    </>
  );
}
