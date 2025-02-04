'use client'

import { useParams } from 'next/navigation'

export default function ID() {
    const { id } = useParams();

    return (
        <div>id: {id} page</div>
    )
}
