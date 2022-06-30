import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuizController from "../components/QuizController";
import Categories from "../components/QuizStep/Categories";
import Pages from "../components/QuizStep/Pages";
import { GET_PARAMETERS } from "../shared/queries";

function Quiz() {
  const [currentStep, setStep] = useState(0);
  const [values, setValues] = useState({
    categories: [],
    "total-pages": 50,
  });
  const parameters = useQuery(GET_PARAMETERS);

  const generatePageUrlFromValues = (values) => {
    console.log(values);

    const result = Object.keys(values).reduce((acc, key, index, array) => {
      if (values[key] !== "") {
        acc += `${key}=${
          values[key].join ? values[key].join(",") : values[key]
        }`;
      }
      return index === array.length - 1 ? acc : `${acc}&`;
    }, "?");

    return result;
  };

  return (
    <div className="flex flex-col">
      {!parameters.loading && (
        <QuizController
          currentStep={currentStep}
          steps={parameters.data.parameters}
        />
      )}
      <div className="items-center bg-gray-200 h-full p-5 pb-14">
        {currentStep === 0 && (
          <Pages
            setValue={(value) => {
              setValues({
                ...values,
                "total-pages": value,
              });
            }}
          />
        )}
        {currentStep === 1 && (
          <Categories
            setValue={(value) => {
              setValues({
                ...values,
                categories: value,
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
              currentStep === parameters.data?.length - 1 && "opacity-50"
            }`}
          >
            Próximo
          </button>

          {currentStep === parameters.data?.parameters.length - 1 && (
            <Link to={`/results${generatePageUrlFromValues(values)}`}>
              <button
                onClick={() => {
                  console.log(values);
                  generatePageUrlFromValues(values);
                }}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Enviar
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
