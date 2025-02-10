"use server";

import { revalidatePath } from "next/cache";
import { insertTopic } from "./data";
import { redirect } from "next/navigation";
import { insertQuestion } from "./data";
import { incrementVotes } from "./data";
import { insertAnswer } from "./data";
import { insertMark } from "./data"


export async function addTopic(data: FormData) {
  let topic;
  try {
    topic = await insertTopic({
      title: data.get("title") as string,
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add topic.");
  } finally {
    revalidatePath("/ui/topics/[id]", "page");
    topic && redirect(`/ui/topics/${topic.id}`);
  }
}

export async function addQuestion(question: FormData) {
  try {
    await insertQuestion({
      title: question.get("title") as string,
      topic_id: question.get("topic_id") as string,
      votes: 0,
    });
    revalidatePath("/ui/topics/[id]", "page");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add question.");
  }
}

export async function addAnswer(answer: FormData) {
  try {
    await insertAnswer({
      answer: answer.get("title") as string,
      question_id: answer.get("question_id") as string,
    });
    revalidatePath("/ui/topics/[id]", "page");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add answer.");
  }
}

export async function addVote(data: FormData) {
  try {
    await incrementVotes(data.get("id") as string);
    revalidatePath("/ui/topics/[id]", "page");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add vote.");
  }
}

export async function markAnswer(data: FormData) {
  try {
    await insertMark({
      answer_id: data.get("answer_id") as string,
      id: data.get("id") as string,
    });
    revalidatePath("/ui/questions/[id]", "page");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add vote.");
  }
}
