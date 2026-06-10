import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import works from "../assets/images/Works.png";
import ContactForm from "../componets/ContactForm";

export default function Contact() {
  return (
    <div id="works" className="bg-mainDark">
      <div className="max-w-7xl px-6 py-[128px] gap-[5vw] flex flex-col md:flex-row mx-auto">
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-center text-accent font-IBMPlex text-[32px] underline">
            Works
          </h2>
          <p className="text-center font-IBMPlex text-[14px] my-4">
                        I’m currently available for freelance work

          </p>
<div className="flex justify-center border border-solid border-accent rounded-tl-[32px] rounded-br-[32px] w-fit mx-auto my-10 py-4 px-10 text-accent text-[18px]">
Send me a message
</div>
          <div className="">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}