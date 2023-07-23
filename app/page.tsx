import Image from "next/image";
import Header from "../components/Header";
import Intro from "@/components/Intro";
import WhyCampl from "@/components/WhyCampl";
import ExamplesOfUsage from "@/components/ExamplesOfUsage";

export default function Home() {
  return (
    <main>
      <Intro />
      <WhyCampl />
      <ExamplesOfUsage />
    </main>
  );
}
