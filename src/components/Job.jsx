import Skill from "./Skill";

import JobDescription from "./JobDescription";
import CompanyLogo from "./CompanyLogo";
import Updates from "./Updates";

const featured = true;

function Job() {
  return (
    <article
      className={`mx-auto p-2 flex flex-col justify-center lg:flex-row rounded-lg shadow-md bg-white relative lg:w-10/12 ${
        featured &&
        "border-l-8 border-primary-dark-cyan lg:flex lg:justify-between"
      }`}
    >
      <div className="top flex flex-col mt-5 lg:mt-0 gap-4 lg:gap-2 border-b-2 pb-3 lg:p-0 lg:border-0 lg:ml-20 lg:w-9/12 ">
        <div className="company-logo absolute -top-8 left-3 w-20 h-20 lg:top-4 lg:left-2">
          <CompanyLogo />
        </div>
        <div className="content flex flex-row gap-6 justify-center lg:justify-start  mt-8 lg:mt-0 px-2">
          <h2 className=" text-primary-dark-cyan text-lg font-bold capitalize ">
            Photosnap
          </h2>
          <Updates featured={featured} />
        </div>
        <h3 className=" job-tittle text-very-dark-grayish-cyan text-lg font-bold px-2 hover:text-primary-dark-cyan   transition-element">
          Senior Frontend Developer
        </h3>

        <JobDescription />
      </div>
      <div className="bottom flex flex-wrap mt-5 lg:mt-0 items-center gap-5 lg:justify-center lg:flex-nowrap lg:gap-2 ">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </article>
  );
}

export default Job;
