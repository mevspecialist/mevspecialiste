import qs from 'qs';

interface StrapiResponse<T> {
    data: T | null;
    error?: {
        status: number;
        name: string;
        message: string;
    };
    meta?: {
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
    };
}

export const fetchStrapiData = async <T>(
    endpoint: string,
    params = {}
): Promise<StrapiResponse<T>> => {
    try {
        const queryString = qs.stringify(params, {
            encodeValuesOnly: true,
        });

        const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${endpoint}?${queryString}`;

        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Strapi fetch error:', error);
        return {
            data: null,
            error: {
                status: 500,
                name: 'FetchError',
                message: error instanceof Error ? error.message : 'Failed to fetch data',
            },
        };
    }
};
