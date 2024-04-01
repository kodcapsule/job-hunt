import { useState, useEffect } from "react";

import Job from "./Job";
// import data from "../services/data/data.json";
import SearchBar from "./SearchBar";

import useLoadData from "../hooks/useLoadData";

function MainContent() {
  const jobs = useLoadData();

  return (
    <main className="bg-light-grayish-cyan-background  relative">
      <div className="search absolute  right-[30%] -top-8   items-center w-5/12 ">
        <SearchBar />
      </div>

      {jobs ? (
        <div className="mainContent flex flex-col gap-12 lg:gap-6 pt-12  lg:pb-10 px-4 md:pt-4 items-center container-customized ">
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
