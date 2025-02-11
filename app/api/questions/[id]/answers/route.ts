import { NextRequest, NextResponse } from 'next/server';
import { fetchAnswers } from '@/lib/data';

export async function GET(req: NextRequest, context: { params: Promise<{ id?: string }> }) {
  const { id } = await context.params;


  if (!id) {
    return NextResponse.json({ error: 'Invalid question ID' }, { status: 400 });
  }

  try {
    const answers = await fetchAnswers(id);
    console.log(answers)
    const formattedAnswers = answers.map((answer) => ({
      id: answer.id,
      answer: answer.answer,
      question_id: answer.question_id
    }));
    return NextResponse.json(formattedAnswers, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch answers:', error);
    return NextResponse.json({ error: 'Failed to fetch answers' }, { status: 500 });
  }
}
