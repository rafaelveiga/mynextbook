import { useEffect, useState } from "react";

const Categories = ({ setValue }) => {
  const [categories] = useState([
    "Artes",
    "Biografia",
    "Ciências",
    "Culinária",
    "Desenvolvimento Humano",
    "Educação",
    "Esportes",
    "Ficção Científica",
    "Geografia",
    "História",
    "Matemática",
  ]);

  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    setValue(selectedCategories);
  }, [selectedCategories]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-center font-bold text-3xl">Categoria</h1>
      <h3 className="text-center font-500 text-md mt-2">
        Escolha categorias de seu interesse
      </h3>

      <div className="grid gap-4 grid-cols-5 mt-8">
        {categories.map((category) => (
          <div
            key={category.name}
            onClick={() => {
              if (selectedCategories.includes(category)) {
                setSelectedCategories(
                  selectedCategories.filter(
                    (selectedCategory) => selectedCategory !== category
                  ),
                  () => {
                    setValue(selectedCategories);
                  }
                );
              } else {
                setSelectedCategories([...selectedCategories, category], () => {
                  setValue(selectedCategories);
                });
              }
            }}
            className={`
              rounded
              drop-shadow-lg
              cursor-pointer
              text-center
              p-5
              transition
              ease-linear
              hover:bg-gray-900
              hover:text-white
              ${
                selectedCategories.includes(category)
                  ? "bg-gray-500 text-white"
                  : "bg-white text-gray-800"
              }
            `}
          >
            <strong className="text-lg block">{category}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
