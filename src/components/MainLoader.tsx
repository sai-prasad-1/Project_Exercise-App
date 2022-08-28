import img from "../assets/icons/Logo.png"



import ReactDOM from 'react-dom'  
import {  useRef } from "react";





const loader = document.getElementById('loader');
const LoaderUi = ()=>{
    const dataRef = useRef() as React.MutableRefObject<HTMLSpanElement>;

    // let reqData: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
if(dataRef){
    const observer2 = new PerformanceObserver((entries) => {
        let data = dataRef.current
        console.log(data);
        
        entries.getEntriesByType("resource").forEach(res =>{
            if (data) {
                data.innerText = res.toJSON().name;
            }
        })
      });
      observer2.observe({ entryTypes: ["resource"] });
    
}

window.addEventListener('load',()=>{
    if (loader) {
        console.log(loader.children);
        const parent = dataRef.current.parentElement?.parentElement
        if (parent) {
            parent.style.display = "none"
        }
        const loadStyle =loader.style
       
            loadStyle.width= (0) + "%"
            // loadStyle.display = "none"
        
        
    }
})
    return(
        <div className="grid place-content-center place-items-center z-[99999] h-full w-full">
            <img src={img} alt="loader img"  />
            <h1 className="text-orange-400 text-2xl text-center ">Fetching Data From: <span className="text-white text-sm" ref={dataRef}></span></h1>
        </div>
    )
}



function MainLoader(){  
    if (loader) {
        
        return ReactDOM.createPortal(<LoaderUi/>,loader)  
    }
    return <h1>errri</h1>
}

export default MainLoader