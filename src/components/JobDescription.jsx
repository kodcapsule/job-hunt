function JobDescription({ postedAt, contract, location }) {
  return (
    <p className=" flex flex-row  items-center gap-2 lg:gap-4 divide-x-[1.8px] divide-solid divide-dark-grayish-cyan ">
      <span className=" text-sm font-semibold text-dark-grayish-cyan ">
        {postedAt}
      </span>
      <span className=" text-sm font-semibold text-dark-grayish-cyan px-4">
        {contract}
      </span>
      <span className=" text-sm font-semibold text-dark-grayish-cyan px-4">
        {location}
      </span>
    </p>
  );
}

export default JobDescription;
