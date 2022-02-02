function Header() {
  return (
    <header className="bg-slate-900">
      <nav className="flex justify-between w-full bg-slate-900 text-white p-4">
        <a href="/">
          <span className="font-semibold text-xl tracking-tight">
            MeuPróximoLivro.com
          </span>
        </a>
        <div className="md:items-center md:w-auto flex">
          <div className="md:flex hidden">
            <a className="block md:text-white mr-4" href="/link">
              Link 1
            </a>
            <a className="block md:text-white mr-4" href="/link">
              Link 2
            </a>
            <a className="block md:text-white mr-4" href="/link">
              Link 3
            </a>
            <a className="block md:text-white mr-4" href="/link">
              Link 4
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
