import { CheckCircle, Lock } from 'phosphor-react';

interface LessonProps {
    title: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps){

    const isLessonAvailable = false;
    
    return(
        <a href="#">

            <span className="text-stone-300">
                Segunda • 1 de outubro • 19h00
                {props.availableAt.toString()}
            </span>

            <div className="rounded border border-stone-500 p-2 mt-1">
                
                <header className="flex items-center justify-between">

                    { isLessonAvailable ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20}/>
                            Conteúdo liberdo
                        </span>
                    ):( 
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20}/>
                            Em breve
                        </span>
                    )}
                    
                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-blue-300 font-bold">
                        {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className="text-blue-100 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </a>
    )
}