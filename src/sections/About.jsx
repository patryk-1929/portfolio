import React from "react";
import bgImage from '../assets/images/AboutBg.png'
import aboutImg from '../assets/images/AboutImage.png'

export default function About({data}) {
  return (
    <div id='about' className="bg-cover bg-center bg-no-repeat"
         style={{
           backgroundImage: `url(${bgImage})`,
         }}>
      <div className="max-w-7xl mx-auto mt-[64px] md:mt-[15dvh] px-6 py-[128px] gap-[5vw] flex flex-col md:flex-row">
        <div className="w-full">
          <h2 className="w-fit border border-accent rounded-tl-[40px] rounded-br-[40px] text-[32px] py-4 px-8">
            About Me
          </h2>
          <div className="mt-4 bg-mainDark py-4 px-6 rounded-[40px]">
            <span className="block text-accent font-IBMPlex text-[14px] leading-normal py-4">{`<p>`}</span>
            <span className="text-4 inline-block leading-normal font-IBMPlex">
                <h3 className="text-accent text-[24px]">{data.title}</h3>
                <span className="block">
                  {data.description}
                </span>
            </span>
            <span className="inline-block text-accent font-IBMPlex text-[14px] py-4">{`</p>`}</span>
          </div>
        </div>
        <img src={aboutImg} width="450" height="555" className="w-auto h-auto object-contain"/>
      </div>
    </div>
  )
}