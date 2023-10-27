
import {projectId , FILTER_API} from '../Utils/utils';
import { useState } from "react";
import ClothesCard from './ClothesCard'
import { Link } from "react-router-dom";

const Filter = () => {
  const [selectedField, setSelectedField] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [bgimg , setBgImg] = useState(true);
  const [options, setOptions] = useState([]);
  const [filter, setFilter] = useState([]);

  const fieldOptions = {
   
    brand: [
      "OFFICIAL HARRY POTTER MERCHANDISE",
      "Bewakoof®",
      "OFFICIAL RICK AND MORTY MERCHANDISE",
      "OFFICIAL DISNEY MERCHANDISE",
      "BEWAKOOF X STREETWEAR",
      "OFFICIAL NARUTO MERCHANDISE",
      "OFFICIAL MINIONS MERCHANDISE",
      "OFFICIAL DC COMICS MERCHANDISE",
      "OFFICIAL MARVEL MERCHANDISE",
      "OFFICIAL TOM & JERRY MERCHANDISE",
    ],
    color: ["BLACK", "GREEN", "BROWN", "BLUE", "WHITE", "NAVY"],
    price: ["899", "429", "449", "849", "399", "649", "419", "599", "699"],
  };

  const handleFieldChange = (e) => {
    const selectedKey = e.target.value;
    setSelectedField(selectedKey);
    setSelectedOption("");
    setOptions(fieldOptions[selectedKey] || []);
  };

  const handleOptionChange = (e) => {
    const option = e.target.value;
    setSelectedOption(option);
  };


  
  const handlefilter = async() => {
    const data = await fetch(`${FILTER_API}{"${selectedField}":"${selectedOption}"}`,{
        headers : {
            projectId : projectId
        }
    })
    const json = await data.json();
    // console.log(json.data)
    setFilter(json.data);
    setBgImg(false);

   
  };

 return (
    <div>
        <div className="flex justify-center m-10 ">
            <div>
      <label>Select a Field:</label>
      <select value={selectedField} onChange={handleFieldChange}>
        <option value="">Select a Field</option>
        <option value="brand">Brand</option>
        <option value="color">Color</option>
        <option value="price">Price</option>
      </select>

      {selectedField && (
        <div>
          <label>Select an Option:</label>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select an Option</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedField && selectedOption && (
        <p>
          You selected Field: {selectedField}, Option: {selectedOption}
        </p>
      )}
      <button
        onClick={handlefilter}
        className="bg-yellow-400 p-2 m-5 rounded-md text-white"
      >
        Products
      </button>
      </div>
      </div>
      <div className="flex justify-center flex-wrap">
      {
      filter && filter.map((cloth) => (     
           <Link to={"/ClothInfo/" + cloth._id} key={cloth._id}> <ClothesCard  data={cloth} /></Link>      
      ))
      }
      </div>
      <div className='flex justify-center'>
        {
            bgimg && <img src='https://images.bewakoof.com/web/group-19-1617704502.png'/>
        }
      </div>
    </div>
  );
};

export default Filter;

