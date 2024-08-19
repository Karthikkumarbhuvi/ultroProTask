import { Link } from 'react-router-dom';
import Logo from '../images/logo/logo-icon.svg';
import DarkModeSwitcher from './DarkModeSwitcher';
import DropdownMessage from './DropdownMessage';
import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';
import Dwns from '../images/icon/dwns.svg';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-999 ps-0 flex w-full bg-white  dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between py-4 px-4 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

            <div className="mx-auto mt-4.5 mb-5.5 grid  grid-cols-3 rounded-md py-2.5 invisible lg:visible">
        <div className="flex flex-col  gap-7  xsm:flex-row">
                <span className="font-semibold text-midblack dark:text-white">
                  Buy Crpto
                </span>
                <span className="font-semibold text-midblack dark:text-white">
                  Market
                </span>
                
             
              
                <span className="font-semibold text-midblack dark:text-white">
                  Market
                </span>
                
              
              
                <span className="font-semibold text-midblack dark:text-white">
                  Trade
                </span>
                
              
              
                <span className="font-semibold text-midblack dark:text-white">
                  Academy
                </span>
                
              
              
                <span className="font-semibold text-midblack dark:text-white">
                  Exchange
                </span>
                
              
              
                <span className="font-semibold text-midblack dark:text-white">
                  Features
                </span>
                
              
              
                <span className="font-semibold text-midblack dark:text-white">
                  Swap
                </span>
                
              
              
                <span className="font-semibold text-midblack dark:text-white">
                  Convert
                </span>
                
              </div>
            </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
          <img src={Dwns} alt="User" />
          <Link
              to="#"
              className="inline-flex items-center justify-center rounded-md bg-orange py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Deposit
            </Link>

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}
{/* <!-- User Area --> */}
<DropdownUser />
          {/* <!-- User Area --> */}
            {/* <!-- Chat Notification Area --> */}
            {/* <DropdownMessage /> */}
            {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!w-full delay-300'
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && 'delay-400 !w-full'
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!w-full delay-500'
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-[0]'
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-200'
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
            {/* <!-- Chat Notification Area --> */}
            {/* <!-- Dark Mode Toggler --> */}
            <DarkModeSwitcher />
            {/* <!-- Dark Mode Toggler --> */}
          </ul>

          
        </div>
        
      </div>
    </header>
  );
};

export default Header;
