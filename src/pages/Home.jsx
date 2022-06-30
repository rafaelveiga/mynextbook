function Home() {
  return (
    <div className="w-full h-screen">
      <main>
        <div className="flex flex-1 bg-gray-100 py-24 justify-center">
          <div className="p-12 text-center max-w-2xl">
            <div className="md:text-3xl text-3xl font-bold">
              Meu Próximo Livro
            </div>
            <div className="text-xl font-normal mt-4">
              Descubra o seu próximo livro respondendo perguntas simples
            </div>
            <div className="mt-6 flex justify-center h-12 relative">
              <a
                href="/quiz"
                className="flex shadow-md font-medium absolute py-2 px-4 text-green-100
        cursor-pointer bg-green-600 rounded text-lg tr-mt"
              >
                Comece o quiz
              </a>
            </div>
          </div>
        </div>
      </main>
      <div className="bottomNav fixed bottom-0 w-full">
        <nav className="md:hidden bottom-0 w-full bg-gray-700 text-xs">
          <ul className="flex justify-around items-center text-white text-center opacity-75 text-lg font-bold">
            <li className="p-4 hover:bg-gray-500">
              <a href="/link">
                <span>Link 1</span>
                <svg
                  className="h-6 w-6 fill-current mx-auto"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z"
                    fill-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li className="p-4 hover:bg-gray-500">
              <a href="/link">
                <span>Link 2</span>
                <svg
                  className="h-6 w-6 fill-current mx-auto"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z"
                    fill-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li className="p-4 hover:bg-gray-500">
              <a href="/link">
                <span>Link 3</span>
                <svg
                  className="h-6 w-6 fill-current mx-auto"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z"
                    fill-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li className="p-4 hover:bg-gray-500">
              <a href="/link">
                <span>Link 4</span>
                <svg
                  className="h-6 w-6 fill-current mx-auto"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z"
                    fill-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;
