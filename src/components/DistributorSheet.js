

import {useParams, useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
async function getDistributor(distributorId) {
    
}
function DistributorSheet(){
    let location = useLocation();
    let distributor = location.state;

    return <div className='distributorSheet'>
        <h2>{distributor.name}</h2>
        <p>price: {distributor.price}<br/>
            Contact: {distributor.contact_person} <br />
            address: {distributor.address}
        </p>

        </div>
}
export default DistributorSheet;