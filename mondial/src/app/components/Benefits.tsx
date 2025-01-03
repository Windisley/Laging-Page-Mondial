'use client'

import Image from "next/image"
import { useEffect, useRef } from "react"


const Benefits = ()=>{

    
    interface Benefit{
        src: string,
        alt: string,
        text: string,
        id:   number
    }

   const benefits:Benefit[] = [
    {src: "/imgs/barba.jpg", 
     alt: "Aparar barba com facilidade", 
     text: "barba",
      id:  1,
    },
     
     

     {src: "/imgs/cabelo.jpg", 
      alt: "Cortar cabelos com precisão", 
      text: "cabelo",
      id:  2,
    },

    {src: "/imgs/body.jpg", 
        alt: "Remover pelos do corpo de forma confortável", 
        text: "corpo",
        id:  3,
      },
     
      {src: "/imgs/nariz.webp", 
        alt: "Remover pelos do nariz e orelhas", 
        text: "nariz",
        id:  4,
      },
      
   ]

   const benefitsscroll = useRef<HTMLDivElement | null>(null)

   useEffect(()=>{
   const handleScroll = ()=>{
      
      if(benefitsscroll.current){
        const animaDiv:HTMLDivElement = benefitsscroll.current
        const bounding:DOMRect = animaDiv.getBoundingClientRect();
  
        if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
          animaDiv.classList.add("opacity-100")
          animaDiv.classList.add("translate-y-0")
          animaDiv.classList.remove("opacity-0")
          animaDiv.classList.remove("translate-y-2/4")
         
         
        }else{
          animaDiv.classList.remove("opacity-100")
          animaDiv.classList.remove("translate-y-0")
          animaDiv.classList.add("opacity-0")
          animaDiv.classList.add("translate-y-2/4")
        }
     }
      }
     window.addEventListener("scroll", handleScroll)

     return(()=>{
      window.removeEventListener("scroll", handleScroll)
     })
   }, [])

    return(
        <section className="
         w-full min-h-dvh h-full m-mcentralize
         overflow-hidden
        ">
            <div className="
            w-full max-w-container h-full m-mcentralize
            ">
                <h1 className="
                 w-4/5 text-center uppercase m-mcentralize
                 my-4 font-roboto-medium text-title
                ">
                  benefícios do aparador de pelos Super Groom 10 da Mondial
                </h1>

                <p className="
                 w-4/5 text-center capitalize m-mcentralize
                 my-4 font-roboto-regular
                ">
                  Apare pelos de todas as áreas do corpo com facilidade
                </p>

                <div className="
                w-full h-full grid tablet:grid-cols-2 
                mobasmall:grid-cols-1 gap-4 
                justify-center items-center py-4 pb-2
                opacity-0 translate-y-2/4
                bg-black rounded-lg ease-in-out duration-500
                " ref={benefitsscroll}>
                   
                    {benefits.map((beneft)=>(
                    <div key={beneft.id} className="
                     flex flex-col items-center justify-center
                     gap-2 w-full h-full
                    ">
                        <div className="
                         w-4/5 max-w-w350 h-full min-h-h350
                         relative rounded-lg
                         border-2 border-blue 
                        ">
                           <Image
                                src={beneft.src}
                                alt={beneft.alt}
                                layout="fill" 
                                objectFit="cover"
                                loading="lazy"
                                objectPosition="center"
                                className="
                                 rounded-lg
                                 
                                "
                            />
                           
                        </div>

                         <div className="
                          max-w-full flex justify-center
                          items-center m-mcentralize

                         ">
                         <p className="
                          text-left capitalize text-paragraph
                          text-white font-roboto-regular
                         ">
                            {beneft.text}
                         </p>
                         </div>
                    </div>

                    ))}
                   
                </div>

            </div>

        </section>
    )
}

export default Benefits