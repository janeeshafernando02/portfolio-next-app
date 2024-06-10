import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type HoverEffectProps = {
  items: {
    link: string;
    icon?: string;
  }[];
  className?: string;
};

export const HoverEffect: React.FC<HoverEffectProps> = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.link}
          className="relative  p-2 "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            {item.icon && (
              <img src={item.icon} alt="icons" className="w-12 h-12" />
            )}
          </Card>
        </Link>
      ))}
    </div>
  );
};

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-2xl overflow-hidden bg-black border border-transparent dark:border-purple/[0.5] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

