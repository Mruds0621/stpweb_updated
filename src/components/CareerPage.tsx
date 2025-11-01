import { useState } from "react";
import { motion } from "motion/react";
import {
    MapPin,
    Briefcase,
    Clock,
    TrendingUp,
    Heart,
    Award,
    Users,
    Target,
    Code,
    BarChart,
    Headphones,
    FolderKanban,
    Send,
    X,
    Plus,
    Trash2
} from "lucide-react";
import { useThemeColors } from "./useThemeColors";
import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner@2.0.3";

interface WorkExperience {
    id: number;
    companyName: string;
    jobRole: string;
    jobDescription: string;
    startDate: string;
    endDate: string;
    currentlyWorking: boolean;
}

export function CareerPage() {
    const { colors } = useThemeColors();
    const [isApplicationOpen, setIsApplicationOpen] = useState(false);
    const [hasWorkExperience, setHasWorkExperience] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([
        {
            id: 1,
            companyName: "",
            jobRole: "",
            jobDescription: "",
            startDate: "",
            endDate: "",
            currentlyWorking: false,
        }
    ]);

    // Form state
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        address: "",
        noticePeriod: "",
        additionalInfo: "",
        resume: null as File | null,
    });

    const positions = [
        {
            id: 1,
            title: "GIS Specialist",
            department: "Technology",
            location: "Multiple locations",
            type: "Full-time",
            experience: "2-4 years",
            icon: MapPin,
            responsibilities: [
                "Develop and maintain GIS databases",
                "Create detailed maps and spatial analysis",
                "Train field teams on GIS tools",
                "Ensure data accuracy and quality",
                "Collaborate with survey teams",
                "Generate reports and visualizations"
            ]
        },
        {
            id: 2,
            title: "Field Survey Executive",
            department: "Operations",
            location: "Multiple locations",
            type: "Full-time",
            experience: "0-2 years",
            icon: Users,
            responsibilities: [
                "Conduct on-ground property surveys",
                "Collect and verify property data",
                "Use mobile apps for data entry",
                "Coordinate with local authorities",
                "Ensure survey completion targets",
                "Maintain quality standards"
            ]
        },
        {
            id: 3,
            title: "Data Analyst",
            department: "Analytics",
            location: "Multiple locations",
            type: "Full-time",
            experience: "1-3 years",
            icon: BarChart,
            responsibilities: [
                "Analyze municipal data patterns",
                "Generate insights and reports",
                "Create data visualization dashboards",
                "Identify data quality issues",
                "Support decision-making processes",
                "Maintain data integrity"
            ]
        },
        {
            id: 4,
            title: "Project Manager",
            department: "Management",
            location: "Multiple locations",
            type: "Full-time",
            experience: "5-8 years",
            icon: FolderKanban,
            responsibilities: [
                "Oversee ULB implementation projects",
                "Manage project timelines and budgets",
                "Coordinate with stakeholders",
                "Lead project teams",
                "Ensure quality deliverables",
                "Client relationship management"
            ]
        },
        {
            id: 5,
            title: "Mobile App Developer",
            department: "Technology",
            location: "Multiple locations",
            type: "Full-time",
            experience: "2-5 years",
            icon: Code,
            responsibilities: [
                "Develop mobile applications for field teams",
                "Implement offline-first architecture",
                "Optimize app performance",
                "Integrate with backend systems",
                "Conduct testing and debugging",
                "Maintain code documentation"
            ]
        },
        {
            id: 6,
            title: "Customer Support",
            department: "Support",
            location: "Multiple locations",
            type: "Full-time",
            experience: "0-2 years",
            icon: Headphones,
            responsibilities: [
                "Provide technical support to ULBs",
                "Resolve user queries and issues",
                "Conduct training sessions",
                "Document support tickets",
                "Gather user feedback",
                "Ensure customer satisfaction"
            ]
        }
    ];

    const [selectedPosition, setSelectedPosition] = useState(positions[0]);

    const benefits = [
        {
            icon: TrendingUp,
            title: "Career Growth",
            desc: "Continuous learning opportunities and clear career progression paths"
        },
        {
            icon: Heart,
            title: "Work-Life Balance",
            desc: "Flexible working arrangements and supportive work environment"
        },
        {
            icon: Award,
            title: "Impact & Recognition",
            desc: "Make a difference in urban governance and get recognized for your contributions"
        }
    ];

    // Handle form field changes
    const handleFormChange = (field: keyof typeof formData, value: any) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Prepare work experience details
            const workExpDetails = hasWorkExperience
                ? workExperiences
                    .map((exp, index) => {
                        return `
Experience ${index + 1}:
- Company: ${exp.companyName}
- Role: ${exp.jobRole}
- Description: ${exp.jobDescription}
- Start Date: ${exp.startDate}
- End Date: ${exp.currentlyWorking ? "Present" : exp.endDate}
`;
                    })
                    .join("\n")
                : "No work experience";

            // Prepare email data
            const emailData = {
                to: "alost513@gmail.com",
                subject: `Job Application: ${selectedPosition.title} - ${formData.fullName}`,
                body: `
New Job Application Received

Position: ${selectedPosition.title}
Department: ${selectedPosition.department}

Applicant Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Full Name: ${formData.fullName}
Email: ${formData.email}
Mobile: ${formData.mobile}
Current Address: ${formData.address}
Notice Period: ${formData.noticePeriod} days

Work Experience:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${workExpDetails}

Notice Period: ${formData.noticePeriod} days

Additional Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.additionalInfo || "N/A"}

Resume: ${formData.resume ? formData.resume.name : "Not attached"}
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
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Show success toast
            toast.success("Application submitted successfully!", {
                description: `Your application for ${selectedPosition.title} has been received. We'll contact you soon.`,
                duration: 5000,
            });

            // Reset form
            setFormData({
                fullName: "",
                email: "",
                mobile: "",
                address: "",
                noticePeriod: "",
                additionalInfo: "",
                resume: null,
            });
            setHasWorkExperience(false);
            setWorkExperiences([
                {
                    id: 1,
                    companyName: "",
                    jobRole: "",
                    jobDescription: "",
                    startDate: "",
                    endDate: "",
                    currentlyWorking: false,
                },
            ]);

            // Close dialog
            setIsApplicationOpen(false);
        } catch (error) {
            // Show error toast
            toast.error("Failed to submit application", {
                description: "Please try again or contact us directly via email.",
                duration: 5000,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const addWorkExperience = () => {
        setWorkExperiences([
            ...workExperiences,
            {
                id: Date.now(),
                companyName: "",
                jobRole: "",
                jobDescription: "",
                startDate: "",
                endDate: "",
                currentlyWorking: false,
            }
        ]);
    };

    const removeWorkExperience = (id: number) => {
        if (workExperiences.length > 1) {
            setWorkExperiences(workExperiences.filter(exp => exp.id !== id));
        }
    };

    const updateWorkExperience = (id: number, field: keyof WorkExperience, value: any) => {
        setWorkExperiences(prevExperiences =>
            prevExperiences.map(exp => {
                if (exp.id === id) {
                    // If updating currentlyWorking to true, also clear the endDate
                    if (field === 'currentlyWorking' && value === true) {
                        return { ...exp, [field]: value, endDate: '' };
                    }
                    return { ...exp, [field]: value };
                }
                return exp;
            })
        );
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Background Image - FIXED: Added proper top padding for navbar */}
            <div className="relative pt-20 sm:pt-24 md:pt-28 h-[60vh] sm:h-[65vh] md:h-[70vh] min-h-[500px] sm:min-h-[550px] md:min-h-[600px]  overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <ImageWithFallback
                        src="/image_data/Website_Hero_Section/career.jpg"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center max-w-5xl mx-auto"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-5 text-white px-4"
                            style={{ fontWeight: 700 }}
                        >
                            Build Your Future
                            <br />
                            <span style={{ color: "white" }}>Transform Urban India</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
                        >
                            Join 800+ professionals making a real impact on municipal governance across Maharashtra
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="flex flex-wrap gap-4 justify-center"
                        >
                            <button
                                onClick={() => {
                                    document.getElementById('open-positions')?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }}
                                className="px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                style={{
                                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                                    color: 'white',
                                    fontWeight: 600
                                }}
                            >
                                View Open Positions
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-10">
                {/* Main Content Grid */}
                <div id="open-positions" className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {/* Position Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1"
                    >
                        <div className="lg:sticky lg:top-24">
                            <div className="mb-4">
                                <div className="w-12 sm:w-16 h-1 mb-3 sm:mb-4 rounded-full" style={{ backgroundColor: colors.accent }} />
                                <h2 className="text-xl sm:text-2xl" style={{ fontWeight: 700, color: colors.text }}>
                                    Open Positions
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-500 mt-2">{positions.length} positions available</p>
                            </div>

                            <div className="space-y-2 max-h-[400px] sm:max-h-[600px] overflow-y-auto pr-2">
                                {positions.map((position) => (
                                    <motion.button
                                        key={position.id}
                                        onClick={() => setSelectedPosition(position)}
                                        whileHover={{ x: 5 }}
                                        className={`w-full text-left p-3 sm:p-4 rounded-xl border-2 transition-all ${selectedPosition.id === position.id
                                                ? 'border-transparent shadow-lg'
                                                : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        style={selectedPosition.id === position.id ? {
                                            backgroundColor: colors.primary,
                                            color: 'white'
                                        } : {}}
                                    >
                                        <div className="flex items-start gap-2 sm:gap-3">
                                            <position.icon
                                                size={18}
                                                className={`flex-shrink-0 sm:w-5 sm:h-5 ${selectedPosition.id === position.id ? 'text-white' : ''}`}
                                                style={selectedPosition.id !== position.id ? { color: colors.accent } : {}}
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h3
                                                    className="truncate text-sm sm:text-base mb-0.5 sm:mb-1"
                                                    style={{
                                                        fontWeight: 600,
                                                        color: selectedPosition.id === position.id ? 'white' : colors.text
                                                    }}
                                                >
                                                    {position.title}
                                                </h3>
                                                <p className={`text-xs sm:text-sm ${selectedPosition.id === position.id ? 'text-white/80' : 'text-gray-500'}`}>
                                                    {position.location}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Position Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 border-2 border-gray-200 shadow-lg">
                            {/* Position Header */}
                            <div className="mb-6 sm:mb-8">
                                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div
                                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: `${colors.accent}20` }}
                                    >
                                        <selectedPosition.icon size={24} className="sm:w-8 sm:h-8" style={{ color: colors.accent }} />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl sm:text-3xl mb-1 sm:mb-2" style={{ fontWeight: 700, color: colors.text }}>
                                            {selectedPosition.title}
                                        </h2>
                                        <p className="text-sm sm:text-base text-gray-600">{selectedPosition.department}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-50 rounded-full">
                                        <MapPin size={14} className="sm:w-4 sm:h-4" style={{ color: colors.accent }} />
                                        <span className="text-xs sm:text-sm text-gray-700">{selectedPosition.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-50 rounded-full">
                                        <Briefcase size={14} className="sm:w-4 sm:h-4" style={{ color: colors.accent }} />
                                        <span className="text-xs sm:text-sm text-gray-700">{selectedPosition.type}</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-50 rounded-full">
                                        <Clock size={14} className="sm:w-4 sm:h-4" style={{ color: colors.accent }} />
                                        <span className="text-xs sm:text-sm text-gray-700">{selectedPosition.experience}</span>
                                    </div>
                                </div>
                            </div>

                            {/* About This Role */}
                            <div className="mb-6 sm:mb-8">
                                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4" style={{ fontWeight: 600, color: colors.text }}>
                                    About This Role
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    We are looking for a talented {selectedPosition.title} to join our {selectedPosition.department} team.
                                    This role offers an exciting opportunity to work on large-scale municipal projects across Maharashtra
                                    and contribute to transforming urban governance.
                                </p>
                            </div>

                            {/* Key Responsibilities */}
                            <div className="mb-6 sm:mb-8">
                                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4" style={{ fontWeight: 600, color: colors.text }}>
                                    Key Responsibilities
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                                    {selectedPosition.responsibilities.map((responsibility, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <Target size={14} className="sm:w-4 sm:h-4 flex-shrink-0 mt-1" style={{ color: colors.accent }} />
                                            <span className="text-xs sm:text-sm text-gray-700">{responsibility}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Apply Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setIsApplicationOpen(true)}
                                className="w-full md:w-auto px-8 py-4 rounded-full text-white shadow-lg"
                                style={{ backgroundColor: colors.primary, fontWeight: 600 }}
                            >
                                Apply for this Position
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Why Work With Us */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-b from-gray-50 to-white rounded-2xl py-8 px-4"
                >
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl text-center mb-6" style={{ fontWeight: 700, color: colors.text }}>
                            Why Work With Us
                        </h2>

                        <div className="grid md:grid-cols-3 gap-5">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-xl p-4 text-center border-2 border-gray-200 hover:shadow-lg transition-all"
                                >
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2"
                                        style={{ backgroundColor: `${colors.accent}20` }}
                                    >
                                        <benefit.icon size={20} style={{ color: colors.accent }} />
                                    </div>
                                    <h3 className="text-base mb-2" style={{ fontWeight: 600, color: colors.text }}>
                                        {benefit.title}
                                    </h3>
                                    <p className="text-xs text-gray-600">{benefit.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Don't See Your Role? */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-6 sm:mt-8 mb-4 sm:mb-6"
                >
                    <div className="max-w-5xl mx-auto bg-white rounded-2xl p-5 sm:p-6 md:p-8 border-2 border-gray-200 shadow-lg text-center">
                        <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3" style={{ fontWeight: 600, color: colors.text }}>
                            Don't See Your Role?
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
                            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
                        </p>
                        <motion.a
                            href="mailto:careers@sthapatyaconsultants.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base"
                            style={{
                                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                                color: 'white',
                                fontWeight: 600
                            }}
                        >
                            <Send size={16} className="sm:w-5 sm:h-5" />
                            Send Your Resume
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Application Form Dialog */}
            <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
                <DialogContent className="max-w-[90vw] w-[90vw] lg:max-w-[1200px] lg:w-[1200px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl" style={{ fontWeight: 700, color: colors.text }}>
                            Apply for {selectedPosition.title}
                        </DialogTitle>
                        <DialogDescription>
                            Fill out the form below to submit your application for this position.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                        {/* Full Name */}
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name *</Label>
                            <Input
                                id="fullName"
                                required
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={(e) => handleFormChange("fullName", e.target.value)}
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                placeholder="your.email@example.com"
                                value={formData.email}
                                onChange={(e) => handleFormChange("email", e.target.value)}
                            />
                        </div>

                        {/* Mobile */}
                        <div className="space-y-2">
                            <Label htmlFor="mobile">Mobile *</Label>
                            <Input
                                id="mobile"
                                type="tel"
                                required
                                placeholder="+91 XXXXXXXXXX"
                                value={formData.mobile}
                                onChange={(e) => handleFormChange("mobile", e.target.value)}
                            />
                        </div>

                        {/* Current Address */}
                        <div className="space-y-2">
                            <Label htmlFor="address">Current Address *</Label>
                            <Textarea
                                id="address"
                                required
                                placeholder="Enter your current address"
                                rows={3}
                                value={formData.address}
                                onChange={(e) => handleFormChange("address", e.target.value)}
                            />
                        </div>

                        {/* Work Experience Toggle */}
                        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                            <Switch
                                id="workExperience"
                                checked={hasWorkExperience}
                                onCheckedChange={setHasWorkExperience}
                            />
                            <Label htmlFor="workExperience" className="cursor-pointer">
                                I have work experience
                            </Label>
                        </div>

                        {/* Conditional Work Experience Fields */}
                        {hasWorkExperience && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg" style={{ fontWeight: 600, color: colors.text }}>
                                        Work Experience Details
                                    </h3>
                                    <button
                                        type="button"
                                        onClick={addWorkExperience}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 hover:scale-105"
                                        style={{ borderColor: colors.primary, color: colors.primary, fontWeight: 600 }}
                                    >
                                        <Plus size={16} />
                                        Add More Experience
                                    </button>
                                </div>

                                {workExperiences.map((experience, index) => (
                                    <div
                                        key={experience.id}
                                        className="space-y-4 p-6 bg-gray-50 rounded-lg border-2 border-gray-200 relative"
                                    >
                                        {workExperiences.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeWorkExperience(experience.id)}
                                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-red-50 transition-colors"
                                                style={{ color: '#BF3131' }}
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        )}

                                        <h4 className="text-base" style={{ fontWeight: 600, color: colors.text }}>
                                            Experience {index + 1}
                                        </h4>

                                        {/* Company Name */}
                                        <div className="space-y-2">
                                            <Label htmlFor={`companyName-${experience.id}`}>Company Name *</Label>
                                            <Input
                                                id={`companyName-${experience.id}`}
                                                required
                                                placeholder="Enter company name"
                                                value={experience.companyName}
                                                onChange={(e) => updateWorkExperience(experience.id, 'companyName', e.target.value)}
                                            />
                                        </div>

                                        {/* Job Role */}
                                        <div className="space-y-2">
                                            <Label htmlFor={`jobRole-${experience.id}`}>Job Role *</Label>
                                            <Input
                                                id={`jobRole-${experience.id}`}
                                                required
                                                placeholder="Enter your job role"
                                                value={experience.jobRole}
                                                onChange={(e) => updateWorkExperience(experience.id, 'jobRole', e.target.value)}
                                            />
                                        </div>

                                        {/* Job Description */}
                                        <div className="space-y-2">
                                            <Label htmlFor={`jobDescription-${experience.id}`}>Job Description *</Label>
                                            <Textarea
                                                id={`jobDescription-${experience.id}`}
                                                required
                                                placeholder="Describe your responsibilities"
                                                rows={4}
                                                value={experience.jobDescription}
                                                onChange={(e) => updateWorkExperience(experience.id, 'jobDescription', e.target.value)}
                                            />
                                        </div>

                                        {/* Starting Date */}
                                        <div className="space-y-2">
                                            <Label htmlFor={`startDate-${experience.id}`}>Starting Date *</Label>
                                            <Input
                                                id={`startDate-${experience.id}`}
                                                type="date"
                                                required
                                                value={experience.startDate}
                                                onChange={(e) => updateWorkExperience(experience.id, 'startDate', e.target.value)}
                                            />
                                        </div>

                                        {/* Currently Working Checkbox */}
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id={`currentlyWorking-${experience.id}`}
                                                checked={experience.currentlyWorking}
                                                onCheckedChange={(checked) => {
                                                    const isChecked = checked === true;
                                                    updateWorkExperience(experience.id, 'currentlyWorking', isChecked);
                                                }}
                                            />
                                            <Label htmlFor={`currentlyWorking-${experience.id}`} className="cursor-pointer">
                                                Currently working here
                                            </Label>
                                        </div>

                                        {/* End Date */}
                                        {!experience.currentlyWorking && (
                                            <div className="space-y-2">
                                                <Label htmlFor={`endDate-${experience.id}`}>End Date *</Label>
                                                <Input
                                                    id={`endDate-${experience.id}`}
                                                    type="date"
                                                    required
                                                    value={experience.endDate}
                                                    onChange={(e) => updateWorkExperience(experience.id, 'endDate', e.target.value)}
                                                />
                                            </div>
                                        )}

                                        {experience.currentlyWorking && (
                                            <div className="space-y-2">
                                                <p className="text-sm" style={{ color: colors.accent, fontWeight: 500 }}>
                                                    ✓ Currently working at this company
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {/* Attach Resume */}
                        <div className="space-y-2">
                            <Label htmlFor="resume">Attach Resume *</Label>
                            <Input
                                id="resume"
                                type="file"
                                required
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => handleFormChange("resume", e.target.files?.[0] || null)}
                            />
                            <p className="text-xs text-gray-500">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                        </div>

                        {/* Notice Period */}
                        <div className="space-y-2">
                            <Label htmlFor="noticePeriod">Notice Period (in days) *</Label>
                            <Input
                                id="noticePeriod"
                                type="number"
                                required
                                min="0"
                                placeholder="Enter notice period in days (e.g., 30)"
                                value={formData.noticePeriod}
                                onChange={(e) => handleFormChange("noticePeriod", e.target.value)}
                            />
                            <p className="text-xs text-gray-500">Enter 0 if you can join immediately</p>
                        </div>

                        {/* Tell Us More */}
                        <div className="space-y-2">
                            <Label htmlFor="additionalInfo">Tell Us More About You</Label>
                            <Textarea
                                id="additionalInfo"
                                placeholder="Share any additional information that might be relevant to your application"
                                rows={4}
                                value={formData.additionalInfo}
                                onChange={(e) => handleFormChange("additionalInfo", e.target.value)}
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4 sm:justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-8 py-3 rounded-full text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                style={{ backgroundColor: colors.primary, fontWeight: 600 }}
                            >
                                {isSubmitting ? "Submitting..." : "Submit Application"}
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsApplicationOpen(false)}
                                disabled={isSubmitting}
                                className="px-8 py-3 rounded-full border-2 transition-all duration-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{ borderColor: colors.primary, color: colors.primary, fontWeight: 600 }}
                            >
                                Back
                            </button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>

            <Footer />
        </div>
    );
}
