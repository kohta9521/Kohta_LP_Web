// scss
import HeroContent from "@/components/molecules/HeroContent";
import styles from "../styles/page.module.scss";

// components
import Header from "@/components/organism/Header";
import Hero from "@/components/organism/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero>
        <HeroContent />
      </Hero>
    </div>
  );
}
