import { Fragment } from "react";

const QuizController = ({ steps, currentStep }) => {
  return (
    <div className="bg-sky-500 p-4 text-white">
      <div className="container mx-auto flex">
        {steps.map((step, index) => (
          <Fragment key={step.parameter}>
            <div className="flex flex-col items-center justify-center">
              <div
                className={`
                  text-xs
                  w-5
                  h-5
                  ${
                    currentStep === index
                      ? "bg-sky-700 text-white"
                      : "bg-gray-200 text-gray-800 opacity-50"
                  }
                  rounded-full
                  font-bold
                  flex
                  items-center
                  justify-center
                `}
              >
                {index + 1}
              </div>
              <span
                className={`
                  font-bold
                  text-xs
                  mt-1
                  text-center
                  ${currentStep !== index && "opacity-50"}
                `}
              >
                {step.parameter}
              </span>
            </div>
            {index !== steps.length - 1 && (
              <div className="flex-1 mt-2 rounded ml-1 mr-1 bg-sky-300 h-1"></div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default QuizController;
