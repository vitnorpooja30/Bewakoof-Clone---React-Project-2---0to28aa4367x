import React ,{useEffect, useState}from 'react'
import { BsChevronCompactRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { UPDATE_PASSWORD, projectId } from '../Utils/utils';

const UpdatePassword = () => {

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

    const updatePasswordFetch =async() =>{
        const data = await fetch(UPDATE_PASSWORD,{
            method : "PATCH",
            headers : headerList,
            body : bodyContent
        })
        const json = await data.json();
        // console.log(json);
        setRes(json);

    }

    useEffect(()=>{
        if(res?.status === "success"){
            setSucess(!sucess);
        }
    },[res])


    function handleSignUp(){
        updatePasswordFetch()
        // console.log(name , email, password, newPassword);
}
  return (
    <div>
        <div className='ml-20 mr-20 pt-10 pb-10'>
            <h1 className='font-bold text-xl  ml-20 border-b-2 border-yellow-500'>Update Password</h1>
        </div>
        <div className=' ml-20 mr-20 mt-5 pb-10 pl-20 flex justify-evenly'>
        <div className="bg-white p-20 md:mt-6 rounded-xl  w-6/12 ">
                <div>
                <h1 className="text-xl sm:text-2xl ml-56 font-semibold mb-4">fill the form</h1>
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
                  placeholder="New Password"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <button
                 onClick={handleSignUp}
                  type="submit"
                  className="w-1/2 ml-32 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                  update
                </button>
              </form>
                </div>
                {
                     sucess &&  <div className='flex justify-center mt-2'>
                        <span className='bg-green-500 p-2 rounded-lg text-white'>SUCCESS FULL UPDATED</span>
                    </div>
                }
                
            </div>
            
        </div>
        

    </div>
  )
}

export default UpdatePassword