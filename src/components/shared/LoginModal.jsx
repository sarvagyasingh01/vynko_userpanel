import { useState } from "react";
const LoginModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 1 for mobile number, 2 for OTP
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-black border border-gray-700 rounded-lg p-8 w-full max-w-sm text-white text-center relative">
        <button onClick={onClose} className="absolute top-2 right-4 text-2xl text-gray-400 hover:text-white">&times;</button>
        <h2 className="text-3xl font-bold tracking-wider mb-6">VYNKO</h2>
        
        {step === 1 ? (
          <>
            <p className="mb-4">Enter Your Mobile Number</p>
            <input type="tel" className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-center mb-4" placeholder="e.g., 9876543210" />
            <button onClick={() => setStep(2)} className="w-full bg-white text-black font-bold py-2 rounded-md hover:bg-gray-300">GET OTP</button>
          </>
        ) : (
          <>
            <p className="mb-4">Enter the 4-digit OTP sent to your number</p>
            <div className="flex justify-center space-x-4 mb-4">
              {[...Array(4)].map((_, i) => (
                <input key={i} type="text" maxLength="1" className="w-12 h-14 bg-gray-800 border border-gray-600 rounded p-2 text-center text-2xl" />
              ))}
            </div>
            <button onClick={onClose} className="w-full bg-white text-black font-bold py-2 rounded-md hover:bg-gray-300">Confirm</button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;