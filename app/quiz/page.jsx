"use client";
import { useState } from "react";
import Button from "../components/button";
import Image from "next/image";
import ButtonQuizz from "../components/buttonquiz";

const Question = () => {
  const cards = [
    {
      question:
        "How do you show you are actively involved during a conversation?",
      title: "Listening",
      definition:
        "Maintain eye contact, nod, and summarize what the speaker says to confirm understanding.",
    },
    {
      question:
        "What steps do you take to ensure effective collaboration within a team?",
      title: "Teamwork",
      definition:
        "Share responsibilities, communicate openly, and encourage mutual support.",
    },
    {
      question:
        "How do you approach a problem when the solution isn’t immediately obvious?",
      title: "Problem-Solving",
      definition:
        "Break it into smaller parts, brainstorm solutions, and evaluate their feasibility.",
    },
    {
      question: "How do you prioritize tasks when you have multiple deadlines?",
      title: "Time Management",
      definition:
        "Rank tasks by urgency and importance, delegate when possible, and tackle the most critical tasks first.",
    },
    {
      question: "How do you handle unexpected changes to your work plans?",
      title: "Adaptability",
      definition:
        "Stay calm, reassess priorities, and adjust strategies to align with the new situation.",
    },
    {
      question: "How do you encourage creative thinking in your work?",
      title: "Creativity",
      definition:
        "Explore different perspectives, ask 'what if' questions, and be open to unconventional ideas.",
    },
    {
      question:
        "How do you show empathy towards a colleague facing challenges?",
      title: "Empathy",
      definition:
        "Listen without judgment, offer support, and acknowledge their feelings.",
    },
    {
      question: "How do you motivate your team to achieve a shared goal?",
      title: "Leadership",
      definition:
        "Set a clear vision, celebrate small wins, and provide constructive feedback.",
    },
    {
      question:
        "How do you verify the reliability of information before using it?",
      title: "Critical Thinking",
      definition:
        "Cross-check sources, analyze the context, and question assumptions.",
    },
    {
      question:
        "How do you respond when someone shares an idea you initially disagree with?",
      title: "Open-Mindedness",
      definition:
        "Listen actively, consider their perspective, and ask questions to understand their reasoning.",
    },
    {
      question:
        "How do you handle situations where your message is misunderstood?",
      title: "Communication",
      definition:
        "Clarify your intent, adjust your language, and ensure understanding by asking for feedback.",
    },
    {
      question:
        "How do you deal with a team member who isn’t pulling their weight?",
      title: "Teamwork",
      definition:
        "Approach them respectfully, discuss their challenges, and find ways to support or redistribute tasks.",
    },
    {
      question:
        "How do you balance long-term projects with daily responsibilities?",
      title: "Time Management",
      definition:
        "Allocate dedicated blocks of time, regularly review priorities, and avoid multitasking.",
    },
    {
      question: "How do you handle shifting priorities from leadership?",
      title: "Adaptability",
      definition:
        "Communicate to understand new expectations, reprioritize tasks, and stay focused on what’s most critical.",
    },
    {
      question:
        "How do you balance empathy with maintaining professional boundaries?",
      title: "Empathy",
      definition:
        "Be supportive and understanding while keeping the focus on solutions and workplace goals.",
    },
    {
      question:
        "How do you prevent stress from affecting your decision-making?",
      title: "Calmness",
      definition:
        "Take a moment to breathe, prioritize tasks, and make decisions step by step.",
    },
    {
      question:
        "How do you adapt your communication style when addressing a diverse audience?",
      title: "Communication",
      definition:
        "Analyze your audience’s needs, tailor your tone and examples to resonate with different perspectives, and seek feedback to ensure clarity.",
    },
    {
      question:
        "How do you rebuild trust and collaboration after a team conflict?",
      title: "Teamwork",
      definition:
        "Facilitate open discussions to address misunderstandings, define shared goals, and agree on accountability measures moving forward.",
    },
    {
      question:
        "How do you solve a problem where both potential solutions carry significant risks?",
      title: "Problem-Solving",
      definition:
        "Evaluate the risks and benefits of each option, consult stakeholders for insights, and create a contingency plan to minimize potential downsides.",
    },
    {
      question:
        "How do you manage your time effectively when faced with competing high-priority deadlines?",
      title: "Time Management",
      definition:
        "Use a prioritization matrix, delegate tasks when possible, and communicate with stakeholders about realistic deadlines.",
    },
    {
      question:
        "How do you manage adapting to a leadership change that completely shifts the team’s direction?",
      title: "Adaptability",
      definition:
        "Embrace the new vision, actively seek clarity on goals, and help guide your team to align with the new expectations.",
    },
    {
      question:
        "How do you approach creating innovative solutions under resource or time constraints?",
      title: "Creativity",
      definition:
        "Clarify the problem, identify unconventional resources, and collaborate with others to brainstorm and test small-scale prototypes.",
    },
    {
      question:
        "How do you respond when a colleague’s personal challenges impact their work performance?",
      title: "Empathy",
      definition:
        "Privately express understanding, help them identify resources or support, and assist in developing a short-term plan to manage their workload.",
    },
    {
      question:
        "How do you maintain composure and decisiveness during a crisis when others are panicking?",
      title: "Calmness",
      definition:
        "Focus on actionable steps, prioritize immediate needs, and use confident communication to reassure and direct others effectively.",
    },
    {
      question:
        "How do you identify hidden biases in your own decision-making process?",
      title: "Critical Thinking",
      definition:
        "Actively seek diverse perspectives, challenge assumptions, and use objective data to guide decisions wherever possible.",
    },
    {
      question:
        "How do you inspire optimism in others during prolonged periods of uncertainty?",
      title: "Positivity",
      definition:
        "Model resilience, celebrate small wins, and consistently highlight opportunities for growth and improvement.",
    },
    {
      question:
        "How do you integrate feedback that challenges your deeply held beliefs?",
      title: "Open-Mindedness",
      definition:
        "Take time to reflect on the feedback, research the opposing view, and consider how adapting might lead to better outcomes.",
    },
  ];

  const [currentCard, setCurrentCard] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const drawRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentCard(cards[randomIndex]);
    setShowAnswer(false);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-10">
      <div className="flex flex-col items-center justify-center gap-7 ">
        <ButtonQuizz text="GO BACK" href="/" />
        <Button text="SOFT SKILLS" href="/skill" className="pr-5 pl-5" />
      </div>

      <h1 className="text-3xl font-bold mb-20 mt-20">Random Question Cards</h1>
      <button
        onClick={drawRandomCard}
        className="bg-bleu text-white flex items-center px-8 py-2 text-xl transition rounded-bl-[30px] rounded-tr-[30px] mb-20"
      >
        Draw a Card
      </button>

      {currentCard && (
        <div
          className="relative w-80 h-[550px] bg-white shadow-lg rounded-lg group gap-10 "
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {/* Face avant : Question */}
          <div
            className={`absolute inset-0 mt-24 mb-24 flex flex-col items-center justify-center text-center transition-opacity duration-300 ${
              showAnswer ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex flex-col items-center gap-12 mb-12">
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
              <p className="text-lg font-medium p-5 bg-bleu text-white ">
                {currentCard.question}
              </p>
            </div>
            <p className="text-5xl font-bold text-bleu mt-auto mb-5">
              Skill Match
            </p>
          </div>

          {/* Face arrière : Titre et Définition */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-300 ${
              showAnswer ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-5xl text-bleu font-bold mb-24">Answer</p>
            <div className="flex items-center justify-center">
              <h2 className="text-2xl bg-bleu text-white font-bold mb-10 w-full p-5 ">
                {currentCard.title}
              </h2>
            </div>

            <p className="text-lg font-medium text-bleu w-80 ">
              {currentCard.definition}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
