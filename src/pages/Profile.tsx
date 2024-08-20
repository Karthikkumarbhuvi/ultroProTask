import Breadcrumb from '../components/Breadcrumb';
import CoverOne from '../images/cover/cover-01.png';
import userSix from '../images/user.png';
import Edit from '../images/icon/edit.svg';
import Copy from '../images/icon/copy.svg';
import Know from '../images/icon/know.svg';
import RightArrow from '../images/icon/right-arrow.svg';
import Shield from '../images/icon/shield.svg';

const Profile = () => {
  return (
    <>
     

      <div className="overflow-hidden rounded-sm bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        
        <div className="p-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 w-full p-4 bg-middark dark:bg-boxdark">
            
            <div className="flex min-w-47.5">
            
            <div className=" drop-shadow-2 sm:max-w-30">
              
              <img className="w-15 h-15 rounded" src={userSix} alt="Default avatar"></img>
            </div>
           
            <h3 className="mb-1.5 ps-4 text-2xl font-semibold text-black dark:text-white">
              Ryan Stanson
            </h3>
            <label
                htmlFor="profile"
                className="ps-3 mt-3 cursor-pointer"
              >
                 <img src={Edit} alt="User" />
                <input
                  type="file"
                  name="profile"
                  id="profile"
                  className="sr-only"
                />
              </label>
          </div>
          <div className='flex justify-between py-3 px-0 sm:flex-col sm:justify-center lg:flex-row lg:justify-between'>
          <div className="flex flex-col justify-start border-stroke p-2 dark:border-strokedark sm:flex-col" >
                <span className="flex text-sm">User ID</span>
                <span className="flex font-normal text-black dark:text-white">
                  215578852   <img src={Copy} alt="User" className='ps-2'/>
                </span>
                
          </div>
          <div className="flex flex-col justify-start border-stroke p-2  dark:border-strokedark sm:flex-col">
                <span className="flex text-sm">Identity Verification <img src={RightArrow} alt="Unverified" className='w-4 h-4 mt-1'/></span>
                <span className="flex align-center font-normal text-black dark:text-white">
                  <img src={Know} alt="Unverified" className='w-4 h-4 mt-1'/> <span className='ps-2 text-orange'>Unverified</span> 
                </span>
          </div>
          <div className="flex flex-col justify-start border-stroke p-2 dark:border-strokedark sm:flex-col">
                <span className="flex text-sm">Security <img src={RightArrow} alt="Unverified" className='w-4 h-4 mt-1'/></span>
                <span className="flex align-center font-normal text-black dark:text-white">
                  <img src={Shield} alt="Unverified" className='w-4 h-4 mt-1'/> <span className='ps-2 text-orange'>Medium</span> 
                </span>
          </div>
          
          <div className="flex flex-col justify-start border-stroke p-2 dark:border-strokedark sm:flex-col">
                <span className="flex text-sm">last Login <img src={RightArrow} alt="Unverified" className='w-4 h-4 mt-1'/></span>
                <span className="flex font-normal text-black dark:text-white md-justify-center">
                8/7/2024, 12:34:09 India Madurai(2406:**:c9f8)
                </span>
          </div>
          </div>
          
          

          </div>
         
          </div>
        </div>
      
    </>
  );
};

export default Profile;
