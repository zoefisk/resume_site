"use client"
import {useEffect, useState} from "react"

export default function Page() {
    useEffect(() => {
        console.log("Page loaded")
    }, [])

    return (
        <div>
            <h1>Page Example 2</h1>
        </div>
    )
}