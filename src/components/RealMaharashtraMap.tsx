import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Building2, CheckCircle2, Clock, MapPin, X } from "lucide-react";
import maharashtraMapImage from "figma:asset/595e9da17868f165681dd4565754771645660e36.png";
import { useThemeColors } from "./useThemeColors";

// Comprehensive project data for Maharashtra districts
interface Project {
  name: string;
  type: "completed" | "ongoing";
  properties: string;
  year: string;
  description: string;
}

interface DistrictData {
  name: string;
  projects: Project[];
  totalProperties: string;
  councils: number;
}

const districtData: Record<string, DistrictData> = {
  mumbai: {
    name: "Mumbai",
    totalProperties: "25L+",
    councils: 3,
    projects: [
      { name: "Mumbai Suburban District Survey", type: "completed", properties: "15L+", year: "2023", description: "Complete GIS-based property tax survey and digitization" },
      { name: "Mira-Bhayandar Municipal Corporation", type: "completed", properties: "5L+", year: "2022", description: "Property tax assessment and collection system" },
      { name: "Vasai-Virar Municipal Corporation", type: "ongoing", properties: "5L+", year: "2024-25", description: "Comprehensive GIS mapping and property survey" }
    ]
  },
  thane: {
    name: "Thane",
    totalProperties: "20L+",
    councils: 12,
    projects: [
      { name: "Thane Municipal Corporation", type: "completed", properties: "15L+", year: "2023", description: "Complete property tax management system with GIS integration" },
      { name: "Kalyan-Dombivli Municipal Corporation", type: "completed", properties: "3L+", year: "2022", description: "Digital property survey and tax collection" },
      { name: "Ulhasnagar Municipal Corporation", type: "ongoing", properties: "2L+", year: "2024-25", description: "Property digitization and mobile app development" }
    ]
  },
  raigad: {
    name: "Raigad",
    totalProperties: "10L+",
    councils: 8,
    projects: [
      { name: "Panvel Municipal Corporation", type: "completed", properties: "8L+", year: "2023", description: "Comprehensive property tax survey and IT solutions" },
      { name: "Kharghar Node CIDCO", type: "completed", properties: "1.5L+", year: "2022", description: "Property mapping and tax management" },
      { name: "Alibag Municipal Council", type: "ongoing", properties: "50K+", year: "2024-25", description: "Property survey and digital transformation" }
    ]
  },
  pune: {
    name: "Pune",
    totalProperties: "18L+",
    councils: 15,
    projects: [
      { name: "Pune Municipal Corporation", type: "completed", properties: "12L+", year: "2023", description: "End-to-end property tax management and GIS mapping" },
      { name: "Pimpri-Chinchwad Municipal Corporation", type: "completed", properties: "4L+", year: "2022", description: "Comprehensive property survey and tax assessment" },
      { name: "Purandar Nagar Panchayat", type: "ongoing", properties: "50K+", year: "2024-25", description: "Digital transformation of property tax system" }
    ]
  },
  nashik: {
    name: "Nashik",
    totalProperties: "10L+",
    councils: 18,
    projects: [
      { name: "Nashik Municipal Corporation", type: "completed", properties: "6L+", year: "2023", description: "GIS-based property tax survey and IT solutions" },
      { name: "Malegaon Municipal Council", type: "completed", properties: "2L+", year: "2022", description: "Property mapping and tax collection system" },
      { name: "Sinnar Municipal Council", type: "ongoing", properties: "80K+", year: "2024-25", description: "Property survey and digitization project" }
    ]
  },
  ahmednagar: {
    name: "Ahmednagar",
    totalProperties: "8L+",
    councils: 14,
    projects: [
      { name: "Ahmednagar Municipal Council", type: "completed", properties: "5L+", year: "2023", description: "Property tax digitization and GIS implementation" },
      { name: "Shrirampur Municipal Council", type: "completed", properties: "1.5L+", year: "2022", description: "Property survey and assessment" },
      { name: "Sangamner Municipal Council", type: "ongoing", properties: "1.5L+", year: "2024-25", description: "Digital property management system" }
    ]
  },
  solapur: {
    name: "Solapur",
    totalProperties: "9L+",
    councils: 11,
    projects: [
      { name: "Solapur Municipal Corporation", type: "completed", properties: "7L+", year: "2023", description: "Complete property tax survey and IT solutions" },
      { name: "Pandharpur Municipal Council", type: "completed", properties: "1L+", year: "2022", description: "GIS mapping and property digitization" },
      { name: "Barshi Municipal Council", type: "ongoing", properties: "1L+", year: "2024-25", description: "Property tax management system" }
    ]
  },
  satara: {
    name: "Satara",
    totalProperties: "7L+",
    councils: 10,
    projects: [
      { name: "Satara Municipal Council", type: "completed", properties: "4L+", year: "2023", description: "Property survey and tax collection system" },
      { name: "Karad Municipal Council", type: "completed", properties: "2L+", year: "2022", description: "GIS-based property mapping" },
      { name: "Wai Municipal Council", type: "ongoing", properties: "1L+", year: "2024-25", description: "Digital property tax implementation" }
    ]
  },
  kolhapur: {
    name: "Kolhapur",
    totalProperties: "8L+",
    councils: 12,
    projects: [
      { name: "Kolhapur Municipal Corporation", type: "completed", properties: "6L+", year: "2023", description: "Comprehensive property tax management" },
      { name: "Ichalkaranji Municipal Council", type: "completed", properties: "1.5L+", year: "2022", description: "Property digitization and assessment" },
      { name: "Jaysingpur Municipal Council", type: "ongoing", properties: "50K+", year: "2024-25", description: "Property survey and IT solutions" }
    ]
  },
  sangli: {
    name: "Sangli",
    totalProperties: "6L+",
    councils: 9,
    projects: [
      { name: "Sangli-Miraj-Kupwad Municipal Corporation", type: "completed", properties: "4.5L+", year: "2023", description: "Property tax survey and management system" },
      { name: "Sangli Municipal Council", type: "completed", properties: "1L+", year: "2022", description: "GIS mapping and digitization" },
      { name: "Vita Municipal Council", type: "ongoing", properties: "50K+", year: "2024-25", description: "Property assessment system" }
    ]
  },
  nagpur: {
    name: "Nagpur",
    totalProperties: "12L+",
    councils: 10,
    projects: [
      { name: "Nagpur Municipal Corporation", type: "completed", properties: "8L+", year: "2023", description: "Complete property tax management and GIS implementation" },
      { name: "Kamptee Municipal Council", type: "completed", properties: "1.5L+", year: "2022", description: "Property digitization and assessment system" },
      { name: "Nagpur Smart City - Phase 2", type: "ongoing", properties: "2.5L+", year: "2024-25", description: "Advanced GIS mapping and property analytics" }
    ]
  },
  amravati: {
    name: "Amravati",
    totalProperties: "7L+",
    councils: 11,
    projects: [
      { name: "Amravati Municipal Corporation", type: "completed", properties: "5L+", year: "2023", description: "Property tax digitization and GIS survey" },
      { name: "Achalpur Municipal Council", type: "completed", properties: "1L+", year: "2022", description: "Property mapping and assessment" },
      { name: "Dhamangaon Municipal Council", type: "ongoing", properties: "1L+", year: "2024-25", description: "Digital property management" }
    ]
  },
  aurangabad: {
    name: "Aurangabad",
    totalProperties: "10L+",
    councils: 13,
    projects: [
      { name: "Aurangabad Municipal Corporation", type: "completed", properties: "7L+", year: "2023", description: "Comprehensive property survey and IT solutions" },
      { name: "Jalna Municipal Council", type: "completed", properties: "2L+", year: "2022", description: "GIS-based property tax system" },
      { name: "Paithan Municipal Council", type: "ongoing", properties: "1L+", year: "2024-25", description: "Property digitization project" }
    ]
  }
};

