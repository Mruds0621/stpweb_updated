import { motion } from "motion/react";
import { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Building2,
    Send,
} from "lucide-react";
import { useThemeColors } from "./useThemeColors";
import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { toast } from "sonner@2.0.3";

export function ContactPage() {
    const { colors } = useThemeColors();

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input changes
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Prepare email data
            const emailData = {
                to: "alost513@gmail.com",
                subject: `New Contact Form Submission from ${formData.name}`,
                body: `
Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization || "N/A"}

Message:
${formData.message}
        `,
            };

            // TODO: Replace this with your actual email API endpoint
            // Example using fetch:
            // const response = await fetch('/api/send-email', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(emailData),
            // });

            // For now, we'll simulate a successful email send
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Show success toast
            toast.success("Message sent successfully!", {
                description: "We'll get back to you within 24 hours.",
                duration: 5000,
            });

            // Clear form
            setFormData({
                name: "",
                email: "",
                organization: "",
                message: "",
            });
        } catch (error) {
            // Show error toast
            toast.error("Failed to send message", {
                description: "Please try again or contact us directly via email.",
                duration: 5000,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const offices = [
        {
            city: "Amravati",
            address: "4, Swapnashri Colony,Siddhivinayak Nagar, Ashiyad Square,Shegaon Road, Amravati, Maharashtra, India 444604",
            hours: "Mon-Sat: 9:00 AM - 6:00 PM",
        },
        {
            city: "Pune",
            address: "8th floor, Velocity, MONT VERT, Baner - Pashan Link Rd, Pashan, Pune, Maharashtra 411021",
            hours: "Mon-Sat: 9:00 AM - 6:00 PM",
        },
        {
            city: "Thane",
            address: "1101, Lodha Supremus, Lodha Business District 2,Off Kolshet Road, Thane-West, Maharashtra, India 400607",
            hours: "Mon-Sat: 9:00 AM - 6:00 PM",
        },
        {
            city: "Panvel",
            address: "Saisakshi Apartment, Plot No. 96,Near Saraswat Bank,Panvel, Maharashtra",
            hours: "Mon-Sat: 9:00 AM - 6:00 PM",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Video Background - FIXED: Added proper top padding for navbar */}
            <div className="relative pt-24 sm:pt-20 md:pt-20 h-auto min-h-[650px] sm:h-auto sm:min-h-[600px] md:h-auto md:min-h-[680px] lg:h-[70vh] lg:min-h-[700px] overflow-hidden pb-6 sm:pb-6 md:pb-8 lg:pb-0">
                {/* Video Background */}

                <div className="absolute inset-0">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjE5MTI1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Career Opportunities"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
                </div>


                {/* Hero Content */}
                <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 lg:py-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center max-w-5xl mx-auto w-full"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 md:mb-5 text-white px-2 sm:px-4"
                            style={{ fontWeight: 700 }}
                        >
                            Get in Touch
                            <br />
                            <span style={{ color: 'white' }}>
                                Let's Build Together
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4"
                        >
                            Connect with us for any inquiries or support.
                            We're committed to helping you transform municipal
                            governance.
                        </motion.p>

                        {/* Contact Information Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 max-w-5xl mx-auto px-2 sm:px-4 md:px-6 lg:px-0"
                        >
                            {/* Call Us */}
                            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl md:rounded-2xl p-3.5 sm:p-4 md:p-5 lg:p-6 text-center hover:bg-white/20 transition-all">
                                <div
                                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-2.5 md:mb-3"
                                    style={{ backgroundColor: colors.accent }}
                                >
                                    <Phone
                                        size={18}
                                        className="text-white sm:hidden"
                                    />
                                    <Phone
                                        size={19}
                                        className="hidden sm:block md:hidden text-white"
                                    />
                                    <Phone
                                        size={20}
                                        className="hidden md:block lg:hidden text-white"
                                    />
                                    <Phone
                                        size={24}
                                        className="hidden lg:block text-white"
                                    />
                                </div>
                                <h3
                                    className="text-sm sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-1.5 md:mb-2 text-white"
                                    style={{ fontWeight: 600 }}
                                >
                                    Call Us
                                </h3>
                                <p
                                    className="text-xs sm:text-xs md:text-sm lg:text-base text-white/90 mb-0.5 sm:mb-0.5 md:mb-1"
                                    style={{ fontWeight: 600 }}
                                >
                                    +91 7774091416
                                </p>
                                <p className="text-[10px] sm:text-[10px] md:text-xs lg:text-sm text-white/70">
                                    Mon-Sat, 9 AM - 6 PM
                                </p>
                            </div>

                            {/* Email Us */}
                            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl md:rounded-2xl p-3.5 sm:p-4 md:p-5 lg:p-6 text-center hover:bg-white/20 transition-all">
                                <div
                                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-2.5 md:mb-3"
                                    style={{ backgroundColor: colors.accent }}
                                >
                                    <Mail
                                        size={18}
                                        className="text-white sm:hidden"
                                    />
                                    <Mail
                                        size={19}
                                        className="hidden sm:block md:hidden text-white"
                                    />
                                    <Mail
                                        size={20}
                                        className="hidden md:block lg:hidden text-white"
                                    />
                                    <Mail
                                        size={24}
                                        className="hidden lg:block text-white"
                                    />
                                </div>
                                <h3
                                    className="text-sm sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-1.5 md:mb-2 text-white"
                                    style={{ fontWeight: 600 }}
                                >
                                    Email Us
                                </h3>
                                <p
                                    className="text-xs sm:text-xs md:text-sm lg:text-base text-white/90 mb-0.5 sm:mb-0.5 md:mb-1"
                                    style={{ fontWeight: 600 }}
                                >
                                    support@sthapatya.in
                                </p>
                                <p className="text-[10px] sm:text-[10px] md:text-xs lg:text-sm text-white/70">
                                    We'll respond within 24 hours
                                </p>
                            </div>

                            {/* Visiting Hours */}
                            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl md:rounded-2xl p-3.5 sm:p-4 md:p-5 lg:p-6 text-center hover:bg-white/20 transition-all sm:col-span-2 md:col-span-1">
                                <div
                                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-2.5 md:mb-3"
                                    style={{ backgroundColor: colors.accent }}
                                >
                                    <Clock
                                        size={18}
                                        className="text-white sm:hidden"
                                    />
                                    <Clock
                                        size={19}
                                        className="hidden sm:block md:hidden text-white"
                                    />
                                    <Clock
                                        size={20}
                                        className="hidden md:block lg:hidden text-white"
                                    />
                                    <Clock
                                        size={24}
                                        className="hidden lg:block text-white"
                                    />
                                </div>
                                <h3
                                    className="text-sm sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-1.5 md:mb-2 text-white"
                                    style={{ fontWeight: 600 }}
                                >
                                    Walking Hours
                                </h3>
                                <p
                                    className="text-xs sm:text-xs md:text-sm lg:text-base text-white/90 mb-0.5 sm:mb-0.5 md:mb-1"
                                    style={{ fontWeight: 600 }}
                                >
                                    Mon - Sat
                                </p>
                                <p className="text-[10px] sm:text-[10px] md:text-xs lg:text-sm text-white/70">
                                    9:00 AM - 6:00 PM
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Why Connect Section - Inspired Card */}
            <div className="py-6 sm:py-7 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-xl overflow-hidden shadow-2xl"
                        style={{
                            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`
                        }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            {/* Left Side - Text Content */}
                            <div className="p-4 sm:p-5 md:p-5 lg:p-6 xl:p-7 flex flex-col justify-center order-2 lg:order-1">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <h2
                                        className="text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-2 text-white"
                                        style={{ fontWeight: 700 }}
                                    >
                                        #ThriveAtSthapatya
                                    </h2>

                                    <p
                                        className="text-sm sm:text-base lg:text-lg mb-2 text-white"
                                        style={{ fontWeight: 600 }}
                                    >
                                        Everyone thrives when
                                    </p>

                                    <div className="space-y-1 mb-3">
                                        <motion.p
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            className="text-xs sm:text-sm text-white/90"
                                            style={{ fontWeight: 500 }}
                                        >
                                            #ExcellenceMatters
                                        </motion.p>
                                        <motion.p
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                            className="text-xs sm:text-sm text-white/90"
                                            style={{ fontWeight: 500 }}
                                        >
                                            #InnovationMatters
                                        </motion.p>
                                        <motion.p
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.5 }}
                                            className="text-xs sm:text-sm text-white/90"
                                            style={{ fontWeight: 500 }}
                                        >
                                            #PartnershipMatters
                                        </motion.p>
                                        <motion.p
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.6 }}
                                            className="text-xs sm:text-sm text-white/90"
                                            style={{ fontWeight: 500 }}
                                        >
                                            #ImpactMatters
                                        </motion.p>
                                    </div>

                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.7 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            document.getElementById('contact-form')?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start'
                                            });
                                        }}
                                        className="px-5 py-2 rounded-full border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-black inline-block text-xs sm:text-sm"
                                        style={{ fontWeight: 600 }}
                                    >
                                        DISCOVER MORE
                                    </motion.button>
                                </motion.div>
                            </div>

                            {/* Right Side - Image Collage */}
                            <div className="relative h-[200px] sm:h-[220px] lg:h-full min-h-[200px] order-1 lg:order-2 bg-gradient-to-br from-white/5 to-white/10">
                                <div className="relative w-full h-full p-2 sm:p-2.5 lg:p-3">
                                    {/* Decorative colored squares - Background accent */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                                        whileInView={{ opacity: 0.2, scale: 1, rotate: 45 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="absolute top-1 left-1 w-7 h-7 sm:w-8 sm:h-8 rounded-md z-0"
                                        style={{ backgroundColor: '#4FC3F7' }}
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                                        whileInView={{ opacity: 0.2, scale: 1, rotate: 45 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        className="absolute bottom-2 right-2 w-8 h-8 sm:w-9 sm:h-9 rounded-md z-0"
                                        style={{ backgroundColor: '#4FC3F7' }}
                                    />

                                    {/* Grid Layout - 2 columns x 3 rows */}
                                    <div className="grid grid-cols-2 gap-1 sm:gap-1.5 lg:gap-2 h-full relative z-10">
                                        {/* Image 1 - Top Left */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            className="rounded-md overflow-hidden shadow-lg border border-white h-16 sm:h-20 lg:h-24"
                                            style={{ transform: 'rotate(-2deg)' }}
                                        >
                                            <ImageWithFallback
                                                src="https://images.unsplash.com/photo-1600275669439-14e40452d20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjIyNDgzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                                alt="Team Member"
                                                className="w-full h-16 sm:h-20 lg:h-24 object-cover"
                                            />
                                        </motion.div>

                                        {/* Image 2 - Top Right */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.4 }}
                                            className="rounded-md overflow-hidden shadow-lg border border-white h-16 sm:h-20 lg:h-24"
                                            style={{ transform: 'rotate(2deg)' }}
                                        >
                                            <ImageWithFallback
                                                src="https://images.unsplash.com/photo-1568585105565-e372998a195d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjIyMzYzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                                alt="Team Member"
                                                className="w-full h-16 sm:h-20 lg:h-24 object-cover"
                                            />
                                        </motion.div>

                                        {/* Image 3 - Middle Left */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20, scale: 0.9 }}
                                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.5 }}
                                            className="rounded-md overflow-hidden shadow-lg border border-white h-16 sm:h-20 lg:h-24"
                                            style={{ transform: 'rotate(3deg)' }}
                                        >
                                            <ImageWithFallback
                                                src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyMTcxMTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                                alt="Team Member"
                                                className="w-full h-16 sm:h-20 lg:h-24 object-cover"
                                            />
                                        </motion.div>

                                        {/* Image 4 - Middle Right */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 20, scale: 0.9 }}
                                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.6 }}
                                            className="rounded-md overflow-hidden shadow-lg border border-white h-16 sm:h-20 lg:h-24"
                                            style={{ transform: 'rotate(-2deg)' }}
                                        >
                                            <ImageWithFallback
                                                src="https://images.unsplash.com/photo-1735933109524-52d7f05dc7c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwcm9mZXNzaW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNjYyMjQ4MzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                                alt="Team Member"
                                                className="w-full h-16 sm:h-20 lg:h-24 object-cover"
                                            />
                                        </motion.div>

                                        {/* Image 5 - Bottom Left */}
                                        <motion.div
                                            initial={{ opacity: 0, y: -20, scale: 0.9 }}
                                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.7 }}
                                            className="rounded-md overflow-hidden shadow-lg border border-white h-16 sm:h-20 lg:h-24"
                                            style={{ transform: 'rotate(-3deg)' }}
                                        >
                                            <ImageWithFallback
                                                src="https://images.unsplash.com/photo-1690264697065-33256aa3729b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVtYmVyJTIwaGFwcHl8ZW58MXx8fHwxNzYyMjQ4MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                                alt="Team Member"
                                                className="w-full h-16 sm:h-20 lg:h-24 object-cover"
                                            />
                                        </motion.div>

                                        {/* Image 6 - Bottom Right */}
                                        <motion.div
                                            initial={{ opacity: 0, y: -20, scale: 0.9 }}
                                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.8 }}
                                            className="rounded-md overflow-hidden shadow-lg border border-white h-16 sm:h-20 lg:h-24"
                                            style={{ transform: 'rotate(2deg)' }}
                                        >
                                            <ImageWithFallback
                                                src="https://images.unsplash.com/photo-1570215170761-f056128eda48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBlbmdpbmVlciUyMHdvcmt8ZW58MXx8fHwxNzYyMjQ4MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                                alt="Team Member"
                                                className="w-full h-16 sm:h-20 lg:h-24 object-cover"
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 lg:py-16">
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-5 gap-5 sm:gap-6 md:gap-8 mb-6 sm:mb-10 md:mb-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="mb-4 sm:mb-5 md:mb-6">
                            <div
                                className="w-10 sm:w-12 md:w-16 h-1 mb-2 sm:mb-3 md:mb-4 rounded-full"
                                style={{ backgroundColor: colors.accent }}
                            />
                            <h2
                                className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1.5 sm:mb-2"
                                style={{ fontWeight: 700, color: colors.text }}
                            >
                                Send Us a Message
                            </h2>
                            <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-gray-600">
                                Fill out the form below and we'll get back to
                                you soon
                            </p>
                        </div>

                        <form className="space-y-3 sm:space-y-3.5 md:space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    className="block text-xs sm:text-sm mb-1 sm:mb-1.5"
                                    style={{
                                        fontWeight: 600,
                                        color: colors.text,
                                    }}
                                >
                                    Your Name{" "}
                                    <span style={{ color: colors.accent }}>
                                        *
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-gray-400 outline-none transition-colors text-xs sm:text-sm md:text-base"
                                    placeholder="Enter name..."
                                />
                            </div>

                            <div>
                                <label
                                    className="block text-xs sm:text-sm mb-1 sm:mb-1.5"
                                    style={{
                                        fontWeight: 600,
                                        color: colors.text,
                                    }}
                                >
                                    Email Address{" "}
                                    <span style={{ color: colors.accent }}>
                                        *
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-gray-400 outline-none transition-colors text-xs sm:text-sm md:text-base"
                                    placeholder="email@example.com"
                                />
                            </div>

                            <div>
                                <label
                                    className="block text-xs sm:text-sm mb-1 sm:mb-1.5"
                                    style={{
                                        fontWeight: 600,
                                        color: colors.text,
                                    }}
                                >
                                    Organization
                                </label>
                                <input
                                    type="text"
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-gray-400 outline-none transition-colors text-xs sm:text-sm md:text-base"
                                    placeholder="Your organization name"
                                />
                            </div>

                            <div>
                                <label
                                    className="block text-xs sm:text-sm mb-1.5 sm:mb-2"
                                    style={{
                                        fontWeight: 600,
                                        color: colors.text,
                                    }}
                                >
                                    Message{" "}
                                    <span style={{ color: colors.accent }}>
                                        *
                                    </span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-gray-400 outline-none transition-colors resize-none text-xs sm:text-sm md:text-base"
                                    placeholder="Tell us how we can help you..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full text-white shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{
                                    backgroundColor: colors.primary,
                                    fontWeight: 600,
                                }}
                            >
                                <Send size={15} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                <span className="text-xs sm:text-sm md:text-base">
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </span>
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Office Locations */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <div className="mb-4 sm:mb-5 md:mb-6">
                            <div
                                className="w-10 sm:w-12 md:w-16 h-1 mb-2 sm:mb-3 md:mb-4 rounded-full"
                                style={{ backgroundColor: colors.accent }}
                            />
                            <h2
                                className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1.5 sm:mb-2"
                                style={{ fontWeight: 700, color: colors.text }}
                            >
                                Our Offices
                            </h2>
                            <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-gray-600">
                                Visit us at any of our locations across
                                Maharashtra
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                            {offices.map((office, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-gray-200 hover:shadow-lg transition-all"
                                    style={{
                                        borderColor: "transparent",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor =
                                            colors.accent;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor =
                                            "transparent";
                                    }}
                                >
                                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
                                        <div
                                            className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center"
                                            style={{
                                                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                                            }}
                                        >
                                            <Building2 className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                        </div>
                                        {office.city === "Amravati" && (
                                            <span
                                                className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm"
                                                style={{
                                                    backgroundColor: colors.accent,
                                                    color: "white",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                Head Office
                                            </span>
                                        )}
                                    </div>

                                    <h3
                                        className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-2.5 md:mb-4"
                                        style={{
                                            fontWeight: 700,
                                            color: colors.text,
                                        }}
                                    >
                                        {office.city}
                                    </h3>

                                    <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                                        <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                                            <MapPin
                                                size={13}
                                                className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0 mt-0.5"
                                                style={{ color: colors.accent }}
                                            />
                                            <p className="text-[11px] sm:text-xs md:text-sm text-gray-700 leading-snug">
                                                {office.address}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                                            <Clock
                                                size={13}
                                                className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0"
                                                style={{ color: colors.accent }}
                                            />
                                            <p className="text-[11px] sm:text-xs md:text-sm text-gray-700">
                                                {office.hours}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
}