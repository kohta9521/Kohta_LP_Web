// scss
import HeroContent from "@/components/molecules/HeroContent";
import styles from "../styles/page.module.scss";

// components
import Header from "@/components/organism/Header";
import Hero from "@/components/organism/Hero";
import Worries from "@/components/organism/Worries";
import Realize from "@/components/organism/Realize";
import ContactBanner from "@/components/organism/ContactBanner";
import Achievement from "@/components/organism/Achievement";
import Seo from "@/components/organism/Seo";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero>
        <HeroContent />
      </Hero>
      <Worries />
      <Realize />
      <ContactBanner />
      <Achievement />
      <Seo />
    </div>
  );
}
