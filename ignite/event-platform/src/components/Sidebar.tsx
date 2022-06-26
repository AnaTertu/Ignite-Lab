import { gql, useQuery } from '@apollo/client'
import { Lesson } from "./Lesson"

const GET_LESSONS_QUERY = gql `
    query {
        lessons{
            id
            lessonType
            availableAt
            title
        }
    }
    
`

interface GetLessonsQueryResponse {
    lessons : {
        id: string
        title: string
        availableAt: string        
        lessonType: 'live' | 'class'
    }[]
}

export function Sidebar() {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)
    
    return(
        <aside className="w-[348px] bg-stone-800 p-6 border-l border-stone-500">

            <span className="text-2xl pb-6 mb-6 border-b border-stone-600 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}                
            </div>
        </aside>
    )
}
