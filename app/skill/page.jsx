import React from "react";
import Button from "../components/button";
import ButtonQuizz from "../components/buttonquiz";
import Link from "next/link";

function QuizPage() {
  const skills = [
    {
      title: "Communication",
      text: "Know how to communicate ideas in a clear and caring way to others.",
      bgColor: "#F28E50",
    },
    {
      title: "Empathy",
      text: "Understand and anticipate the emotions of others to better interact with them.",
      bgColor: "#23393E",
    },
    {
      title: "Motivation",
      text: "Explanation of the reasons justifying an act or a choice.",
      bgColor: "#F2BA22",
    },
    {
      title: "Positivity",
      text: "The mindset of being positive or optimistic in tough situations.",
      bgColor: "#2E7183",
    },
    {
      title: "Creativity",
      text: "The use of imagination or original ideas to create something; inventiveness.",
      bgColor: "#F28E50",
    },
    {
      title: "Leadership",
      text: "Ability of an individual to influence and federate a group in order to achieve common goals.",
      bgColor: "#23393E",
    },
    {
      title: "Calmness",
      text: "The tranquility and serenity of the mental state to be free from agitation, excitement or disturbance.",
      bgColor: "#F2BA22",
    },
    {
      title: "Criticality",
      text: "Ability to analyze the gravity and the extent of a situation.",
      bgColor: "#2E7183",
    },
    {
      title: "Teamwork",
      text: "Groups of people who will work together on a common task.",
      bgColor: "#F28E50",
    },
    {
      title: "Self confidence",
      text: "Ability to have confidence in the work evolution and capacity for power.",
      bgColor: "#23393E",
    },
    {
      title: "Adaptability",
      text: "Adaptability is the ability to adapt to new environments or situations.",
      bgColor: "#F2BA22",
    },
    {
      title: "Problem solving",
      text: "Is a structured process of finding solutions.",
      bgColor: "#2E7183",
    },
    {
      title: "Time management",
      text: "Organize priorities and tasks effectively.",
      bgColor: "#F28E50",
    },
    {
      title: "Listening",
      text: "Paying attention to others and understanding their point of view.",
      bgColor: "#23393E",
    },
    {
      title: "Open mindedness",
      text: "Willing to consider new or different ideas.",
      bgColor: "#F2BA22",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-7 mt-16">
        <ButtonQuizz text="GO BACK" href="/" />
        <Link rel="stylesheet" href="/quiz">
          <button className="bg-bleu text-white flex items-center px-[75px] py-2 text-xl transition rounded-bl-[30px] rounded-tr-[30px] ">
            QUIZ
          </button>
        </Link>
      </div>

      <div className="text-4xl flex text-center justify-center mt-20 font-semibold">
        <p> Découvrez les SOFT SKILLS </p>
      </div>

      <div className="flex items-center justify-center gap-10 mt-20 mb-10">
        <p className="w-80 text-center text-base">
          Explication de pourquoi on fait la liste. Lorem ipsum dolor sit amet
          consectetur. Nunc accumsan amet ultricies diam sodales nec elementum.
        </p>
      </div>

      <div className="p-4 max-w-4xl mx-auto">
        <ul className="space-y-4">
          {skills.map((skill, index) => (
            <li key={index} className="p-4  bg-white">
              <h2
                className="text-xl font-semibold text-white p-2 w-48 mb-5 text-center"
                style={{ backgroundColor: skill.bgColor }}
              >
                {skill.title}
              </h2>
              <p className="text-gray-700 mt-2 w-[300px]">{skill.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default QuizPage;
