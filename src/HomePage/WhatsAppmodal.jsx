import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Wp from "../assets/Icons1/whatsapp.png";

function WhatsAppModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold uppercase ">Contact <span className='text-yellow-600'>Om Industries</span>  Now </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes size={20} />
          </button>
        </div>
        <div className="text-center">
          <img src={Wp} alt="WhatsApp" className="w-16 h-16 mx-auto mb-4" />
          <p className="mb-4">Feel free to reach out to us via WhatsApp.We are here for The service !</p>
          <a
            href="https://wa.me/919512910010"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Chat with Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default WhatsAppModal;
