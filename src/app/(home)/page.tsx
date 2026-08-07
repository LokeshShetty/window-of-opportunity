import { SiteHeader } from "./components/SiteHeader/SiteHeader";
import { BookTourPill } from "./components/BookTourPill/BookTourPill";
import { Hero } from "./components/Hero/Hero";
import { Collage } from "./components/Collage/Collage";
import { Roadmap } from "./components/Roadmap/Roadmap";
import { DeepDiagnostics } from "./components/DeepDiagnostics/DeepDiagnostics";
import { InsightAction } from "./components/InsightAction/InsightAction";
import { FindUs } from "./components/FindUs/FindUs";
import { BookNow } from "./components/BookNow/BookNow";
import { StraightLines } from "./components/StraightLines/StraightLines";
import { RecoverSmarter } from "./components/RecoverSmarter/RecoverSmarter";
import { Vision } from "./components/Vision/Vision";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Collage />
        <InsightAction />
        <DeepDiagnostics />
        <Vision />
        <RecoverSmarter />
        <StraightLines />
        <Roadmap />
        <FindUs />
        <BookNow />
      </main>
      <BookTourPill />
    </>
  );
}
