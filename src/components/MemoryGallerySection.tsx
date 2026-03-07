import { motion } from "framer-motion";

const testimonies = [
  {
    quote: "Mi hijo salió a buscar trabajo y nunca volvió. Tres meses después me dijeron que había muerto en combate. Mi hijo no era guerrillero.",
    author: "Madre de Soacha",
    context: "Testimonio recogido por la Comisión de la Verdad",
  },
  {
    quote: "Nos quitaron la posibilidad de enterrar a nuestros hijos con dignidad. Los vistieron con uniformes que nunca les pertenecieron.",
    author: "Colectivo de Madres de Soacha",
    context: "Audiencia pública JEP, 2021",
  },
  {
    quote: "Eran jóvenes vulnerables, con discapacidad, en situación de pobreza. Los escogían porque sabían que nadie los iba a reclamar.",
    author: "Investigadora CINEP",
    context: "Informe 'Falsos Positivos en Colombia'",
  },
];

const MemoryGallerySection = () => {
  return (
    <section id="memoria" className="py-24 px-4 texture-paper">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-display font-black mb-4">
            Galería de la <span className="text-primary">Memoria</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-4" />
          <p className="text-muted-foreground text-sm max-w-xl">
            Voces de las víctimas y sus familias. Testimonios recogidos por la JEP,
            la Comisión de la Verdad y organizaciones de derechos humanos.
          </p>
        </motion.div>

        <div className="space-y-8">
          {testimonies.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative border-l-2 border-primary/40 pl-6 py-4"
            >
              <p className="font-typewriter text-foreground/90 text-sm sm:text-base leading-relaxed italic">
                "{t.quote}"
              </p>
              <footer className="mt-3">
                <cite className="not-italic text-primary text-sm font-display font-bold">— {t.author}</cite>
                <p className="text-muted-foreground text-xs mt-1">{t.context}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {/* Memorial grid placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1"
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-secondary/50 border border-border/50 flex items-center justify-center group hover:bg-primary/10 transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-muted-foreground/30 group-hover:text-primary/40 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          ))}
        </motion.div>
        <p className="text-center text-muted-foreground/50 text-xs font-typewriter mt-4 tracking-wider">
          CADA ESPACIO REPRESENTA UNA VIDA. CON EL CONSENTIMIENTO DE LAS FAMILIAS, AQUÍ SE HONRARÁ SU MEMORIA.
        </p>
      </div>
    </section>
  );
};

export default MemoryGallerySection;
