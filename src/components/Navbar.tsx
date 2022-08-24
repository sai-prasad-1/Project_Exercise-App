
import { ReactElement, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from "../assets/icons/Logo.png"

const navLinks:string[][] = [['Home',"/"],["BMI Calculator","/bmi"],["About","/about"],["Contact Us","/"]]



const Navbar: React.FC = (): ReactElement => {

  const [active, setActive] = useState<string>("Home")
  const path:string =useLocation().pathname;
  console.log(path)
  return(

  <div  className={`${path=="/"?"absolute ":"relative pb-11 mt-6 "} `+'z-50 w-[90vw] h-[50px] pt-9 top-0 flex justify-between items-center '}>
    <div className=' h-full ml-8 mr-8 w-[40%] flex justify-ceter items-center'>
          <img src={logo} alt="Logo" className='w-[150px]'/>
    </div>
    <div className='h-full w-[40%]  flex justify-center items-center'>
      <div className="flex w-full justify-between text-white">
      {
        navLinks.map((item)=>{
          return(
            <NavLink to={item[1]} className={`${item[0]==active?"border-orange-400  border-b-2":"border-none"} cursor-pointer p-2`} onClick={()=>setActive(item[0])}>
              {item[0]}
            </NavLink>
          )
        })
      }
      <button className='bg-orange-400 p-2 text-black ml-2  mr-0'>
        Join Now
      </button>
      </div>
    </div>

  </div>
)};

export default Navbar;