import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function DistributorCard(props){
    let navigate = useNavigate();
    
    
    const distributor = props.distributor;
    return <div onClick={() => navigate(`/${distributor.id}`, {state: props.distributor})} className='distributorCard'>
        <h3>{distributor.name}</h3>
    </div>
}
export default DistributorCard;