import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"

export default function Contact() {
  return (
    <div className='w-full'>

      <div>

        <div>
          <img src='' alt='icon'/>
          <h1>Arctic Travels</h1>
          <p>Book your trip in minutes, get full <br/> control for much longer.</p>
          <div>
            <FaFacebook size={30}/>
            <FaInstagram size={30}/>
            <FaTwitter size={30}/>
          </div>
        </div>

        <div>
          <div>
            <h2>Company</h2>
            <ul>
              <li>About</li>
              <li>Career</li>
              <li>Mobile</li>
            </ul>
          </div>

          <div>
            <h2>Contact</h2>
            <ul>
              <li>FAQ</li>
              <li>Press</li>
              <li>Affiliates</li>
            </ul>
          </div>
        </div>

      </div>

      <div>
          <p>2022 Angus Designs - All right reserved</p>
          <div>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
      </div>

    </div>
  )
}