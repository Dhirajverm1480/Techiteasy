import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
    const [currentStatus, setCurrentStatus] = useState('Sign Up')
    const { token, setToken, navigate, backendUrl } = useContext(ShopContext)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [phonenumber, setPhoneNumber] = useState('')

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            if (currentStatus === 'Sign Up') {
                const response = await axios.post(backendUrl + '/api/v1/users/register', { name, email, username, password, phonenumber })
                consol.log("User Response : ", response.data)
                if(response.data.success){
                    setToken(response.data.token)
                    localStorage.setItem(response.data.token)
                }
                else{
                    toast.error(response.data.message)
                }
            }
            else{
                const response = await axios.post(backendUrl+'api/v1/users/login', {email, password})
                console.log("Login Response: " , response.data)
                if(response.data.success){
                    setToken(response.data.token)
                    localStorage.setItem('token', response.data.token)
                }
                else{
                    toast.error(response.data.error)
                }
            }
        } catch (error) {
            console.error("loginpage error : ", error)
            toast.error(response.data.message)
        }
    }

    useEffect(()=>{
        if(token){
            navigate('/')
        }
    },[])
    return (
        <form onSubmit={onSubmitHandler} className='min-h-screen flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4' action="">
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentStatus}</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>
            {
                currentStatus === 'Login' ? '' : 
                <div>
                    <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" className='w-full px-3 py-2 border border-gray-800 mb-3' placeholder='Name' required />
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800 mb-3' placeholder='Name' required />
                    <input onChange={(e) => setPhoneNumber(e.target.value)} value={phonenumber} type="text" className='w-full px-3 py-2 border border-gray-800 mb-1' placeholder='Phone No' required />
                </div>
            }
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
            <div className='w-full flex justify-between text-sm mt-[8px]'>
                <p>Forgort Password</p>
                {
                    currentStatus === 'Login' ?
                        <p onClick={() => setCurrentStatus('Sign Up')} className='cursor-pointer'>Create a Account</p> :
                        <p onClick={() => setCurrentStatus('Login')} className='cursor-pointer'>Login</p>
                }
            </div>
            <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentStatus === 'Login' ? 'Sign In' : 'Sign Up'}</button>
        </form>
    )
}

export default Login
