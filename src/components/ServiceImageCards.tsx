import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Building2, Droplet, Map, BarChart3 } from "lucide-react";

interface ServiceCard {
  title: string;
  description: string;
  image: string;
  icon: any;
  stats: string;
}

const services: ServiceCard[] = [
  {
    title: "Property Tax Management",
    description: "Comprehensive property tax assessment and collection optimization for Urban Local Bodies",
    image: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdGVjaG5vbG9neSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTk5MDMzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Building2,
    stats: "100+ ULBs Served"
  },
  {
    title: "Water Tax Management",
    description: "Efficient water billing and tax collection system for sustainable resource management",
    image: "https://images.unsplash.com/photo-1758826898770-c76ce24b4eff?w=800&q=75&auto=format&fit=crop",
    icon: Droplet,
    stats: "Smart Billing Solutions"
  },
  {
    title: "ELU/PLU City Mapping",
    description: "Land use mapping for urban planning and development with GIS integration",
    image: "https://images.unsplash.com/photo-1568554766943-c077eb3a4a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNpdHklMjBwbGFubmluZyUyMGFlcmlhbHxlbnwxfHx8fDE3NTk5MDMzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Map,
    stats: "Urban Planning Excellence"
  },
  {
    title: "Data Analysis",
    description: "Transform municipal data into actionable insights for better decision-making",
    image: "https://images.unsplash.com/photo-1759494930316-25629c5ea763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzU5OTAzMzQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: BarChart3,
    stats: "Real-time Analytics"
  }
];

export function ServiceImageCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="relative h-full"
    >
      {/* Single merged card with no rounded borders */}
      <div className="relative h-full overflow-hidden group cursor-pointer border-2 border-[#8E1616]/20">
        {/* Grid of 4 images */}
        <div className="grid grid-cols-2 h-full">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative overflow-hidden"
              >
                {/* Image Background */}
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3C467B]/80 via-[#3C467B]/40 to-transparent" />

                {/* Hover overlay with fade effect */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-br from-[#3C467B]/98 to-[#6E8CFB]/98 backdrop-blur-sm flex flex-col justify-center p-4 text-white"
                >
                  <Icon size={36} className="mb-3" />
                  <h3 className="text-xl mb-2">{service.title}</h3>
                  <p className="text-sm text-white/90 mb-3">{service.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm text-sm w-fit">
                    {service.stats}
                  </div>
                </motion.div>

                {/* Default state - just icon in corner */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredIndex === index ? 0 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-3 left-3 text-white"
                >
                  <Icon size={24} className="mb-1" />
                  <p className="text-sm">{service.title}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
