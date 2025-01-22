import { NextResponse } from 'next/server';
import { fetchStrapiData } from '@/utils/strapi';

export async function GET(): Promise<NextResponse> {
    try {
        const response = await fetchStrapiData('blogs', { populate: '*' });
        if (!response.data) {
            throw new Error('Failed to fetch jobs');
        }

        return NextResponse.json(response);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to fetch jobs';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
