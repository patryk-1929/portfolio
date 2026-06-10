import React from "react";
import github from '../assets/images/github.png'
export default function Footer({data}) {
  return (
    <footer className="bg-mainDark py-6 mt-12 border-t border-[#43454D]">
      <section className="grid grid-cols-3 items-center gap-6 max-w-7xl mx-auto ">
        <div className="col-start-2 col-span-1 text-center text-accent text-[14px]">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
        <div className="col-start-3 col-span-1">
          <span>My work</span>
<a href={data?.github ?? "https://github.com"} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" className=" inline-flex ml-4 p-2 bg-[#98FAEC] rounded-full justify-center items center"/>
          </a>
        </div>
      </section>
    </footer>
  )
}