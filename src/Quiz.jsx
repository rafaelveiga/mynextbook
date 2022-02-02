import { useState } from "react";
import QuizController from "./components/QuizController";
import Categories from "./components/QuizStep/Categories";
import Pages from "./components/QuizStep/Pages";

function Quiz() {
  const [currentStep, setStep] = useState(0);
  const [steps] = useState(["Categorias", "Páginas"]);
  const [values, setValues] = useState({
    categories: [],
    pages: 50,
  });

  return (
    <div className="flex flex-col">
      <QuizController currentStep={currentStep} steps={steps} />
      <div className="items-center bg-gray-200 h-full p-5 pb-14">
        {currentStep === 0 && (
          <Categories
            setValue={(value) => {
              setValues({
                ...values,
                categories: value,
              });
            }}
          />
        )}
        {currentStep === 1 && (
          <Pages
            setValue={(value) => {
              setValues({
                ...values,
                pages: value,
              });
            }}
          />
        )}
      </div>

      <div className="bg-sky-500 p-4 w-full">
        <div className="container mx-auto flex justify-between">
          <button
            onClick={() => setStep(currentStep - 1)}
            class={`bg-gray-900 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded ${
              currentStep === 0 && "opacity-50"
            }`}
            disabled={currentStep === 0}
          >
            Anterior
          </button>
          <button
            onClick={() => setStep(currentStep + 1)}
            class={`bg-gray-900 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded ${
              currentStep === steps.length - 1 && "opacity-50"
            }`}
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
