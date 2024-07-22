import React from 'react'
import './Forgot.css'
const Forgot = () => {
  return (
    <div className='cont'>
    


    <div class="forgot-container">
        <h2>Forgot Password</h2>
        <p>Enter your email address below and we'll send you a link to reset your password.</p>
        <form>
            <input type="email" placeholder="Email" required></input>
            <div className='button'>
            <button type="submit"><a href="mailto:debatewebsite@gmail.com">Reset Password</a></button>
            </div>
        </form>
        <p>Remember your password? <a href="#">Log in here</a></p>
    </div>




    </div>
  )
}

export default Forgot