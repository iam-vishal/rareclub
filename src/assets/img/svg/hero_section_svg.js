"use client";
import { motion } from "framer-motion";
const HeroSectionSvg = ({ className, align }) => {
  return (
    <>
      {align === "left" ? (
        <svg
          width="633"
          height="319"
          viewBox="0 0 633 319"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <motion.path
            initial={{ x: -350, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
            }}
            d="M632.062 317.765L71.5439 0.750977"
            stroke="url(#paint0_linear_1_2145)"
          />
          <motion.path
            initial={{ x: 350, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
            }}
            d="M563.146 314.32L-35.2767 102.977"
            stroke="url(#paint1_linear_1_2145)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_2145"
              x1="638.954"
              y1="317.765"
              x2="58.9093"
              y2="-6.14076"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.53" stopColor="#2A2A2A" />
              <stop offset="1" stopColor="#666666" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_2145"
              x1="563.146"
              y1="314.32"
              x2="42.8288"
              y2="125.949"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.53" stopColor="#2A2A2A" />
              <stop offset="1" stopColor="#666666" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width="619"
          height="319"
          viewBox="0 0 619 319"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <motion.path
            initial={{ x: 350, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
            }}
            d="M1.10596 317.765L561.625 0.750977"
            stroke="url(#paint0_linear_1_2142)"
          />
          <motion.path
            initial={{ x: 350, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
            }}
            d="M70.0225 314.32L668.445 102.977"
            stroke="url(#paint1_linear_1_2142)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_2142"
              x1="-5.78551"
              y1="317.765"
              x2="574.259"
              y2="-6.14076"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.53" stopColor="#2A2A2A" />
              <stop offset="1" stopColor="#666666" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_2142"
              x1="70.0225"
              y1="314.32"
              x2="590.34"
              y2="125.949"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.53" stopColor="#2A2A2A" />
              <stop offset="1" stopColor="#666666" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </>
  );
};
export default HeroSectionSvg;
