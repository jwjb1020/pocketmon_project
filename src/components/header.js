"use client"
import Link from "next/link";

export default function Header(){
    return(
        
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <Link className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" href="/">홈</Link>
                <Link className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" href="/list">포켓몬 도감</Link>
            </nav>
        </header>
        
    )
}