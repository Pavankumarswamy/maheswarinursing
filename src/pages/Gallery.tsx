import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Camera, Play, Download, ExternalLink, Filter, Grid, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useFirebaseData } from "@/hooks/useFirebaseData";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Gallery = () => {
  const { galleryImages, loading } = useFirebaseData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.title =
      "Gallery - Maheshwari Nursing College | Campus Life & Facilities";
  }, []);

  // 🔥 NEW IMAGES YOU PROVIDED (20 images)
  const customImages = [
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
    "https://i.ibb.co/BKrryhmC/Akki-03-page-0020.jpg",
  ];

  // ❤️ Create final dataset
  const displayImages =
    galleryImages.length > 0
      ? galleryImages
      : customImages.map((url, index) => ({
          id: `custom-${index}`,
          url,
          title: `Gallery Image ${index + 1}`,
          category: "Campus",
          description: "Maheshwari Nursing College Gallery",
          createdAt: new Date().toISOString(),
        }));

  const categories = ["All", ...new Set(displayImages.map((img) => img.category))];

  const filteredImages = displayImages.filter((image) => {
    const matchesSearch =
      !searchTerm ||
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || image.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="relative py-20 bg-gradient-to-r from-navy via-primary to-healthcare">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">
              Visual Gallery
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Gallery of Maheshwari Nursing College
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Explore our vibrant campus and student activities.
            </p>
          </div>
        </section>

        {/* Search + Filters */}
        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search images..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {filteredImages.length} image
                    {filteredImages.length !== 1 ? "s" : ""}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final Image Grid */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {loading
                ? [...Array(12)].map((_, index) => (
                    <Skeleton key={index} className="h-48 w-full" />
                  ))
                : filteredImages.map((image) => (
                    <Dialog key={image.id}>
                      <DialogTrigger asChild>
                        <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow">
                          <CardContent className="p-0">
                            <div className="relative" style={{ paddingTop: "0%" }}>
                              {/* Portrait aspect ratio maintained */}
                              <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                              />
                              <Button
                                size="icon"
                                variant="ghost"
                                className="absolute top-2 right-2 bg-white/20 hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>

                      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                        <div className="relative">
                          <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-auto max-h-[80vh] object-contain"
                          />
                          <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                            <Badge variant="outline">{image.category}</Badge>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg">
                <Download className="h-5 w-5 mr-2" />
                Download High-Res Images
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
