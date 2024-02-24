function SearchBar() {
  return (
    <form className="  w-11/12  shadow-lg bg-white rounded-md flex flex-row justify-between">
      <input
        type="text"
        placeholder="text"
        className=" px-4 py-2 w-10/12 rounded-md focus:outline-none"
      />
      <button className=" pr-3 text-primary-dark-cyan font-semibold">
        search
      </button>
    </form>
  );
}

export default SearchBar;
