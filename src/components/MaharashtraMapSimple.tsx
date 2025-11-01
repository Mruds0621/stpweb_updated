import { motion } from "motion/react";

interface MaharashtraMapSimpleProps {
  selectedDistrict: string;
  onDistrictClick: (district: string) => void;
}

export function MaharashtraMapSimple({ selectedDistrict, onDistrictClick }: MaharashtraMapSimpleProps) {
  const getDistrictFill = (district: string) => {
    return selectedDistrict === district ? "#22D3EE" : "#E5E7EB";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="h-full"
    >
      <div className="bg-gradient-to-br from-[#8E1616]/5 to-[#1D1616]/5 border border-[#8E1616]/20 p-6 h-full flex flex-col">
        <h3 className="text-xl text-[#1D1616] mb-4 text-center">Our Presence in Maharashtra</h3>
        
        {/* Simplified Maharashtra Map SVG */}
        <svg viewBox="0 0 400 300" className="w-full h-auto flex-grow">
          {/* Mumbai Region */}
          <motion.path
            d="M 50 120 L 80 130 L 90 150 L 70 160 L 50 145 Z"
            fill={getDistrictFill("mumbai")}
            stroke="#1e3a8a"
            strokeWidth="1.5"
            className="cursor-pointer transition-all"
            whileHover={{ fill: "#06B6D4", scale: 1.05 }}
            onClick={() => onDistrictClick("mumbai")}
          />
          
          {/* Thane Region */}
          <motion.path
            d="M 80 130 L 120 120 L 130 140 L 110 155 L 90 150 Z"
            fill={getDistrictFill("thane")}
            stroke="#1e3a8a"
            strokeWidth="1.5"
            className="cursor-pointer transition-all"
            whileHover={{ fill: "#06B6D4", scale: 1.05 }}
            onClick={() => onDistrictClick("thane")}
          />
          
          {/* Pune Region */}
          <motion.path
            d="M 120 160 L 160 155 L 175 180 L 150 190 L 125 185 Z"
            fill={getDistrictFill("pune")}
            stroke="#1e3a8a"
            strokeWidth="1.5"
            className="cursor-pointer transition-all"
            whileHover={{ fill: "#06B6D4", scale: 1.05 }}
            onClick={() => onDistrictClick("pune")}
          />
          
          {/* Nashik Region */}
          <motion.path
            d="M 130 80 L 180 75 L 190 95 L 165 110 L 140 105 Z"
            fill={getDistrictFill("nashik")}
            stroke="#1e3a8a"
            strokeWidth="1.5"
            className="cursor-pointer transition-all"
            whileHover={{ fill: "#06B6D4", scale: 1.05 }}
            onClick={() => onDistrictClick("nashik")}
          />
          
          {/* Nagpur Region */}
          <motion.path
            d="M 280 100 L 330 95 L 340 120 L 315 135 L 285 130 Z"
            fill={getDistrictFill("nagpur")}
            stroke="#1e3a8a"
            strokeWidth="1.5"
            className="cursor-pointer transition-all"
            whileHover={{ fill: "#06B6D4", scale: 1.05 }}
            onClick={() => onDistrictClick("nagpur")}
          />
          
          {/* Raigad/Panvel Region */}
          <motion.path
            d="M 90 150 L 120 160 L 115 185 L 85 180 L 75 165 Z"
            fill={getDistrictFill("panvel")}
            stroke="#1e3a8a"
            strokeWidth="1.5"
            className="cursor-pointer transition-all"
            whileHover={{ fill: "#06B6D4", scale: 1.05 }}
            onClick={() => onDistrictClick("panvel")}
          />

          {/* District Labels */}
          <text x="60" y="145" fontSize="10" fill="#1e3a8a" className="pointer-events-none">Mumbai</text>
          <text x="95" y="140" fontSize="10" fill="#1e3a8a" className="pointer-events-none">Thane</text>
          <text x="140" y="175" fontSize="10" fill="#1e3a8a" className="pointer-events-none">Pune</text>
          <text x="150" y="95" fontSize="10" fill="#1e3a8a" className="pointer-events-none">Nashik</text>
          <text x="295" y="120" fontSize="10" fill="#1e3a8a" className="pointer-events-none">Nagpur</text>
          <text x="85" y="175" fontSize="10" fill="#1e3a8a" className="pointer-events-none">Raigad</text>
        </svg>

        <p className="text-xs text-[#8E1616]/60 text-center mt-3">Click on any district to view details</p>
      </div>
    </motion.div>
  );
}
