'use client'

import {useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Forwho = () => {

    const contForWho= useRef<HTMLDivElement | null> (null)

    useEffect(()=>{

   const handleScrollWho = ()=>{
          
        if(contForWho.current){
          const divForWho:HTMLDivElement = contForWho.current
       
            const animationForWho:DOMRect = divForWho.getBoundingClientRect()
           
            if(animationForWho.top < window.innerHeight && animationForWho.bottom >=0){
               divForWho.classList.add("opacity-100")
               divForWho.classList.add("translate-y-0")
                
               divForWho.classList.remove("opacity-0")
               divForWho.classList.remove("translate-y-2/4")
            }else{
               divForWho.classList.remove("opacity-100")
               divForWho.classList.remove("translate-y-0")
                
               divForWho.classList.add("opacity-0")
               divForWho.classList.add("translate-y-2/4")
            }
            
            
          }
          
        }
        
        
                window.addEventListener("scroll", handleScrollWho)
        
                return(()=>{
                  window.removeEventListener("scroll", handleScrollWho)
                })
    }, [])

  return (
    <section
      className="
         w-full min-h-dvh h-full m-mcentralize
         overflow-hidden
        "
    >
      <div
        className="
        w-full max-w-container h-full m-mcentralize
      "
      >
        <div
          className="
         w-full h-full flex
         flex-col justify-center
         items-center gap-4
        "
        >
          <h1
            className="
             text-center uppercase my-4 font-roboto-medium
             text-title
            "
          >
            para quem é
          </h1>

          <h2
            className="
          w-4/5 justify-center flex capitalize text-left font-roboto-medium
          "
          >
            O Aparador Super Groom 10 foi criado para homens que
          </h2>
        </div>

        <div
          className="
         w-full h-dvh flex flex-col
         items-center justify-center 
         overflow-hidden
        "
        >
          <div
            className="
           w-full h-full flex
           justify-center items-center
           flex-col gap-4 bg-black my-4
           ease-in-out duration-500
           opacity-0 translate-y-2/4
          " ref={contForWho}
          >
            <div
              className="
           flex tablet:w-2/4 mobasmall:w-4/5 text-left
           gap-4 items-center justify-start
           p-4 bg-blue rounded-lg min-h-32
          "
            >
              <FaCheckCircle
                className="
             text-[2.5rem] capitalize font-roboto-medium text-white
            "
              />
              <p
                className="
             tablet:text-[1.5rem] capitalize font-roboto-medium 
             text-white mobasmall:text-[1rem]
            "
              >
                Valorizam um visual sempre alinhado.
              </p>
            </div>
            <div
              className="
           flex tablet:w-2/4 mobasmall:w-4/5 text-left
           gap-4 items-center justify-start
           p-4 bg-blue rounded-lg min-h-32 
          "
            >
              <FaCheckCircle
                className="
             text-[2.5rem] capitalize font-roboto-medium text-white
            "
              />
              <p
                className="
             tablet:text-[1.5rem] capitalize font-roboto-medium 
             text-white mobasmall:text-[1rem]
            "
              >
                Desejam praticidade e eficiência no dia a dia.
              </p>
            </div>
            <div
              className="
           flex tablet:w-2/4 mobasmall:w-4/5 text-left
           gap-4 items-center justify-start
           p-4 bg-blue rounded-lg min-h-32
          "
            >
              <FaCheckCircle
                className="
             text-[2.5rem] capitalize font-roboto-medium text-white
            "
              />
              <p
                className="
             tablet:text-[1.5rem] capitalize font-roboto-medium 
             text-white mobasmall:text-[1rem]
            "
              >
                Procuram um aparador versátil, durável e moderno.
              </p>
            </div>
          </div>
          
          <div
            className="
         w-4/5 flex 
         flex-col items-center justify-center
         
        "
          >
            <h3 className="
             text-left capitalize font-roboto-regular
            ">
              Se você busca um aliado para realçar o seu estilo sem
              complicações, o aparador Super Groom 10 é para você.
            </h3>

            <p className="
             text-left capitalize my-2 font-roboto-medium
            ">
                clique no botão abaixo e adiquira o seu agora mesmo.
            </p>

            <a href="https://amzn.to/3DhZs4I" className="
                w-full max-w-w500 p-4 max-h-full
                rounded-lg bg-blue border border-black 
                scale-100 ease-in-out duration-300 hover:scale-110
                my-4 text-center uppercase font-roboto-medium text-white

            " target="_blank">
               Quero o meu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forwho;
