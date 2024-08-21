import { Link } from 'react-router-dom';
import BrandOne from '../images/brand/brand-01.svg';
import BrandTwo from '../images/brand/brand-02.svg';
import BrandThree from '../images/brand/brand-03.svg';
import BrandFour from '../images/brand/brand-04.svg';
import BrandFive from '../images/brand/brand-05.svg';
import FooterLeft from '../images/icon/footerleft.svg';
const Footer = () => {
  return (
    <div className="rounded-sm border border-stroke bg-bgfooter px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      

      <div className="flex flex-grow grid-cols-12 justify-start py-4 px-4 md:px-6 2xl:px-11">
        
        <div className="grid-cols-12 items-center w-1.5/6 sm:col-12 xl:col-span-4">
        <Link className="block flex-shrink-0" to="/">
          <img src={FooterLeft} alt="Logo" />
        </Link>


        </div>
        <div className="grid  grid-cols-12 rounded-md py-2.5 sm:col-12 xl:col-span-8">
          <div className="flex flex-col col-span-12 align-center justify-center xsm:flex-row xl:col-span-2">
                <div className="py-4 px-7 dark:border-strokedark">
                  
                  <h3 className="font-bold text-xl text-black dark:text-white pb-2">
                    Company
                  </h3>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">White Paper</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Announcement</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">About Us</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Blog</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Referral Program</label>
                </div>

          </div>
          <div className="flex flex-col col-span-12 align-center justify-center xsm:flex-row xl:col-span-2">
                <div className="py-4 px-7 dark:border-strokedark">
                  
                  <h3 className="font-bold text-xl text-black dark:text-white pb-2">
                    Trade
                  </h3>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Spot Trading</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Margin Trading</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Convert</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Swap</label>
                  
                </div>

          </div>
          <div className="flex flex-col col-span-12 align-center justify-center xsm:flex-row xl:col-span-2">
                <div className="py-4 px-7 dark:border-strokedark">
                  
                  <h3 className="font-bold text-xl text-black dark:text-white pb-2">
                    Features
                  </h3>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Trade Loan</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Copy Trading</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Staking</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Lending</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">USDT</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Signal</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Cross Coin</label>
                </div>

          </div>
          <div className="flex flex-col col-span-12 align-center justify-center xsm:flex-row xl:col-span-2">
                <div className="py-4 px-7 dark:border-strokedark">
                  
                  <h3 className="font-bold text-xl text-black dark:text-white pb-2">
                    Support
                  </h3>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Support Center</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">FAQ</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">How its works</label>
                 
                </div>

          </div>
          <div className="flex flex-col col-span-12 align-center justify-center xsm:flex-row xl:col-span-2">
                <div className="py-4 px-7 dark:border-strokedark">
                  
                  <h3 className="font-bold text-xl text-black dark:text-white pb-2">
                    Products
                  </h3>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">NFT</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Defi</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Explore</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Wallet</label>
                </div>

          </div>
          <div className="flex flex-col col-span-12 align-center justify-center xsm:flex-row xl:col-span-2">
                <div className="py-4 px-7 dark:border-strokedark">
                  
                  <h3 className="font-bold text-xl text-black dark:text-white pb-2">
                    Legal
                  </h3>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Term of use</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Privacy Policy</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Risk Disclosures</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Refund Policy</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">AML policy</label>
                </div>

          </div>
          <div className="flex flex-col col-span-12 align-center justify-center xsm:flex-row xl:col-span-2">
                <div className="py-4 px-7 dark:border-strokedark">
                  
                  <h3 className="font-bold text-xl text-black dark:text-white pb-2">
                    Download
                  </h3>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Download for Android</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Download for IOS</label>
                  <label className="mb-3 block text-sm font-medium text-gray dark:text-white cursor-pointer hover:text-orange"htmlFor="fullName">Download fro Windows</label>
                 
                </div>

          </div>
        </div>

       

      </div>

      
    </div>
  );
};

export default Footer;
