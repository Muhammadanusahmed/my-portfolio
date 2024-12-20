"use client";
import { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Image from 'next/image';

const JPGToPDFConverter: React.FC = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleDownloadPDF = async () => {
    if (!imageRef.current) return;

    // Image ko canvas me convert karne ke liye html2canvas ka use
    const canvas = await html2canvas(imageRef.current);
    const imgData = canvas.toDataURL('image/jpeg');

    // PDF banane ke liye jsPDF ka use
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    
    // Aapke image ki aspect ratio ko maintain karte hue PDF dimensions calculate
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('download.pdf');  // PDF download
  };

  return (
   

<div className="min-h-screen border-2 px-auto md:px-16 md:gap-44 border-teal-600 border-x-0 mt-10 border-b-0 flex flex-col-reverse md:flex-row md:items-center md:block-inline" >

<div>
<h1 className="hidden md:block md:text-4xl font-sans font-bold mb-8 text-white max-w-lg my-2 text-sm text-center z-10">
    UPDATED RESUME</h1>  
<h1 className="hidden md:block md:text-2xl italic bold font-sans font-bold mb-8 underline drop-shadow-xl shadow-white text-teal-500 max-w-lg pt-5 my-2 text-sm text-center z-10">
    RESUME SETUP BY MUHAMMAD ANUS AHMED</h1>  
<h1 className="hidden md:block md:text-1xl font-bold mb-8 align-middle text-slate-200 max-w-lg pt-5 my-4 text-sm text-center relative z-10">
    if you want to download my resume click on the button</h1>  
   
    <button
        onClick={handleDownloadPDF}
        className="flex px-4 py-2 mb-12 align-middle mx-auto md:mx-0 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
      >
        Download as PDF
      </button>
    
</div>
<div className="mb-6 md:my-12 row-span-2 mx-auto">
<Image
        ref={imageRef}
        src="/resume.jpg"
        alt="Convert this JPG to PDF"
        width={300}
        height={500}
        className="max-w-md hover:shadow-2xl shadow-white"
      /></div>

<h1 className="md:hidden text-2xl font-sans font-bold mb-8 text-white max-w-lg my-2 text-center z-10">
UPDATED RESUME</h1>  
</div>
   );
 };

export default JPGToPDFConverter;