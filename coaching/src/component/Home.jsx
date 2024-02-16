import React, { useState } from "react";
import "./Home.css";
import Sliderr from "./Slider";
import SliderStories from "./SliderStories";

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
        {/* 1st section starts here */}
        <section className="flex flex-col items-center justify-center relative h-[49rem]">
          <div className="flex items-center justify-center absolute bottom-[40rem] left-48">
            <div className="h-[18rem] w-[75rem] flex bg-white shadow-[0px_7px_4px_0px_#00000024]">
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

          <div className="flex items-center justify-evenly  font-Roboto text-xl pt-[10rem] ">
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
        {/* 2nd section starts here*/}
        <section className="flex flex-col items-center h-[55rem] font-Roboto">
          {/* div1 */}
          <div className="h-[18rem] w-full  text-white flex items-center justify-around relative bg-gradient-to-l from-slate-800 via-slate-800 to-slate-800">
            <img
              src="Image/mainbk.jpg"
              alt=""
              className="mix-blend-overlay absolute h-[18rem] w-full object-cover "
            />

            <div className="flex flex-col">
              <p className="text-4xl font-bold mb-8">
                Are you ready to take your career to the
                <br /> next level?
              </p>
              <p className="mt-2 tracking-wide">
                #executivecoaching #professionalgrowth
                <br /> #leadershipdevelopment #careersuccess
                #personalizedcoaching
              </p>
            </div>
            <div className="flex flex-col">
              <h4 className="mb-5 tracking-wider text-lg">REACH OUT NOW!</h4>
              <button className="border-4 border-red-700 rounded-2xl px-4 py-3 font-bold tracking-widest">
                Contact Us
              </button>
            </div>
          </div>
          {/* div2 */}
          <div className="flex items-center pt-16 w-full justify-around">
            <div className="flex flex-col items-start">
              <h1 className="text-2xl font-bold tracking-wider">
                Why <span className="uppercase">mekosh?</span>
              </h1>
              <div className="border-t-4 border-red-700 w-[5rem] mt-[2px]"></div>
              <img
                src="Image/office.jpeg"
                alt=""
                className="h-[22rem] w-[33rem] rounded-xl mt-[70px] shadow-[1px_2px_2px_4px_#00000024]"
              />
            </div>

            <div className="flex flex-col w-[38rem] h-[28rem] items-start justify-between">
              <div className="flex ">
                <img src="Image/talk.png" alt="" className="h-10" />
                <div className="flex flex-col items-start ml-11">
                  <h2 className="font-semibold">One-on-One Coaching</h2>
                  <p>
                    Provide personalized coaching services to help executives
                    achieve their professional goals and reach their full
                    potential.
                  </p>
                </div>
              </div>
              <div className="flex">
                <img src="Image/motivation.png" alt="" className="h-10" />
                <div className="flex flex-col items-start ml-11">
                  <h2 className="font-semibold">Leadership development</h2>
                  <p>
                    Identify their unique leadership style and develop the
                    skills necessary to lead their team and organization
                    effectively.
                  </p>
                </div>
              </div>
              <div className="flex ">
                <img src="Image/career.png" alt="" className="h-10" />
                <div className="flex flex-col items-start  ml-11">
                  <h2 className="font-semibold">Career Transition Support</h2>
                  <p>
                    Navigate the challenges of the transition and develop
                    strategies to ensure their success in their new role.
                  </p>
                </div>
              </div>
              <div className="flex ">
                <img
                  src="Image/emotional-intelligence.png"
                  alt=""
                  className="h-10"
                />
                <div className="flex flex-col items-start ml-11">
                  <h2 className="font-semibold">
                    Emotional Intelligence Development
                  </h2>
                  <p>
                    Understand their emotions and the emotions of others, and
                    develop strategies for managing emotions in the workplace.
                  </p>
                </div>
              </div>
              <div className="flex ">
                <img src="Image/target.png" alt="" className="h-10" />
                <div className="flex flex-col items-start ml-11">
                  <h2 className="font-semibold">
                    Goal Setting & Accountability
                  </h2>
                  <p>
                    Hold clients accountable for their progress and provide
                    ongoing support and guidance to ensure they stay on track.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 3rd section starts here */}
        <section>
          <SliderStories />
          <div className="h-[18rem] flex flex-col items-center font-Roboto py-9">
            <h1 className="text-2xl  font-bold tracking-wide">
              Subscribe Email
            </h1>
            <div className="border-4 border-red-700 w-[5rem] mt-2 "></div>
            <p className="flex flex-col items-center tracking-wide mt-4">
              By subscribing you will receive information about how to change
              your mindset,
              <br />
              <span>remove limitations and develop unshakable confidence.</span>
            </p>
            <div className="flex items-center justify-center shadow-[0px_7px_10px_0px_#718096] mt-7 rounded-l-lg rounded-r-lg w-[33rem]">
              <input
                type="text"
                placeholder="Enter your email"
                className="outline-none h-10 w-[24rem] px-5 placeholder-black rounded-l-lg"
              />
              <button className="bg-red-700 h-10 w-36 uppercase text-white rounded-r-lg  ">
                Subscribe
              </button>
            </div>
          </div>
        </section>
        {/* last section */}
        <section>
          <div className="bg-red-50 px-10 py-10">
            <h1 className="text-3xl font-Acme font-bold text-red-700 pb-2 ">
              MEKOSH
            </h1>
            <p className="py-1">
              <img src="Image/call.png" alt="" className="inline h-5" />
              <p className="inline text-xl ml-4">+91-0000000000</p>
            </p>
            <p className="py-1">
              <img src="Image/email.png" alt="" className="inline h-5" />
              <p className="inline text-xl ml-4">info@mekosh.com</p>
            </p>
            <p className="py-1">
              <img src="Image/pin.png" alt="" className="inline h-5" />
              <p className="inline text-xl ml-4">20-A1,XYZ Road,India</p>
            </p>
          </div>
          <div className="bg-black flex justify-end px-10 py-4">
            <p className="text-white text-xl tracking-wide">Connect us on :</p>
            <img src="Image/facebook.png" alt="" className="h-5 mx-3 my-1 " />
            <img src="Image/twitter.png" alt="" className="h-5 mx-3 my-1 " />
            <img src="Image/instagram.png" alt="" className="h-5 mx-3 my-1 " />
            <a href="https://www.linkedin.com/">
              <img src="Image/linkedin.png" alt="" className="h-5 mx-3 my-1 " />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
