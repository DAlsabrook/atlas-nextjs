import { markAnswer } from "@/lib/actions";

type AnswerProps = {
  id: string;
  text: string;
  question_id: string
  isMarked: boolean
};

export function Answer({ id, text, question_id, isMarked }: AnswerProps) {
  return (
    <div className="flex items-center border-l border-r border-t border-atlas-white-300 p-6 first:rounded-t-md last:rounded-b-md last:border-b">
        <p className="text w-full text-left">{text}</p>

        {/* Mark as accepted form */}
        <form className="relative my-8" action={markAnswer}>
          <input type="hidden" name="answer_id" value={id}/>
          <input type="hidden" name="id" value={question_id}/>
          <button className="flex items-center justify-center rounded-md border">
            {!isMarked ? 'Answer' : 'correct'}
          </button>
        </form>
    </div>
  );
}
