import React from 'react'
import Image from "next/image"
import "remixicon/fonts/remixicon.css";

const ModernLayout = () => {
  return (
    <>
      <div class="flex flex-row w-full" >
        <div class='w-full mr-48'>
        <Image className="w-full"
          src="/logo.svg"
          width={200}
          height={40}
        />
        </div>
        {/* <i class="ri-menu-line ri-2x w-full" ></i> */}
        <div class="flex flex-row justify-end" >
          <div class="mr-100 w-full" >
        <i class="ri-menu-line ri-2x mr-48 w-full" ></i>
        </div>
        </div>
      </div>

    </>
  )
}

export default ModernLayout