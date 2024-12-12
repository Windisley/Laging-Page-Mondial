import { FaCheckCircle } from "react-icons/fa";

const Forwho = () => {
  return (
    <section
      className="
         w-full min-h-dvh h-full m-mcentralize
        "
    >
      <div className="
       
      ">
        <div>
          <h1>para quem é</h1>

          <h2>O Aparador Super Groom 10 foi criado para homens que</h2>
        </div>
        <div>
          <div>
            <FaCheckCircle />
            <p>Valorizam um visual sempre alinhado.</p>
          </div>
          <div>
            <FaCheckCircle />
            <p>Desejam praticidade e eficiência no dia a dia.</p>
          </div>
          <div>
            <FaCheckCircle />
            <p>Procuram um aparador versátil, durável e moderno.</p>
          </div>
        </div>

        <div>
            <h3>
              Se você busca um aliado para realçar o seu 
              estilo sem complicações, o aparador Super Groom 10 é para você.

            </h3>

            <p>
                clique no botão abaixo e adiquira o seu agora mesmo.
            </p>

            <a href="#" className="
                     w-4/5 max-w-w350 p-4 max-h-full
                     rounded-lg bg-blue border border-black 
                     scale-100 ease-in-out duration-300 hover:scale-110
                     my-4 text-center uppercase font-roboto-medium text-white

                    ">
                   
                      Quero o meu agora!

            </a>
        </div>
      </div>
    </section>
  );
};

export default Forwho;
