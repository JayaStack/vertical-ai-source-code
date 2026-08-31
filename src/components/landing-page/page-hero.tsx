import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  backgroundText?: string;
  backgroundImage?: string;
}

export default function PageHero({
  title,
  backgroundText,
  backgroundImage = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2940&auto=format&fit=crop',
}: PageHeroProps) {
  return (
    <div
      className={`relative w-full h-[35vh] min-h-[280px] flex flex-col justify-center items-center text-center px-6 mt-[80px] overflow-hidden`}
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* <div className="absolute inset-0 bg-black/60 z-0"></div> */}
      
      {/* Large Outlined Background Text */}
      <div 
        className="absolute z-0 text-[80px] md:text-[150px] font-extrabold tracking-wider whitespace-nowrap opacity-20 pointer-events-none select-none flex items-center justify-center w-full uppercase"
        style={{
          color: 'transparent',
          WebkitTextStroke: '2px rgba(255, 255, 255, 0.8)'
        }}
      >
        {backgroundText || title}
      </div>

      <div className="relative z-10 text-white flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          {title}
        </h1>
      </div>
    </div>
  );
}
