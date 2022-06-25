import { useEffect, useState } from "react";

const Pages = ({ setValue }) => {
  const [pages, setPages] = useState(50);

  useEffect(() => {
    setValue(pages);
  }, [pages]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-center font-bold text-3xl">Páginas</h1>
      <h3 className="text-center font-500 text-md mt-2">
        Escolha o seu limite de páginas
      </h3>

      <div className="mt-8">
        <h4
          for="customRange1"
          className="text-center font-500 text-md font-bold form-label"
        >
          até {pages} páginas {pages === "1000" && "ou mais"}
        </h4>
        <input
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          onDrag={(e) => setPages(e.target.value)}
          type="range"
          step="50"
          min="50"
          max="1000"
          className="form-range appearance-none w-full h-3 p-0 rounded-lg bg-white focus:outline-none focus:ring-0 focus:shadow-none"
          id="customRange1"
        />
      </div>
    </div>
  );
};

export default Pages;
