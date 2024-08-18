'use client'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

const imageArray = [
    "https://product-assets.faasos.io/eatsure_cms/production/7f66b34d-b7d5-4eda-99cc-ad800455d30d.jpg?d=375&tr=w-undefined,h-undefined",
    "https://product-assets.faasos.io/eatsure_cms/production/b675b289-4100-4fee-8462-95814fde8f0a.jpg?d=375&tr=w-undefined,h-undefined",
    "https://product-assets.faasos.io/eatsure_cms/production/3bfaf3c6-bc64-47d5-883c-aee47d27a19b.jpg?d=375&tr=w-undefined,h-undefined",
    "https://product-assets.faasos.io/eatsure_cms/production/98e1f65d-3929-4b5f-8349-08b54cd74e8b.jpg?d=375&tr=w-undefined,h-undefined",
    "https://product-assets.faasos.io/eatsure_cms/production/a58db9a1-7b3f-47e2-8c4d-b8e435ddd6c9.jpg?d=375&tr=w-undefined,h-undefined",
    "https://product-assets.faasos.io/eatsure_cms/production/88589aaa-200c-4f2d-b313-275a742bdce7.jpg?d=375&tr=w-undefined,h-undefined",
    "https://product-assets.faasos.io/eatsure_cms/production/33596a9e-99ae-4824-8bac-d4c69d8c0e5f.jpg?d=375&tr=w-undefined,h-undefined",
    "https://product-assets.faasos.io/eatsure_cms/production/b562a03a-1e58-4e9e-837d-6fb03c8c06d4.jpg?d=375&tr=w-undefined,h-undefined",
    "https://product-assets.faasos.io/eatsure_cms/production/c3497e42-2a6a-4dbe-b994-ba140e7ffab4.jpg"
]

function ImageSlider() {
    return (
        <>
            <div className='w-full flex justify-center h-[320px] items-center border-b bg-[rgb(254,250,240)]'>
                <Carousel className="max-w-[1200px] w-full px-4 md:px-0">
                    <CarouselContent className="flex">
                        {imageArray.map((url, index) => (
                            <CarouselItem 
                                key={index} 
                                className="w-full md:min-w-[calc(100%/3)] md:max-w-[calc(100%/3)] flex-shrink-0"
                            >
                                <Card>
                                    <CardContent className="flex items-center justify-center p-0">
                                        <img src={url} alt="features" className='w-full h-auto object-cover rounded-md' />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    )
}

export default ImageSlider
