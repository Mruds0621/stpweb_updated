import { motion, useInView } from "motion/react";
import { MapPin, TrendingUp, Award, Building2, CheckCircle, ExternalLink, Users, Rocket, Target, Zap, Database, Globe, Smartphone } from "lucide-react";
import { useThemeColors } from "./useThemeColors";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRef, useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Footer } from "./Footer";
import Autoplay from "embla-carousel-autoplay@8.6.0";
import { useNavigate } from "react-router-dom";

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export function ProjectsPage() {
    const { colors, backgrounds } = useThemeColors();
    const navigate = useNavigate();

    // Autoplay plugin for carousel
    const autoplayPlugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    const heroStats = [
        { icon: Building2, label: "Urban Local Bodies", value: 100, suffix: "+", color: colors.primary },
        { icon: MapPin, label: "Properties Surveyed", value: 50, suffix: "L+", color: colors.secondary },
        { icon: TrendingUp, label: "Revenue Growth", value: 35, suffix: "%", color: colors.accent },
        { icon: Award, label: "Years Experience", value: 25, suffix: "+", color: colors.primary },
    ];

    const featuredProjects = [
        {
            title: "Amravati Municipal Corporation",
            location: "Amravati, Maharashtra",
            image: "https://images.unsplash.com/photo-1686477316633-562a65893e36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbXJhdmF0aSUyMGNpdHklMjBpbmRpYXxlbnwxfHx8fDE3NjE5MTUyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            tag: "Growth Partner"
        },
        {
            title: "Pimpri-Chinchwad Municipal Corporation",
            location: "PCMC, Pune",
            image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
            tag: "Smart City"
        },
        {
            title: "Thane Municipal Corporation",
            location: "Thane, Maharashtra",
            image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
            tag: "Flagship Project"
        },
        {
            title: "Jalgaon Municipal Corporation",
            location: "Jalgaon, Maharashtra",
            image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
            tag: "Digital Transform"
        }
    ];

    const technologies = [
        { icon: Database, name: "GIS Mapping", desc: "Advanced spatial data" },
        { icon: Globe, name: "Integrated Softwares", desc: "Comprehensive solutions" },
        { icon: Smartphone, name: "Mobile Apps", desc: "Citizen engagement" },
        { icon: Zap, name: "Real-time AI-Chatbots", desc: "Intelligent assistance" }
    ];

    const keyClients = [
        { name: "Malkapur", image: "https://images.unsplash.com/photo-1705861145347-254fcb6685d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaXR5JTIwdG93bnxlbnwxfHx8fDE3NjE5MTYxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", logo: "https://images.unsplash.com/photo-1761830139564-233f1839aed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdW5pY2lwYWwlMjBsb2dvfGVufDF8fHx8MTc2MjIzNDIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Akluj", image: "https://images.unsplash.com/photo-1711189764865-b238d422c13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWhhcmFzaHRyYSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjE5MTYxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", logo: "https://images.unsplash.com/photo-1599085198850-5a609059bf84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwZW1ibGVtfGVufDF8fHx8MTc2MjIzNDIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Washim", image: "https://images.unsplash.com/photo-1564213053454-7fc0a81a3ea9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGRldmVsb3BtZW50JTIwaW5kaWF8ZW58MXx8fHwxNzYxOTE2MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", logo: "https://images.unsplash.com/photo-1643930825365-af2452a0acc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYmFkZ2V8ZW58MXx8fHwxNzYyMjM0MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Parbhani", image: "https://images.unsplash.com/photo-1625019401404-421b2de1b0a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnVpbGRpbmdzJTIwaW5kaWF8ZW58MXx8fHwxNzYxOTE2MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", logo: "https://images.unsplash.com/photo-1676870421337-2b9c65190264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBsb2dvfGVufDF8fHx8MTc2MjExNjk0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Chakan", image: "https://images.unsplash.com/photo-1723357646143-68b17c10ee0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtdW5pY2lwYWxpdHl8ZW58MXx8fHwxNzYxOTE2MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", logo: "https://images.unsplash.com/photo-1647006869537-82b841840fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6YXRpb24lMjBlbWJsZW18ZW58MXx8fHwxNzYyMjM0MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Panvel", image: "https://images.unsplash.com/photo-1735379252923-1af7ef0fb4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3duJTIwcGxhbm5pbmclMjBpbmRpYXxlbnwxfHx8fDE3NjE5MTYxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", logo: "https://images.unsplash.com/photo-1662057219054-ac91f1c562b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxvZ298ZW58MXx8fHwxNzYyMTk0OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Wadgaon", image: "https://images.unsplash.com/photo-1672767644202-a2148c00739f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzYxOTE2MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", logo: "https://images.unsplash.com/photo-1585944374711-d6221223317b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBlbWJsZW18ZW58MXx8fHwxNzYyMjM0MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Dhule", image: "https://images.unsplash.com/photo-1717054493682-ffe9e25fd82f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHRvd24lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYxOTE2MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", logo: "https://images.unsplash.com/photo-1555274175-75f4056dfd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGxvZ298ZW58MXx8fHwxNzYyMTE2OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Sinnar", image: "https://images.unsplash.com/photo-1760872645824-49f21b002e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhZG1pbmlzdHJhdGl2ZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MTkxNjEyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", logo: "https://images.unsplash.com/photo-1587567867628-9df136e92128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0aXR1dGlvbiUyMGJhZGdlfGVufDF8fHx8MTc2MjIzNDIxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Chalisgaon", image: "https://images.unsplash.com/photo-1653118554222-23fff03cccc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbmRpYW4lMjBjaXR5fGVufDF8fHx8MTc2MTkxNjEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Baramati", image: "https://images.unsplash.com/photo-1522726832281-362409683a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWhhcmFzaHRyYSUyMGNpdHklMjB2aWV3fGVufDF8fHx8MTc2MTkxNjEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Daryapur", image: "https://images.unsplash.com/photo-1641970943639-f0e3c7a0f329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB1cmJhbiUyMGFyZWF8ZW58MXx8fHwxNzYxOTE2MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Akola", image: "https://images.unsplash.com/photo-1656662738309-b22ac2039b2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwaW5mcmFzdHJ1Y3R1cmUlMjBpbmRpYXxlbnwxfHx8fDE3NjE5MTYxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Jalna", image: "https://images.unsplash.com/photo-1641970943639-f0e3c7a0f329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtZXRyb3BvbGl0YW58ZW58MXx8fHwxNzYxOTE2MTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" }
    ];

    const impactMetrics = [
        { label: "Innovation", value: "GIS Tech", icon: Zap, desc: "Cutting-edge solutions" },
        { label: "Reliability", value: "25+ Years", icon: Award, desc: "Proven track record" },
        { label: "Scalability", value: "50L+ Props", icon: TrendingUp, desc: "Massive project delivery" },
        { label: "Excellence", value: "100+ ULBs", icon: CheckCircle, desc: "Trusted partnerships" },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Background Image - FIXED: iPhone SE Responsive */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative pt-24 sm:pt-20 md:pt-20 h-auto sm:h-[65vh] md:h-[70vh] min-h-[620px] sm:min-h-[550px] md:min-h-[600px] pb-6 sm:pb-4 md:pb-0 flex items-center justify-center overflow-hidden"
            >
                {/* Background Image */}
                <div className="absolute inset-0">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
                        alt="Urban Development"
                        className="w-full h-full object-cover"
                    />
                    {/* Single Dark Overlay - more natural */}
                    <div className="absolute inset-0 bg-[#183B4E] opacity-75" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-12 text-center py-4 sm:py-0">


                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-3 sm:mb-5"
                        style={{ fontWeight: 700 }}
                    >
                        Transforming Urban India
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-10 max-w-3xl mx-auto px-2 sm:px-4"
                    >
                        Empowering 100+ Municipal Bodies with cutting-edge GIS technology
                    </motion.p>

                    {/* Hero Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5 max-w-5xl mx-auto px-1 sm:px-4"
                    >
                        {heroStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                whileHover={{ y: -4, scale: 1.03 }}
                                className="bg-white/95 rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border-2 border-white/40 shadow-lg"
                            >
                                <stat.icon className="mx-auto mb-1.5 sm:mb-2" size={20} style={{ color: stat.color }} />
                                <p className="text-xl sm:text-2xl md:text-3xl mb-0.5 sm:mb-1" style={{ fontWeight: 700, color: colors.secondary }}>
                                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                </p>
                                <p className="text-[10px] sm:text-xs md:text-sm leading-tight" style={{ color: colors.primary }}>{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Main Content Container */}
            <div className="max-w-7xl w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-16 md:py-20 space-y-10 sm:space-y-16 md:space-y-20">

                {/* Featured Projects Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-center mb-6 sm:mb-8">


                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-5" style={{ fontWeight: 700, color: colors.primary }}>
                            Our Success Stories
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-0" style={{ color: colors.secondary }}>
                            Delivering measurable impact across Maharashtra's largest municipal corporations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -8 }}
                                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all bg-white border-2"
                                style={{ borderColor: `${colors.primary}30` }}
                            >
                                {/* Project Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <ImageWithFallback
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-[#183B4E] opacity-40" />
                                </div>

                                {/* Project Details */}
                                <div className="p-6">
                                    <h3 className="text-xl mb-2" style={{ fontWeight: 700, color: colors.text }}>
                                        {project.title}
                                    </h3>
                                    <p className="text-sm flex items-center gap-1.5" style={{ color: colors.primary }}>
                                        <MapPin size={14} />
                                        {project.location}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Prestigious Clients Carousel */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-center mb-6 sm:mb-8">


                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-5" style={{ fontWeight: 700, color: colors.primary }}>
                            Trusted by 100+ Urban Local Bodies
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-0" style={{ color: colors.secondary }}>
                            Serving Municipal Corporations and Councils across Maharashtra
                        </p>
                    </div>

                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[autoplayPlugin.current]}
                        className="w-full max-w-7xl mx-auto"
                    >
                        <CarouselContent className="-ml-4">
                            {keyClients.map((client, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 h-full"
                                        style={{ borderColor: `${colors.primary}40` }}
                                    >
                                        {/* Background Image */}
                                        <div className="absolute inset-0">
                                            <ImageWithFallback
                                                src={client.image}
                                                alt={client.name}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 flex flex-col items-center text-center gap-4 p-7">
                                            <div
                                                className="w-16 h-16 rounded-xl flex items-center justify-center border-2 shadow-lg backdrop-blur-sm overflow-hidden"
                                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderColor: colors.accent }}
                                            >
                                                <ImageWithFallback
                                                    src={client.image}
                                                    alt={`${client.name} Logo`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <h3 className="text-base text-white" style={{ fontWeight: 700, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                                                {client.name}
                                            </h3>

                                        </div>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-0 bg-white text-black hover:bg-gray-200 rounded-full" />
                        <CarouselNext className="right-0 bg-white text-black hover:bg-gray-200 rounded-full" />
                    </Carousel>
                </motion.section>

                {/* Impact Metrics Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl border-2"
                    style={{ backgroundColor: colors.primary, borderColor: colors.secondary }}
                >
                    <div className="relative z-10">
                        <div className="text-center mb-4 sm:mb-5">
                            <h2 className="text-lg sm:text-xl md:text-2xl text-white mb-2" style={{ fontWeight: 700 }}>
                                Measurable Impact
                            </h2>
                            <p className="text-white/90 text-xs sm:text-xs md:text-sm max-w-2xl mx-auto px-2 sm:px-0">
                                Real results that transform urban governance and citizen services
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
                            {impactMetrics.map((metric, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -4 }}
                                    className="bg-white rounded-xl p-2.5 sm:p-3 text-center border-2 shadow-md"
                                    style={{ borderColor: `${colors.accent}60` }}
                                >
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1.5 sm:mb-2 bg-gray-50 rounded-xl flex items-center justify-center border-2" style={{ borderColor: colors.accent }}>
                                        <metric.icon size={18} className="sm:w-5 sm:h-5" style={{ color: colors.accent }} />
                                    </div>
                                    <p className="text-lg sm:text-xl md:text-2xl mb-0.5" style={{ fontWeight: 700, color: colors.secondary }}>
                                        {metric.value}
                                    </p>
                                    <p className="text-xs sm:text-sm mb-0.5 leading-tight" style={{ fontWeight: 600, color: colors.text }}>
                                        {metric.label}
                                    </p>
                                    <p className="text-[10px] sm:text-[12px] leading-tight" style={{ color: colors.primary }}>
                                        {metric.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Technology Stack & CTA Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
                    {/* Technology Stack */}
                    <motion.section
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-xl p-3 sm:p-4 shadow-lg border-2 flex flex-col h-full"
                        style={{ borderColor: `${colors.primary}40` }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shadow-md border-2" style={{ backgroundColor: colors.accent, borderColor: colors.accent }}>
                                <Zap className="text-white" size={14} />
                            </div>
                            <h2 className="text-sm sm:text-base md:text-lg" style={{ fontWeight: 700, color: colors.text }}>
                                Our Technology Stack
                            </h2>
                        </div>

                        <p className="text-xs sm:text-sm mb-2.5 sm:mb-3 leading-relaxed" style={{ color: colors.primary }}>
                            Cutting-edge solutions that power smart urban governance
                        </p>

                        <div className="grid grid-cols-2 gap-2 sm:gap-2.5 flex-1">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -2 }}
                                    className="flex flex-col items-center text-center p-2 sm:p-2.5 bg-gray-50 rounded-lg transition-all border-2 shadow-sm hover:shadow-md"
                                    style={{ borderColor: `${colors.primary}30` }}
                                >
                                    <div
                                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center flex-shrink-0 shadow-md border-2 mb-1 sm:mb-1.5"
                                        style={{ backgroundColor: colors.primary, borderColor: colors.primary }}
                                    >
                                        <tech.icon className="text-white" size={14} />
                                    </div>
                                    <h3 className="text-xs sm:text-sm mb-0.5 leading-tight" style={{ fontWeight: 600, color: colors.text }}>
                                        {tech.name}
                                    </h3>
                                    <p className="text-[10px] sm:text-[12px] leading-tight" style={{ color: colors.primary }}>
                                        {tech.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Call to Action */}
                    <motion.section
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative overflow-hidden rounded-xl p-3 sm:p-4 text-center shadow-lg border-2 flex flex-col justify-center h-full"
                        style={{ backgroundColor: colors.accent, borderColor: colors.accent }}
                    >
                        <div className="relative z-10 flex flex-col justify-center h-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white rounded-full mb-2 border-2 shadow-md mx-auto"
                                style={{ borderColor: 'white' }}
                            >
                                <Target size={12} className="sm:w-3.5 sm:h-3.5" style={{ color: colors.accent }} />
                                <span className="text-[10px] sm:text-xs" style={{ fontWeight: 600, color: colors.accent }}>Ready to Transform?</span>
                            </motion.div>

                            <h2 className="text-sm sm:text-base md:text-lg text-white mb-2" style={{ fontWeight: 700 }}>
                                Join 100+ ULBs Transforming Urban India
                            </h2>
                            <p className="text-white/90 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                                Partner with Maharashtra's leading urban governance solutions provider.
                                Let's build smarter cities together with cutting-edge GIS technology ,smooth transactions with AI-powered softwares and step into the new virtual world.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => navigate('/')}
                                className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-1.5 sm:py-2 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all border-2 mx-auto"
                                style={{ fontWeight: 600, color: colors.secondary, borderColor: 'white' }}
                            >
                                <span className="text-xs sm:text-xs md:text-sm">Start Your Transformation</span>
                                <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                            </motion.button>
                        </div>
                    </motion.section>
                </div>

            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}