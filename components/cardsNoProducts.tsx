import { Button } from '@nextui-org/button';
import { Card, CardFooter } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import React from 'react';

// import { Container } from './styles';

const CardsNoProduct: React.FC = () => {
    return (
        <>
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Logo_Supermercado_Coto.svg/2109px-Logo_Supermercado_Coto.svg.png"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Notify me
        </Button>
      </CardFooter>
    </Card>
    <Card
    isFooterBlurred
    radius="lg"
    className="border-none"
  >
    <Image
      alt="Woman listing to music"
      className="object-cover"
      height={200}
      src="https://nextui.org/images/hero-card.jpeg"
      width={200}
    />
    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <p className="text-tiny text-white/80">Available soon.</p>
      <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
        Notify me
      </Button>
    </CardFooter>
  </Card>
  </>
  );
}

export default CardsNoProduct;