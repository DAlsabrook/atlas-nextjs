import { AskQuestion } from '@/components/AskQuestion';
import { useParams } from 'next/navigation'
import { HashtagIcon } from '@heroicons/react/24/outline';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
    await new Promise((r) => setTimeout(r, 3000));
    return (
        <div className='w-full h-full p-6'>
            <h1 className="flex text-3xl items-center">
                <HashtagIcon className="h-6 w-6 mr-2" /> {id}
            </h1>
            <AskQuestion topic={id}/>
        </div>
    )
}

