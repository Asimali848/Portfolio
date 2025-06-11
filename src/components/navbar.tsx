// import { Link, useNavigate } from "react-router-dom";
// // import Logo from "../assets/img/Logo1.jpg";
// import { Button } from "./ui/button";
// import { Gallery } from "iconsax-react";
// const Nav = () => {
//   const navigate = useNavigate();
//   return (
//     <nav className="fixed inset-x-0 top-5 z-[1] w-full">
//       <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full bg-white/8 py-2.5 pr-2.5 pl-5 backdrop-blur-3xl">
//         <div className="flex w-[104px] items-center justify-start">
//           <Link to="/"></Link>
//           <Gallery size={20} color="#FFFFFF" className="size-5 " />
//           {/* <img src={Logo} alt="logo" className="size-10 rounded-full" /> */}
//         </div>
//         <div className="flex items-center justify-center gap-7 text-lg">
//           <Link to="/">Home</Link>
//           {[ "About", "Works", "Contact"].map((item, index) => (
//             <Link key={index} to={`/${item.toLowerCase()}`}>
//               {item}
//             </Link>
//           ))}
//         </div>
//         <Button
//           type="button"
//           variant="default"
//           size="lg"
//           className="text-black' rounded-full cursor-pointer"
//           onClick={() => navigate("/contact")}
//         >
//           Connect
//         </Button>
//       </div>
//     </nav>
//   );
// };
// export default Nav;
import { FtxToken, Gallery } from "iconsax-react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

// assuming you use shadcn/ui

const Nav = () => {
  const navigate = useNavigate();

  const navLinks = ["About", "Works", "Contact"];

  return (
    <nav className="fixed inset-x-0 top-5 z-20 w-full">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full bg-white/8 py-2.5 pr-2.5 pl-5 backdrop-blur-3xl">
        {/* Logo */}
        <div className="flex w-[104px] items-center justify-start gap-2 text-white">
          <Gallery size={20} color="#FFFFFF" className="size-5" />
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center justify-center gap-7 text-lg text-white md:flex">
          <Link to="/">Home</Link>
          {navLinks.map((item, index) => (
            <Link key={index} to={`/${item.toLowerCase()}`}>
              {item}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button
            type="button"
            variant="default"
            size="lg"
            className="cursor-pointer rounded-full text-white"
            onClick={() => navigate("/contact")}
          >
            Connect
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="px-4 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <FtxToken className="fill-primary h-6 w-6" variant={"Bold"} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-white p-6">
              <div className="mt-6 flex flex-col gap-6">
                <Link
                  to="/"
                  className="text-lg font-medium"
                  onClick={() => navigate("/")}
                >
                  Home
                </Link>
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={`/${item.toLowerCase()}`}
                    className="text-lg font-medium"
                    onClick={() => navigate(`/${item.toLowerCase()}`)}
                  >
                    {item}
                  </Link>
                ))}
                <Button
                  type="button"
                  variant="default"
                  className="mt-4 w-full rounded-full text-black"
                  onClick={() => navigate("/contact")}
                >
                  Connect
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
