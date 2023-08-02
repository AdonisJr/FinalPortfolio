import React from "react";
import Technologies from "./Technologies";

export default function About() {
  return (
    <div className="flex flex-col my-10 sm:flex-row text-md sm:text-lg sm:bg-slate-800 sm:py-10 text-white font-mono">
      <div className="flex mb-5 flex-col px-5 justify-center sm:w-6/12">
        <p>
          Hi, {"I'm "}
          <span className="text-2xl font-bold font-serif">Adonis Jr Suico</span>
        </p>
        <p className="font-semibold">Aspiring Full-stack Web Developer</p>
        <p>
          <span className="ml-5"></span>As a full-stack web developer, I possess
          a solid foundation in both front-end and back-end technologies. From
          crafting responsive and visually engaging user interfaces with HTML,
          CSS, and JavaScript to building robust server-side applications using
          frameworks like React JS, Next JS, Node JS, {" I'm "} always eager to
          push the boundaries of {"what's"} possible.
        </p>
      </div>
      <div className="flex flex-col  gap-3 bg-white md:rounded-tl-full justify-center text-center sm:w-6/12 py-3">
        <div className="flex items-center text-slate-800 justify-center sm:justify-end gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-code-slash"
            viewBox="0 0 16 16"
          >
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
          </svg>
          <span className="font-serif font-bold">Technology Stack</span>
        </div>

        <Technologies />
      </div>
    </div>
  );
}
