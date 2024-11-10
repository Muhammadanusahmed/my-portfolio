import Image from "next/image";
function Hero (){
  return (
   <div className="max-h-screen grid grid-cols-2 h-screen block-inline">
    <div className="row-cols-8 relative max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-7xl md:text-6xl md:mt-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          frontend developer
        </h1>
       
        <p className="text-neutral-500 max-w-lg pt-5 mx-auto my-2 text-sm text-center relative z-10">

        I am a passionate web designer and developer with experience in creating custom websites for
         various industries, including business management, fitness, gaming, e-commerce, and restaurants.
          My goal is to deliver visually appealing and user-friendly websites tailored to your specific needs.
        </p>
        
    </div>
    <div className="row-span-2 ">
      <Image 
        src="/hero.jpg" 
        className="rounded-lg ml-10 focus:ring-2 border-4 border-teal-600"
        alt="hero" 
        width={500} 
        height={500} />
    

    </div>

   </div>
  );
};

export default Hero;
