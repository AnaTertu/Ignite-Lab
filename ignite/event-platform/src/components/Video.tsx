import { Alternativa560 } from "./Alternativa560";

export function Video(){
    return(
            <div className="flex-1">
                <div className="bg-black flex justify-center">
                    <div className="h-full w-full max-w-[1100px] max-h[60vh] aspect-video"></div>
                </div>

                <div className="p-8 max-w-[1100px] mx-auto">
                    
                    <div className="flex items-start gap-16">

                        <div className="flex-1 mx-2 ">
                            <h1 className="text-3xl">
                                Aula 01 - Introdução
                            </h1>
                            <p className="text-2xl mt-4 text-stone-200 font-extralight ">
                            Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">

                            <a href="" className="p-3 text-3xl bg-blue-600 flex items-center rounded font-bold uppercase gap-2 justify-center">
                                Material complementar
                            </a>
                            <a href="" className="p-3 text-3xl bg-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center">
                                Desafio
                            </a>

                        </div>
                        <div className="flex flex-initial gap-4">

                            <a href="" className="p-3 text-3xl bg-blue-200 flex items-center rounded text-stone-900 font-bold uppercase gap-2 justify-center">
                                <Alternativa560 />
                                Alternativa 560                     
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}