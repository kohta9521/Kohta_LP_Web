// scss
import styles from "../styles/page.module.scss";

// components
import Header from "@/components/organism/Header";
import Hero from "@/components/molecules/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero>
        <h1>sample</h1>
      </Hero>
    </div>
  );
}
