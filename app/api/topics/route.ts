import { NextApiRequest, NextApiResponse } from 'next';
import { fetchTopics } from "@/lib/data"

export async function GET(request: NextApiRequest) {
    try {
        const data = await fetchTopics()
        return Response.json(data)
    } catch (error) {
        console.error('Failed to fetch topics:', error);
        return Response.json({ error: 'Failed to fetch topics' });
    }
}
