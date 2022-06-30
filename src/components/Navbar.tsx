
import { ReactElement, useState } from 'react';
import logo from "../assets/icons/Logo.png"

const navLinks:string[][] = [['Home',"/"],["BMI Calculator","#bmi"],["About","#about"],["Contact Us"]]



const Navbar: React.FC = (): ReactElement => {

  const [active, setActive] = useState<string>("Home")
  return(

  <div  className='z-50 w-[90vw] h-[50px] mt-9 absolute top-0 flex justify-between items-center '>
    <div className=' h-full m-8 w-[40%]'>
          <img src={logo} alt="Logo" className='w-[150px]'/>
    </div>
    <div className='h-full w-[40%]  flex justify-center items-center'>
      <div className="flex w-full justify-between text-white">
      {
        navLinks.map((item)=>{
          return(
            <a className={`${item[0]==active?"border-orange-400  border-b-2":"border-none"} cursor-pointer p-2`} onClick={()=>setActive(item[0])}>
              {item[0]}
            </a>
          )
        })
      }
      <button className='bg-orange-400 p-2 text-black ml-2  mr-0'>
        Login / Register
      </button>
      </div>
    </div>

  </div>
)};

export default Navbar;