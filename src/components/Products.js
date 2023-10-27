import React, { useEffect, useState } from 'react';
import { BASE_URL, projectId } from '../Utils/utils'
import ClothesCard from './ClothesCard';
import { Link } from 'react-router-dom';

const Products = () => {
    //   const { data, error } = FetchApi();
    //   console.log(data);
    const [list, setList] = useState(null);
    const fetchfun = async () => {
        const data = await fetch(`${BASE_URL}api/v1/ecommerce/clothes/products`, {
            headers: {
                projectId: projectId
            }
        })
        const json = await data.json()
        // console.log(json.data)
        // console.log(typeof(json.data))
        setList(json.data)
    }

    useEffect(() => {
        fetchfun()
    }, [])

    return list ? (
        <div className='flex justify-center mx-1/12 mt-10'>
          <div className='w-10/12'>
            <div className='flex justify-evenly  flex-wrap'>
              {list.map((cloth) => (
               <Link to={"/ClothInfo/" + cloth._id} key={cloth._id}>
                 <ClothesCard key={cloth._id} data={cloth} />
                  </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    };

export default Products;