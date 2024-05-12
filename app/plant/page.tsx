import { title } from "@/components/primitives";
import ScenePlant from "@/components/scenePlant";

export default function PlantPage() {
  return (
    <div>
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Contribuye al&nbsp;</h1>
        <h1 className={title({ color: "green" })}>planeta&nbsp;</h1>
        <br />
      </div>
      <ScenePlant></ScenePlant>
    </div>
  );
}
