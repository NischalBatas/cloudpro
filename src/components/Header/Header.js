import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="text-cloud4 text-xs flex gap-2 text-center  justify-center  p-1">
      <p>
        CloudPro Ai Conference on Cloud Computing, Computer Vision and Image
        Processing.
      </p>
      <Link href="#" className="underline font-semibold">
        Book Now
      </Link>
    </div>
  );
};

export default Header;
