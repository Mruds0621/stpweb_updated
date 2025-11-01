import { motion } from "motion/react";
import { useState } from "react";
import { Building2, MapPin, TrendingUp } from "lucide-react";

interface DistrictData {
  name: string;
  councils: number;
  projects: string;
  properties: string;
  color: string;
}

const districtData: Record<string, DistrictData> = {
  thane: {
    name: "Thane",
    councils: 12,
    projects: "15L+ Properties",
    properties: "3 Major Corporations",
    color: "#3C467B"
  },
  mumbai: {
    name: "Mumbai",
    councils: 8,
    projects: "10L+ Properties",
    properties: "2 Corporations",
    color: "#50589C"
  },
  pune: {
    name: "Pune",
    councils: 15,
    projects: "12L+ Properties",
    properties: "4 Major Corporations",
    color: "#636CCB"
  },
  nashik: {
    name: "Nashik",
    councils: 10,
    projects: "8L+ Properties",
    properties: "3 Corporations",
    color: "#6E8CFB"
  },
  nagpur: {
    name: "Nagpur",
    councils: 9,
    projects: "7L+ Properties",
    properties: "2 Corporations",
    color: "#3C467B"
  },
  panvel: {
    name: "Raigad (Panvel)",
    councils: 7,
    projects: "8L+ Properties",
    properties: "2 Major Councils",
    color: "#50589C"
  }
};

export function MaharashtraMap() {
  const [selectedDistrict, setSelectedDistrict] = useState<string>("thane");
  const district = districtData[selectedDistrict];

  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      {/* Interactive Map */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        <div className="bg-gradient-to-br from-[#6E8CFB]/5 to-[#3C467B]/5 rounded-2xl p-6 border border-[#6E8CFB]/20">
          <h3 className="text-xl text-[#3C467B] mb-4 text-center">Our Presence in Maharashtra</h3>
          
          {/* Simplified Maharashtra Map SVG */}
          <svg viewBox="0 0 400 300" className="w-full h-auto">
            {/* Mumbai Region */}
            <motion.path
              d="M 50 120 L 80 130 L 90 150 L 70 160 L 50 145 Z"
              fill={selectedDistrict === "mumbai" ? "#6E8CFB" : "#E5E7EB"}
              stroke="#3C467B"
              strokeWidth="1.5"
              className="cursor-pointer transition-all hover:opacity-80"
              onClick={() => setSelectedDistrict("mumbai")}
              whileHover={{ scale: 1.05 }}
            />
            
            {/* Thane Region */}
            <motion.path
              d="M 80 130 L 120 120 L 130 140 L 110 155 L 90 150 Z"
              fill={selectedDistrict === "thane" ? "#6E8CFB" : "#E5E7EB"}
              stroke="#3C467B"
              strokeWidth="1.5"
              className="cursor-pointer transition-all hover:opacity-80"
              onClick={() => setSelectedDistrict("thane")}
              whileHover={{ scale: 1.05 }}
            />
            
            {/* Pune Region */}
            <motion.path
              d="M 120 160 L 160 155 L 175 180 L 150 190 L 125 185 Z"
              fill={selectedDistrict === "pune" ? "#6E8CFB" : "#E5E7EB"}
              stroke="#3C467B"
              strokeWidth="1.5"
              className="cursor-pointer transition-all hover:opacity-80"
              onClick={() => setSelectedDistrict("pune")}
              whileHover={{ scale: 1.05 }}
            />
            
            {/* Nashik Region */}
            <motion.path
              d="M 130 80 L 180 75 L 190 95 L 165 110 L 140 105 Z"
              fill={selectedDistrict === "nashik" ? "#6E8CFB" : "#E5E7EB"}
              stroke="#3C467B"
              strokeWidth="1.5"
              className="cursor-pointer transition-all hover:opacity-80"
              onClick={() => setSelectedDistrict("nashik")}
              whileHover={{ scale: 1.05 }}
            />
            
            {/* Nagpur Region */}
            <motion.path
              d="M 280 100 L 330 95 L 340 120 L 315 135 L 285 130 Z"
              fill={selectedDistrict === "nagpur" ? "#6E8CFB" : "#E5E7EB"}
              stroke="#3C467B"
              strokeWidth="1.5"
              className="cursor-pointer transition-all hover:opacity-80"
              onClick={() => setSelectedDistrict("nagpur")}
              whileHover={{ scale: 1.05 }}
            />
            
            {/* Raigad/Panvel Region */}
            <motion.path
              d="M 90 150 L 120 160 L 115 185 L 85 180 L 75 165 Z"
              fill={selectedDistrict === "panvel" ? "#6E8CFB" : "#E5E7EB"}
              stroke="#3C467B"
              strokeWidth="1.5"
              className="cursor-pointer transition-all hover:opacity-80"
              onClick={() => setSelectedDistrict("panvel")}
              whileHover={{ scale: 1.05 }}
            />

            {/* District Labels */}
            <text x="60" y="145" fontSize="10" fill="#3C467B" className="pointer-events-none">Mumbai</text>
            <text x="95" y="140" fontSize="10" fill="#3C467B" className="pointer-events-none">Thane</text>
            <text x="140" y="175" fontSize="10" fill="#3C467B" className="pointer-events-none">Pune</text>
            <text x="150" y="95" fontSize="10" fill="#3C467B" className="pointer-events-none">Nashik</text>
            <text x="295" y="120" fontSize="10" fill="#3C467B" className="pointer-events-none">Nagpur</text>
            <text x="85" y="175" fontSize="10" fill="#3C467B" className="pointer-events-none">Raigad</text>
          </svg>

          <p className="text-xs text-[#50589C]/60 text-center mt-3">Click on a district to view details</p>
        </div>
      </motion.div>

      {/* District Stats Box */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        key={selectedDistrict}
        className="bg-gradient-to-br from-[#3C467B] to-[#6E8CFB] rounded-2xl p-6 text-white shadow-xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <MapPin size={24} className="text-white" />
            <h3 className="text-2xl">{district.name}</h3>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
            >
              <Building2 size={20} className="mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-white/70">Urban Local Bodies</p>
                <p className="text-xl">{district.councils} Councils</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
            >
              <TrendingUp size={20} className="mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-white/70">Properties Surveyed</p>
                <p className="text-xl">{district.projects}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
            >
              <MapPin size={20} className="mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-white/70">Major Projects</p>
                <p className="text-xl">{district.properties}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
