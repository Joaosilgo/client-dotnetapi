import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1557855506-3619a44bab73?ixid=MnwyMjIwNDh8MHwxfGNvbGxlY3Rpb258OHwxODM2NjgwNHx8fHx8Mnx8MTYyMzk2NTM2MQ&ixlib=rb-1.2.1',
  },
  // More people...
]

function PostRequestHooks() {
  const [articleId, setArticleId] = useState(null);
  const [categories, setCategories] = useState([]);
  useEffect(() => {

    axios
    .get('https://dotnet-webapi.herokuapp.com/v1/categories/')
    .then(response => setCategories(response.data));

  }, []);
  /*
    useEffect(() => {
      // POST request using axios inside useEffect React hook
      const article = {
  
        name: "TesteReact",
        description: "string",
        mobilePhone: "string",
        categoryId: 1
  
      };
      axios
        .post('https://dotnet-webapi.herokuapp.com/v1/business/', article)
        .then(response => setArticleId(response.data.id));
  
      // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
  */
  return (
    /* <div className="card text-center m-3">
       <h5 className="card-header">POST Request with React Hooks</h5>
       <div className="card-body">Returned Id: {articleId}</div>
     </div>*/
    <div className="container my-12 mx-auto px-4 md:px-12 justify-center">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-100 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                    >
                      Description
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Remove</span>
                    </th>

                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {categories.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            {/*  <img className="h-10 w-10 rounded-full" src={person.image} alt="" />*/}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-300">{item.name}</div>
                            <div className="text-sm text-gray-400">{item.id}</div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                       {/* <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span> */}
                        <div className="text-sm text-gray-400">{item.description.substring(0, 100) } ...</div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link to="/" className="text-gray-300 hover:text-gray-600">
                          Edit
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link to="/" className="text-gray-300 hover:text-gray-600">
                          Delete
                        </Link>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PostRequestHooks };
