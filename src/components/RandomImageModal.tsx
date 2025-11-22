import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const RandomImageModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const images = [
    "https://i.ibb.co/Q3TZFLRG/Akki-03-page-0001.jpg",
    "https://i.ibb.co/DPf0kh6M/Akki-03-page-0002.jpg",
    "https://i.ibb.co/LD5RkD58/Akki-03-page-0003.jpg",
    "https://i.ibb.co/DFY98SZ/Akki-03-page-0004.jpg",
    "https://i.ibb.co/Fbp9xcmH/Akki-03-page-0005.jpg",
    "https://i.ibb.co/BVrK6LFF/Akki-03-page-0006.jpg",
    "https://i.ibb.co/s0Ydf2j/Akki-03-page-0007.jpg",
    "https://i.ibb.co/pvvc3Gxp/Akki-03-page-0008.jpg",
    "https://i.ibb.co/Wp5f5KKq/Akki-03-page-0009.jpg",
    "https://i.ibb.co/XZB4j9zD/Akki-03-page-0010.jpg",
    "https://i.ibb.co/N6dnmv8v/Akki-03-page-0011.jpg",
    "https://i.ibb.co/bjyfT9zt/Akki-03-page-0012.jpg",
    "https://i.ibb.co/vCv7Bfz7/Akki-03-page-0013.jpg",
    "https://i.ibb.co/ksmkK52Y/Akki-03-page-0014.jpg",
    "https://i.ibb.co/N6H3Nbkk/Akki-03-page-0015.jpg",
    "https://i.ibb.co/Hf2q3b9C/Akki-03-page-0016.jpg",
    "https://i.ibb.co/0R8HzLB0/Akki-03-page-0017.jpg",
    "https://i.ibb.co/hxp58NbD/Akki-03-page-0018.jpg",
    "https://i.ibb.co/B5h7tdth/Akki-03-page-0019.jpg",
    "https://i.ibb.co/BKrryhmC/Akki-03-page-0020.jpg"
  ];

  useEffect(() => {
    // For development: always show modal for testing
    // In production, check if modal has been shown in this session
    const isDevelopment = process.env.NODE_ENV === 'development';
    const hasShownModal = localStorage.getItem('hasShownSlideshow');
    
    // Show modal if it hasn't been shown in this session OR in development mode
    if (!hasShownModal || isDevelopment) {
      // Show modal after 1 second
      const startTimer = setTimeout(() => {
        setIsOpen(true);
        // Mark that modal has been shown (only in production)
        if (!isDevelopment) {
          try {
            localStorage.setItem('hasShownSlideshow', 'true');
          } catch (error) {
            console.warn('Failed to set localStorage:', error);
          }
        }
      }, 1000);

      return () => clearTimeout(startTimer);
    }
  }, []);

  // Reset image error when image changes
  useEffect(() => {
    setImageError(false);
  }, [currentImageIndex]);

  // Auto-slide only
  useEffect(() => {
    if (!isOpen) return;

    const duration = Math.random() * 3000 + 2000;

    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex + 1 >= images.length ? 0 : prevIndex + 1
      );
    }, duration);

    return () => clearTimeout(timer);
  }, [currentImageIndex, isOpen, images.length]);

  const handleImageError = () => {
    setImageError(true);
    // Try next image after a short delay
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex + 1 >= images.length ? 0 : prevIndex + 1
      );
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="
          max-w-md max-h-[90vh] 
          w-[60vw] md:w-[40vw] lg:w-[30vw] 
          p-0 bg-black rounded-[40px] 
          overflow-hidden border-none 
          animate-scale-in aspect-[3/4]
        "
      >
        {/* Close Button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full z-20"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Just the Image */}
        <div className="relative w-full h-full flex items-center justify-center bg-black">
          {imageError ? (
            <div className="text-white text-center p-4">
              <p className="text-sm">Loading next image...</p>
            </div>
          ) : (
            <img
              src={images[currentImageIndex]}
              alt="Slide"
              className="w-full h-full object-contain"
              onError={handleImageError}
              loading="eager"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RandomImageModal;
