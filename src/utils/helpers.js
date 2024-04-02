const keysWords = ["position", "role"];

export const searchJobs = (jobs, searchItem) => {
  return jobs.filter((job) =>
    keysWords.some((key) => job[key].toLowerCase().includes(searchItem))
  );
};
