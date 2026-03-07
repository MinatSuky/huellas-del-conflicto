import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCounter = ({ target, duration = 3 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="text-primary counter-glow animate-pulse-glow font-display">
      {count.toLocaleString("es-CO")}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center texture-paper overflow-hidden px-4">
      {/* Decorative drip lines */}
      <div className="absolute top-0 left-[20%] w-px h-32 bg-gradient-to-b from-primary/60 to-transparent animate-drip" />
      <div className="absolute top-0 left-[70%] w-px h-48 bg-gradient-to-b from-primary/40 to-transparent animate-drip" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-0 left-[45%] w-px h-24 bg-gradient-to-b from-primary/30 to-transparent animate-drip" style={{ animationDelay: "1s" }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto"
      >
        <p className="font-typewriter text-muted-foreground tracking-[0.3em] uppercase text-sm mb-8">
          Colombia · 2002–2010
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] mb-8 tracking-tight">
          Huellas del
          <br />
          <span className="text-primary">Conflicto</span>
        </h1>

        <div className="my-12">
          <div className="text-7xl sm:text-8xl md:text-9xl font-black leading-none">
            <AnimatedCounter target={6402} duration={3.5} />
          </div>
          <p className="font-typewriter text-muted-foreground mt-4 text-sm tracking-wider">
            VÍCTIMAS DE EJECUCIONES EXTRAJUDICIALES DOCUMENTADAS POR LA JEP
          </p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="font-typewriter text-muted-foreground/70 text-xs max-w-lg mx-auto leading-relaxed"
        >
          "Personas civiles inocentes fueron asesinadas ilegítimamente para ser presentadas
          como bajas en combate."
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="font-typewriter text-muted-foreground text-xs tracking-widest uppercase">Explorar</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
