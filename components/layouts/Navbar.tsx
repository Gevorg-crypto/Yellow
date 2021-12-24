import React, { useState } from 'react';

import Link from 'next/link';

function Navbar() {
  const [filterIsTrue, setFilterIsTrue] = useState(false);
  const [modalIsTrue, setModalIsTrue] = useState(false);

  return (
    <>
      <header className="w-full flex justify-between bg-green-800 items-center py-3 px-5">
        <div className="basis-1/2">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="hidden md:flex ">
          <div className="mr-3 text-white hover:border-b">
            <Link href="/account">JOGS</Link>
          </div>
          <div className="mr-3 text-white hover:border-b">
            <Link href="/info">INFO</Link>
          </div>
          <div className="mr-3 text-white hover:border-b">
            <Link href="">CONTACT US</Link>
          </div>
        </div>
        <div onClick={() => setFilterIsTrue(!filterIsTrue)}>
          {!filterIsTrue ? (
            <img src="/images/filter.png" alt="" />
          ) : (
            <img src="/images/filterActive.png" alt="" />
          )}
        </div>
        <div onClick={() => setModalIsTrue(true)} className="md:hidden">
          <img src="/images/menu.png" alt="" />
        </div>
      </header>
      {filterIsTrue ? (
        <div className="bg-gray-100 flex p-3 justify-around md:justify-center">
          <div className="flex items-center md:mr-2">
            <label htmlFor="" className="text-sm mr-1 text-gray-500 flex-auto">
              Date from
            </label>
            <input
              type="text"
              className="rounded-lg w-20 border-2 border-gray-800"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="" className="text-sm mr-1 text-gray-500 flex-auto">
              Date to
            </label>
            <input
              type="text"
              className="rounded-lg w-20 border-2 border-gray-800"
            />
          </div>
        </div>
      ) : (
        ''
      )}
      {modalIsTrue ? (
        <div className="absolute top-0 bg-white w-full h-full">
          <div className="flex justify-between items-center p-5">
            <div>
              <img src="/logo.png" alt="" />
            </div>
            <div onClick={() => setModalIsTrue(false)}>
              <img src="/x.png" width="21" alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-80 text-3xl">
            <Link href="/account">JOGS</Link>
            <Link href="/info">INFO</Link>
            <Link href="">CONTACT US</Link>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default Navbar;
