"use client";
import Image from "next/image";
import { Col } from "@/components/bootstrap/Bootstrap";
import GLASS from "@/assets/img/glass.png";
import { motion } from "framer-motion";
import RenderContent from "../interWeave";
import { BookOpenCheck, Handshake, Users } from "lucide-react";
const DiscountCard = ({ item }) => {
  return (
    <Col lg="4">
      <motion.div className="dicount_box">
        <div className="dicount_content">
          <div className="dicount_icon">
            {item.title === "Curated Partnerships" && (
              <Handshake
                width={80}
                height={80}
                strokeWidth={1}
                className="opacity-25"
              />
            )}
            {item.title === "Transparency & Trust" && (
              <BookOpenCheck
                width={80}
                height={80}
                strokeWidth={1}
                className="opacity-25"
              />
            )}
            {item.title === "Exclusive Community" && (
              <Users
                width={80}
                height={80}
                strokeWidth={1}
                className="opacity-25"
              />
            )}
          </div>
          <RenderContent desc={item.title} tagname="h3" />
          <p>{item.description}</p>
        </div>
      </motion.div>
    </Col>
  );
};
export default DiscountCard;
