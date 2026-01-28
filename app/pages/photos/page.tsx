// app/photos/page.tsx
import Image from "next/image";
import Link from "next/link";

const photos = [
  // =========== LEFT COLUMN (Mobile: Top Left) ===========
  // 1. Lake Garda (LOCKED: Absolute Favorite)
  { id: 1, src: "/photo-13.jpg", location: "Lake Garda, Italy", camera: "Kodak PIXPRO FZ55", alt: "Mountain" },
  
  // 2. Love Valley (High Impact)
  { id: 2, src: "/photo-7.jpg", location: "Love Valley, Cappadocia", camera: "iPhone 14 Pro", alt: "Balloons" },
  
  // 3. Jellyfish (Pushed to VERY BOTTOM Right)
  { id: 20, src: "/photo-15.JPG", location: "Myrtle Beach, SC", camera: "iPhone 13", alt: "Jellyfish" },

  // 4. Rumeli Fortress
  { id: 8, src: "/photo-10.jpg", location: "Rumeli Fortress, Istanbul", camera: "iPhone 14 Pro", alt: "Tower" },
  
  // 5. San Cristóbal (Architecture)
  { id: 17, src: "/photo-17.jpg", location: "San Cristóbal, San Juan", camera: "Kodak PIXPRO FZ55", alt: "Stone corridor" },

  // 9. Pool
  { id: 5, src: "/photo-5.jpg", location: "Poolside", camera: "Fujifilm X-T30", alt: "Poolside" },
 
  // 6. Balat Cat (Moved up for color)
  { id: 13, src: "/photo-6.jpg", location: "Balat, Istanbul", camera: "iPhone 14 Pro", alt: "Red car cat" },
  
  // 7. Spice Bazaar
  { id: 18, src: "/photo-9.jpg", location: "Spice Bazaar", camera: "iPhone 14 Pro", alt: "Lanterns" },

  
     // 10. Rila Dog (Greenery/Nature)
   { id: 6, src: "/photo-4.jpg", location: "Rila Mountains, Bulgaria", camera: "Kodak PIXPRO FZ55", alt: "Mountain dog" },
   
   
  // =========== RIGHT COLUMN (Mobile: Top Right) ===========
  // 11. Blackwell's (LOCKED: Top Right Anchor)
  { id: 11, src: "/photo-18.jpg", location: "Blackwell's Bookshop, Oxford", camera: "iPhone 14 Pro", alt: "Bookshelves" },
  
  // 12. Florence (Classic/Favorite)
  { id: 9, src: "/photo-16.jpg", location: "Arno River, Florence", camera: "iPhone 14 Pro", alt: "Florence bridge" },

  // 13. Agafay Desert (Camels - Favorite)
  { id: 12, src: "/photo-2.jpg", location: "Agafay Desert", camera: "iPhone 14 Pro", alt: "Camels" },

  // 14. Myrtle Sunrise (Best Colors)
  { id: 19, src: "/photo-1.jpg", location: "Sunrise at Myrtle Beach", camera: "Fujifilm X-T30", alt: "Beach silhouette" },

  // 8. Porto
  { id: 3, src: "/photo-8.jpg", location: "Sé Cathedral, Porto", camera: "iPhone 14 Pro", alt: "Stone arches" },

  // 15. La Jolla (Pushed to VERY BOTTOM Left as requested)
  { id: 7, src: "/photo-14.jpg", location: "La Jolla Cove, San Diego", camera: "iPhone 14 Pro", alt: "Sea lions" },
   
  // 4. Athens Riviera
   { id: 10, src: "/photo-12.jpg", location: "Athens Riviera", camera: "iPhone 14 Pro", alt: "Agave trees" },
 
    // 17. Ben Youssef (Texture/Warmth)
    { id: 4, src: "/photo-3.jpg", location: "Ben Youssef, Marrakech", camera: "iPhone 14 Pro", alt: "Courtyard" },

  // 16. Cape Sounion
  { id: 14, src: "/photo-11.jpg", location: "Cape Sounion, Greece", camera: "iPhone 14 Pro", alt: "Sounion" },

  // 18. Street Art
  { id: 15, src: "/photo-19.jpg", location: "Street Art", camera: "iPhone 14 Pro", alt: "Art" },

  // 19. Cows (Pushed to VERY BOTTOM Right as requested)
  { id: 16, src: "/photo-20.jpg", location: "Swanston Farm, Edinburgh", camera: "iPhone 14 Pro", alt: "Cows" },
  
  
  ];

export default function Photos() {
  return (
    <div className="min-h-screen bg-[#faf8f5] px-4 pt-24 pb-8 md:pt-6 md:pb-12 selection:bg-[#c4a882] selection:text-white">
      <div className="w-full max-w-[1800px] mx-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#c4a882] mb-2">✿ Digital Diary</p>
          <h1 className="text-3xl md:text-5xl font-extralight text-[#5c4a3d] tracking-tight">Life on <span className="italic font-serif text-[#c4a882]">Film!</span></h1>
        </div>
        <Link href="/" className="group flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#9c8b7a] hover:text-[#5c4a3d] transition-colors"><span className="group-hover:-translate-x-1 transition-transform duration-200">←</span> Back</Link>
      </div>

      <div className="w-full max-w-[1800px] mx-auto columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
        {photos.map((p, i) => (
          <div key={p.id} className="break-inside-avoid relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-sm bg-gray-100 shadow-sm transition-all duration-500 hover:shadow-md">
              <Image src={p.src} alt={p.alt} width={600} height={800} priority={i < 6} className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <div className="w-full text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[11px] font-medium tracking-wide leading-tight">{p.location}</p>
                  <p className="text-[9px] font-mono opacity-80 uppercase tracking-widest mt-0.5">{p.camera}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-20 opacity-30"><p className="text-[#5c4a3d] text-lg animate-pulse">✧</p></div>
    </div>
  );
}