import React, { useState } from 'react';
import './index.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value.toLowerCase());
  };

  const checkInput = () => {
    if (userInput === 'zowi') {
      setMessage(
        `🎉 Happy Birthday my dear nemesis! 🎉 Even though our rival era didn't last long, 
        making plans to destroy your team was one of the best memories I have. 
        Thanks for being a strong opponent that can't be defeated easily. 
        -- GHOST`
      );
    } else if (userInput === 'bethelihem') {
      setMessage(
        `🎂 It's a blessing to have a best friend like you. You're smart, funny, reliable, 
        and so much more. I'm proud to call you my best friend. Thanks for everything! 
        Wishing you a joyful and long life. Happy Birthday! -- DAGM`
      );
    } else {
      setMessage(
        `🤔 Come on, the words are too easy to guess! Give it another shot. 
        But Happy Birthday anyway! 🎉`
      );
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-600 min-h-screen flex flex-col items-center justify-center text-white p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center space-y-6 text-gray-800">
        <h1 className="text-3xl font-bold">🎮 Let's Play a Guessing Game!</h1>
        <p className="text-lg">
          Guess two secret words to unlock special birthday messages. Good luck!
        </p>

        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter a word..."
            value={userInput}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-gray-800"
          />
          <button
            onClick={checkInput}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 rounded-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            Submit
          </button>
        </div>

        {/* Display the message */}
        {message && (
          <div className="bg-blue-100 text-blue-900 p-4 rounded-lg mt-6 shadow-lg">
            <p className="text-lg">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
