import React, { useState, useEffect } from 'react';

import Card from './Components/Card';
import Loader from './Components/Loader';



/*
export default function Business() {
    const [response, loading, hasError] = useFetch("https://dotnet-webapi.herokuapp.com/v1/business")


    
    return (
        <>
            {loading ? <div>Loading...</div> : (hasError ? <div>Error occured.</div> : (response.map((data, index) => <div key={index}>{data.name}</div>)))}
        </>
    )
}

*/
const Business = () => {
    const [hasError, setErrors] = useState(false);
    const [business, setBusiness] = useState([]);
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        const res = await fetch("https://dotnet-webapi.herokuapp.com/v1/business");
        res
            .json()
            .then(res => {
                setBusiness(res)
                setLoading(false)
            })
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    }, []);


    if (loading) {
        return (
            <div className="container my-12 mx-auto px-4 md:px-12">

                <div className="flex text-gray-500  justify-center">
                    <Loader />
                </div>

            </div>
        )
    }
    if (hasError) {
        return (

            <div className="container my-12 mx-auto px-4 md:px-12">
                <div><p className="text-2xl font-light text-gray-400">
                    Error occured Loading Data :/
                </p></div>
            </div>

        )

    } else {

        const Cards = ((
            business.map((data, index) =>
                <div key={index}>
                    <Card data={data} />
                </div>)))



        return (
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="w-full bg-white p-12 ">
                    <div className="header flex items-end  mb-12">
                        <div className="title">
                            <p className="text-4xl font-bold text-gray-800 mb-4">
                                Data From Endpoint
                            </p>
                            <p className="text-2xl font-light text-gray-400">
                                All data are verified by https://dotnet-webapi.herokuapp.com/v1/business
                            </p>
                        </div>
                    </div> </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 ">
                    {Cards}
                </div>
            </div>
        )


    }
    /*
        return ( */
    /*   <div>
           <span>{JSON.stringify(business)}</span>
           <hr />
           <span>Has error: {JSON.stringify(hasError)}</span>
           <hr />
           <span>Loading: {JSON.stringify(loading)}</span>
       </div> */
    /*
<div> 
{business.map(joke => 
    <div key={joke.id}> {joke.name} </div>)}
</div>
*/


    //  <div className="container my-12 mx-auto px-4 md:px-12">
    //    <div className="flex flex-wrap -mx-1 lg:-mx-4">





    /*
            <div className="w-full bg-white p-12 ">
                <div className="header flex items-end  mb-12">
                    <div className="title">
                        <p className="text-4xl font-bold text-gray-800 mb-4">
                            Lastest articles
                        </p>
                        <p className="text-2xl font-light text-gray-400">
                            All article are verified by 2 experts and valdiate by the CTO
                        </p>
                    </div>
                </div>
    
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 ">
    
                    {hasError ? <div>Error occured.</div>  : 
                      
                      (loading ? <div className="flex text-gray-500  justify-center"> <Loader />
    
                      </div> :
               (
    
                             business.map((data, index) => <div key={index}>
    
                                <Card data={data} />
                            </div>)
    
               )
                          
                       
    
                    )}
    
                </div>
            </div>
    
    
    
    
    */


    //  );
};
export default Business;
