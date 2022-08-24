import img from "../assets/images/footer_img.png"



const Newsletter = () => {
  return (
    <div className="top grid grid-cols-2 bg-black">
    <div className="grid place-content-center h-full space-y-6 w-full" >
      <h1 className="text-orange-400 font-bold font-mono tracking-[10px]">NO CREDIT CARD REQUIRED</h1>
      <h1 className="text-5xl text-white text-start font-semibold">Start using Hanover Today</h1>
      <div className="relative w-full ">

      <input type="email" className=" h-[50px] bg-transparent border-b-2 focus:border-orange-400 outline-none w-full text-orange-300 placeholder:text-orange-400" placeholder="Subscribe to our Newsletter"/>
      <a type="button"  className="absolute right-0 border-orange-700 m-2 text-orange-400 hover:scale-105 hover:bg-orange-500 hover:text-black border-[1px] p-1 rounded-full pl-4 pr-4" >Join</a>
      </div>
    </div>


    <img src={img} alt="footer img"  className="w-[30vw] place-self-center" />
  </div>
  )
}

export default Newsletter