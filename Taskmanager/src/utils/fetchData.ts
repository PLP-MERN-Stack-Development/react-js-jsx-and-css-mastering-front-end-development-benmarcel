const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchData = async (page: number, limit: number) => {
  try {
    const response = await fetch(`${url}?_page=${page}&_limit=${limit}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}