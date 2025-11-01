import { motion } from "motion/react";
import { Building2, MapPin, TrendingUp, CheckCircle2, Award } from "lucide-react";

export interface Project {
  name: string;
  type: "Municipal Corporation" | "Municipal Council" | "Nagar Parishad";
  status: "Completed" | "Ongoing";
  year: string;
  propertiesCovered?: string;
}

export interface DistrictData {
  name: string;
  municipalCorporation: string;
  totalCouncils: number;
  councilList: string[];
  propertiesSurveyed: string;
  projects: Project[];
}

export const districtData: Record<string, DistrictData> = {
  thane: {
    name: "Thane",
    municipalCorporation: "Thane Municipal Corporation",
    totalCouncils: 12,
    councilList: [
      "Thane East Ward 1",
      "Thane East Ward 2",
      "Thane West Ward 1",
      "Thane West Ward 2",
      "Kalwa-Mumbra",
      "Diva-Manpada",
      "Kopri-Pachpakhadi",
      "Naupada-Vartak Nagar",
      "Wagle Estate",
      "Majiwada-Manpada",
      "Ghodbunder Road",
      "Kasheli-Manpada"
    ],
    propertiesSurveyed: "15.2 Lakh",
    projects: [
      {
        name: "Thane Municipal Corporation",
        type: "Municipal Corporation",
        status: "Completed",
        year: "2023-2024",
        propertiesCovered: "8.5 Lakh"
      },
      {
        name: "Kalyan-Dombivli Municipal Corporation",
        type: "Municipal Corporation",
        status: "Ongoing",
        year: "2024-2025",
        propertiesCovered: "5.2 Lakh"
      },
      {
        name: "Mira-Bhayandar Municipal Corporation",
        type: "Municipal Corporation",
        status: "Completed",
        year: "2022-2023",
        propertiesCovered: "4.8 Lakh"
      },
      {
        name: "Bhiwandi-Nizampur Municipal Council",
        type: "Municipal Council",
        status: "Completed",
        year: "2023",
        propertiesCovered: "2.3 Lakh"
      },
      {
        name: "Ulhasnagar Municipal Council",
        type: "Municipal Council",
        status: "Completed",
        year: "2022",
        propertiesCovered: "1.8 Lakh"
      },
      {
        name: "Ambarnath Municipal Council",
        type: "Municipal Council",
        status: "Completed",
        year: "2021",
        propertiesCovered: "95,000"
      },
      {
        name: "Shahapur Municipal Council",
        type: "Municipal Council",
        status: "Ongoing",
        year: "2024",
        propertiesCovered: "45,000"
      }
    ]
  },
  mumbai: {
    name: "Mumbai",
    municipalCorporation: "Brihanmumbai Municipal Corporation",
    totalCouncils: 8,
    councilList: [
      "Mumbai City District",
      "Mumbai Suburban District",
      "Western Suburbs",
      "Eastern Suburbs",
      "South Mumbai",
      "Central Mumbai",
      "Island City",
      "Extended Suburbs"
    ],
    propertiesSurveyed: "10.5 Lakh",
    projects: [
      {
        name: "Brihanmumbai Municipal Corporation - Zone 1",
        type: "Municipal Corporation",
        status: "Completed",
        year: "2022-2023",
        propertiesCovered: "6.2 Lakh"
      },
      {
        name: "Brihanmumbai Municipal Corporation - Zone 2",
        type: "Municipal Corporation",
        status: "Completed",
        year: "2021-2022",
        propertiesCovered: "5.5 Lakh"
      },
      {
        name: "Navi Mumbai Municipal Corporation",
        type: "Municipal Corporation",
        status: "Ongoing",
        year: "2024-2025",
        propertiesCovered: "4.8 Lakh"
      },
      {
        name: "Vasai-Virar Municipal Corporation",
        type: "Municipal Corporation",
        status: "Completed",
        year: "2023",
        propertiesCovered: "3.5 Lakh"
      }
    ]
  },
  pune: {
    name: "Pune",
    municipalCorporation: "Pune Municipal Corporation",
    totalCouncils: 15,
    councilList: [
      "Aundh-Baner",
      "Kothrud-Bavdhan",
      "Warje-Karve Nagar",
      "Kondhwa-Yewalewadi",
      "Hadapsar-Mundhwa",
      "Kharadi-Viman Nagar",
      "Shivajinagar",
      "Kasba Peth",
      "Bibvewadi-Katraj",
      "Dhankawadi-Sahakarnagar",
      "Parvati-Gultekdi",
      "Sinhagad Road",
      "Wakad-Hinjewadi",
      "Pimpri-Chinchwad East",
      "Pimpri-Chinchwad West"
    ],
    propertiesSurveyed: "12.8 Lakh",
    projects: [
      {
        name: "Pune Municipal Corporation",
        type: "Municipal Corporation",
        status: "Completed",
        year: "2023-2024",
        propertiesCovered: "7.8 Lakh"
      },
      {
        name: "Pimpri-Chinchwad Municipal Corporation",
        type: "Municipal Corporation",
        status: "Completed",
        year: "2022-2023",
        propertiesCovered: "6.5 Lakh"
      },
      {
        name: "Pune Cantonment Board",
        type: "Municipal Council",
        status: "Completed",
        year: "2021",
        propertiesCovered: "85,000"
      },
      {
        name: "Khadki Cantonment Board",
        type: "Municipal Council",
        status: "Completed",
        year: "2022",
        propertiesCovered: "42,000"
      },
      {
        name: "Dehu Road Cantonment",
        type: "Municipal Council",
        status: "Ongoing",
        year: "2024",
        propertiesCovered: "35,000"
      }
    ]
  },
  nashik: {
    name: "Nashik",
    municipalCorporation: "Nashik Municipal Corporation",
    totalCouncils: 10,
    councilList: [
      "Nashik Road",
      "Satpur MIDC",
      "College Road",
      "Panchavati",
      "Gangapur Road",
      "Mumbai Naka",
      "Indira Nagar",
      "Old Nashik",
      "Adgaon",
      "Pathardi Phata"
    ],
    propertiesSurveyed: "8.3 Lakh",
    projects: [
      {
        name: "Nashik Municipal Corporation",
        type: "Municipal Corporation",
        status: "Completed",
        year: "2023-2024",
        propertiesCovered: "5.8 Lakh"
      },
      {
        name: "Malegaon Municipal Council",
        type: "Municipal Council",
        status: "Completed",
        year: "2022-2023",
        propertiesCovered: "2.2 Lakh"
      },
      {
        name: "Deolali Cantonment Board",
        type: "Municipal Council",
        status: "Completed",
        year: "2021",
        propertiesCovered: "38,000"
      },
      {
        name: "Sinnar Municipal Council",
        type: "Municipal Council",
        status: "Ongoing",
        year: "2024",
        propertiesCovered: "52,000"
      },
      {
        name: "Igatpuri Municipal Council",
        type: "Municipal Council",
        status: "Completed",
        year: "2023",
        propertiesCovered: "28,000"
      }
    ]
  },
  nagpur: {
    name: "Nagpur",
    municipalCorporation: "Nagpur Municipal Corporation",
    totalCouncils: 9,
    councilList: [
      "Central Nagpur",
      "East Nagpur",
      "West Nagpur",
      "North Nagpur",
      "South Nagpur",
      "Dharampeth",
      "Sitabuldi",
      "Kalamna",
      "MIDC Area"
    ],
    propertiesSurveyed: "7.9 Lakh",
    projects: [
      {
        name: "Nagpur Municipal Corporation",
        type: "Municipal Corporation",
        status: "Completed",
        year: "2022-2023",
        propertiesCovered: "6.8 Lakh"
      },
      {
        name: "Kamptee Cantonment Board",
        type: "Municipal Council",
        status: "Completed",
        year: "2023",
        propertiesCovered: "48,000"
      },
      {
        name: "Wardhaman Nagar Municipal Council",
        type: "Municipal Council",
        status: "Completed",
        year: "2021",
        propertiesCovered: "65,000"
      },
      {
        name: "Hingna Municipal Council",
        type: "Municipal Council",
        status: "Ongoing",
        year: "2024",
        propertiesCovered: "32,000"
      }
    ]
  },
  panvel: {
    name: "Raigad (Panvel)",
    municipalCorporation: "Panvel Municipal Corporation",
    totalCouncils: 7,
    councilList: [
      "Old Panvel",
      "New Panvel",
      "Khanda Colony",
      "Sector 1-10",
      "Sector 11-21",
      "Kalamboli",
      "Kamothe"
    ],
    propertiesSurveyed: "6.5 Lakh",
    projects: [
      {
        name: "Panvel Municipal Corporation",
        type: "Municipal Corporation",
        status: "Completed",
        year: "2023-2024",
        propertiesCovered: "4.2 Lakh"
      },
      {
        name: "Alibag Municipal Council",
        type: "Municipal Council",
        status: "Completed",
        year: "2022",
        propertiesCovered: "85,000"
      },
      {
        name: "Pen Municipal Council",
        type: "Municipal Council",
        status: "Completed",
        year: "2023",
        propertiesCovered: "62,000"
      },
      {
        name: "Khopoli Municipal Council",
        type: "Municipal Council",
        status: "Ongoing",
        year: "2024",
        propertiesCovered: "48,000"
      },
      {
        name: "Uran Municipal Council",
        type: "Municipal Council",
        status: "Completed",
        year: "2021",
        propertiesCovered: "55,000"
      }
    ]
  }
};

