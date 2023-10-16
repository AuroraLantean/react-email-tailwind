"use client"
import React, { useState } from "react";
import { sendEmail } from "@/lib/sendEmail";

export default function ContactForm() {
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
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <div className="flex gap-2">
        <button
          type="submit"
          className={''}
          disabled={isLoading}
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>);
}
