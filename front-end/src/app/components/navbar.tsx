import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import Image from 'next/image';
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-[#da935a] py-4 px-6 flex justify-between items-center shadow-lg font-mitr">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/NULOGO.png"
            alt="Logo"
            width={80}
            height={80}
          />
        </Link>
        <span className="text-white text-xl font-bold">มหาวิทยาลัยนเรศวร</span>
      </div>

      {/* Search Form */}
      <form className="w-[600px] relative">
        <div className="relative">
          <input
            type="search"
            placeholder="ค้นหา"
            className="w-full p-4 rounded-full bg-[#FEF1E6]"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-[#b3a396] rounded-full text-black">
            <AiOutlineSearch />
          </button>
        </div>
      </form>

      {/* User Icon */}
      <div className="flex items-center space-x-2 text-white">
        <BiUserCircle size={32} />
        <span>USER</span>
      </div>
    </nav>
    
  );
}

export default Navbar;

