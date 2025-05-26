import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="absolute top-6 right-0 left-0 mx-auto h-16 w-full max-w-[1440px] rounded-full bg-black p-5 shadow-lg shadow-[#456960]">
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <span className="text-base font-bold">Logo</span>
          </div>
          <div className="flex items-center justify-center gap-7 text-lg">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/service"}>Service</Link>
            <Link to={"/work"}>Works</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
          <div className="flex items-center justify-center gap-2 text-lg">
            <span>Connect Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
