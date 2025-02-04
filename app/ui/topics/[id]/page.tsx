import { AskQuestion } from '@/components/AskQuestion';
import { HashtagIcon } from '@heroicons/react/24/outline';
import { fetchQuestions } from '@/lib/data';
import { fetchTopic, removeTopic } from '@/lib/data';
import { Question } from '@/components/Question';
import { TrashIcon } from "@heroicons/react/24/outline";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Layout from '../../layout';



export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    // await new Promise((r) => setTimeout(r, 3000));
    const questions = await fetchQuestions(id);
    const topic = await fetchTopic(id);

    if (!topic) return <div>Topic not found</div>

    return (
        <div className='w-full h-full p-6'>
            <h1 className="flex text-3xl items-center">
                <HashtagIcon className="h-6 w-6 mr-2" /> {topic.title}
                <form action={async () => {
                    'use server'
                    await removeTopic(id)
                    redirect('/ui')
                }}>
                    <input name="itemId" className="hidden" defaultValue={id}/>
                    <button className='w-10 rounded-lg p-1 ml-4 border-2' type="submit"><TrashIcon/></button>
                </form>
            </h1>
            <AskQuestion topic={id}/>
            {questions.map((question) => (
                <Question
                    key={question.id}
                    id={question.id}
                    text={question.title}
                    votes={question.votes}
                />
            ))}
        </div>
    )
}

