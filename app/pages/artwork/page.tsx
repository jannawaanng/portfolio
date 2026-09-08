// app/pages/artwork/page.tsx
import Image from "next/image";
import Link from "next/link";

/* ------------------------------------------------------------------
   ARTWORK GALLERY
   Cream/serif DNA matching the Photos page, framed + captioned
   like a gallery wall. Edit titles/mediums/years per piece.
   ------------------------------------------------------------------ */

type Piece = {
  id: number;
  src: string;
  title: string;
  medium: string;
  year: string;
  alt: string;
};

const pieces: Piece[] = [
  { id: 1, src: "/art-1.png", title: "Untitled I", medium: "Acrylic on canvas", year: "2024", alt: "Artwork one" },
  { id: 2, src: "/art-2.png", title: "Untitled II", medium: "Watercolor & ink", year: "2024", alt: "Artwork two" },
  { id: 3, src: "/art-3.png", title: "Untitled III", medium: "Digital illustration", year: "2023", alt: "Artwork three" },
  { id: 4, src: "/art-4.png", title: "Untitled IV", medium: "Gouache", year: "2023", alt: "Artwork four" },
  { id: 5, src: "/art-5.png", title: "Untitled V", medium: "Graphite & charcoal", year: "2023", alt: "Artwork five" },
  { id: 6, src: "/art-6.png", title: "Untitled VI", medium: "Mixed media", year: "2022", alt: "Artwork six" },
  { id: 7, src: "/art-7.png", title: "Untitled VII", medium: "Oil on panel", year: "2022", alt: "Artwork seven" },
];

export default function Artwork() {
  return (
    <div className="min-h-screen bg-[#faf8f5] px-4 pb-12 pt-24 selection:bg-[#c4a882] selection:text-white md:px-8 md:pt-16">
      {/* Header */}
      <div className="mx-auto mb-12 flex w-full max-w-6xl flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#c4a882]">
            ✿ Studio Wall
          </p>
        </div>

        <Link
          href="/pages/about-me"
          className="group flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#9c8b7a] transition-colors hover:text-[#5c4a3d]"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>{" "}
          Back to desk
        </Link>
      </div>

      {/* Gallery — masonry, framed pieces */}
      <div className="mx-auto w-full max-w-6xl columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
        {pieces.map((p, i) => (
          <figure key={p.id} className="group break-inside-avoid">
            {/* Frame */}
            <div className="rounded-[4px] border border-[#e8ddd0] bg-white p-3 shadow-[0_4px_16px_-6px_rgba(92,74,61,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_36px_-10px_rgba(92,74,61,0.35)]">
              <div className="relative overflow-hidden rounded-[2px] bg-[#f4f0ec]">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={800}
                  height={1000}
                  priority={i < 3}
                  className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Placard */}
              <figcaption className="px-1 pb-1 pt-3">
                <p className="font-serif text-[15px] italic leading-tight text-[#5c4a3d]">
                  {p.title}
                </p>
                <div className="mt-1 flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-[#a89888]">
                  <span>{p.medium}</span>
                  <span className="text-[#d8cbbb]">·</span>
                  <span>{p.year}</span>
                </div>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>

      {/* Footer flourish */}
      <div className="mt-20 text-center opacity-30">
        <p className="animate-pulse text-lg text-[#5c4a3d]">✧</p>
      </div>
    </div>
  );
}
