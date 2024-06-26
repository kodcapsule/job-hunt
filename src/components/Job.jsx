import Skill from "./Skill";
import JobDescription from "./JobDescription";
import CompanyLogo from "./CompanyLogo";
import Updates from "./Updates";

function Job({ job }) {
  return (
    <article
      className={`mx-auto p-2 lg:p-1 flex flex-col justify-center lg:flex-row rounded-lg shadow-lg bg-white relative lg:w-10/12 ${
        job.featured &&
        "border-l-8 border-primary-dark-cyan lg:flex lg:justify-between"
      }`}
    >
      <div className="job__top__section">
        <div className="company-logo absolute -top-8 left-3 w-20 h-20 lg:top-4 lg:left-2">
          <CompanyLogo logo={job.logo} />
        </div>
        <div className="content flex flex-row gap-6 justify-center lg:justify-start  mt-8 lg:mt-0 px-2">
          <h2 className=" text-primary-dark-cyan text-lg font-bold capitalize ">
            {job.company}
          </h2>
          {<Updates featured={job.featured} new_job={job.new} />}
        </div>
        <h3 className=" job-tittle text-very-dark-grayish-cyan text-lg font-bold px-2 hover:text-primary-dark-cyan   transition-element">
          {job.position}
        </h3>
        <JobDescription
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
        />
      </div>
      <div className="job__bottom__section ">
        <Skill language={job.role} />
        <Skill language={job.level} />
        {job.tools.map((tool) => (
          <Skill language={tool} key={tool} />
        ))}
        {job.languages.map((language) => (
          <Skill language={language} key={language} />
        ))}
      </div>
    </article>
  );
}

export default Job;
