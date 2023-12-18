import React from 'react';
import { FaFacebookSquare, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const openFacebook = () => {
    window.open('https://www.facebook.com/profile.php?id=61554123743719');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/luxors_designer.studio');
  };

  const sendEmail = () => {
    window.location.href = 'mailto:support@luxors.in';
  };

  const makePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div className="flex flex-col pt-10 items-center h-screen bg-gray-100">
      <div className='m-4 mb-8 text-4xl font-bold text-gray-500'>For Contacting us</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-[90%] sm:max-w-[50%]">
        <div className="flex items-center justify-center p-6 bg-white shadow-md rounded-lg cursor-pointer" onClick={openFacebook}>
          <FaFacebookSquare className="text-4xl text-blue-600" />
          <p className="ml-3 font-semibold">Facebook</p>
        </div>
        <div className="flex items-center justify-center p-6 bg-white shadow-md rounded-lg cursor-pointer" onClick={openInstagram}>
          <FaInstagram className="text-4xl text-pink-600" />
          <p className="ml-3 font-semibold">Instagram</p>
        </div>
        <div className="flex items-center justify-center p-6 bg-white shadow-md rounded-lg cursor-pointer" onClick={sendEmail}>
          <FaEnvelope className="text-4xl text-red-600" />
          <p className="ml-3 font-semibold">Email</p>
        </div>
        <div className="flex items-center justify-center p-6 bg-white shadow-md rounded-lg cursor-pointer" onClick={() => makePhoneCall('+919307106029')}>
          <FaPhoneAlt className="text-4xl text-green-600" />
          <p className="ml-3 font-semibold">Call</p>
        </div>
      </div>
    </div>
  )
}

export default Contact;