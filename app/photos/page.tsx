// app/photos/page.tsx
import Image from "next/image";
import Link from "next/link";

// Updated data structure for photography
// id: 1, src: "/photo-1.jpg", location: "Durham, NC", film: "Portra 400" },
const photos = [
  {}
];

export default function Photos() {
  return (
    <div className="min-h-screen bg-[#faf8f5] px-6 py-12 md:py-20">
      
      {/* HEADER SECTION */}
      <div className="max-w-[1000px] mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#c4a882] mb-3">
            ✿ Film & Digital
          </p>
          <h1 className="text-3xl md:text-5xl font-light text-[#5c4a3d] tracking-tight">
            Captured <span className="italic font-serif text-[#c4a882]">By Me!</span>
          </h1>
        </div>

        {/* BACK BUTTON */}
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#9c8b7a] hover:text-[#5c4a3d] transition-colors"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span> 
          Back to Desk
        </Link>
      </div>

      {/* MASONRY GRID GALLERY */}
      {/* 'columns-' classes create the masonry effect automatically */}
      <div className="max-w-[1000px] mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="break-inside-avoid relative group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-sm border-[6px] border-white bg-white shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:-translate-y-1">
              <Image
                src={photo.src}
                alt={`Photo taken in ${photo.location}`}
                width={600}
                height={800}
                className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity"
              />
              
              {/* Hover Overlay Info */}
              <div className="absolute inset-0 bg-[#5c4a3d]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                 <div className="bg-white/95 backdrop-blur-md px-4 py-3 shadow-sm w-full">
                    <div className="flex justify-between items-center">
                        <p className="text-[12px] font-bold text-[#5c4a3d] tracking-wide uppercase">
                            {photo.location}
                        </p>
                        <p className="text-[10px] font-mono text-[#9c8b7a]">
                            {photo.film}
                        </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER NOTE */}
      <div className="text-center mt-24 opacity-60">
        <p className="text-[#c4a882] text-2xl animate-pulse">✧</p>
      </div>
    </div>
  );
}