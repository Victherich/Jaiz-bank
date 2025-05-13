import React from 'react'
import '../CSS/ThierAbout.css'
import { useNavigate } from 'react-router-dom'

const ThierAbout = () => {
    const navigate = useNavigate();

  return (
    <div className='theirabout'>
        <div className='theiraboutleft'>

        </div>
        <div className='theiraboutright'>
            <p>
                Welcome to Elite Wealth Global
, your trusted partner in [real estate nihe, eg. buying, selling, leasng, or property management]. Explore our services, listings and insights to help you make informed decisions in today's real estate market.       </p>
            <div className='theiraboutrightmid'>
                <h3>
                    15+
                </h3>
                <p>Years Experience</p>
            </div>
            <div className='theiraboutrightdown'>
                <p>
                    ✔ We can save your money
                </p>
                <p>
                ✔ Prodution or trading of good
                </p>
                <p>
                ✔ Our Policies are flexible and transparent
                </p>
            </div>
            <button onClick={()=>navigate('/aboutus')}>
                MORE INFORMATION
            </button>
        </div>
      
    </div>
  )
}

export default ThierAbout
