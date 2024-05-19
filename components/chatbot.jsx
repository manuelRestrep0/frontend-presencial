"use client";
import React, { useState, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'Bot', text: 'Hola! ¿Cómo te puedo ayudar hoy?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, { sender: 'Tu', text: inputValue }]);
      setInputValue('');
    }
  };

  useEffect(() => {
    if (messages[messages.length - 1].sender === 'Tu') {
      setTimeout(() => {
        setMessages([...messages, { sender: 'Bot', text: 'Soy un bot, ¿En qué te puedo ayudar?' }]);
      }, 1000);
    }
  }, [messages]);

  return (
    <div>
      <button
        className="fixed bottom-4 right-4 p-1 text-white rounded-full"
        style={{marginRight:'85%', padding: '30px'}}
        onClick={handleToggle}
      >
        <img src="https://play-lh.googleusercontent.com/N3hYXUR0jnKDlWOyfNRD-noehhnLFbW0FBCEBBVAf-gRK_Ekm7i-r7ix-I19qw-JZQ=w240-h480-rw" alt="chatbot"></img>
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white shadow-lg border border-gray-300 rounded-lg p-4" style={{marginRight:'65%'}}>
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`my-2 p-2 rounded ${message.sender === 'AI' ? 'bg-gray-200' : 'bg-blue-100 self-end'}`}
                >
                  <strong>{message.sender}:</strong> {message.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="mt-2 flex">
              <input
                type="text"
                className="flex-1 border rounded px-2 py-1"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Escribe tu duda"
              />
              <button type="submit" className="ml-2 px-4 py-1 bg-blue-500 text-white rounded">
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

