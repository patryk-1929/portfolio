import React from "react";
import profilePhoto from '../assets/images/ProfilePhoto.png'
import emailRoundedButton from '../assets/images/EmailRoundedButton.png';
import download from '../assets/images/download.png';
import cvFile from '../assets/sample.pdf'

export default function Hero({data, skills}) {
  const emailAddress = data.email;
  return (
    <>
      <div className="max-w-7xl mx-auto mt-[64px] md:mt-[15dvh] p-6 grid md:grid-cols-[1fr_2fr] gap-[5vw]">
        <div className="hero-left-container flex justify-center border border-solid border-white rounded-tl-[160px] rounded-br-[160px]">
          <div className="p-10 md:p-16 text-IBMPlex text-center">
            <img src={profilePhoto} alt="" className="w-[100px] md:w-[150px] mx-auto"/>
            <p className="text-[32px] font-IBMPlex">{data.name}</p>
            <p className="text-[14px] pb-8">{data.title}</p>
            <div className="flex flex-col text-left gap-y-6 font-IBMPlex text-[14px]">
              <div>
                {JSON.stringify(data)}
                <span className="block">
                  <a href={`mailto:${emailAddress}`}>
                    {emailAddress}
                  </a>
                </span>
                <a href= {data.website} target="_blanks" className="block">{data.website}</a>
              </div>
              
              <div className="flex gap-4">
               
                {skills.skills && skills.skills.map((skill, index) => (
                  <div key={index} 
className="w-full text-center p-1 bg-accent text-mainDark rounded-[8px]">
                    {/* <img src={skill.imageIcon.asset.url} alt={skill.title} className="w-[20px]"/> */}
                    <span>{skill.title}</span>
                  </div>
                ))}
              </div>
              <div className="">
                <a href={cvFile} className="flex justify-center items-end bg-white text-mainDark rounded-full p-2 gap-2">
                  Download
                  <img src={download}/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="block text-accent font-IBMPlex leading-tight">{`<h1>`}</span>
          <h1 className="text-[64px] inline-block font-ubuntu leading-normal">
            <span className="block">
              Hey
            </span>
            <span className="block">
              I'm <span className="text-accent">{data.name}</span>
            </span>
            <span className="inline-block ">{data.title}</span>
          </h1>
          <span className="inline-block text-accent font-IBMPlex">{`</h1>`}</span>
            <div className="my-4">
              <span className="block text-accent font-IBMPlex text-[14px] leading-normal">{`<p>`}</span>
              <p className="text-4 inline-block leading-normal">
                <span className="block pl-8">
                  {data.description}
                </span>
              </p>
              <span className="inline-block text-accent font-IBMPlex text-[14px]">{`</p>`}</span>
              <div className="block mt-4">
                <a className="text-accent font-IBMPlex text-[24px] flex items-center gap-4" href={`mailto:${emailAddress}`} >
                  Let's talk
                  <span>
                    <img src={emailRoundedButton}/>
                  </span>
                </a>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}