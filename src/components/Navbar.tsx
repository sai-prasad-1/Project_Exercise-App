
import { ReactElement, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from "framer-motion"
import logo from "../assets/icons/Logo.png"

const navLinks: string[][] = [['Home', "/"], ["BMI Calculator", "/bmi"], ["About", "/about"], ["Contact Us", "/"]]

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
  },
}

const items = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}

const Navbar: React.FC = (): ReactElement => {

  const [active, setActive] = useState<string>("Home")
  const path: string = useLocation().pathname;
  return (

    <div className={`${path == "/" ? "absolute " : "relative pb-11 mt-6 "} ` + 'z-50 w-[90vw] h-[50px] pt-9 top-0 flex justify-between items-center '}>
      <motion.a
        href="/"
        className=' h-full ml-8 mr-8 w-[40%] flex items-center'
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}>
        <img src={logo} alt="Logo" className='w-[150px]' />
      </motion.a>
      <div className='h-full w-[40%]  flex justify-center items-center'>
        <motion.ul
          variants={list}
          initial="hidden"
          animate="visible"
          className="md:flex w-full justify-between text-white hidden">
          {
            navLinks.map((item) => {
              return (
                <motion.div variants={items}>

                  <NavLink to={item[1]} className={`${item[0] == active ? "border-orange-400  border-b-2" : "border-none"} cursor-pointer p-2`} onClick={() => setActive(item[0])}>
                    {item[0]}
                  </NavLink>
                </motion.div>
              )
            })
          }
          <button className='bg-orange-400 p-2 text-black ml-2  mr-0'>
            Join Now
          </button>
        </motion.ul>
      </div>

    </div>
  )
};

export default Navbar;