// Clickable regions based on the map image coordinates (percentage-based for responsiveness)
const districtRegions = [
  { id: "mumbai", coords: "4,36,9,35,12,40,11,47,7,50,4,46", shape: "poly" },
  { id: "thane", coords: "12,40,18,37,21,43,19,49,13,51,11,47", shape: "poly" },
  { id: "raigad", coords: "7,50,13,51,16,58,15,67,9,69,6,62", shape: "poly" },
  { id: "nashik", coords: "17,22,30,19,36,25,35,37,27,41,18,38", shape: "poly" },
  { id: "ahmednagar", coords: "36,25,51,22,55,30,54,42,46,45,35,37", shape: "poly" },
  { id: "pune", coords: "21,45,35,42,45,52,43,67,32,72,22,64", shape: "poly" },
  { id: "aurangabad", coords: "48,40,62,38,68,48,66,58,57,61,48,55", shape: "poly" },
  { id: "solapur", coords: "43,55,56,52,64,61,62,75,52,78,43,72", shape: "poly" },
  { id: "satara", coords: "25,70,40,67,46,78,43,90,32,93,25,85", shape: "poly" },
  { id: "kolhapur", coords: "17,87,28,84,33,93,31,102,22,103,17,96", shape: "poly" },
  { id: "sangli", coords: "33,88,43,85,48,94,45,103,36,103,33,96", shape: "poly" },
  { id: "amravati", coords: "67,26,82,24,89,32,88,42,78,45,67,41", shape: "poly" },
  { id: "nagpur", coords: "84,43,98,40,104,51,103,65,93,68,84,61", shape: "poly" },
];

