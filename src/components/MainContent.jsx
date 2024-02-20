import Job from "./Job";

import { data } from "../services/data/data";

function MainContent() {
  return (
    <main className=" bg-light-grayish-cyan-background container-customized h-dvh flex flex-col gap-10 lg:gap-6 pt-8 md:pt-4 items-center">
      {data.map((job) => (
        <Job job={job} key={job["company"]} />
      ))}
    </main>
  );
}

export default MainContent;
