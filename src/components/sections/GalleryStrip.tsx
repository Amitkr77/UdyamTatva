import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/data";

export function GalleryStrip() {
  // Duplicate for seamless loop
  const images = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <div className="py-6 bg-on-primary-fixed overflow-hidden border-y-4 border-secondary-container">
      <div className="flex overflow-hidden">
        <div className="gallery-strip-inner shrink-0">
          {images.map((img, i) => (
            <div
              key={`${img.alt}-${i}`}
              className="img-zoom shrink-0 w-64 h-40 overflow-hidden opacity-70 hover:opacity-100 transition-none"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
