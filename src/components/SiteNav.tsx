import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Contexto", href: "#contexto" },
  { label: "Datos", href: "#datos" },
  { label: "Memoria", href: "#memoria" },
];

const SiteNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#" className="font-display text-sm font-bold tracking-tight">
          Huellas del <span className="text-primary">Conflicto</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-typewriter text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-muted-foreground hover:text-foreground p-2"
          aria-label="Menú"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card border-b border-border px-4 py-4 space-y-3"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block font-typewriter text-xs text-muted-foreground hover:text-foreground tracking-wider uppercase"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default SiteNav;
