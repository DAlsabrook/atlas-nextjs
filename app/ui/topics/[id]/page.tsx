import { AskQuestion } from '@/components/AskQuestion';
import { HashtagIcon } from '@heroicons/react/24/outline';
import { fetchQuestions } from '@/lib/data';
import { fetchTopic } from '@/lib/data';
import { Question } from '@/components/Question';


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

