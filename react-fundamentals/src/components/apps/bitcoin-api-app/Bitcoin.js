import React, {useState, useEffect} from 'react';
import LineChart from './LineChart';

const Bitcoin = () => {
    const [data, setData] = useState([]);
    const [fetchingData, setFetchingData] = useState(true);

    useEffect(() => {
        const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';

        fetch(url)
            .then(res => res.json())
            .then(bitCoinData => {
                // console.log(bitCoinData);
                setData(bitCoinData.bpi);
                setFetchingData(false);
            })
            .catch(error => console.error(error))
    });

    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1>30 Day Bitcoin Price Chart</h1>
                {/* { !this.state.fetchingData ? <h3>Info Box</h3> :null } */}
                {/* { !this.state.fetchingData ? <LineChart /> :null } */}
                <LineChart/>
            </div>
        </div>
    );
};

export default Bitcoin;
