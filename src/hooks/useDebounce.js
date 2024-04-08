import { useEffect, useState } from "react"

const useDebounce = (text,delay = 500) => {

    const [debounceText,setDebounceText]  =  useState(text);

    useEffect(()=>{
        let timeOut =  setTimeout(()=>{

            setDebounceText(text);

        },delay)


        return ()=>{
            clearTimeout(timeOut);
        }

    },[text])


  return debounceText;

}

export default useDebounce