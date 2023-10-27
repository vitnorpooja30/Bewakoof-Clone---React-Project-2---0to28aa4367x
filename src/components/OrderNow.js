import React, { useState } from "react";

import { projectId } from "../Utils/utils";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const OrderNow = () => {
    const { resId } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [addressInfo, setAddressInfo] = useState({
        addressType: "HOME",
        street: "Bypass road",
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        zipCode: "12345",
    });
    const [ordered, setOrdered] = useState(false);
    const [message, setMessage] = useState("");
    const userToken = localStorage.getItem("jwtToken");

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddressInfo({ ...addressInfo, [name]: value });
    };
    const handleBuyNow = async () => {
        const requestBody = {
          productId: resId,
          quantity: quantity,
          addressType: "HOME",
          address: {
            street: addressInfo.street,
            city: addressInfo.city,
            state: addressInfo.state,
            country: addressInfo.country,
            zipCode: addressInfo.zipCode,
          },
        };
        // console.log("Request Body:", requestBody);
      
        try {
          const response = await fetch(
            "https://academics.newtonschool.co/api/v1/ecommerce/order",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                projectID: projectId,
                Authorization: `Bearer ${userToken}`,
              },
              body: JSON.stringify(requestBody),
            }
          );
      
          if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
          }
      
          const data = await response.json();
      
          setOrdered(true);
          console.log("Item added to the order:", data);
          setMessage(data);
          // Handle success
        } catch (error) {
          console.error("Error adding item to order:", error);
          // Handle error
        }
      };
      

    // const fetchOrder = async (requestBody) => {
    //     try{
    //     const data = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/order", {
    //         method: "POST",
    //         headers: {
    //             projectID: projectId,
    //             Authorization: `Bearer ${userToken}`,
    //         },
    //         body: JSON.stringify(requestBody)
    //     })
    //     const json = await data.json();
    //     console.log(json);
    //     // setOrdered(true);
    //     setMessage(json.data)

    //     }catch(error){
    //         console.log("this is error ",error);
    //     }
    // }

    return (
       
        <div className=' bg-orange-100 w-full p-10 m-0 flex justify-center'>
            {ordered ? (
                <div className="bg-white  rounded-lg  w-5/12 p-10">
                    <h1 className="text-2xl font-bold text-green-600 p-10 text-center">
                        {message.message}
                    </h1>

                    <div className="flex justify-center h-20 ">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/6209fc508f791e729abec7d0/18641903-a848-4a3a-a0a3-c9e2ddaa15c4/02-lottie-tick-01-instant-2.gif"
                            alt="ordergif"
                            className="h-20"
                        />
                    </div>
                    <div>
                    <h1 className="text-2xl font-bold text-black p-2 text-center">
                        Order Id: <span className="text-red-600">{message.data._id}</span>
                    </h1>
                    <h3 className="text-2xl font-bold text-black p-2 text-center">
                        Total price: ₹{message.data.totalPrice}
                    </h3>
                    </div>
                </div>
            ) : (
                // <div className='bg-orange-100 w-full p-10 m-0 flex justify-center'>
                <div className="bg-white  rounded-lg  w-5/12 p-10">
                    <label className="block mb-2">
                        Quantity:
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min={1}
                            className="border rounded-md px-2 py-1 ml-10 focus:outline-none focus:border-blue-500"
                        />
                    </label>
                    <label className="block mb-2 font-bold">
                        Address 
                        {/* <input
                            type="text"
                            name="addressType"
                            value={addressInfo.addressType}
                            onChange={handleAddressChange}
                            className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
                        /> */}
                    </label>
                    <label className="block mb-2">
                        Street:
                        <input
                            type="text"
                            name="street"
                            value={addressInfo.street}
                            onChange={handleAddressChange}
                            className="border rounded-md px-2 py-1 ml-10 focus:outline-none focus:border-blue-500"
                        />
                    </label>
                    <label className="block mb-2">
                        City:
                        <input
                            type="text"
                            name="city"
                            value={addressInfo.city}
                            onChange={handleAddressChange}
                            className="border rounded-md px-2 py-1 ml-10 focus:outline-none focus:border-blue-500"
                        />
                    </label>
                    <label className="block mb-2">
                        State:
                        <input
                            type="text"
                            name="state"
                            value={addressInfo.state}
                            onChange={handleAddressChange}
                            className="border rounded-md px-2 py-1 ml-10 focus:outline-none focus:border-blue-500"
                        />
                    </label>
                    <label className="block mb-2">
                        Country:
                        <input
                            type="text"
                            name="country"
                            value={addressInfo.country}
                            onChange={handleAddressChange}
                            className="border rounded-md px-2 py-1 ml-10 focus:outline-none focus:border-blue-500"
                        />
                    </label>
                    <label className="block mb-2">
                        Zip Code:
                        <input
                            type="text"
                            name="zipCode"
                            value={addressInfo.zipCode}
                            onChange={handleAddressChange}
                            className="border rounded-md px-2 py-1 ml-10 focus:outline-none focus:border-blue-500"
                        />
                    </label>
                    <button
                        onClick={handleBuyNow}
                        className="bg-yellow-400 text-white px-4 py-2 ml-10 rounded-lg hover:bg-yellow-500 focus:outline-none"
                    >
                        Buy Now
                    </button>
                </div>
                // </div>
            )}
        </div>
        
    );
};

export default OrderNow;


