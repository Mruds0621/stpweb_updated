import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Palette, Check, X } from "lucide-react";
import { useTheme } from "./ThemeContext";

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setTheme, themes } = useTheme();

  return (
    <>
      {/* Floating Theme Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center backdrop-blur-sm"
        style={{
          background: `linear-gradient(135deg, ${currentTheme.colors.gradient1}, ${currentTheme.colors.gradient2})`,
        }}
      >
        <Palette className="text-white" size={24} />
      </motion.button>

      {/* Theme Selector Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${currentTheme.colors.gradient1}, ${currentTheme.colors.gradient2})`,
                      }}
                    >
                      <Palette className="text-white" size={20} />
                    </div>
                    <div>
                      <h2
                        className="text-2xl"
                        style={{ fontWeight: 800, color: currentTheme.colors.primary }}
                      >
                        Theme Selector
                      </h2>
                      <p className="text-sm" style={{ color: currentTheme.colors.textLight }}>
                        Choose your preferred color theme
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <X size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Themes Grid */}
              <div className="p-6 space-y-4">
                {themes.map((theme, index) => (
                  <motion.div
                    key={theme.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      setTheme(theme.id);
                    }}
                    className={`relative cursor-pointer rounded-2xl p-5 border-2 transition-all ${
                      currentTheme.id === theme.id
                        ? "border-gray-900 shadow-xl"
                        : "border-gray-200 hover:border-gray-300 hover:shadow-lg"
                    }`}
                  >
                    {/* Selected Indicator */}
                    {currentTheme.id === theme.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${theme.colors.gradient1}, ${theme.colors.gradient2})`,
                        }}
                      >
                        <Check className="text-white" size={16} />
                      </motion.div>
                    )}

                    {/* Theme Info */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl shadow-md"
                        style={{
                          background: `linear-gradient(135deg, ${theme.colors.gradient1}, ${theme.colors.gradient2})`,
                        }}
                      />
                      <div className="flex-1">
                        <h3
                          className="text-lg mb-0.5"
                          style={{ fontWeight: 700, color: theme.colors.primary }}
                        >
                          {theme.name}
                        </h3>
                        <p className="text-sm text-gray-600">{theme.description}</p>
                      </div>
                    </div>

                    {/* Color Preview */}
                    <div className="flex gap-2">
                      {theme.preview.map((color, idx) => (
                        <div
                          key={idx}
                          className="flex-1 h-12 rounded-lg shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>

                    {/* Gradient Preview */}
                    <div
                      className="mt-3 h-2 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${theme.colors.gradient1}, ${theme.colors.gradient2}, ${theme.colors.gradient3})`,
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Footer Info */}
              <div className="sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent p-6 pt-8">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    <span style={{ fontWeight: 600 }}>💡 Pro Tip:</span> Your theme preference is
                    saved automatically and will persist across sessions.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
