import Image from "next/image";
function Hero (){
  return (
   <div className="pt-24 pb-24 lg:flex flex-row-reverse justify-center items-center  ">
    
    <div className="flex px-12 pt-12 lg:6 pb-6 justify-center items-center">
      <Image 
        src="/hero.jpg" 
        className=" rounded-lg justify-center items-center focus:ring-2 border-4 border-teal-600"
        alt="hero" 
        width={500}
        height={500}
         />
    

    </div>
<div className="cols-8 relative max-w-2xl mx-auto px-4">
        <h1 className="relative z-10 text-3xl lg:text-6xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Frontend Developers
        </h1>
       
        <p className="text-neutral-500 max-w-lg pt-5 mx-auto my-2 text-sm text-center relative z-10">

        I am a passionate web designer and developer with experience in creating custom websites for
         various industries, including business management, fitness, gaming, e-commerce, and restaurants.
          My goal is to deliver visually appealing and user-friendly websites tailored to your specific needs.
        </p>      
    </div>
   </div>
  );
};

export default Hero;
