import { useState, useEffect } from "react";
import data from "../services/data/data.json";

function useLoadData() {
  const [jobs, setJobs] = useState("");
  useEffect(() => {
    setJobs(data);
  }, []);
  return jobs;
}

export default useLoadData;
