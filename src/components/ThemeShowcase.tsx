import { motion } from "motion/react";
import { useThemeColors } from "./useThemeColors";
import { Palette, Sparkles, Award, TrendingUp } from "lucide-react";

/**
 * Demo component showing how different elements look with the current theme
 * This is for demonstration/testing purposes
 */
export function ThemeShowcase() {
  const { colors, gradients, text, background, shadows, button } = useThemeColors();

  return (
    <div className="p-8 space-y-8 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 style={{
          ...text.gradient,
          fontSize: '3rem',
          fontWeight: 800,
          marginBottom: '1rem'
        }}>
          Theme Showcase
        </h1>
        <p style={{ color: colors.textLight, fontSize: '1.2rem' }}>
          All elements automatically adapt to the selected theme
        </p>
      </div>

      {/* Color Swatches */}
      <section className="space-y-4">
        <h2 style={{ color: colors.primary, fontWeight: 700, fontSize: '1.5rem' }}>
          Color Palette
        </h2>
        <div className="grid grid-cols-5 gap-4">
          <div>
            <div 
              className="h-24 rounded-lg shadow-md"
              style={{ backgroundColor: colors.primary }}
            />
            <p className="text-sm mt-2 text-center text-gray-600">Primary</p>
          </div>
          <div>
            <div 
              className="h-24 rounded-lg shadow-md"
              style={{ backgroundColor: colors.primaryLight }}
            />
            <p className="text-sm mt-2 text-center text-gray-600">Primary Light</p>
          </div>
          <div>
            <div 
              className="h-24 rounded-lg shadow-md"
              style={{ backgroundColor: colors.secondary }}
            />
            <p className="text-sm mt-2 text-center text-gray-600">Secondary</p>
          </div>
          <div>
            <div 
              className="h-24 rounded-lg shadow-md"
              style={{ backgroundColor: colors.accent }}
            />
            <p className="text-sm mt-2 text-center text-gray-600">Accent</p>
          </div>
          <div>
            <div 
              className="h-24 rounded-lg shadow-md"
              style={{ backgroundColor: colors.accentLight }}
            />
            <p className="text-sm mt-2 text-center text-gray-600">Accent Light</p>
          </div>
        </div>
      </section>

      {/* Gradients */}
      <section className="space-y-4">
        <h2 style={{ color: colors.primary, fontWeight: 700, fontSize: '1.5rem' }}>
          Gradient Examples
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div 
              className="h-32 rounded-lg shadow-lg"
              style={{ background: gradients.primary }}
            />
            <p className="text-sm mt-2 text-center text-gray-600">Primary Gradient</p>
          </div>
          <div>
            <div 
              className="h-32 rounded-lg shadow-lg"
              style={{ background: gradients.secondary }}
            />
            <p className="text-sm mt-2 text-center text-gray-600">Secondary Gradient</p>
          </div>
          <div>
            <div 
              className="h-32 rounded-lg shadow-lg"
              style={{ background: gradients.accent }}
            />
            <p className="text-sm mt-2 text-center text-gray-600">Accent Gradient</p>
          </div>
        </div>
      </section>

      {/* Text Styles */}
      <section className="space-y-4">
        <h2 style={{ color: colors.primary, fontWeight: 700, fontSize: '1.5rem' }}>
          Text Styles
        </h2>
        <div className="space-y-3">
          <p style={text.primary}>
            Primary Text Color - Lorem ipsum dolor sit amet
          </p>
          <p style={text.secondary}>
            Secondary Text Color - Lorem ipsum dolor sit amet
          </p>
          <h3 style={{ ...text.gradient, fontSize: '2rem', fontWeight: 700 }}>
            Gradient Text Heading
          </h3>
          <h4 style={{ ...text.accentGradient, fontSize: '1.5rem', fontWeight: 700 }}>
            Accent Gradient Text Heading
          </h4>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-4">
        <h2 style={{ color: colors.primary, fontWeight: 700, fontSize: '1.5rem' }}>
          Cards & Components
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {/* Gradient Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl text-white shadow-xl"
            style={{ background: gradients.card }}
          >
            <Palette className="mb-4" size={32} />
            <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
              Gradient Card
            </h3>
            <p className="text-white/90">
              Beautiful gradient background with white text
            </p>
          </motion.div>

          {/* White Card with Border */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-white shadow-lg border-2"
            style={{ 
              borderColor: colors.primary,
              ...shadows.primary
            }}
          >
            <Sparkles style={{ color: colors.accent, marginBottom: '1rem' }} size={32} />
            <h3 style={{ color: colors.primary, fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
              Bordered Card
            </h3>
            <p style={{ color: colors.textLight }}>
              White card with themed border and shadow
            </p>
          </motion.div>

          {/* Accent Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl text-white shadow-xl"
            style={{ background: gradients.accent }}
          >
            <Award className="mb-4" size={32} />
            <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
              Accent Card
            </h3>
            <p className="text-white/90">
              Card with accent color gradient
            </p>
          </motion.div>
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 style={{ color: colors.primary, fontWeight: 700, fontSize: '1.5rem' }}>
          Buttons
        </h2>
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg shadow-lg"
            style={button.primary}
          >
            <span style={{ fontWeight: 600 }}>Primary Button</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg shadow-lg"
            style={button.accent}
          >
            <span style={{ fontWeight: 600 }}>Accent Button</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg border-2"
            style={{ 
              borderColor: colors.primary,
              color: colors.primary,
              backgroundColor: 'white'
            }}
          >
            <span style={{ fontWeight: 600 }}>Outline Button</span>
          </motion.button>
        </div>
      </section>

      {/* Stats */}
      <section className="space-y-4">
        <h2 style={{ color: colors.primary, fontWeight: 700, fontSize: '1.5rem' }}>
          Statistics Display
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: TrendingUp, number: "100+", label: "Projects" },
            { icon: Award, number: "50L+", label: "Properties" },
            { icon: Sparkles, number: "25+", label: "Years" },
            { icon: Palette, number: "800+", label: "Team" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl text-center shadow-lg text-white"
              style={{ background: gradients.card }}
            >
              <stat.icon className="mx-auto mb-3" size={32} />
              <p style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                {stat.number}
              </p>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
