import { title } from "@/components/primitives";
import Scene from "@/components/scene";

export default function MonitorPage() {
  return (
    <div>
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Monitor curvo Samsung&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>G70&nbsp;</h1>
        <br />
      </div>
      <Scene></Scene>
    </div>
  );
}
