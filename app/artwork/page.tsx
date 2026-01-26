// app/artwork/page.tsx
import Image from "next/image";
import Link from "next/link";

const artPieces = [
  { id: 1, src: "/art-2.png", title: "title", year: "2023" },
  { id: 2, src: "/art-1.png", title: "title", year: "2023" },
];

export default function Artwork() {
  return (
    <div className="min-h-screen bg-[#faf8f5] px-6 py-12 md:py-20">
      
      {/* HEADER SECTION */}
      <div className="max-w-[1000px] mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#c4a882] mb-2">
            ✿ Portfolio
          </p>
          <h1 className="text-3xl md:text-4xl font-light text-[#5c4a3d]">
            Works <span className="italic font-serif text-[#c4a882]">By Me!</span>
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
      <div className="max-w-[1000px] mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {artPieces.map((piece) => (
          <div 
            key={piece.id} 
            className="break-inside-avoid relative group cursor-pointer"
          >
            {/* Image Container with Hover Effect */}
            <div className="relative overflow-hidden rounded-lg border border-[#e8ddd0] bg-white shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:-translate-y-1">
              <Image
                src={piece.src}
                alt={piece.title}
                width={600}
                height={800}
                className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity"
              />
              
              {/* Hover Overlay Info */}
              <div className="absolute inset-0 bg-[#5c4a3d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                 <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                    <p className="text-[12px] font-medium text-[#5c4a3d]">{piece.title}</p>
                    <p className="text-[10px] text-[#9c8b7a]">{piece.year}</p>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER NOTE */}
      <div className="text-center mt-20">
        <p className="text-[#c4a882] text-xl">✧</p>
      </div>
    </div>
  );
}