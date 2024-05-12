import { title } from "@/components/primitives";
import SceneRazer from "@/components/sceneRazer";

export default function RazerPage() {
  return (
    <div>
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Laptop&nbsp;</h1>
        <h1 className={title({ color: "green" })}>Razer&nbsp;</h1>
        <br />
      </div>
      <SceneRazer></SceneRazer>
    </div>
  );
}
