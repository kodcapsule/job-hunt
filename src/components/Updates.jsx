function Updates({ featured = false }) {
  return (
    <div className="updates flex flex-row gap-2">
      <span className=" px-4 py-1 rounded-full text-center font-semibold text-light-grayish-cyan-ftb text-sm  bg-primary-dark-cyan uppercase  ">
        New!
      </span>
      <span
        className={`px-4 py-1 rounded-full text-center font-bold text-light-grayish-cyan-ftb text-sm bg-very-dark-grayish-cyan uppercase ${
          !featured && "hidden"
        }`}
      >
        Featured
      </span>
    </div>
  );
}

export default Updates;
