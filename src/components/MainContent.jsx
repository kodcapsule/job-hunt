import Job from "./Job";

import { data } from "../services/data/data";

function MainContent() {
  return (
    <main className=" bg-light-grayish-cyan-background container-customized flex flex-col gap-12 lg:gap-6 pt-12  lg:pb-10 px-4 md:pt-4 items-center">
      {data.map((job) => (
        <Job job={job} key={job["company"]} />
      ))}
    </main>
  );
}

export default MainContent;
