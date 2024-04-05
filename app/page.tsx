import Link from "next/link";
import About from "./components/about";
import Experience from "./components/experience";
import Profile from "./components/profile";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <Profile />
        <About />
        <Experience />
      </div>
    </>
  );
}
