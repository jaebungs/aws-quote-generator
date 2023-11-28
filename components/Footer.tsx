"use client"
import React, { useState } from 'react'

const Footer = () => {
    const [ numberOfQuotes, setNumberOfQuotes ] = useState<Number | null>(0)

    return (
        <div className="w-screen h-16 text-center font-source-code-pro text-white absolute bottom-0 z-50">
            <>
            Quotes Generated: {numberOfQuotes}
            <br />
          </>
        </div>
    )    
}

export default Footer