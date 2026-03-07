import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    year: "2002",
    title: "Política de Seguridad Democrática",
    desc: "Inicio del gobierno de Álvaro Uribe. Se implementa la Política de Seguridad Democrática con incentivos por resultados en combate.",
  },
  {
    year: "2003",
    title: "Directiva Ministerial 029",
    desc: "Se establecen incentivos (permisos, condecoraciones) para las unidades militares por 'bajas en combate', generando presión por resultados.",
  },
  {
    year: "2004–2006",
    title: "Escalada silenciosa",
    desc: "Las denuncias de desapariciones forzadas aumentan en zonas rurales. Organizaciones como el CINEP documentan un patrón sistemático.",
  },
  {
    year: "2008",
    title: "Caso Soacha",
    desc: "19 jóvenes de Soacha desaparecen y aparecen muertos en Norte de Santander, vestidos como guerrilleros. El caso destapa la crisis nacional.",
  },
  {
    year: "2008",
    title: "Destituciones masivas",
    desc: "27 militares, incluidos 3 generales, son destituidos. El Comandante del Ejército, General Mario Montoya, renuncia.",
  },
  {
    year: "2018–Presente",
    title: "La JEP investiga",
    desc: "La Jurisdicción Especial para la Paz abre el Macro Caso 03. Se documenta la cifra de al menos 6.402 víctimas entre 2002 y 2008.",
  },
];

const TimelineSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contexto" className="py-24 px-4 texture-paper">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-display font-black mb-4">
            Contexto <span className="text-primary">Histórico</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary" />
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative pl-12 md:pl-20 pb-12 last:pb-0 group"
            >
              {/* Dot */}
              <div className="absolute left-[11px] md:left-[27px] top-1 w-3 h-3 rounded-full bg-secondary border-2 border-primary group-hover:bg-primary transition-colors duration-300" />

              <span className="font-typewriter text-primary text-sm tracking-wider">{event.year}</span>
              <h3 className="font-display text-xl font-bold mt-1 mb-2">{event.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">{event.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
