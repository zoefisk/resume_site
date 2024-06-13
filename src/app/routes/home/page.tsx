"use client"
import {useEffect, useState} from "react"

export default function Page() {
    useEffect(() => {
        console.log("Page loaded")
    }, [])

    return (
        <div>
            <h1>Page Example</h1>
        </div>
    )
}

// test comment