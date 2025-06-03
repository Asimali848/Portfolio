import { Gallery } from "iconsax-react";
import { Link } from "react-router-dom";

import { Button } from "./ui/button";

const Nav = () => {
  return (
    <nav className="fixed inset-x-0 top-5 z-[1] w-full">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full bg-white/8 py-2.5 pr-2.5 pl-5 backdrop-blur-3xl">
        <div className="flex w-[104px] items-center justify-start">
          <Gallery size={20} color="#FFFFFF" className="size-5" />
        </div>
        <div className="flex items-center justify-center gap-7 text-lg">
          {["Home", "About", "Works", "Contact"].map((item, index) => (
            <Link key={index} to={`/${item.toLowerCase()}`}>
              {item}
            </Link>
          ))}
        </div>
        <Button
          type="button"
          variant="default"
          size="lg"
          className="text-black' rounded-full"
        >
          Connect
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
