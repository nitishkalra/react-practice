import DistributorCard from '../layout/DistributorCard';
import useFetch from '../logic/useFetch';

function Distributors(){
    const distributorList = useFetch('https://623b558c8e9af5878941b35b.mockapi.io/distributers');    

    return <div className="main-content">
        <h2>Distributors we currently work with:</h2>
        {distributorList === undefined ? 'loading' : ''}
        {distributorList && distributorList.map(distributor => <DistributorCard distributor={distributor} key={distributor.id}/>)}
    </div>
}
export default Distributors;