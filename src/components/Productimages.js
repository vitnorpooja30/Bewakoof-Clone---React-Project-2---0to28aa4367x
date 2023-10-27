import React, { useState } from 'react';
import { BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs';

const Productimages = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [upidx, setUpIdx] = useState(0);
  const [downidx, setDownIdx] = useState(2);
  const [slideArray, setSlideArray] = useState(images.slice(0, images.length / 2));

  const moveUpFun = () => {
    setUpIdx((prevUpIdx) => prevUpIdx + 1);

    setSlideArray((prevSlideArray) => {
      const newSlideArray = [...prevSlideArray];
      newSlideArray.push(images[upidx % 6]);
      // console.log(upidx%6,images[upidx % 6])
      newSlideArray.shift();
      return newSlideArray;
    });
  };

  const moveDownFun = () => {
    setDownIdx((prevDownIdx) => Math.abs(prevDownIdx - 1));
    // if(downidx)

    setSlideArray((prevSlideArray) => {
      const newSlideArray = [...prevSlideArray];
      newSlideArray.unshift(images[downidx % 6]);
      // console.log(downidx,images[downidx % 6])
      newSlideArray.pop();
      return newSlideArray;
    });
  };

  return (
    <div className="flex">
      <div className="flex flex-col mt-5">
        <BsChevronCompactUp
          className="text-2xl text-blue-500 ml-10"
          onClick={moveUpFun}
        />
        {slideArray?.map((image, index) => (
          <div className="w-[100px] m-2" key={index}>
            <img src={image} onClick={() => setCurrent(index)} alt={`Image ${index}`} />
          </div>
        ))}
        <BsChevronCompactDown
          className="text-2xl text-blue-500 ml-10"
          onClick={moveDownFun}
        />
      </div>
      <div
        style={{
          backgroundImage: `url(${slideArray[current]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
        className="w-[200px] md:w-[400px] lg:h-[500px] duration-500 bg-red-100 ml-2"
      ></div>
    </div>
  );
};

export default Productimages;
