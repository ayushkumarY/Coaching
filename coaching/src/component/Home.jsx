import React, { useState } from "react";
import "./Home.css";
import Sliderr from "./Slider";

function Home() {
  return (
    <>
      <div>
        <div className="w-full flex flex-col items-center bg-gradient-to-l from-slate-800 via-slate-800 to-slate-800 h-[45rem] m-0 relative">
          <img
            src="Image/mainbk.jpg"
            alt=""
            className="mix-blend-overlay absolute h-[45rem] w-full object-cover "
          />
          <div className="flex items-center justify-between px-14 w-screen h-20 mt-2 font-Roboto text-white absolute">
            <h1 className="font-Acme text-3xl">MEKOSH</h1>
            <ul className="flex items-center justify-between w-[40rem] ">
              <li className="hover:border-b-4  h-9 hover:border-red-700 text-xl hover:cursor-pointer hover:text-red-700 font-bold">
                Home
              </li>
              <li className="hover:border-b-4  h-9 hover:border-red-700 text-xl hover:cursor-pointer hover:text-red-700 font-bold">
                About
              </li>
              <li className="hover:border-b-4  h-9 hover:border-red-700 text-xl hover:cursor-pointer hover:text-red-700 font-bold">
                Services
              </li>
              <li className="hover:border-b-4  h-9 hover:border-red-700 text-xl hover:cursor-pointer hover:text-red-700 font-bold">
                Blogs
              </li>
              <li className="hover:border-b-4  h-9 hover:border-red-700 text-xl hover:cursor-pointer hover:text-red-700 font-bold">
                Contact
              </li>
            </ul>
          </div>
          <section>
            <Sliderr />
          </section>
        </div>

        <section className="flex flex-col justify-center">
          <div className="flex items-center justify-center -mt-40 z-20">
            <div className="h-[18rem] w-[75rem] flex bg-white ">
              <div className="w-[25rem] flex flex-col items-center justify-evenly px-7 py-3 ">
                <img src="Image/ear.png" className="h-14" alt="" />
                <h4>Active Listening</h4>
                <p className="font-Roboto text-xl text-center">
                  Aim to understand clients persepective and empathize with
                  their experience.
                </p>
                <button className="border-2 border-red-700 rounded-lg px-5 py-1 text-red-700 font-bold">
                  Know more!
                </button>
              </div>

              <div className="border-r-2 border-slate-500 h-[13rem] mt-9 "></div>

              <div className="w-[25rem] flex flex-col items-center justify-evenly px-7 py-3">
                <img src="./Image/conversation.png" className="h-16" alt="" />
                <h4>Questioning</h4>
                <p className="font-Roboto text-xl text-center">
                  help the client to explore the diferent layers of their
                  thought process.
                </p>
                <button className="border-2 border-red-700 rounded-lg px-5 py-1 text-red-700 font-bold">
                  Know more!
                </button>
              </div>

              <div className="border-r-2 border-slate-500 h-[13rem] mt-9 "></div>

              <div className="w-[25rem] flex flex-col items-center justify-evenly px-7 py-3">
                <img src="./Image/search.png" alt="" className="h-14" />
                <h4>Reflective Excercises</h4>
                <p className="font-Roboto text-xl text-center">
                  Help client identify patterns and themes in their thinking
                  that they might not have been aware of.
                </p>
                <button className="border-2 border-red-700 rounded-lg px-5 py-1 text-red-700 font-bold">
                  Know more!
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-evenly h-[40rem] font-Roboto text-xl  ">
            <div className="w-[45rem] px-4 ">
              <p>
                <span className="text-red-700 text-3xl font-bold">Welcome</span>{" "}
                to Leadership Coaching,
                <br /> where we provide personalized coaching services to help
                leaders achieve their professional goals and reach their full
                potential. We work one-on-one with clients to identify their
                strengths and weaknesses, develop strategies for success, and
                overcome obstacles to progress.
                <br />
                <br /> Our coaching approach is tailored to each individual's
                unique needs, and I use a variety of techniques to help my
                clients improve their leadership skills, communication
                abilities, decision-making capabilities, and overall performance
              </p>
              <br />
              <br />
              <button className="border-2 border-red-700 rounded-lg px-5 py-1 text-red-700 font-bold">
                Know more!
              </button>
            </div>
            <div className="mr-28">
              <img
                src="Image/manstanding.png"
                className="h-[30rem]  w-[20rem]"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