interface DistrictStatsBoxProps {
  selectedDistrict: string;
}

export function DistrictStatsBox({ selectedDistrict }: DistrictStatsBoxProps) {
  const district = districtData[selectedDistrict];

  // Sort projects: Municipal Corporations first, then others
  const sortedProjects = [...district.projects].sort((a, b) => {
    if (a.type === "Municipal Corporation" && b.type !== "Municipal Corporation") return -1;
    if (a.type !== "Municipal Corporation" && b.type === "Municipal Corporation") return 1;
    return 0;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="h-full"
    >
      <div className="bg-gradient-to-br from-[#1e3a8a] to-[#4f46e5] p-6 text-white shadow-xl h-full flex flex-col rounded-2xl">
        <motion.div
          key={selectedDistrict}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-grow flex flex-col"
        >
          {/* District Header */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={20} className="text-white/80" />
              <p className="text-sm text-white/80" style={{ fontWeight: 600, letterSpacing: '0.03em' }}>Selected District</p>
            </div>
            <h3 className="text-white" style={{ 
              fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.01em'
            }}>
              {district.name}
            </h3>
          </div>

          {/* Projects List - With Priority to Municipal Corporations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-grow mb-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <Award size={18} className="text-white/80" />
              <p className="text-sm text-white/80" style={{ fontWeight: 600, letterSpacing: '0.03em' }}>
                Our Projects ({sortedProjects.length})
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 max-h-[400px] overflow-y-auto custom-scrollbar">
              <div className="space-y-3">
                {sortedProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className={`p-3 rounded-lg border-l-4 ${
                      project.type === "Municipal Corporation"
                        ? "bg-gradient-to-r from-[#D84040]/20 to-white/5 border-[#D84040]"
                        : "bg-white/5 border-white/30"
                    }`}
                  >
                    {/* Project Type Badge */}
                    {project.type === "Municipal Corporation" && (
                      <div className="flex items-center gap-1 mb-2">
                        <Award size={14} className="text-[#D84040]" />
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D84040]/20 text-[#D84040] border border-[#D84040]/30" style={{ fontWeight: 700, letterSpacing: '0.05em' }}>
                          MUNICIPAL CORPORATION
                        </span>
                      </div>
                    )}
                    
                    {/* Project Name */}
                    <h4 className="text-white mb-1.5" style={{ 
                      fontWeight: project.type === "Municipal Corporation" ? 700 : 600,
                      fontSize: project.type === "Municipal Corporation" ? '0.95rem' : '0.9rem',
                      lineHeight: '1.3'
                    }}>
                      {project.name}
                    </h4>
                    
                    {/* Project Details */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-white/80">
                      <div className="flex items-center gap-1">
                        <CheckCircle2 size={12} className={project.status === "Completed" ? "text-green-400" : "text-yellow-400"} />
                        <span style={{ fontWeight: 600 }}>{project.status}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp size={12} />
                        <span>{project.propertiesCovered}</span>
                      </div>
                      <div className="text-white/60" style={{ fontWeight: 500 }}>
                        {project.year}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Total Properties Surveyed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-4 bg-white/10 backdrop-blur-sm rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F59E0B] to-[#EAB308] flex items-center justify-center shadow-lg">
                <TrendingUp size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-white/80" style={{ fontWeight: 600 }}>Total Properties Surveyed</p>
                <p className="text-white" style={{ fontSize: '1.6rem', fontWeight: 800 }}>{district.propertiesSurveyed}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </motion.div>
  );
}
