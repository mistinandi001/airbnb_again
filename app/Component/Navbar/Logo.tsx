'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
const Logo=()=>{
    const router = useRouter()
    const mainPage = useCallback(()=>{ 
        router.push('/')
    },[router])
    return(
        <div className="mx-3 cursor-pointer" onClick={mainPage}>
            <Image
              width='50'
              height='50'
              src="/images/logo.png"
              alt="Logo" />
              
        </div>
    )
}

export default Logo;