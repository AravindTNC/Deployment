import React, { useState } from 'react'
import illustration from '../assets/illustration.jpg'
import logo from '../assets/logo.png' 
import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'
import Checkbox from '../components/Checkbox.jsx'
import { useNavigate } from 'react-router-dom'



const LoginPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    keepLoggedIn: false,
  })
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    const { username, password } = formData
    let newErrors = {}
    if (!username) newErrors.username = 'Username is required'
    if (!password) newErrors.password = 'Password is required'

    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      alert('Login successful ✅')
      // You can navigate or handle login here
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="w-full md:w-1/2 bg-blue-600 text-white flex items-center justify-center p-10">
        <div className="max-w-md w-full">
          {/* Logo + Brand Name */}
          <div className="flex items-center justify-center mb-6">
            <img
              src={logo}
              alt="rxresu logo"
              className="w-8 h-8 mr-2"
            />
            <div className="text-2xl font-bold">rxresu.me</div>
          </div>

          <h2 className="text-3xl font-semibold mb-6">Welcome Back</h2>

          {/* Google Login Button */}
          <button className="w-full bg-white text-blue-600 rounded-md py-2 mb-4 font-medium flex items-center justify-center gap-2">
            <span>G</span> Log in with Google
          </button>

          <div className="text-center text-sm mb-4">Or Login with Email</div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder="Type your username"
              error={errors.username}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              error={errors.password}
            />
            <div className="flex justify-between items-center text-sm">
              <Checkbox
                name="keepLoggedIn"
                label="Keep me logged in"
                checked={formData.keepLoggedIn}
                onChange={handleChange}
              />
              <button
                type="button"
                className="text-white underline"
                onClick={() => navigate('/forgot-password')}
              >
                Forgot your password?
              </button>
            </div>
            <Button type="submit">Login</Button>
          </form>

          <div className="text-sm mt-4">
            Haven't sign up yet? <span className="underline">Sign up</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-10">
        <img src={illustration} alt="illustration" className="max-w-full" />
      </div>
    </div>
  )
}

export default LoginPage
