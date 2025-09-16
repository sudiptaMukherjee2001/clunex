import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/component/Navbar";
import HeroSection from "@/component/HeroSection";

export default function Home() {
  return (
    <div className={styles.page}>
     <Navbar/>
     <HeroSection/>
      
    </div>
  );
}
