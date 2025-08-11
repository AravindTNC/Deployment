import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [isOTPSent, setIsOTPSent] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const sendOTP = () => {
    if (!email) {
      setError('Email is required')
      return
    }
    // Simulate OTP send
    setError('')
    setMessage('OTP sent to your email ✅')
    setIsOTPSent(true)
  }

  const verifyOTP = () => {
    if (!otp) {
      setError('Please enter the OTP')
      return
    }
    if (otp === '123456') {
      setMessage('OTP verified ✅ You can now reset your password')
      setError('')
    } else {
      setError('Invalid OTP ❌')
      setMessage('')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Forgot Password</h2>

        <Input
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          error={!isOTPSent && error}
        />

        {!isOTPSent && (
          <Button type="button" onClick={sendOTP} className="mt-4 w-full">
            Send OTP
          </Button>
        )}

        {isOTPSent && (
          <>
            <Input
              label="Enter OTP"
              name="otp"
              type="text"
              value={otp}
              onChange={e => setOtp(e.target.value)}
              placeholder="Enter the OTP sent to your email"
              error={error}
            />

            <Button type="button" onClick={verifyOTP} className="mt-4 w-full">
              Verify OTP
            </Button>
          </>
        )}

        {message && <div className="text-green-600 mt-4">{message}</div>}
        {error && isOTPSent && <div className="text-red-600 mt-2">{error}</div>}
      </div>
    </div>
  )
}

export default ForgotPassword
