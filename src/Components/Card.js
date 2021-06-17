

import React from 'react';

const Card = (props) => {

    return (

     
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                <a href="/" className="w-full block h-full">

                    <img alt="blog " src="https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-1.2.1" className="max-h-40 w-full object-cover" />
                    <div className="bg-white dark:bg-gray-800 w-full p-4">
                        <p className="text-gray-300 text-md font-medium">
                            {props.data.category.name}
                        </p>
                        <p className="text-gray-500 dark:text-white text-xl font-medium mb-2">
                            {props.data.name}
                        </p>
                        <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                            {props.data.category.description.substring(0, 100)}
                        </p>
                        <div className="flex items-center mt-4">
                            <div href="/" className="block relative">
                                <img alt="profil" src="https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-1.2.1" className="mx-auto object-cover rounded-full h-10 w-10 " />
                            </div>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p className="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
 

    )

};

export default Card;