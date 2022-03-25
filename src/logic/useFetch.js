import {useEffect, useState} from 'react';
const useFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(url);
            const resultJson = await result.json();
            setData(resultJson);
        };
        fetchData();
    }, [url])
    return data;
}

export default useFetch;