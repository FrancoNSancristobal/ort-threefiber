import { title, subtitle } from "@/components/primitives";
import CardsWithProducts from "@/components/cardsWithProducts";
import CardsNoProduct from "@/components/cardsNoProducts";
import { Shiba } from "@/components/samsungMonitor";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Transformando&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>compras&nbsp;</h1>
				<br />
				<h1 className={title()}>
					en experiencia.
				</h1>
			</div>
			
			<div style={{marginTop: '40px'}}>
                <CardsWithProducts />
				</div>
		</section>
	);
}
