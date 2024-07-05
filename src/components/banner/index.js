import React from "react";
import "./ringOrbit.scss";
import Image from "next/image";
import ZOMATO from "@/assets/img/svg/zomato.svg";
import TEAM from "@/assets/img/teams/2.png";
import { Container } from "@/components/bootstrap/Bootstrap";
import INF14 from "@/assets/influencer images/14.jpg";
import INF5 from "@/assets/influencer images/5.jpg";
import INF4 from "@/assets/influencer images/4.jpg";
import INF8 from "@/assets/influencer images/8.jpg";
import INF13 from "@/assets/influencer images/13.jpg";
import INF30 from "@/assets/influencer images/30.jpg";
const Banner = ({ children }) => (
  <>
    {children}
    <div class="orbit">
      <ul class="orbit-wrap">
        <li>
          <ul class="ring-1">
            <li>
              <Image
                src={INF4.src}
                width={80}
                height={80}
                alt="image"
                className="orbit-icon"
              />
            </li>
            <li>
              <Image
                src={INF8.src}
                width={80}
                height={80}
                alt="image"
                className="orbit-icon"
              />
            </li>
          </ul>
        </li>
        <li>
          <ul class="ring-2">
            <li>
              <Image
                src={INF14.src}
                width={80}
                height={80}
                alt="image"
                className="orbit-icon"
              />
            </li>
            <li>
              <Image
                src={INF5.src}
                width={40}
                height={15}
                alt="image"
                className="orbit-icon zomato"
              />
            </li>
          </ul>
        </li>
        <li>
          <ul class="ring-3">
            <li>
              <Image
                src={INF30.src}
                width={40}
                height={15}
                alt="image"
                className="orbit-icon zomato"
              />
            </li>
            <li>
              <Image
                src={INF13.src}
                width={40}
                height={15}
                alt="zomato"
                className="orbit-icon zomato"
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </>
);
export default Banner;
