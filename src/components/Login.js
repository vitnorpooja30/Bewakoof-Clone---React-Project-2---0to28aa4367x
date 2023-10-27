import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_IN_API, projectId } from '../Utils/utils';
import { useDispatch } from 'react-redux';
import { setLoginDetails } from '../Utils/LoginSlice';


const Login = () => {

    // const [excess, setExcess] = useState("");
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValidUser, setIsValidUser] = useState(false)
    const [userData, setUserData] = useState(null)

    const dispatch = useDispatch()

    let headerList = {
        "projectId": projectId,
        "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
        "email": email,
        "password": password,
        "appType": "ecommerce"
    })

    const fetchsignInApi = async () => {
        const data = await fetch(LOGIN_IN_API, {
            method: "POST",
            headers: headerList,
            body: bodyContent
        })
        const json = await data.json();
         console.log(json);
        if (json.token) {
            console.log(json.status)
            localStorage.setItem("jwtToken", json.token);
            setIsValidUser(true);
            setUserData(json);
            // toast.success(`Successfully logged in`);
            navigate("/")
            setEmail("");
            setPassword("");

        } else {
            // toast.error(`${data.message}`);
            console.log("error");
        }
    }


    useEffect(() => {
        if (isValidUser) {
            dispatch(setLoginDetails(userData))
            console.log("dispatch");
        }
    }, [userData])
    function handleSignIn() {
        fetchsignInApi()
        // console.log(email, password)
    }




    return (
        <div className='bg-orange-100 w-full p-10 flex justify-center'>

            <div className="bg-white p-20 md:mt-12 rounded-xl shadow-md md:w-6/12 ">
                <div>
                    <h1 className="text-xl sm:text-2xl ml-56 font-semibold mb-4">Login</h1>
                    <form onClick={(e) => e.preventDefault()} className="space-y-4">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                        />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                        />
                        <button
                            onClick={handleSignIn}
                            type="submit"
                            className="w-1/2 md:ml-32 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
                <p className='italic mt-2 text-yellow-600'>use "xyz@123gmail.com"  & "pooja123" as email and password</p>
                <div className='mt-2'>
                    for SignUp click <span className='text-blue-600 hover:border-b border-blue-600'><Link to={"/signuppage"}>Here</Link></span>
                </div>

            </div>


        </div>
    )
}

export default Login