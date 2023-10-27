
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SEARCH_API, projectId } from '../Utils/utils';
import ClothesCard from './ClothesCard';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const [searchData, setSearchData] = useState(null);
  const { searchText } = useParams();
  const [flag, setFlag] = useState(false);
  const userToken = localStorage.getItem("jwtToken");
  // console.log(searchText);


  const fetchSearch = async () => {
    try {
      const data = await fetch(`${SEARCH_API}{"name":"${searchText}"}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${userToken}`,
          "projectId": projectId
        }
      })
      const json = await data.json();
      if(json.status === 'fail'){
          setFlag(true);
      }
      console.log(json);
      setSearchData(json.data);
    } catch (error) {
      console.log(error);
      setFlag(true);
    }
  }
  useEffect(() => {
    fetchSearch();
  }, [searchText])


  return searchData ? (
    <div className='flex justify-center mx-1/12 mt-10'>
      <div className='w-10/12'>
        <div className='flex justify-evenly  flex-wrap'>
          {
            searchData.map((cloth) => (
              <Link to={"/ClothInfo/" + cloth._id} key={cloth._id}> <ClothesCard data={cloth} /></Link>
            ))
          }
        </div>
      </div>
    </div>
  ) : (
    <div className='flex justify-center m-20'>
      <div>
        {
          flag &&  <p className='ml-20 font-bold text-2xl p-4'>Not Fount</p>
          
        }
        <img src='https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png' />
      </div>
    </div>
  );
}

export default SearchPage