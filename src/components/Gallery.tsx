import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import seoImg from "@/assets/project-seo.jpg";
import blogImg from "@/assets/project-blog.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";
import keywordsImg from "@/assets/project-keywords.jpg";
import landingImg from "@/assets/project-landing.jpg";

const Gallery = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "Modern online store with seamless checkout",
      category: "Web Development",
      image: ecommerceImg,
    },
    {
      title: "SEO Campaign",
      description: "300% increase in organic traffic",
      category: "SEO",
      image: seoImg,
    },
    {
      title: "Blog Platform",
      description: "Content management system",
      category: "Web Development",
      image: blogImg,
    },
    {
      title: "Portfolio Site",
      description: "Creative designer portfolio",
      category: "Web Design",
      image: portfolioImg,
    },
    {
      title: "Keyword Research",
      description: "Comprehensive SEO analysis",
      category: "SEO",
      image: keywordsImg,
    },
    {
      title: "Landing Page",
      description: "High-converting product launch",
      category: "Web Development",
      image: landingImg,
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">My Projects</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <Badge className="absolute top-4 left-4 bg-primary">{project.category}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
