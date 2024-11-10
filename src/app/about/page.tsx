'use client';
import { BackgroundBeams } from "@/components/ui/background-beams";


function MusicSchoolContactUs() {
 

  return (
    <div className=" bg-gray-100 dark:bg-gray-900 pb-24 py-12 relative">
     
      <BackgroundBeams/>
  
       <div className="max-w-4xl mx-auto px-4 relative z-10">
      
    
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          About Us
        </h1>
        <p className="text-neutral-400 mx-auto my-2 text-sm text-center space-y-4 mt-4">
        Welcome! I’m a passionate Frontend Developer skilled in HTML, CSS, JavaScript, TypeScript, and Next.js. My portfolio is designed to give you a clear view of my technical skills, project experiences, and creative process. I’ve crafted each section here to showcase my ability to create intuitive and visually appealing web interfaces, from concept to code.
        </p>
        <p className='text-neutral-400 mx-auto my-2 text-sm text-center space-y-4 mt-4'>In addition to web development, I’m proficient in Adobe Illustrator and have a working knowledge of Figma, which I use to enhance my design and prototyping skills. Tools like Microsoft Excel and Word help me stay organized and efficient, ensuring my projects are well-managed and my time is optimized.</p>
        
        <p className='text-neutral-400 mx-auto my-2 text-sm text-center space-y-4 mt-4'>
        I’m excited to connect with you and explore opportunities to work on exciting projects. Let’s collaborate and bring your ideas to life!
        </p>
        <p className='text-neutral-400 mx-auto text-sm text-center space-y-4 mt-6'>
        This portfolio highlights not only my skills and projects but also my approach to problem-solving and design thinking. Explore, and let’s connect to discuss how we can work together to bring ideas to life!
        </p>
        
      </div> 
    </div>
  );
}

export default MusicSchoolContactUs;