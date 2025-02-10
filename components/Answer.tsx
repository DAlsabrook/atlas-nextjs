import { markAnswer } from "@/lib/actions";
import Image from 'next/image';

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
          <button className="flex items-center justify-center rounded-md cursor-pointer">
            {isMarked ? (
              <Image src="/check_solid.svg" alt="Check Solid" width={40} height={40} className="border-4 rounded-full border-primary" />
            ) : (
              <Image src="/check_outline.svg" alt="Check Outline" width={35} height={35} />
            )}
          </button>
        </form>
    </div>
  );
}

