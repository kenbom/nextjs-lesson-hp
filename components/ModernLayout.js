import React from 'react'
import Image from "next/image"

const ModernLayout = () => {
  return (
    <>
      <box className="flex flex-col justify-center items-center">
        <Image
          src="/manu-line.svg"
          width={200}
          height={40}
        />
        <Image
          src="/logo.svg"
          width={200}
          height={40}
        />


      </box>

    </>
  )
}

export default ModernLayout