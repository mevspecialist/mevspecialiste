import { NextResponse } from 'next/server';

const STRAPI_URL = 'http://localhost:1337/api/jobs'; // Replace with your Strapi URL

export async function GET(): Promise<NextResponse> {
    try {
        const response = await fetch(STRAPI_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch jobs');
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to fetch jobs';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}

export const getJobs = async (): Promise<unknown> => {
    const response = await fetch(STRAPI_URL);
    if (!response.ok) throw new Error('Failed to fetch jobs');
    const data = await response.json();
    return data.data;
};
