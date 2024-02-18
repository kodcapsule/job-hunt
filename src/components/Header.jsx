function Header() {
  return (
    <header className=" -mt-10  bg-primary-dark-cyan container-customized ">
      <div className="  hidden bg-desktop md:block container-customized   lg:p-12 xl:p-20 "></div>
      <div className="bg-mobile block bg-mobile  md:hidden  p-20  "></div>
    </header>
  );
}

export default Header;
