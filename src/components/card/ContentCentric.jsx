import Image from "next/image";
import { motion } from "framer-motion";
import { Col } from "@/components/bootstrap/Bootstrap";
import CAMERA from "@/assets/img/svg/camera.svg";
import RIGHT_ARROW from "@/assets/img/svg/arrow.svg";
import RenderContent from "../interWeave";
const ContentCentric = ({ item, index }) => {
  return (
    <>
      <Col lg="4">
        <motion.div
          className="content_centric_box"
          whileHover={{
            marginTop: "-15px",
            border: "2px solid #00ef8e",
          }}
          data-aos={index % 2 == 0 ? "fade-up" : "fade-down"}
          data-aos-duration={index % 2 == 0 ? "2000" : "2500"}
        >
          <div className="count">{item.count}</div>
          <div className="content_centric_icon">
            <Image src={CAMERA} width={55} height={65} alt="camera" />
          </div>
          <div className="content_centric_desc">
            <RenderContent desc={item.title} tagname="h2" />
            <p>{item.description}</p>
            <a href="#!" className="arrow">
              <Image src={RIGHT_ARROW} width={35} height={22} alt="arrow" />
            </a>
          </div>
        </motion.div>
      </Col>
    </>
  );
};
export default ContentCentric;
