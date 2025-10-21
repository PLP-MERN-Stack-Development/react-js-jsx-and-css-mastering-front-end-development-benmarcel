import {useEffect, useState} from 'react'
import { fetchData } from '../utils/fetchData';
import Card from '../components/Card';
import Button from '../components/Button';
import type { fetchItem } from '../types';
const ResourcesPage = () => {
    const [data, setData] = useState<fetchItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                setError("");
                const result = await fetchData(page, 9);
                setData(result);
            } catch (err) {
               if (err instanceof Error) {
                   setError(err.message);
               } else {
                   setError("An unknown error occurred");
               }
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [page]);

console.log(data);
    return (
        <div className='bg-gray-100 h-full dark:bg-gray-900 dark:text-white w-full mx-auto p-4 md:p-8 text-black font-sans antialiased'>
            <h1 className='text-3xl font-bold mb-6 tracking-tight'>Resources</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{color: 'red'}}>Error: {error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {data.map(item => (
                    <Card key={item.id} id={item.id} title={item.title} completed={item.completed} />
                ))}
            </div>
            <div className="flex justify-center mt-6 space-x-4">
                <Button variant="primary" onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>
                    Previous
                </Button>
                <span className="self-center">Page {page}</span>
                <Button variant="primary" onClick={() => setPage(prev => prev + 1)}>
                    Next
                </Button>
            </div>  
        </div>
    );
};

export default ResourcesPage