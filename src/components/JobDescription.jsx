function JobDescription({ job_details }) {
  return (
    <p className=" flex flex-row  items-center gap-2 lg:gap-4 divide-x-[1.8px] divide-solid divide-dark-grayish-cyan ">
      <span className=" text-sm font-semibold text-dark-grayish-cyan ">
        {job_details.time_Elapsed}
      </span>
      <span className=" text-sm font-semibold text-dark-grayish-cyan px-4">
        {job_details.job_type}
      </span>
      <span className=" text-sm font-semibold text-dark-grayish-cyan px-4">
        {job_details.location}
      </span>
    </p>
  );
}

export default JobDescription;
