import { motion } from "framer-motion";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-display text-sm font-bold mb-4">
            Huellas del <span className="text-primary">Conflicto</span>
          </p>
          <p className="text-muted-foreground text-xs max-w-md mx-auto leading-relaxed mb-6">
            Plataforma de memoria histórica. Datos basados en informes de la
            Jurisdicción Especial para la Paz (JEP), la Comisión de la Verdad
            y organizaciones como el CINEP.
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground/60 font-typewriter">
            <span>JEP</span>
            <span className="w-px h-3 bg-border" />
            <span>Comisión de la Verdad</span>
            <span className="w-px h-3 bg-border" />
            <span>CINEP</span>
          </div>
          <p className="text-muted-foreground/30 text-xs mt-8">
            Este sitio no tiene fines de lucro. Su objetivo es la preservación de la memoria histórica.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default SiteFooter;
