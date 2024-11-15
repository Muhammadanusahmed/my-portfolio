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

    // for chacking path for using pt-36 tailwind property 
    // const currentPath = window.location.pathname;
    // const isOnResumePage = currentPath === '/resume';
  };

  return (
   

<div className="min-h-screen border-2 border-teal-600 border-x-0 border-b-0 max-h-screen grid grid-cols-2 py-6 grid-flow-col block-inline" >
<div className="row-cols-8 relative max-w-2xl mx-auto p-4 pb-0">
<h1 className="md:text-4xl font-sans font-bold mb-8 text-white max-w-lg pt-5 mx-auto my-2 text-sm text-center relative z-10">
    UPDATED RESUME</h1>  
<h1 className="md:text-2xl italic bold font-sans font-bold mb-8 underline drop-shadow-xl shadow-white text-teal-500 max-w-lg pt-5 mx-auto my-2 text-sm text-center relative z-10">
    RESUME SETUPS BY MUHAMMAD ANUS AHMED</h1>  
<h1 className="md:text-1xl font-bold mb-8 align-middle text-slate-200 max-w-lg pt-5 mx-auto my-4 text-sm text-center relative z-10">
    if you want to download my resume click on the button</h1>  
   
    <button
        onClick={handleDownloadPDF}
        className="flex px-4 py-2 align-middle bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
      >
        Download as PDF
      </button>
    
</div>

<div className="row-span-2 justify-end">
<Image
        ref={imageRef}
        src="/resume.jpg"
        alt="Convert this JPG to PDF"
        width={300}
        height={500}
        className="max-w-md hover:shadow-2xl shadow-white"
      /></div>
</div>
   );
 };

export default JPGToPDFConverter;