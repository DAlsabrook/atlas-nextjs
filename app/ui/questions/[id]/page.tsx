import { HashtagIcon } from '@heroicons/react/24/outline';
import { fetchQuestion, fetchAnswers } from '@/lib/data';
import { Answer } from '@/components/Answer';
import { SubmitAnswer } from '@/components/SubmitAnswer';


export default async function Answers({ params }: { params: Promise<{   id: string }> }) {
    const { id } = await params;
    const questions = await fetchQuestion(id)
    const title = questions[0] ? questions[0].title : 'Question not found';
    const answers = await fetchAnswers(id)
    const markedAnswer = questions[0].answer_id

    console.log("Answer ID: ", markedAnswer)
    return (
        <div className='w-full h-full p-1'>
            <h1 className="flex text-3xl items-center">
                <HashtagIcon className="h-6 w-6 mr-2" />
                {title}
            </h1>
            <SubmitAnswer id={id}/>
            {answers.map((answer) => (
                // <p key={answer.id}>{answer.answer}</p>
                <Answer
                key={answer.id}
                id={answer.id}
                question_id={id}
                text={answer.answer}
                isMarked={markedAnswer == answer.id}/>
            ))}
        </div>
    )
}
