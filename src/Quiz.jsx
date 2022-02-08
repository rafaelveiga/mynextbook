import { useEffect, useState } from "react";
import QuizController from "./components/QuizController";
import Categories from "./components/QuizStep/Categories";
import Pages from "./components/QuizStep/Pages";
import useFetch from "./shared/hooks/useFetch";
import { API_BASE_URL } from "./utils/constants";

function Quiz() {
  const [currentStep, setStep] = useState(0);
  const [values, setValues] = useState({
    categories: [],
    pages: 50,
  });

  const [parameters, getParameters] = useFetch(`${API_BASE_URL}/parameters`);

  useEffect(() => {
    getParameters();
  }, [""]);

  useEffect(() => {
    if (parameters && parameters.length) {
      fetch(`${API_BASE_URL}/descriptors/${parameters[currentStep].id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [currentStep, parameters]);

  return (
    <div className="flex flex-col">
      {!parameters.isLoading && (
        <QuizController currentStep={currentStep} steps={parameters.data} />
      )}
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
              currentStep === parameters.data.length - 1 && "opacity-50"
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
