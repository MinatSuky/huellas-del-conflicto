import { motion } from "framer-motion";

const DataDashboardSection = () => {
  return (
    <section id="datos" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-display font-black mb-4">
            Tablero de <span className="text-primary">Datos</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-4" />
          <p className="text-muted-foreground text-sm max-w-2xl font-typewriter">
            Visualización interactiva de los datos del Macro Caso 03 de la JEP.
            Filtre por año, departamento, rango de edad y unidad militar involucrada.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded border-2 border-border glow-red-hover transition-shadow duration-500 overflow-hidden"
        >
          {/* Placeholder for Power BI embed */}
          <div className="aspect-[20/8] bg-card flex flex-col items-center justify-center">
            <div className="text-center">
              <iframe title="FalsosPositivos - Sebastian Gomez" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=3e47a8e5-6dfc-4563-b361-f61fa9cf998e&autoAuth=true&ctid=d8bc053e-1b95-4045-9e8c-0b3a5828dc9d" frameborder="0" allowFullScreen="true"></iframe>
            </div>
          </div>

          {/* Glow border effect */}
          <div className="absolute inset-0 pointer-events-none rounded border border-primary/0 hover:border-primary/20 transition-colors duration-500" />
        </motion.div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Departamentos afectados", value: "29" },
            { label: "Brigadas implicadas", value: "24" },
            { label: "Periodo documentado", value: "2002–2008" },
            { label: "Víctimas identificadas", value: "6.402" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="bg-card border border-border rounded p-4 text-center"
            >
              <div className="text-2xl font-display font-black text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-typewriter uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataDashboardSection;
