"use client";
import { motion, useScroll, useTransform } from "framer-motion";
const AboutSVG = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [1, 5]);
  const opacity = useTransform(scale, [1, 5], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);
  return (
    <div style={{ height: "80vh" }}>
      <motion.div
        style={{
          position: "fixed",
          top: 50,
          left: 0,
          width: "100vw",
          height: "100vh",
          scale: scale,
          y: y,
          opacity: opacity,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20, delay: 1 }}
      >
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1728 596"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            x="-282.885"
            y="1.31396"
            width="413.277"
            height="593.302"
            rx="201.832"
            stroke="#5A5A5A"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.6 },
            }}
          />
          <motion.rect
            x="187.112"
            y="1.31396"
            width="413.277"
            height="593.302"
            rx="201.832"
            stroke="#5A5A5A"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.6 },
            }}
          />
          <motion.rect
            x="657.11"
            y="1.31396"
            width="413.277"
            height="593.302"
            rx="201.832"
            stroke="#5A5A5A"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.6 },
            }}
          />
          <motion.rect
            x="1127.11"
            y="1.31396"
            width="413.277"
            height="593.302"
            rx="201.832"
            stroke="#5A5A5A"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.6 },
            }}
          />
          <motion.rect
            x="1597.1"
            y="1.31396"
            width="413.277"
            height="593.302"
            rx="201.832"
            stroke="#5A5A5A"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.6 },
            }}
          />
          <motion.rect
            x="-248.875"
            y="42.8223"
            width="345.259"
            height="513.189"
            rx="172.629"
            fill="#D9D9D9"
            fillOpacity="0.13"
            stroke="#5A5A5A"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.6 },
            }}
          />
          <motion.rect
            x="221.121"
            y="42.8223"
            width="345.259"
            height="513.189"
            rx="172.629"
            fill="#D9D9D9"
            fillOpacity="0.03"
            stroke="#5A5A5A"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.6 },
            }}
          />
          <motion.rect
            x="691.119"
            y="42.8228"
            width="345.259"
            height="513.189"
            rx="172.629"
            fill="#D9D9D9"
            fillOpacity="0.08"
            stroke="#5A5A5A"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.6 },
            }}
          />
          <motion.rect
            x="1161.12"
            y="42.8228"
            width="345.259"
            height="513.189"
            rx="172.629"
            fill="#D9D9D9"
            fillOpacity="0.03"
            stroke="#5A5A5A"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.6 },
            }}
          />
          <motion.rect
            x="1631.11"
            y="42.8228"
            width="345.259"
            height="513.189"
            rx="172.629"
            fill="#D9D9D9"
            fillOpacity="0.13"
            stroke="#5A5A5A"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.6 },
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};
export default AboutSVG;
