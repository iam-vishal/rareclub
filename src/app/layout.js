import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/scss/style.scss";
import "@/assets/scss/responsive.scss";
import NextTopLoader from "nextjs-toploader";
import Wrapper from "@/components/wrapper";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Rare Club",
  description: "Rare Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextTopLoader color="#00ef8e" height={2} showSpinner={false} />

        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
