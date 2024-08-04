import { Great_Vibes, Pacifico } from 'next/font/google';

import Image from 'next/image'
import Head from 'next/head';
import { Button, Carousel, Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble, BsTiktok } from 'react-icons/bs';
import Link from 'next/link';
import React from 'react';

const images = [
 "/images/p1.webp",
 "/images/p2.webp", 
 "/images/p3.webp",
 "/images/p4.webp",
 "/images/p5.webp", 
 "/images/p6.webp", 
 "/images/p7.webp" 
]

const greatVibes = Great_Vibes({
  subsets: ['vietnamese'],
  weight: '400'
})

const supports = [
  { 
    src: "/images/sp1.png",
    des: "Mọi ngừi ủng hộ Chử Bạc Tử bằng cách \nTing Ting hoặc quét mã QR bên trên nhé ạ, \ncảm ơn mọi ngừi rấc nhìuuu <3"
  }, 
  {
    src: "/images/sp2.webp",
    des: "Liên hệ với Chử Bạc Tử qua số zalo 0332695800\n hoặc quét mã QR trên ạ"
  }
]

const pacifico = Pacifico({ subsets: ['vietnamese', 'cyrillic', 'cyrillic-ext'], weight: '400' });

export default function Home() {
  return (
    <main className="w-full overflow-auto height-custom">
      <div className="text-effect-wrapper content">
        <h3 className={`text text-center ${pacifico.className} text-[50px] custom-1`}>Chử Bạc Tử</h3>
      </div>
      
      <video autoPlay muted loop id="myVideo" className='px-6'>
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      <div className="text-effect-wrapper p-3">
        <h3 className={`text text-center ${pacifico.className} custom-1 text-[30px]`}>Photo Gallery</h3>
      </div>
      {/* carousal */}
      <div className="h-[216px] md:h-[400px] w-full px-6 opacity-80">
        <Carousel slideInterval={2000}>
          {images.map((photo, idx) => {
              return <Image key={idx} src={photo} alt={`images ${idx}`} width={700} height={475} />
            })
          }
        </Carousel>
      </div>
      
      <div className="text-effect-wrapper p-3 mb-3">
        <h3 className={`text text-center ${pacifico.className} custom-1 text-[30px]`}>Support Me</h3>
      </div>
      
      <div className='flex flex-col items-center z-10'>
        {supports.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              <Image key={`img-${idx}`} src={item.src} alt={`idx-${idx}`} width={200} height={200} />
              <div key={`div-${idx}`} className='text-white text-center p-5'>{item.des}</div>
            </React.Fragment>
          )
        })}
      </div>

      <div className="text-effect-wrapper p-3 mb-3">
        <h3 className={`text text-center ${pacifico.className} custom-1 text-[30px]`}>More</h3>
      </div>
      
      <div className='flex flex-col items-center z-10'>
          <img src="/images/more.webp" alt={`idx-$}`} className='h-[165px] w-[320px] mb-5' />
      </div>

      <div
        x-data="{}"
         x-nit="$nextTick(() => {
            let ul = $refs.logos;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-28"
              >
          <Link href={'https://www.tiktok.com/@phunidetu?_t=8oNOoCDcQvx&_r=1'}>
            <ul x-ref="logos" className="cursor-pointer flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">  
              {
                Array.from({ length: 10 }).map((_, idx) => (
                  <li key={idx}>
                    <img src="/images/tiktok.png" alt="Facebook" width={120} height={80} />
                </li>
                ))
              }
            </ul>                
          </Link>
      </div>
    </main>
  );
}
