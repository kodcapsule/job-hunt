import Job from "./Job";
import { data } from "../services/data/data";
import SearchBar from "./SearchBar";

function MainContent() {
  return (
    <main className="bg-light-grayish-cyan-background  relative">
      <div className="search absolute  right-[30%] -top-8   items-center w-5/12 ">
        <SearchBar />
      </div>

      <div className="mainContent flex flex-col gap-12 lg:gap-6 pt-12  lg:pb-10 px-4 md:pt-4 items-center container-customized ">
        {data.map((job) => (
          <Job job={job} key={job["company"]} />
        ))}
      </div>
    </main>
  );
}

export default MainContent;
