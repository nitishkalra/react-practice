import {useState, useEffect} from 'react';
import DistributorCard from '../layout/DistributorCard';

function Distributors(){
    const [distributorList, setDistributorList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('https://623b558c8e9af5878941b35b.mockapi.io/distributers');
            const resultJson = await result.json();
            console.log(resultJson);
            setDistributorList(resultJson);
        };
        fetchData();
    }, [])

    return <div className="main-content">
        <h2>Distributors we currently work with:</h2>
        {distributorList !== null ? distributorList.map(distributor => <DistributorCard distributor={distributor} key={distributor.id}/>): 'loading'}
    </div>
}
export default Distributors;