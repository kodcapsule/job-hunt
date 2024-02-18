import Job from "./Job";

function MainContent() {
  return (
    <main className=" bg-light-grayish-cyan-background container-customized h-dvh flex flex-col gap-10 lg:gap-6 pt-8 md:pt-4 items-center">
      <Job />
      <Job />
      <Job />
      <Job />
      <Job />
    </main>
  );
}

export default MainContent;
