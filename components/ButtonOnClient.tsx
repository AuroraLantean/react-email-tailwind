"use client"
import React, { useState } from 'react'
import { sendEmail } from "@/lib/sendEmail";

type Props = {}

export const ButtonOnClient = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  async function onSubmit() {
    //alert(JSON.stringify(data, null, 4));
    setIsLoading(true)
    console.log("onSubmit:");
    const result = await sendEmail();
    console.log("🚀 sendEmail result:", result)
    setIsLoading(false)
  }

  return (
    <div>
      <button
        type="submit"
        className={''}
        disabled={isLoading}
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  )
}

export default ButtonOnClient