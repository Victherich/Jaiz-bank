import React, { useState } from 'react';
import '../CSS/ContactUs.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Swal from 'sweetalert2'; // Import Swal if not already imported

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



const handleSubmit = async (e) => {
  e.preventDefault();

  // Show loading state
  Swal.fire({
    title: 'Sending...',
    text: 'Please wait while we send your message.',
    allowOutsideClick: false,
    showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading();
    } 
  });

  try {
    const response = await fetch('https://jizbankplc.com/api/contact_form_endpoint.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (result.success) {
      // Close the loading alert and show success
      Swal.fire({
        icon: 'success',
        title: 'Message Sent',
        text: 'Your message has been sent successfully!',
        confirmButtonText: 'OK'
      });
      // Optionally clear the form fields after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } else {
      // Close the loading alert and show error
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: result.error || 'Something went wrong. Please try again.',
        confirmButtonText: 'OK'
      });
    }
  } catch (error) {
    // Close the loading alert and show error
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Error sending the message. Please try again later.',
      confirmButtonText: 'OK'
    });
  }
};


  return (
    <div className="contact-page">
      <div className="contact-heading animate__animated animate__slideInLeft animate__slower">
        <h2 className='animate__animated animate__slideInRight animate__slower'>Contact Us</h2>
      </div>

      
      <div className="contact-content">
        <div style={{textAlign:"center", padding:"20px 10px", color:"#000050"}}>
         
          
        </div>
        <br/>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="phone"
              name="phone"
              placeholder="Your Phone number"
              className="contact-input"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="contact-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className="contact-button" type="submit">Send Message</button>
          </form>

          {feedback && <p>{feedback}</p>}
        </div>
<br/>
       
      </div>
        <div className="map-section" style={{width:"100%",display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
          <h3 style={{textAlign:"center"}}>Find Us on the Map</h3>
          <p style={{textAlign:"center"}} >Visit our office during business hours. We're located at:</p>
          <div className="map-embed" style={{width:"100%"}}>
            {/* Replace with your actual Google Maps embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE!2dYOUR_LONGITUDE!3dYOUR_ZOOM!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zYOUR_COMPANY_NAME!5e0!3m2!1sen!2sus!4vYOUR_MAP_EMBED_CODE"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
            <p className="map-placeholder-text">
              {/* *Please replace the `src` attribute above with your actual Google Maps embed code.* */}
            </p>
          </div>
        </div>
    </div>
  );
};

export default Contact;




// import React, { useState } from 'react';
// import '../CSS/ContactUs.css';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; // Added FaClock
// import Swal from 'sweetalert2'; // Import Swal if not already imported

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const [feedback, setFeedback] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Show loading state
//     Swal.fire({
//       title: 'Sending...',
//       text: 'Please wait while we send your message.',
//       allowOutsideClick: false,
//       showConfirmButton: false,
//       willOpen: () => {
//         Swal.showLoading();
//       }
//     });

//     try {
//       const response = await fetch('https://jizbankplc.com/api/contact_form_endpoint.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const result = await response.json();

//       if (result.success) {
//         // Close the loading alert and show success
//         Swal.fire({
//           icon: 'success',
//           title: 'Message Sent',
//           text: 'Your message has been sent successfully!',
//           confirmButtonText: 'OK'
//         });
//         // Optionally clear the form fields after submission
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           message: ''
//         });
//       } else {
//         // Close the loading alert and show error
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: result.error || 'Something went wrong. Please try again.',
//           confirmButtonText: 'OK'
//         });
//       }
//     } catch (error) {
//       // Close the loading alert and show error
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Error sending the message. Please try again later.',
//         confirmButtonText: 'OK'
//       });
//     }
//   };

//   return (
//     <div className="contact-page">
//       <div className="contact-heading animate__animated animate__slideInLeft animate__slower">
//         <h2 className='animate__animated animate__slideInRight animate__slower'>Contact Us</h2>
//       </div>

//       <div className="contact-content">
//         <div style={{ textAlign: "center", padding: "20px 10px", color: "#000050" }}>
//           <h3>We'd Love to Hear From You!</h3>
//           <p>Whether you have a question about our services, need support, or want to give us feedback, our team is ready to assist you. Fill out the form below or reach out using the contact details provided.</p>
//         </div>

//         <div className="contact-info-and-form-container">
//           <div className="contact-info">
//             <h3>Get in Touch</h3>
//             <p>We're here to help and answer any question you might have. We look forward to hearing from you.</p>
//             <div className="info-item">
//               <FaMapMarkerAlt className="icon" />
//               <p>123 Business Avenue, City, State, ZIP Code</p>
//             </div>
//             <div className="info-item">
//               <FaPhone className="icon" />
//               <p>+1 (555) 123-4567</p>
//             </div>
//             <div className="info-item">
//               <FaEnvelope className="icon" />
//               <p>info@yourcompany.com</p>
//             </div>
//             <div className="info-item">
//               <FaClock className="icon" />
//               <p>Monday - Friday: 9:00 AM - 5:00 PM (WAT)</p>
//             </div>
//             {/* Optional: Social Media Links */}
//             <div className="social-media">
//               <h3>Follow Us</h3>
//               {/* Add social media icons/links here */}
//               <p> [Facebook] [Twitter] [LinkedIn] [Instagram] </p> {/* Placeholder for actual links */}
//             </div>
//           </div>

//           <div className="contact-form">
//             <h3>Send Us a Message</h3>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 className="contact-input"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 className="contact-input"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="tel" 
//                 name="phone"
//                 placeholder="Your Phone Number"
//                 className="contact-input"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 className="contact-textarea"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//               <button className="contact-button" type="submit">Send Message</button>
//             </form>

//             {feedback && <p>{feedback}</p>}
//           </div>
//         </div>

//         <div className="map-section">
//           <h3>Find Us on the Map</h3>
//           <p>Visit our office during business hours. We're located at:</p>
//           <div className="map-embed">
//             {/* Replace with your actual Google Maps embed code */}
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE!2dYOUR_LONGITUDE!3dYOUR_ZOOM!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zYOUR_COMPANY_NAME!5e0!3m2!1sen!2sus!4vYOUR_MAP_EMBED_CODE"
//               width="100%"
//               height="450"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Our Location"
//             ></iframe>
//             <p className="map-placeholder-text">
//               *Please replace the `src` attribute above with your actual Google Maps embed code.*
//             </p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Contact;
