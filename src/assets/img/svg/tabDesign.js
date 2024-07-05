"use client";
import { motion } from "framer-motion";
const AnimatedTabSvg = () => {
  return (
    <motion.svg
      width="100%"
      viewBox="0 0 1728 740"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M1740.92 739.804L1569.22 309.103L1540.64 239.349C1518.48 185.275 1465.83 149.957 1407.39 149.957H314.562C254.405 149.957 200.587 187.352 179.605 243.731L-5.01562 739.804"
        stroke="url(#big)"
        initial={{ pathLength: 0, pathOffset: 0 }}
        whileInView={{ pathLength: 1, pathOffset: 2 }}
        transition={{
          duration: 2,
        }}
      />
      <motion.path
        initial={{ pathLength: 0, pathOffset: 0 }}
        whileInView={{ pathLength: 1, pathOffset: 2 }}
        transition={{
          duration: 1.5,
        }}
        d="M1255.03 150.115L1219.62 98.4322C1207.87 81.2896 1188.43 71.042 1167.65 71.042H565.779C542.283 71.042 520.74 84.1167 509.893 104.959L486.394 150.115"
        stroke="#3B3B3B"
      />
      <motion.path
        initial={{ x: -50, y: -100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-50.5679 1.0249H587.027C601.911 1.0249 615.536 9.37367 622.295 22.6343L623.186 22.1802C616.257 8.58458 602.287 0.0249023 587.027 0.0249023H-50.5679V1.0249ZM538.53 12.1157H-94.0566V11.1157H538.53C563.34 11.1157 585.663 26.187 594.937 49.1991L594.009 49.5728C584.888 26.9392 562.932 12.1157 538.53 12.1157ZM-184.431 31.8481H448.795C473.057 31.8481 495.127 45.8896 505.407 67.8662L516.989 92.6257L517.895 92.202L506.313 67.4424C495.869 45.1142 473.446 30.8481 448.795 30.8481H-184.431V31.8481ZM-410 71.3845H230.105C250.721 71.3845 270.011 81.5508 281.663 98.5573L317.076 150.24L317.901 149.675L282.488 97.9921C270.649 80.7135 251.051 70.3845 230.105 70.3845H-410V71.3845Z"
        fill="url(#left)"
      />
      <motion.path
        initial={{ x: 50, y: -100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1791.06 1.0249H1144.21C1134.65 1.0249 1125.58 5.22965 1119.4 12.5212L1111.49 21.8661L1110.73 21.2198L1118.64 11.875C1125.01 4.35903 1134.36 0.0249023 1144.21 0.0249023H1791.06V1.0249ZM1204.71 12.1157H1834.55V11.1157H1204.71C1177.72 11.1157 1152.88 25.8229 1139.9 49.4848L1140.77 49.9658C1153.58 26.624 1178.09 12.1157 1204.71 12.1157ZM1924.93 31.8481H1288.36C1265.83 31.8481 1245.05 43.9662 1233.96 63.5681L1216.97 93.6019L1216.1 93.1095L1233.09 63.0756C1244.36 43.1601 1265.47 30.8481 1288.36 30.8481H1924.93V31.8481ZM2150.5 71.3845H1500.9C1478.61 71.3845 1458 83.2566 1446.83 102.542L1419.4 149.866L1418.53 149.365L1445.96 102.04C1457.32 82.4465 1478.25 70.3845 1500.9 70.3845H2150.5V71.3845Z"
        fill="url(#right)"
      />
      <motion.path
        initial={{ pathLength: 0, pathOffset: 0 }}
        whileInView={{ pathLength: 1, pathOffset: 2 }}
        transition={{
          duration: 1.5,
        }}
        d="M1153.19 71.5657L1138.95 47.3157C1127.82 28.3534 1107.48 16.7065 1085.49 16.7065H649.332C625.616 16.7065 603.979 30.2347 593.593 51.5549L584.305 70.6218"
        stroke="#3B3B3B"
      />
      <motion.path
        initial={{ pathLength: 0, pathOffset: 0 }}
        whileInView={{ pathLength: 1, pathOffset: 2 }}
        transition={{
          duration: 1.5,
        }}
        d="M1088.17 16.7065V16.7065C1083.49 6.82392 1073.52 0.524902 1062.59 0.524902H671C661.715 0.524902 653.802 7.26217 652.322 16.4281V16.4281"
        stroke="#3B3B3B"
      />
      <defs>
        <motion.linearGradient
          id="big"
          x1="867.95"
          y1="149.957"
          x2="867.95"
          y2="832.767"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3B3B3B" />
          <stop offset="1" stopColor="#3B3B3B" stopOpacity="0" />
        </motion.linearGradient>
        <linearGradient
          id="left"
          x1="39.5958"
          y1="75.1323"
          x2="623.186"
          y2="75.1323"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3B3B3B" stopOpacity="0" />
          <stop offset="1" stopColor="#3B3B3B" />
        </linearGradient>
        <linearGradient
          id="right"
          x1="1630.61"
          y1="74.9457"
          x2="1110.73"
          y2="74.9457"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3B3B3B" stopOpacity="0" />
          <stop offset="1" stopColor="#3B3B3B" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};
export default AnimatedTabSvg;
