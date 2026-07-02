import React, {useState} from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from "../store/authSlice"
import { Button, Logo, Input} from "./index"
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {

    const navigate = useNavigate();
    const [error,setError] = useState("");
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm()

    const signUp = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if(userData){
               const userData = await authService.getCurrentUser()
               if(userData) dispatch(login(userData));
               navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }


  return (
    <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
        <form onSubmit={handleSubmit(signUp)} className='space-y-4'>
            <Input 
                label="Full Name: "
                placeholder="Enter your full name"
                {...register("name",{
                    required: true,
                })}
            />

             <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                    {...register("email", {
                        required: true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                    }
                })}
            />

            <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password",{
                    required: true
                })}
            />

            <Button 
                type='submit'
                className='w-full'
            >Create Account</Button>

        </form>
    </div>
  )
}

export default Signup
