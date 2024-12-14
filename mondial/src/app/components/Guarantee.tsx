'use client'

import Image from "next/image"
import { RefObject, useEffect, useRef, useState } from "react"

const Guarantee = ()=>{
    const boximg:RefObject<HTMLDivElement> = useRef(null)
    const [Wbox, setWbox] = useState(0)
    const contGuarantee:RefObject<HTMLDivElement> = useRef(null)
    
    useEffect(()=>{
      
    if(boximg.current){
        const divRef:number = boximg.current.clientWidth
        setWbox(divRef)
             
    }  

    
    window.addEventListener("scroll", ()=>{
        const divGuarantee:HTMLDivElement = contGuarantee.current
    
        const animGuarantee:DOMRect = divGuarantee.getBoundingClientRect()
        
        if(animGuarantee.top < window.innerHeight && animGuarantee.bottom >= 0){
            divGuarantee.classList.add("opacity-100")
            divGuarantee.classList.add("translate-y-0")
            divGuarantee.classList.remove("opacity-0")
            divGuarantee.classList.remove("translate-y-2/4")
          
        }else{
            divGuarantee.classList.remove("opacity-100")
            divGuarantee.classList.remove("translate-y-0")
            divGuarantee.classList.add("opacity-0")
            divGuarantee.classList.add("translate-y-2/4")
        }

    })

    
    }, [])

    useEffect(()=>{
      
     console.log(Wbox)
    
    }, [Wbox])

    return(
        <section
        className="
           w-full min-h-full m-mcentralize
           overflow-hidden
          "
         > 

         <div className="
          w-full h-full m-mcentralize
          my-4
         ">
            <h1 className="
             uppercase text-title
             text-center font-roboto-medium
            ">
                tem garantia?
            </h1>
            <div className="
             w-full max-w-container h-full m-mcentralize
             flex flex-col gap-2 items-center
             justify-center relative p-4 my-4
             ease-in-out duration-500
             opacity-0 translate-y-2/4
            " ref={contGuarantee}>
              <div className="
               w-full max-w-[350px] flex
               items-center justify-center
              " ref={boximg}>
                 <Image
                 src="/imgs/selo_garantia.png"
                 alt="30 Dias De Garantia!"       
                 loading="lazy"
                 width={Wbox || 300}
                 height={200}
                 style={{objectFit: "cover", objectPosition: "center center"}}
                 />
              </div>
              <div className="
               w-4/5 h-full m-mcentralize
              ">
                <p className="
                 capitalize font-roboto-regular
                 text-paragraph text-left
                ">
                    Adquira o Super Groom 10 sem preocupações!
                    Oferecemos 30 dias de garantia para você testar e se apaixonar pelo produto. Caso não fique satisfeito, conte conosco para resolver qualquer questão.

                </p>
              </div>

            </div>
       
         </div>

        </section>
    )
}

export default Guarantee