import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="text-cloud4 text-xs flex gap-2 bg-cloud text-center flex justify-center  p-1">
      <p>
        CloudPro Ai Conference on Cloud Computing, Computer Vision and Image
        Processing.
      </p>
      <Link href="#" className="underline">
        Book Now
      </Link>
    </div>
  );
};

export default Header;