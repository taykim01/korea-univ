"use client"

import { useEffect, useState } from "react"
import "./search_bar.css"

export default function SearchBar(
    { toParent, defaultValue, width, clickSearch }
        : { toParent?: (value: string) => void, defaultValue?: string, width?: number, clickSearch?: () => void }
) {
    const [search, setSearch] = useState<string>(defaultValue || "")
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setSearch(value)
        toParent && toParent(value)
    }

    const handleClick = (event: any) => {
        if (event.key === "Enter") controlClickSearch()
    }

    const controlClickSearch = () => {
        setSearch("")
        clickSearch && clickSearch()
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            width: width || 400,
        }}>
            <div style={{ zIndex: 0, width: "100%" }}>
                <div className="search_container">
                    <input
                        className="search_input"
                        type="text"
                        onChange={handleChange}
                        value={search}
                        onKeyDown={handleClick}
                    />
                    <svg viewBox="0 0 24 24" className="search_icon" onClick={controlClickSearch}>
                        <g>
                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                            </path>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}