export function RealMaharashtraMap() {
  const { colors, backgrounds } = useThemeColors();
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);

  const handleDistrictClick = (districtKey: string) => {
    setSelectedDistrict(districtKey);
  };

  const selectedData = selectedDistrict ? districtData[selectedDistrict] : null;
  const completedProjects = selectedData?.projects.filter(p => p.type === "completed") || [];
  const ongoingProjects = selectedData?.projects.filter(p => p.type === "ongoing") || [];

  return (
    <div className="grid md:grid-cols-[1.2fr,1fr] gap-5">
      {/* Left: Real Maharashtra Map with Image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] border-2 rounded-2xl p-6 shadow-lg"
        style={{ borderColor: `${colors.secondary}33` }}
      >
        <div className="text-center mb-4">
          <h3 className="text-xl mb-1" style={{ fontWeight: 700, color: colors.primary }}>
            Our Presence Across Maharashtra
          </h3>
          <p className="text-sm text-[#64748b]">Click on any district to view projects</p>
        </div>
        
        {/* Map Image with Clickable Areas */}
        <div className="relative w-full" style={{ maxWidth: "700px", margin: "0 auto" }}>
          <img 
            src={maharashtraMapImage} 
            alt="Maharashtra Districts Map"
            useMap="#maharashtra-map"
            className="w-full h-auto rounded-xl shadow-md"
          />
          
          <map name="maharashtra-map">
            {districtRegions.map((region) => (
              <area
                key={region.id}
                shape={region.shape as any}
                coords={region.coords}
                alt={region.id}
                onClick={() => handleDistrictClick(region.id)}
                onMouseEnter={() => setHoveredDistrict(region.id)}
                onMouseLeave={() => setHoveredDistrict(null)}
                className="cursor-pointer"
                style={{ cursor: "pointer" }}
              />
            ))}
          </map>

          {/* Hover/Selection Overlay using SVG */}
          <svg 
            viewBox="0 0 900 814" 
            className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-xl"
            style={{ mixBlendMode: "multiply" }}
          >
            {/* Mumbai */}
            <motion.polygon
              points="36,293 81,285 108,326 99,383 63,407 36,374"
              fill={selectedDistrict === "mumbai" ? "rgba(91, 33, 182, 0.4)" : hoveredDistrict === "mumbai" ? "rgba(99, 102, 241, 0.3)" : "transparent"}
              className="pointer-events-auto cursor-pointer transition-all"
              onClick={() => handleDistrictClick("mumbai")}
              onMouseEnter={() => setHoveredDistrict("mumbai")}
              onMouseLeave={() => setHoveredDistrict(null)}
              animate={{ opacity: selectedDistrict === "mumbai" || hoveredDistrict === "mumbai" ? 1 : 0 }}
            />

            {/* Thane */}
            <motion.polygon
              points="108,326 162,301 189,350 171,399 117,415 99,383"
              fill={selectedDistrict === "thane" ? "rgba(91, 33, 182, 0.4)" : hoveredDistrict === "thane" ? "rgba(99, 102, 241, 0.3)" : "transparent"}
              className="pointer-events-auto cursor-pointer transition-all"
              onClick={() => handleDistrictClick("thane")}
              onMouseEnter={() => setHoveredDistrict("thane")}
              onMouseLeave={() => setHoveredDistrict(null)}
              animate={{ opacity: selectedDistrict === "thane" || hoveredDistrict === "thane" ? 1 : 0 }}
            />

            {/* Raigad */}
            <motion.polygon
              points="63,407 117,415 144,472 135,545 81,562 54,504"
              fill={selectedDistrict === "raigad" ? "rgba(91, 33, 182, 0.4)" : hoveredDistrict === "raigad" ? "rgba(99, 102, 241, 0.3)" : "transparent"}
              className="pointer-events-auto cursor-pointer transition-all"
              onClick={() => handleDistrictClick("raigad")}
              onMouseEnter={() => setHoveredDistrict("raigad")}
              onMouseLeave={() => setHoveredDistrict(null)}
              animate={{ opacity: selectedDistrict === "raigad" || hoveredDistrict === "raigad" ? 1 : 0 }}
            />

            {/* Nashik */}
            <motion.polygon
              points="153,179 270,155 324,203 315,301 243,333 162,309"
              fill={selectedDistrict === "nashik" ? "rgba(91, 33, 182, 0.4)" : hoveredDistrict === "nashik" ? "rgba(99, 102, 241, 0.3)" : "transparent"}
              className="pointer-events-auto cursor-pointer transition-all"
              onClick={() => handleDistrictClick("nashik")}
              onMouseEnter={() => setHoveredDistrict("nashik")}
              onMouseLeave={() => setHoveredDistrict(null)}
              animate={{ opacity: selectedDistrict === "nashik" || hoveredDistrict === "nashik" ? 1 : 0 }}
            />

            {/* Ahmednagar (A.Nagar) */}
            <motion.polygon
              points="324,203 459,179 495,244 486,342 414,366 315,301"
              fill={selectedDistrict === "ahmednagar" ? "rgba(91, 33, 182, 0.4)" : hoveredDistrict === "ahmednagar" ? "rgba(99, 102, 241, 0.3)" : "transparent"}
              className="pointer-events-auto cursor-pointer transition-all"
              onClick={() => handleDistrictClick("ahmednagar")}
              onMouseEnter={() => setHoveredDistrict("ahmednagar")}
              onMouseLeave={() => setHoveredDistrict(null)}
              animate={{ opacity: selectedDistrict === "ahmednagar" || hoveredDistrict === "ahmednagar" ? 1 : 0 }}
            />

            {/* Pune */}
            <motion.polygon
              points="189,366 315,342 405,423 387,545 288,586 198,521"
              fill={selectedDistrict === "pune" ? "rgba(91, 33, 182, 0.4)" : hoveredDistrict === "pune" ? "rgba(99, 102, 241, 0.3)" : "transparent"}
              className="pointer-events-auto cursor-pointer transition-all"
              onClick={() => handleDistrictClick("pune")}
              onMouseEnter={() => setHoveredDistrict("pune")}
              onMouseLeave={() => setHoveredDistrict(null)}
              animate={{ opacity: selectedDistrict === "pune" || hoveredDistrict === "pune" ? 1 : 0 }}
            />

            {/* Aurangabad */}
            <motion.polygon
              points="432,326 558,309 612,390 594,472 513,496 432,447"
              fill={selectedDistrict === "aurangabad" ? "rgba(91, 33, 182, 0.4)" : hoveredDistrict === "aurangabad" ? "rgba(99, 102, 241, 0.3)" : "transparent"}
              className="pointer-events-auto cursor-pointer transition-all"
              onClick={() => handleDistrictClick("aurangabad")}
              onMouseEnter={() => setHoveredDistrict("aurangabad")}
              onMouseLeave={() => setHoveredDistrict(null)}
              animate={{ opacity: selectedDistrict === "aurangabad" || hoveredDistrict === "aurangabad" ? 1 : 0 }}
            />

            {/* Solapur */}
            <motion.polygon
              points="387,447 504,423 576,496 558,610 468,635 387,586"
              fill={selectedDistrict === "solapur" ? "rgba(91, 33, 182, 0.4)" : hoveredDistrict === "solapur" ? "rgba(99, 102, 241, 0.3)" : "transparent"}
              className="pointer-events-auto cursor-pointer transition-all"
              onClick={() => handleDistrictClick("solapur")}
              onMouseEnter={() => setHoveredDistrict("solapur")}
              onMouseLeave={() => setHoveredDistrict(null)}
              animate={{ opacity: selectedDistrict === "solapur" || hoveredDistrict === "solapur" ? 1 : 0 }}
            />

            {/* Satara - HIGHLIGHTED BY DEFAULT */}
            <motion.polygon
              points="225,570 360,545 414,635 387,732 288,757 225,692"
              fill={selectedDistrict === "satara" ? "rgba(91, 33, 182, 0.5)" : hoveredDistrict === "satara" ? "rgba(99, 102, 241, 0.3)" : "rgba(91, 33, 182, 0.2)"}
              className="pointer-events-auto cursor-pointer transition-all"
              onClick={() => handleDistrictClick("satara")}
              onMouseEnter={() => setHoveredDistrict("satara")}
              onMouseLeave={() => setHoveredDistrict(null)}
              animate={{ opacity: 1 }}
            />

            {/* Kolhapur */}
            <motion.polygon
              points="153,708 252,683 297,757 279,830 198,838 153,781"
              fill={selectedDistrict === "kolhapur" ? "rgba(91, 33, 182, 0.4)" : hoveredDistrict === "kolhapur" ? "rgba(99, 102, 241, 0.3)" : "transparent"}
              className="pointer-events-auto cursor-pointer transition-all"
              onClick={() => handleDistrictClick("kolhapur")}
              onMouseEnter={() => setHoveredDistrict("kolhapur")}
              onMouseLeave={() => setHoveredDistrict(null)}
              animate={{ opacity: selectedDistrict === "kolhapur" || hoveredDistrict === "kolhapur" ? 1 : 0 }}
            />

            {/* Sangli */}
            <motion.polygon
              points="297,716 387,692 432,765 405,838 324,838 297,781"
              fill={selectedDistrict === "sangli" ? "rgba(91, 33, 182, 0.4)" : hoveredDistrict === "sangli" ? "rgba(99, 102, 241, 0.3)" : "transparent"}
              className="pointer-events-auto cursor-pointer transition-all"
              onClick={() => handleDistrictClick("sangli")}
              onMouseEnter={() => setHoveredDistrict("sangli")}
              onMouseLeave={() => setHoveredDistrict(null)}
              animate={{ opacity: selectedDistrict === "sangli" || hoveredDistrict === "sangli" ? 1 : 0 }}
            />

            {/* Amravati */}
            <motion.polygon
              points="603,211 738,195 801,260 792,342 702,366 603,333"
              fill={selectedDistrict === "amravati" ? "rgba(91, 33, 182, 0.4)" : hoveredDistrict === "amravati" ? "rgba(99, 102, 241, 0.3)" : "transparent"}
              className="pointer-events-auto cursor-pointer transition-all"
              onClick={() => handleDistrictClick("amravati")}
              onMouseEnter={() => setHoveredDistrict("amravati")}
              onMouseLeave={() => setHoveredDistrict(null)}
              animate={{ opacity: selectedDistrict === "amravati" || hoveredDistrict === "amravati" ? 1 : 0 }}
            />

            {/* Nagpur */}
            <motion.polygon
              points="756,350 882,326 936,415 927,529 837,554 756,496"
              fill={selectedDistrict === "nagpur" ? "rgba(91, 33, 182, 0.4)" : hoveredDistrict === "nagpur" ? "rgba(99, 102, 241, 0.3)" : "transparent"}
              className="pointer-events-auto cursor-pointer transition-all"
              onClick={() => handleDistrictClick("nagpur")}
              onMouseEnter={() => setHoveredDistrict("nagpur")}
              onMouseLeave={() => setHoveredDistrict(null)}
              animate={{ opacity: selectedDistrict === "nagpur" || hoveredDistrict === "nagpur" ? 1 : 0 }}
            />
          </svg>
        </div>

        {/* Info Text */}
        <p className="text-xs text-center mt-4" style={{ color: colors.secondary }}>
          {hoveredDistrict ? `Hover on ${hoveredDistrict.charAt(0).toUpperCase() + hoveredDistrict.slice(1)}` : "Click on any district to view projects"}
        </p>
      </motion.div>

      {/* Right: Project Details Panel */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white border-2 rounded-2xl p-5 shadow-lg flex flex-col"
        style={{ borderColor: `${colors.secondary}33` }}
      >
        <AnimatePresence mode="wait">
          {selectedData ? (
            <motion.div
              key={selectedDistrict}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col h-full"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4 pb-3 border-b-2 border-[#e2e8f0]">
                <div className="flex-1">
                  <h3 className="text-lg mb-2" style={{ fontWeight: 700, color: colors.primary }}>
                    {selectedData.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-3 py-1 rounded-full" style={{ fontWeight: 600, backgroundColor: `${colors.secondary}10`, color: colors.secondary }}>
                      {selectedData.totalProperties} Properties
                    </span>
                    <span className="px-3 py-1 bg-[#f59e0b]/10 text-[#f59e0b] rounded-full" style={{ fontWeight: 600 }}>
                      {selectedData.councils} Councils
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDistrict(null)}
                  className="p-1.5 hover:bg-[#f1f5f9] rounded-lg transition-colors"
                >
                  <X size={20} className="text-[#64748b]" />
                </button>
              </div>

              {/* Projects List - Scrollable */}
              <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-1">
                {/* Completed Projects */}
                {completedProjects.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 size={18} className="text-green-600" />
                      <h4 className="text-sm" style={{ fontWeight: 700, color: colors.primary }}>
                        Completed Projects ({completedProjects.length})
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {completedProjects.map((project, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-3 bg-green-50 border-l-4 border-green-500 rounded-lg hover:shadow-md transition-shadow"
                        >
                          <h5 className="text-sm" style={{ fontWeight: 600, color: colors.primary }}>
                            {project.name}
                          </h5>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Ongoing Projects */}
                {ongoingProjects.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={18} style={{ color: colors.accent }} />
                      <h4 className="text-sm" style={{ fontWeight: 700, color: colors.primary }}>
                        Ongoing Projects ({ongoingProjects.length})
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {ongoingProjects.map((project, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (completedProjects.length + idx) * 0.1 }}
                          className="p-3 bg-amber-50 rounded-lg hover:shadow-md transition-shadow"
                          style={{ borderLeft: `4px solid ${colors.accent}` }}
                        >
                          <h5 className="text-sm" style={{ fontWeight: 600, color: colors.primary }}>
                            {project.name}
                          </h5>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-full text-center px-4"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <MapPin size={64} className="text-[#cbd5e1] mb-4" />
              </motion.div>
              <h4 className="text-lg text-[#1e3a8a] mb-2" style={{ fontWeight: 700 }}>
                Select a District
              </h4>
              <p className="text-sm text-[#64748b] max-w-xs leading-relaxed">
                Click on any district on the map to view our completed and ongoing projects in that region
              </p>
              <div className="mt-4 p-3 bg-[#f0f9ff] border border-[#4f46e5]/20 rounded-lg">
                <p className="text-xs text-[#4f46e5]">
                  🏆 Serving 100+ municipalities across Maharashtra
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #4f46e5, #2563eb);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #1e3a8a, #4f46e5);
        }
      `}</style>
    </div>
  );
}
