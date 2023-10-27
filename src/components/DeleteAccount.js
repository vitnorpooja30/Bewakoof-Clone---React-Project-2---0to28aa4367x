import React ,{useEffect, useState}from 'react'
import { BsChevronCompactRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { DELETE_ACC, projectId } from '../Utils/utils';

const DeleteAccount = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [sucess , setSucess] = useState(false);
    const [res , setRes] = useState(null);

    const userToken = localStorage.getItem("jwtToken");

    let headerList = {
        "projectID": projectId,
        "Authorization": `Bearer ${userToken}`,
        "Content-Type": "application/json"
      }
  
      let bodyContent = JSON.stringify({
        "name": name,
        "email": email,
        "passwordCurrent": password,
        "password" : newPassword
      })

      const updatePasswordFetch = async () => {
        try {
          const data = await fetch(DELETE_ACC, {
            method: "DELETE",
            headers: headerList,
            body: bodyContent,
          });
          console.log(data)
      
          if (data.status >= 200 && data.status < 300) {
            // Check if the response has valid JSON content type
            const contentType = data.headers.get("Content-Type");
            if (contentType && contentType.includes("application/json")) {
              const json = await data.json();
              // console.log(json);
              setRes(json);
            } else {
              // Handle the case where the response doesn't contain JSON
              console.log("Response does not contain valid JSON.");
            }
          } else {
            // Handle the case where the request was not successful (e.g., 4xx or 5xx status codes)
            console.log("Request was not successful.");
          }
        } catch (error) {
          // Handle any other errors that may occur during the fetch operation
          console.log("An error occurred:", error);
        }
      };
      

    useEffect(()=>{
        // if(res?.status === "success"){
            setSucess(!sucess);
        // }
    },[res])


    function handleSignUp(){
        updatePasswordFetch()
        // console.log(name , email, password, newPassword);
}
  return (
    <div>
        <div className='ml-20 mr-20 pt-10 pb-10'>
            <h1 className='font-bold text-xl  ml-20 border-b-2 border-yellow-500'>Delete Account</h1>
        </div>
        <div className=' ml-20 mr-20 mt-5 pb-10 pl-20 flex justify-evenly'>
        <div className="bg-white p-20 md:mt-6 rounded-xl  w-6/12 ">
                <div>
                <h1 className="text-xl sm:text-2xl ml-56 font-semibold mb-4">Delete form</h1>
                <form onClick={(e) => e.preventDefault()} className="space-y-4">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <input
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <input
                 value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  type="password"
                  placeholder="Current Password"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <input
                 value={newPassword}
                  onChange={(e)=>setNewPassword(e.target.value)}
                  type="password"
                  placeholder="Repete Password"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <button
                 onClick={handleSignUp}
                  type="submit"
                  className="w-1/2 ml-32 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </form>
                </div>
                {
                     sucess &&  <div className='flex justify-center mt-2'>
                        <span className='bg-red-500 p-2 rounded-lg text-white'>{res?.message}</span>
                    </div>
                }
                
            </div>
            
        </div>
        

    </div>
  )
}

export default DeleteAccount