import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const textFont = Poppins({ subsets: ["latin"], weight: ["400"] })
export const headingFont = localFont({ src: "../../public/fonts/font.woff2" });
