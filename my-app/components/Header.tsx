import Image from "next/image";
import HeaderOptions from "./HeaderOptions";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="py-6 px-8 flex flex-row justify-between items-center
    bg-(--clr-secondary)">
      <div className="header-logo">
        <Image src="/construction-logo.svg"
          alt="header logo"
          width="0"
          height="0"
          className="w-full"
        />
      </div>
      <Navbar />
      <HeaderOptions />
    </header>
  )
}