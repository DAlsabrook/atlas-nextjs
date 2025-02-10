type AnswerProps = {
  id: string;
  text: string;
};

export function Answer({ id, text }: AnswerProps) {
  return (
    <div className="flex items-center border-l border-r border-t border-atlas-white-300 p-6 first:rounded-t-md last:rounded-b-md last:border-b">
        <p className="text w-full text-left">{text}</p>
    </div>
  );
}
