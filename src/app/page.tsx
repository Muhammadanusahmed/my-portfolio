import Hero from "@/components/Hero";
import Sec2 from "@/components/Sec2";
import Sec3 from "@/components/Sec3"
import Contact  from "@/app/contact/page";
// import Resume from "@/app/resume/page";


export default function Home() {
  return (
    <div>
      <Hero />
      <Sec2 />
      <Sec3 />
      {/* <Resume /> */}
      <Contact />

    </div>

  );
}
