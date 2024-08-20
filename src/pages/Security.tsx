import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import userThree from '../images/user/user-03.png';
import fireToast from '../hooks/fireToast';
import { Table } from "../components/TableSettings";
import { Modal } from "../components/ModalSettings";
import GoogleIcon from '../images/icon/google.svg'
import RightIcon from '../images/icon/right.svg'
import PasswordIcon from '../images/icon/password.svg'
import AuthIcon from '../images/icon/auth.svg'
import EmailIcon from '../images/icon/email.svg'
import PhoneIcon from '../images/icon/phone.svg'
import LoginIcon from '../images/icon/login.svg'
import CloseIcon from  '../images/icon/close.svg'
import { useState, useEffect } from "react";
const Settings = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState(localStorage.getItem("alertSettings") ? JSON.parse(localStorage.getItem("alertSettings")) : []);
  useEffect(() => {
    // storing input name
    localStorage.setItem("alertSettings", JSON.stringify(rows));
  }, [rows]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
        rows.map((currRow, idx) => {
          if (idx !== rowToEdit) return currRow;

          return newRow;
        })
      );
  };

  return (
    <>
      <div className="max-w-270 p-5">

        <div className="px-5">

          <div className="grid gap-">
            <div className="col">
              <div className="rounded-sm border  border-bgcolor rounded shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="py-4 px-7 dark:border-strokedark">
                  
                  <h3 className="font-bold text-xl text-black dark:text-white">
                    Authentication
                  </h3>
                  <label
                    className="mb-3 block text-sm font-medium text-gray dark:text-white"
                    htmlFor="fullName"
                  >
                    Improve account and transaction security by adding a second layer of authentication beyond the user’s credential.
                  </label>
                </div>
                
                <div className='flex row justify-between pe-4'>
                  <div className="py-4 px-7 dark:border-strokedark">

                    <h3 className="flex font-medium text-black dark:text-white">
                      <img className="w-5 h-5 rounded" src={GoogleIcon} alt="Default avatar"/> <span className='ps-3'>Google Authenticator</span></h3>
                    <label
                      className="mb-0 block text-sm font-medium text-gray dark:text-white ps-5 ms-3"
                      htmlFor="fullName"
                    >
                      Verify using time-based OTPs generated via Google Authenticator App (recommended)
                    </label>
                    <label
                      className="mb-0 block text-sm font-medium text-gray dark:text-white ps-5 ms-3"
                      htmlFor="fullName"
                    >
                      Change/lost device? <span className='text-orange border-b cursor-pointer'>contact support</span>
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <img className="w-5 h-5 rounded pe-1" src={RightIcon} alt="Default avatar"/>
                  <span className='text-black font-medium text-sm pr-3'>On</span>
                      <Link
                  to="#"
                  className="flex align-center justify-center rounded-md bg-bgcolor py-1.5 px-4 text-center font-medium text-black hover:bg-opacity-90 h-9"
                >
                  Enable
                </Link>
                </div>
                </div>

                <div className='flex row justify-between pe-4'>
                  <div className="py-4 px-7 dark:border-strokedark">

                    <h3 className="flex font-medium text-black dark:text-white">
                      <img className="w-5 h-5 rounded" src={PasswordIcon} alt="Default avatar"/> <span className='ps-3'>Password</span></h3>
                    <label
                      className="mb-0 block text-sm font-medium text-gray dark:text-white ps-5 ms-3"
                      htmlFor="fullName"
                    >
                     Change your password regularly to prevent unauthorized access
                    </label>
                    
                  </div>
                  <div className='flex items-center'>
                    <img className="w-5 h-5 rounded pe-1" src={RightIcon} alt="Default avatar"/>
                  <span className='text-black font-medium text-sm pr-3'>On</span>
                      <Link
                  to="#"
                  className="flex align-center justify-center rounded-md bg-bgcolor py-1.5 px-4 text-center font-medium text-black hover:bg-opacity-90 h-9"
                >
                  Enable
                </Link>
                </div>
                </div>

                <div className='flex row justify-between pe-4'>
                  <div className="py-4 px-7 dark:border-strokedark">

                    <h3 className="flex font-medium text-black dark:text-white">
                      <img className="w-5 h-5 rounded" src={PasswordIcon} alt="Default avatar"/> 
                      <span className='ps-3'>Verified Devices</span></h3>
                    <label
                      className="mb-0 block text-sm font-medium text-gray dark:text-white ps-5 ms-3"
                      htmlFor="fullName"
                    >
                     Check and manage the devices that have accessed your account and the devices that are currently logged in.
                    </label>
                    
                  </div>
                  <div className='flex items-center'>
                    <img className="w-5 h-5 rounded pe-1" src={RightIcon} alt="Default avatar"/>
                  <span className='text-black font-medium text-sm pr-3'>On</span>
                      <Link
                  to="#"
                  className="flex align-center justify-center rounded-md bg-bgcolor py-1.5 px-4 text-center font-medium text-black hover:bg-opacity-90 h-9"
                >
                  Enable
                </Link>
                </div>
                </div>

                <div className='flex row justify-between pe-4'>
                  <div className="py-4 px-7 dark:border-strokedark">

                    <h3 className="flex font-medium text-black dark:text-white">
                      <img className="w-5 h-5 rounded" src={AuthIcon} alt="Default avatar"/> 
                      <span className='ps-3'>Authenticator App</span></h3>
                    <label
                      className="mb-0 block text-sm font-medium text-gray dark:text-white ps-5 ms-3"
                      htmlFor="fullName"
                    >
                     Use Ultrapro/Google Authenticator to protect your account and transactions.
                    </label>
                    
                  </div>
                  <div className='flex items-center'>
                    <img className="w-7 h-7 rounded pe-1" src={CloseIcon} alt="Default avatar"/>
                  <span className='text-black font-medium text-sm pr-3'>OFF</span>
                      <Link
                  to="#"
                  className="flex align-center justify-center rounded-md bg-bgcolor py-1.5 px-4 text-center font-medium text-black hover:bg-opacity-90 h-9"
                >
                  Enable
                </Link>
                </div>
                </div>

                <div className='flex row justify-between pe-4'>
                  <div className="py-4 px-7 dark:border-strokedark">

                    <h3 className="flex font-medium text-black dark:text-white">
                      <img className="w-5 h-5 rounded" src={EmailIcon} alt="Default avatar"/> 
                      <span className='ps-3'>Email</span></h3>
                    <label
                      className="mb-0 block text-sm font-medium text-gray dark:text-white ps-5 ms-3"
                      htmlFor="fullName"
                    >
                     Use Ultrapro/Google Authenticator to protect your account and transactions.
                    </label>
                    
                  </div>
                  <div className='flex items-center'>
                  <label
                    className="block text-sm font-medium text-gray dark:text-white pe-3"
                    htmlFor="fullName"
                  >
                    ka****am@gmail.com
                  </label>
                      <Link
                  to="#"
                  className="flex align-center justify-center rounded-md bg-bgcolor py-1.5 px-4 text-center font-medium text-black hover:bg-opacity-90 h-9"
                >
                  Enable
                </Link>
                </div>
                </div>

                <div className='flex row justify-between pe-4'>
                  <div className="py-4 px-7 dark:border-strokedark">

                    <h3 className="flex font-medium text-black dark:text-white">
                      <img className="w-5 h-5 rounded" src={PhoneIcon} alt="Default avatar"/> 
                      <span className='ps-3'>Phone Number</span></h3>
                    <label
                      className="mb-0 block text-sm font-medium text-gray dark:text-white ps-5 ms-3"
                      htmlFor="fullName"
                    >
                     Use your phone number to protect your account and transactions.
                    </label>
                    
                  </div>
                  <div className='flex items-center'>
                    <img className="w-5 h-5 rounded pe-1" src={RightIcon} alt="Default avatar"/>
                  <span className='text-black font-medium text-sm pr-3'>On</span>
                      <Link
                  to="#"
                  className="flex align-center justify-center rounded-md bg-bgcolor py-1.5 px-4 text-center font-medium text-black hover:bg-opacity-90 h-9"
                >
                  Enable
                </Link>
                </div>
                </div>

                <div className='flex row justify-between pe-4'>
                  <div className="py-4 px-7 dark:border-strokedark">

                    <h3 className="flex font-medium text-black dark:text-white">
                      <img className="w-5 h-5 rounded" src={LoginIcon} alt="Default avatar"/> 
                      <span className='ps-3'>Login Password</span></h3>
                    <label
                      className="mb-0 block text-sm font-medium text-gray dark:text-white ps-5 ms-3"
                      htmlFor="fullName"
                    >
                     Login password is used to log in to your account.
                    </label>
                    
                  </div>
                  <div className='flex items-center'>
                    <img className="w-5 h-5 rounded pe-1" src={RightIcon} alt="Default avatar"/>
                  <span className='text-black font-medium text-sm pr-3'>On</span>
                      <Link
                  to="#"
                  className="flex align-center justify-center rounded-md bg-bgcolor py-1.5 px-4 text-center font-medium text-black hover:bg-opacity-90 h-9"
                >
                  Enable
                </Link>
                </div>
                </div>

              </div>
              <div className="rounded-sm border  border-bgcolor rounded mt-5 shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="py-4 px-7 dark:border-strokedark">
                  
                <h3 className="font-bold text-xl text-black dark:text-white">
                  Account Security
                  </h3>
                  <label
                    className="mb-3 block text-sm font-medium text-gray dark:text-white"
                    htmlFor="fullName"
                  >
                    Manage your account’s access, activity, and security settings
                  </label>
                </div>
                
                <div className='flex row justify-between pe-4'>
                  <div className="py-4 px-7 dark:border-strokedark">

                    <h3 className="flex font-medium text-black dark:text-white">
                      <img className="w-5 h-5 rounded" src={PasswordIcon} alt="Default avatar"/> <span className='ps-3'>KYC</span></h3>
                    <label
                      className="mb-0 block text-sm font-medium text-gray dark:text-white ps-5 ms-3"
                      htmlFor="fullName"
                    >
                      Complete your KYC verification to unlock all the features of your Ultrapro account.
                    </label>
                    
                  </div>
                  <div className='flex items-center'>
                    <img className="w-5 h-5 rounded pe-1" src={RightIcon} alt="Default avatar"/>
                  <span className='text-black font-medium text-sm pr-3'>On</span>
                      <Link
                  to="#"
                  className="flex align-center justify-center rounded-md bg-bgcolor py-1.5 px-4 text-center font-medium text-black hover:bg-opacity-90 h-9"
                >
                  Enable
                </Link>
                </div>
                </div>

                <div className='flex row justify-between pe-4'>
                  <div className="py-4 px-7 dark:border-strokedark">

                    <h3 className="flex font-medium text-black dark:text-white">
                      <img className="w-5 h-5 rounded" src={PasswordIcon} alt="Default avatar"/> <span className='ps-3'>Account Activity</span></h3>
                    <label
                      className="mb-0 block text-sm font-medium text-gray dark:text-white ps-5 ms-3"
                      htmlFor="fullName"
                    >
                     Last login - a few seconds ago
                    </label>
                    
                  </div>
                  <div className='flex items-center'>
                    <img className="w-5 h-5 rounded pe-1" src={RightIcon} alt="Default avatar"/>
                  <span className='text-black font-medium text-sm pr-3'>On</span>
                      <Link
                  to="#"
                  className="flex align-center justify-center rounded-md bg-bgcolor py-1.5 px-4 text-center font-medium text-black hover:bg-opacity-90 h-9"
                >
                  Enable
                </Link>
                </div>
                </div>

                <div className='flex row justify-between pe-4'>
                  <div className="py-4 px-7 dark:border-strokedark">

                    <h3 className="flex font-medium text-black dark:text-white">
                      <img className="w-5 h-5 rounded" src={AuthIcon} alt="Default avatar"/> 
                      <span className='ps-3'>Antiphishing code  </span></h3>
                    <label
                      className="mb-0 block text-sm font-medium text-gray dark:text-white ps-5 ms-3"
                      htmlFor="fullName"
                    >
                     Adding an Anti-phishing code is recommended to help identify whether emails are legitimately sent from Ultrapro or not
                    </label>
                    
                  </div>
                  <div className='flex items-center'>
                    <img className="w-7 h-7 rounded pe-1" src={CloseIcon} alt="Default avatar"/>
                  <span className='text-black font-medium text-sm pr-3'>OFF</span>
                      <Link
                  to="#"
                  className="flex align-center justify-center rounded-md bg-bgcolor py-1.5 px-4 text-center font-medium text-black hover:bg-opacity-90 h-9"
                >
                  Enable
                </Link>
                </div>
                </div>

               

              </div>
              <div className="rounded-sm border  border-bgcolor rounded mt-5 shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="py-4 px-7 dark:border-strokedark">
                  
                <h3 className="font-bold text-xl text-black dark:text-white">
                  Withdrawal Security
                  </h3>
                  <label
                    className="mb-3 block text-sm font-medium text-gray dark:text-white"
                    htmlFor="fullName"
                  >
                    Authenticate all your withdrawals and add extra security to your funds
                  </label>
                </div>
                
                <div className='flex row justify-between pe-4'>
                  <div className="py-4 px-7 dark:border-strokedark">

                    <h3 className="flex font-medium text-black dark:text-white">
                      <img className="w-5 h-5 rounded" src={PasswordIcon} alt="Default avatar"/> <span className='ps-3'>Withdrawal Password</span></h3>
                    <label
                      className="mb-0 block text-sm font-medium text-gray dark:text-white ps-5 ms-3"
                      htmlFor="fullName"
                    >
                      Set a different additional password to supplement security on all your withdrawals.
                    </label>
                    
                  </div>
                  <div className='flex items-center'>
                    <img className="w-5 h-5 rounded pe-1" src={RightIcon} alt="Default avatar"/>
                  <span className='text-black font-medium text-sm pr-3'>On</span>
                      <Link
                  to="#"
                  className="flex align-center justify-center rounded-md bg-bgcolor py-1.5 px-4 text-center font-medium text-black hover:bg-opacity-90 h-9"
                >
                  Enable
                </Link>
                </div>
                </div>

                <div className='flex row justify-between pe-4'>
                  <div className="py-4 px-7 dark:border-strokedark">

                    <h3 className="flex font-medium text-black dark:text-white">
                      <img className="w-5 h-5 rounded" src={PasswordIcon} alt="Default avatar"/> <span className='ps-3'>Address Management</span></h3>
                    <label
                      className="mb-0 block text-sm font-medium text-gray dark:text-white ps-5 ms-3"
                      htmlFor="fullName"
                    >
                     Only-Trusted function protects your funds by allowing withdraw als to only trusted addresses.
                    </label>
                    
                  </div>
                  <div className='flex items-center'>
                    <img className="w-5 h-5 rounded pe-1" src={RightIcon} alt="Default avatar"/>
                  <span className='text-black font-medium text-sm pr-3'>On</span>
                      <Link
                  to="#"
                  className="flex align-center justify-center rounded-md bg-bgcolor py-1.5 px-4 text-center font-medium text-black hover:bg-opacity-90 h-9"
                >
                  Enable
                </Link>
                </div>
                </div>

                <div className='flex row justify-between pe-4'>
                  <div className="py-4 px-7 dark:border-strokedark">

                    <h3 className="flex font-medium text-black dark:text-white">
                      <img className="w-5 h-5 rounded" src={AuthIcon} alt="Default avatar"/> 
                      <span className='ps-3'>Antiphishing code  </span></h3>
                    <label
                      className="mb-0 block text-sm font-medium text-gray dark:text-white ps-5 ms-3"
                      htmlFor="fullName"
                    >
                     Adding an Anti-phishing code is recommended to help identify whether emails are legitimately sent from Ultrapro or not
                    </label>
                    
                  </div>
                  <div className='flex items-center'>
                    <img className="w-7 h-7 rounded pe-1" src={CloseIcon} alt="Default avatar"/>
                  <span className='text-black font-medium text-sm pr-3'>OFF</span>
                      <Link
                  to="#"
                  className="flex align-center justify-center rounded-md bg-bgcolor py-1.5 px-4 text-center font-medium text-black hover:bg-opacity-90 h-9"
                >
                  Enable
                </Link>
                </div>
                </div>

               

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
