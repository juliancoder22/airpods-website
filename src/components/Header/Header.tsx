const Header = () => {
  return (
    <header className="flex justify-between items-center absolute top-0 w-full p-4 bg-white">
      <span>Airpods Website</span>
      <nav className="flex justify-center gap-10 items-center pl-12">
        <a href="#" className="font-semibold text-stone-900">
          Demos
        </a>
        <a href="#" className="font-semibold text-stone-900">
          Pages
        </a>
        <a href="#" className="font-semibold text-stone-900">
          Support
        </a>
        <a href="#" className="font-semibold text-stone-900">
          Contact
        </a>
      </nav>
      <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg mb-4 text-sm">
        Buy now - Starting at $99
      </button>
    </header>
  );
};

export default Header;
