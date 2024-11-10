"use client";
import Link from "next/link";
const Header = () => {
  // const scrollToSection = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <div className="py-4 md:px-7">
      <div className="flex items-center justify-between px-6 ">
        <Link href="/">
         <em className="block-inline font-bold lg:text-3xl text-2xl"> MY PORTFOLIO</em>
         <em className="lg:text-sm pl-2">BY MUHAMMAD ANUS AHMED</em>
        </Link>
        
        <div className="font-light flex justify-end gap-8 md:text-lg list-none">
          <Link href={"/"} className="hover:bg-slate-100/50 hover:duration-75 hover:rounded-lg px-4 py-2">Home
          </Link>
          {/* <Link href="/resume" className="cursor-pointer hover:bg-slate-100/50 hover:duration-75 hover:rounded-lg px-4 py-2">
          </Link> */}
           {/* <Link href="/experience" className="hover:bg-slate-100/50 hover:duration-75 hover:rounded-lg px-4 py-2">
          </Link>  */}
           <Link href="/about" className="cursor-pointer hover:bg-slate-100/50 hover:duration-75 hover:rounded-lg px-4 py-2">About
          </Link>
          <Link href="/contact" className="cursor-pointer hover:bg-slate-100/50 hover:duration-75 hover:rounded-lg px-4 py-2">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
