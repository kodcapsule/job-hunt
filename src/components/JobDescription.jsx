function JobDescription() {
  return (
    <p className=" flex flex-row  items-center gap-2 lg:gap-4 divide-x-[1.8px] divide-solid divide-dark-grayish-cyan ">
      <span className=" text-sm font-semibold text-dark-grayish-cyan ">
        1d ago
      </span>
      <span className=" text-sm font-semibold text-dark-grayish-cyan px-4">
        Full Time
      </span>
      <span className=" text-sm font-semibold text-dark-grayish-cyan px-4">
        USA only
      </span>
    </p>
  );
}

export default JobDescription;
