import { motion } from "motion/react";
import { useState, useRef } from "react";
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
import emailjs from '@emailjs/browser';
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
    const formRef = useRef<HTMLFormElement>(null);
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

        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all required fields");
            return;
        }

        setIsSubmitting(true);

        try {
            // Add current date to form data
            const currentDate = new Date().toLocaleString();

            // Send admin notification email
            const adminResult = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    organization: formData.organization || "Not provided",
                    message: formData.message,
                    date: currentDate
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            console.log('Admin email sent successfully:', adminResult.text);

            // Send confirmation email to the sender
            const confirmationResult = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    organization: formData.organization || "Not provided",
                    message: formData.message,
                    date: currentDate
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            console.log('Confirmation email sent successfully:', confirmationResult.text);

            // Show success toast
            toast.success("Message sent successfully!", {
                description: "We've sent a confirmation email to your inbox.",
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
            console.error('Email sending failed:', error);

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
            address: "8th floor, Mont Vert velocity, Baner Pashan link road near balaji chowk pune 411021",
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
            <div className="relative pt-20 sm:pt-24 md:pt-28 h-[60vh] sm:h-[65vh] md:h-[70vh] min-h-[500px] sm:min-h-[550px] md:min-h-[600px] overflow-hidden">
                {/* Video Background */}

                <div className="absolute inset-0">
                    <ImageWithFallback
                        src="/image_data/Website_Hero_Section/contact.jpg"
                        alt="Career Opportunities"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
                </div>


                {/* Hero Content */}
                <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-10">
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
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-5 text-white px-4"
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
                            className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
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
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
                        >
                            {/* Call Us */}
                            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-5 sm:p-6 text-center hover:bg-white/20 transition-all">
                                <div
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                                    style={{ backgroundColor: colors.accent }}
                                >
                                    <Phone
                                        size={20}
                                        className="text-white sm:hidden"
                                    />
                                    <Phone
                                        size={24}
                                        className="hidden sm:block text-white"
                                    />
                                </div>
                                <h3
                                    className="text-base sm:text-lg mb-2 text-white"
                                    style={{ fontWeight: 600 }}
                                >
                                    Call Us
                                </h3>
                                <p
                                    className="text-sm sm:text-base text-white/90 mb-1"
                                    style={{ fontWeight: 600 }}
                                >
                                    +91 7774091416
                                </p>
                                <p className="text-xs sm:text-sm text-white/70">
                                    Mon-Sat, 9 AM - 6 PM
                                </p>
                            </div>

                            {/* Email Us */}
                            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-5 sm:p-6 text-center hover:bg-white/20 transition-all">
                                <div
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                                    style={{ backgroundColor: colors.accent }}
                                >
                                    <Mail
                                        size={20}
                                        className="text-white sm:hidden"
                                    />
                                    <Mail
                                        size={24}
                                        className="hidden sm:block text-white"
                                    />
                                </div>
                                <h3
                                    className="text-base sm:text-lg mb-2 text-white"
                                    style={{ fontWeight: 600 }}
                                >
                                    Email Us
                                </h3>
                                <p
                                    className="text-sm sm:text-base text-white/90 mb-1"
                                    style={{ fontWeight: 600 }}
                                >
                                    support@sthapatya.in
                                </p>
                                <p className="text-xs sm:text-sm text-white/70">
                                    We'll respond within 24 hours
                                </p>
                            </div>

                            {/* Visiting Hours */}
                            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-5 sm:p-6 text-center hover:bg-white/20 transition-all sm:col-span-2 md:col-span-1">
                                <div
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                                    style={{ backgroundColor: colors.accent }}
                                >
                                    <Clock
                                        size={20}
                                        className="text-white sm:hidden"
                                    />
                                    <Clock
                                        size={24}
                                        className="hidden sm:block text-white"
                                    />
                                </div>
                                <h3
                                    className="text-base sm:text-lg mb-2 text-white"
                                    style={{ fontWeight: 600 }}
                                >
                                    Visiting Hours
                                </h3>
                                <p
                                    className="text-sm sm:text-base text-white/90 mb-1"
                                    style={{ fontWeight: 600 }}
                                >
                                    Mon - Sat
                                </p>
                                <p className="text-xs sm:text-sm text-white/70">
                                    9:00 AM - 6:00 PM
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-14 lg:py-16">
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="mb-5 sm:mb-6">
                            <div
                                className="w-12 sm:w-16 h-1 mb-3 sm:mb-4 rounded-full"
                                style={{ backgroundColor: colors.accent }}
                            />
                            <h2
                                className="text-xl sm:text-2xl md:text-3xl mb-2"
                                style={{ fontWeight: 700, color: colors.text }}
                            >
                                Send Us a Message
                            </h2>
                            <p className="text-xs sm:text-sm md:text-base text-gray-600">
                                Fill out the form below and we'll get back to
                                you soon
                            </p>
                        </div>

                        <form ref={formRef} className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    className="block text-xs sm:text-sm mb-1.5 sm:mb-2"
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
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-gray-400 outline-none transition-colors text-xs sm:text-sm md:text-base"
                                    placeholder="Enter name..."
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
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-gray-400 outline-none transition-colors text-xs sm:text-sm md:text-base"
                                    placeholder="email@example.com"
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
                                    Organization
                                </label>
                                <input
                                    type="text"
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-gray-400 outline-none transition-colors text-xs sm:text-sm md:text-base"
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
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-gray-400 outline-none transition-colors resize-none text-xs sm:text-sm md:text-base sm:rows-5"
                                    placeholder="Tell us how we can help you..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{
                                    backgroundColor: colors.primary,
                                    fontWeight: 600,
                                }}
                            >
                                <Send size={16} className="sm:w-5 sm:h-5" />
                                <span className="text-sm sm:text-base">
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
                        <div className="mb-5 sm:mb-6">
                            <div
                                className="w-12 sm:w-16 h-1 mb-3 sm:mb-4 rounded-full"
                                style={{ backgroundColor: colors.accent }}
                            />
                            <h2
                                className="text-xl sm:text-2xl md:text-3xl mb-2"
                                style={{ fontWeight: 700, color: colors.text }}
                            >
                                Our Offices
                            </h2>
                            <p className="text-xs sm:text-sm md:text-base text-gray-600">
                                Visit us at any of our locations across
                                Maharashtra
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {offices.map((office, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 hover:shadow-lg transition-all"
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
                                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                        <div
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                                            style={{
                                                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                                            }}
                                        >
                                            <Building2 className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                        {office.city === "Amravati" && (
                                            <span
                                                className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
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
                                        className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4"
                                        style={{
                                            fontWeight: 700,
                                            color: colors.text,
                                        }}
                                    >
                                        {office.city}
                                    </h3>

                                    <div className="space-y-2 sm:space-y-3">
                                        <div className="flex items-start gap-2 sm:gap-3">
                                            <MapPin
                                                size={14}
                                                className="sm:w-4 sm:h-4 flex-shrink-0 mt-0.5"
                                                style={{ color: colors.accent }}
                                            />
                                            <p className="text-xs sm:text-sm text-gray-700">
                                                {office.address}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <Clock
                                                size={14}
                                                className="sm:w-4 sm:h-4 flex-shrink-0"
                                                style={{ color: colors.accent }}
                                            />
                                            <p className="text-xs sm:text-sm text-gray-700">
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