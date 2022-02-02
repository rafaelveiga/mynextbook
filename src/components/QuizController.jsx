import { useState } from "react";

const QuizController = ({ steps }) => {
  return (
    <div className="bg-sky-500 p-4 text-white">
      <div className="container mx-auto flex">
        {steps.map((step, index) => (
          <>
            <div className="flex flex-col items-center justify-center">
              <div className="w-5 h-5 text-xs bg-sky-50 text-gray-900 rounded-full font-bold flex items-center justify-center">
                {index + 1}
              </div>
              <span className="font-bold text-xs mt-1 text-center">{step}</span>
            </div>
            {index !== steps.length - 1 && (
              <div className="flex-1 mt-2 rounded ml-1 mr-1 bg-sky-300 h-1"></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default QuizController;
