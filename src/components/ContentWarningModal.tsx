import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContentWarningModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("content-warning-dismissed");
    if (!dismissed) setShow(true);
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("content-warning-dismissed", "true");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ delay: 0.1 }}
            className="max-w-md w-full border border-border rounded p-8 bg-card text-center"
          >
            <div className="w-12 h-12 mx-auto mb-6 rounded-full border-2 border-primary flex items-center justify-center">
              <span className="text-primary text-xl font-bold">!</span>
            </div>

            <h2 className="font-display text-xl font-bold mb-4">Advertencia de Contenido</h2>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-typewriter">
              Este sitio contiene información sobre ejecuciones extrajudiciales y violaciones
              a los derechos humanos en Colombia. El contenido puede resultar perturbador.
            </p>

            <p className="text-muted-foreground/60 text-xs mb-8">
              El propósito de esta plataforma es educativo y de memoria histórica.
              Todos los datos provienen de fuentes oficiales y organizaciones de derechos humanos.
            </p>

            <button
              onClick={handleAccept}
              className="w-full py-3 bg-primary text-primary-foreground font-display font-bold text-sm tracking-wider uppercase rounded hover:bg-primary/90 transition-colors"
            >
              Entiendo, deseo continuar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContentWarningModal;
