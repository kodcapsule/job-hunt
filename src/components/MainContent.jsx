import Job from "./Job";
import SearchBar from "./SearchBar";
import useLoadData from "../hooks/useLoadData";

function MainContent() {
  const jobs = useLoadData();

  return (
    <main className="bg-light-grayish-cyan-background  relative">
      <div className="search absolute  right-[30%] -top-8   items-center w-5/12 ">
        <SearchBar jobs={jobs} />
      </div>

      {jobs ? (
        <div className="mainContent container-customized ">
          {jobs.map((job) => (
            <Job job={job} key={job.id} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}

export default MainContent;
