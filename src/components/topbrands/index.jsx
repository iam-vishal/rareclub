import React from "react";
import { Container, Stack } from "@/components/bootstrap/Bootstrap";
import BRANDS_LEFT from "@/assets/img/svg/brands_title.svg";
import BRANDS_RIGHT from "@/assets/img/svg/brands_left_arrow.svg";
import "./topbrands.scss";
const TopBrands = ({ list }) => (
  <div className="top_brands">
    <Container fluid>
      <Stack direction="horizontal" className="justify-content-between">
        <div className="left">
          <img src={BRANDS_LEFT.src} className="img-fluid coupon" />
        </div>
        <div className="brands_wrap">
          <Stack direction="horizontal" gap={5}>
            {list?.map((item, idx) => (
              <div className="content" key={idx + 1}>
                <h3>1M+</h3>
                <p>Top Brands</p>
              </div>
            ))}
          </Stack>
        </div>
        <div className="left">
          <img src={BRANDS_RIGHT.src} className="img-fluid coupon" />
        </div>
      </Stack>
    </Container>
  </div>
);
export default TopBrands;
