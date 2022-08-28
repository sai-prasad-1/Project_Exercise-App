import React, { useRef} from "react"
const BMI = () => {
    const weight = useRef<HTMLInputElement>(null)
    const height = useRef<HTMLInputElement>(null)
    const result = useRef<HTMLDivElement>(null)
    
    const calculate= (weight:string|undefined, height:string|undefined,event?: React.MouseEvent<HTMLElement>,) => {
        if (height&&weight) {
            const data = parseFloat(weight) / (parseFloat(height)/100)**2;
            if (event) {
                const target = event.target as Element
                target.classList.add("text-black")
                
            }
            let msg
        
            if(data < 18.5){
                msg =  "Underweight";
            }
            else if(data < 25){
                msg  = "Healthy";
            }
            else if(data < 30){
                msg ="Overweight";
            }
            else{
                msg ="Chubby";
            }
            if (result.current) {
                
                result.current.innerHTML=`<h1>Your BMI is ${data.toFixed(4)} </h1>
                <h2>According to Your BMI you are <span className="text-orange-400">${ msg }<span></h2>`
            }
                
           
            
        }
    }
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2  w-full h-[80vh] bmi--bg">
                <div className="left bg-[#101112f5] grid place-items-center">
                    <h1 className="place-self-center text-orange-400 md:text-6xl text-3xl font-bold"> BMI Calculator</h1>
                    <div className="flex flex-col w-full h-full items-center  text-white justify-center gap-5">

                        <div className="w-[90%]">

                            <label htmlFor="weight" className="self-start text-orange-400 text-xl">Enter Your  Weight</label>
                            <input type="number" name="weight" className="h-[50px] w-[90%] rounded-xl text-black p-2" placeholder="Your weight in Kg " ref={weight} />
                        </div>
                        <div className="w-[90%]">

                            <label htmlFor="weight" className="self-start text-orange-400 text-xl">Enter Your  Height</label>
                            <input type="number" name="weight" className="h-[50px] w-[90%] rounded-xl text-black p-2" placeholder="Your Height in Cms" ref={height}/>
                        </div>
                    </div>
                    <div className="text-white  text-2xl pl-8 " ref={result}>
                        
                    </div>
                    <input type="button" value="Calculate" className="text-black bg-orange-400  rounded-3xl w-[100px] h-[50px]" onClick={(e)=>calculate(weight.current?.value,height.current?.value,e)} />
                </div>
                <div className="right md:block hidden"></div>
            </div>
        </div>
    )
}

export default BMI