import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import "../styles/Navbar.css"


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <div>
      <nav className="navMain">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
            
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                <a
                    href="#Projects"
                    className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm text-xl ease-in-out duration-500"
                  >
                    Projects
                  </a>
                  <a
                    href="#About"
                    className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm text-xl ease-in-out duration-500"
                  >
                   About me
                  </a>
                  <a
                    href="#Contact"
                    className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm text-xl ease-in-out duration-500"
                  >
                    Contact me
                  </a>


               

                 

               

                 
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-in-out duration-1000 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu ease-in-out">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center" id="dropMenu">
              
                <a
                  href="#Projects"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base text-xl"
                >
                   Projects
                </a>

                <a
                  href="#About"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base text-xl"
                >
                 About me
                </a>

                <a
                  href="#Contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base text-xl"
                >
                 Contact Me
                </a>

              
              </div>
            </div>
          )}
        </Transition>
      </nav>

      
     
    </div>
  );
}

export default Navbar;