import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const CarouselDemo = () => {
  return (
    <div className=' flex flex-col items-center gap-2'>
      <Carousel className='w-full max-w-xs'>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-8xl font-bold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <hr className='w-full h-1 bg-amber-200' />
      <Carousel
        className='w-full max-w-1/3'
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem className='flex items-center justify-center p-6'>
            <Image
              src={
                "https://images.unsplash.com/photo-1641761189913-36174ca1dcd6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt='flower'
              width={400}
              height={400}
            ></Image>
          </CarouselItem>
          <CarouselItem>
            <Image
              src={
                "https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt='flower1'
              width={400}
              height={400}
            ></Image>
          </CarouselItem>
          <CarouselItem>
            <Image
              src={
                "https://images.unsplash.com/photo-1474112704314-8162b7749a90?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt='flower1'
              width={400}
              height={400}
            ></Image>
          </CarouselItem>
          <CarouselItem>
            <Image
              src={
                "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt='flower1'
              width={400}
              height={400}
            ></Image>
          </CarouselItem>
          <CarouselItem>
            <Image
              src={
                "https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt='flower1'
              width={400}
              height={400}
            ></Image>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselDemo;
