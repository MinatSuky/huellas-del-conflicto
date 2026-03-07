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
          <div className="aspect-[16/9] bg-card flex flex-col items-center justify-center p-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded border border-border flex items-center justify-center">
                <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <p className="font-typewriter text-muted-foreground text-sm mb-2">
                ESPACIO RESERVADO PARA POWER BI EMBEDDED
              </p>
              <p className="text-muted-foreground/50 text-xs max-w-md mx-auto">
                Aquí se integrará el reporte interactivo con el mapa de Colombia por departamentos,
                filtros por año, rango de edad y unidad militar.
              </p>
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
