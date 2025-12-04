import { motion, Variants, Transition } from "framer-motion";
import { Flag } from "lucide-react";

type CardColor = "primary" | "secondary" | "accent";

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 120,
      delay: 0.1
    } as Transition
  }
};

const itemContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    } as Transition
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100
    } as Transition
  }
};

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/20",
    hover: "group-hover:bg-primary/20",
    text: "text-primary",
    icon: "text-primary"
  },
  secondary: {
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    hover: "group-hover:bg-secondary/20",
    text: "text-secondary",
    icon: "text-secondary-dark"
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/20",
    hover: "group-hover:bg-accent/20",
    text: "text-accent",
    icon: "text-accent-light"
  }
};

export const ProjetCard = ({
  title,
  subtitle,
  items,
  index,
  color = "primary"
}: {
  title: string;
  subtitle: string;
  items: string[];
  index: number;
  color?: CardColor;
}) => {
  const colors = colorClasses[color];

  return (
    <motion.div
      className={`bg-card/90 backdrop-blur-sm p-6 md:p-8 border border-border shadow-sm hover:shadow-glow h-full transition-all duration-300 group`}
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: true, margin: "0px 0px -30px 0px" }}
      custom={index}
      whileHover={{
        y: -4,
        boxShadow: "var(--shadow-glow)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="flex gap-4 md:gap-6 h-full">
        <motion.div 
          className={`flex-shrink-0 ${colors.bg} p-3 md:p-4 ${colors.border} flex flex-col items-center ${colors.hover} transition-colors duration-300`}
          whileHover={{ scale: 1.05 }}
          animate={{
            rotate: [0, 1, -1, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse"
            } as Transition
          }}
        >
          <Flag className={`w-6 h-6 ${colors.icon}`} />
          <span className={`${colors.text} font-bold mt-2`}>{index + 1}</span>
        </motion.div>

        <div className="flex-1 flex flex-col">
          <motion.h3
            className="text-lg md:text-xl font-bold text-secondary/70 mb-2 border-b border-border pb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: 0.15,
                type: "spring" 
              } as Transition
            }}
            viewport={{ once: true }}
          >
            {title.toUpperCase()}
          </motion.h3>

          <motion.p
            className="text-sm md:text-base text-primary mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { 
                delay: 0.25,
                ease: "easeOut" 
              } as Transition
            }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>

          <motion.ul
            className="space-y-3 flex-1 overflow-y-auto pr-2 scrollbar-hide"
            variants={itemContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              maxHeight: '250px', // Hauteur fixe pour 5 éléments
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE/Edge
            }}
          >
            {items.map((item, i) => (
              <motion.li
                key={`item-${i}`}
                className="flex items-start"
                variants={itemVariants}
              >
                <motion.span
                  className={`${colors.bg} ${colors.text} font-mono font-bold text-xs w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 rounded-sm`}
                  whileHover={{ scale: 1.1 }}
                >
                  {i + 1}
                </motion.span>
                <span className="text-sm md:text-base text-muted-foreground">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};