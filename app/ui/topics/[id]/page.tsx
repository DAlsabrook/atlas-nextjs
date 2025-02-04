'use client'
import { AskQuestion } from '@/components/AskQuestion';
import { useParams } from 'next/navigation'
import { HashtagIcon } from '@heroicons/react/24/outline';

export default function ID() {
    const { id } = useParams();
    const topicId = Array.isArray(id) ? id[0] : id || '';
    return (
        <div className='w-full h-full p-6'>
            <h1 className="flex text-3xl items-center">
                <HashtagIcon className="h-6 w-6 mr-2" /> {topicId}
            </h1>
            <AskQuestion topic={topicId}/>
        </div>
    )
}

