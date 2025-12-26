import Link from "next/link";
import React from "react";

const Navbar = () => {
  const items = [
    { name: "Home", path: "/" },
    { name: "Modals", path: "/modals" },
    { name: "Drawer", path: "/drawer" },
    { name: "Carousel", path: "/carousel" },
    { name: "Side Navbar", path: "/side-navbar" },
    { name: "Toggle Theme", path: "/toggle-theme" },
    { name: "Tables", path: "/tables" },
  ];

  return (
    <ul className='flex justify-between p-2 w-full border-b-4 text-lg font-mono border-[#BF9550]'>
      {items.map((item) => (
        <li key={item.name} className='hover:text-yellow-500'>
          <Link href={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
