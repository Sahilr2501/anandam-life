"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
    type: "A" | "B" | "C" | "D";
  }[];
}

interface Result {
  type: "A" | "B" | "C" | "D";
  title: string;
  description: string;
  strengths: string[];
  icon: string;
  color: string;
}

const PersonalityQuiz: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [direction, setDirection] = useState(0);
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [saveSuccessMessage, setSaveSuccessMessage] = useState("");
  const [saveErrorMessage, setSaveErrorMessage] = useState("");

  const questions: Question[] = [
    {
      id: 1,
      text: "You're working on a complex project and hit a frustrating roadblock. What is your immediate reaction?",
      options: [
        {
          id: "1A",
          text: "Step back, mentally map out the logic, and isolate the source of failure",
          type: "A",
        },
        {
          id: "1B",
          text: "Start trying different workarounds immediately to force a quick fix",
          type: "B",
        },
        {
          id: "1C",
          text: "Meticulously read through documentation or error logs line by line",
          type: "C",
        },
        {
          id: "1D",
          text: "Reach out to others to talk through the problem together",
          type: "D",
        },
      ],
    },
    {
      id: 2,
      text: "How do you handle pressure in intense, competitive situations?",
      options: [
        {
          id: "2A",
          text: "Stay cold and calculated, predicting opponents' moves",
          type: "A",
        },
        {
          id: "2B",
          text: "Rely on reflexes and instincts, making aggressive split-second plays",
          type: "B",
        },
        {
          id: "2C",
          text: "Stick strictly to proven strategies, avoiding unnecessary risks",
          type: "C",
        },
        {
          id: "2D",
          text: "Focus on team communication and synchronization",
          type: "D",
        },
      ],
    },
    {
      id: 3,
      text: "How do you prefer to plan a weekend getaway?",
      options: [
        {
          id: "3A",
          text: "Research history, architecture, and cultural significance beforehand",
          type: "A",
        },
        {
          id: "3B",
          text: "Figure out transportation but leave activities open to spontaneity",
          type: "B",
        },
        {
          id: "3C",
          text: "Create a detailed itinerary with booked tickets and mapped routes",
          type: "C",
        },
        {
          id: "3D",
          text: "Poll everyone coming to ensure activities match everyone's vibe",
          type: "D",
        },
      ],
    },
    {
      id: 4,
      text: "What drives your major life decisions?",
      options: [
        {
          id: "4A",
          text: "Long-term strategic value and career trajectory",
          type: "A",
        },
        {
          id: "4B",
          text: "Excitement, novelty, and new experiences",
          type: "B",
        },
        {
          id: "4C",
          text: "Security, structure, and proven success rates",
          type: "C",
        },
        {
          id: "4D",
          text: "Community impact and effect on relationships",
          type: "D",
        },
      ],
    },
    {
      id: 5,
      text: "How do you prefer to learn a new skill?",
      options: [
        {
          id: "5A",
          text: "Understanding the underlying theory before using it",
          type: "A",
        },
        {
          id: "5B",
          text: "Jumping in and learning by doing and fixing mistakes",
          type: "B",
        },
        {
          id: "5C",
          text: "Following structured, step-by-step tutorials",
          type: "C",
        },
        {
          id: "5D",
          text: "Learning in groups or with a mentor",
          type: "D",
        },
      ],
    },
    {
      id: 6,
      text: "How do you prefer to communicate your ideas?",
      options: [
        {
          id: "6A",
          text: "Directly and logically, focusing on objective facts",
          type: "A",
        },
        {
          id: "6B",
          text: "Energetically, focusing on big picture possibilities",
          type: "B",
        },
        {
          id: "6C",
          text: "Clearly and methodically, providing all details",
          type: "C",
        },
        {
          id: "6D",
          text: "Warmly and tactfully, considering others' perspectives",
          type: "D",
        },
      ],
    },
    {
      id: 7,
      text: "When faced with sudden change of plans, you usually feel:",
      options: [
        {
          id: "7A",
          text: "Intrigued - it's a new puzzle to solve",
          type: "A",
        },
        {
          id: "7B",
          text: "Energized - I love unpredictability",
          type: "B",
        },
        {
          id: "7C",
          text: "Frustrated - I put effort into the original plan",
          type: "C",
        },
        {
          id: "7D",
          text: "Concerned - I check if others are okay with the change",
          type: "D",
        },
      ],
    },
    {
      id: 8,
      text: "What role do you naturally take in group projects?",
      options: [
        {
          id: "8A",
          text: "The Visionary - designing overall architecture",
          type: "A",
        },
        {
          id: "8B",
          text: "The Troubleshooter - handling crises and tasks",
          type: "B",
        },
        {
          id: "8C",
          text: "The Organizer - tracking deadlines and details",
          type: "C",
        },
        {
          id: "8D",
          text: "The Mediator - keeping morale high",
          type: "D",
        },
      ],
    },
    {
      id: 9,
      text: "What kind of compliment means most to you?",
      options: [
        {
          id: "9A",
          text: '"You are brilliant and innovative"',
          type: "A",
        },
        {
          id: "9B",
          text: '"You are adaptable and get things done under pressure"',
          type: "B",
        },
        {
          id: "9C",
          text: '"You are reliable and do things right"',
          type: "C",
        },
        {
          id: "9D",
          text: '"You make everyone feel valued"',
          type: "D",
        },
      ],
    },
    {
      id: 10,
      text: "How do you feel after social interactions?",
      options: [
        {
          id: "10A",
          text: "Energized by meaningful conversations",
          type: "A",
        },
        {
          id: "10B",
          text: "Excited by the dynamic energy",
          type: "B",
        },
        {
          id: "10C",
          text: "Prefer quiet time to recharge",
          type: "C",
        },
        {
          id: "10D",
          text: "Focused on how others felt",
          type: "D",
        },
      ],
    },
  ];

  const results: Record<string, Result> = {
    A: {
      type: "A",
      title: "The Analyst",
      description:
        "You are a deep thinker who values competence, logic, and systems. You approach life like a complex puzzle waiting to be solved. You are independent, naturally curious about how things work under the hood, and prefer making decisions based on objective data rather than emotion.",
      strengths: ["Strategic thinking", "Problem-solving", "Logical analysis", "System design"],
      icon: "🧠",
      color: "#3B82F6",
    },
    B: {
      type: "B",
      title: "The Catalyst",
      description:
        "You are dynamic, spontaneous, and thrive in the moment. You learn best by doing and aren't afraid to take risks or pivot when necessary. You have great instincts under pressure and bring a high level of energy and resourcefulness to any situation.",
      strengths: ["Adaptability", "Quick decision-making", "Risk-taking", "Energy"],
      icon: "⚡",
      color: "#F97316",
    },
    C: {
      type: "C",
      title: "The Stabilizer",
      description:
        "You are the backbone of any operation. You value order, thoroughness, and practicality. People respect you for your reliability and your ability to turn chaotic ideas into actionable, step-by-step plans. You trust proven methods and pay attention to the details others miss.",
      strengths: ["Reliability", "Attention to detail", "Organization", "Practicality"],
      icon: "🛡️",
      color: "#10B981",
    },
    D: {
      type: "D",
      title: "The Empath",
      description:
        "You are deeply attuned to the people around you. Your superpower is your emotional intelligence and your ability to build strong, meaningful connections. You make decisions based on values and how they impact the community, naturally fostering supportive and cohesive environments.",
      strengths: ["Emotional intelligence", "Empathy", "Relationship building", "Harmony"],
      icon: "💕",
      color: "#A855F7",
    },
  };

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNext = async () => {
    if (!selectedOption) return;

    const currentQuestion = questions[currentQuestionIndex];
    const selectedOptionData = currentQuestion.options.find(
      (opt) => opt.id === selectedOption
    );

    if (selectedOptionData) {
      const newAnswers = [...answers, selectedOptionData.type];
      setAnswers(newAnswers);
      setDirection(1);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption("");
      } else {
        const finalResult = calculateResultFromAnswers(newAnswers);
        await saveQuizSubmission(finalResult, newAnswers);
        setTimeout(() => setShowResults(true), 300);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setDirection(-1);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption("");
    }
  };

  const handleRestart = () => {
    setHasStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedOption("");
    setUserName("");
    setPhoneNumber("");
    setSaveSuccessMessage("");
    setSaveErrorMessage("");
  };

  const calculateResultFromAnswers = (answerList: string[]): Result => {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    answerList.forEach((answer) => {
      counts[answer as keyof typeof counts]++;
    });

    const maxType = (Object.keys(counts) as Array<keyof typeof counts>).reduce(
      (a, b) => (counts[a] > counts[b] ? a : b)
    );

    return results[maxType];
  };

  const calculateResult = (): Result => calculateResultFromAnswers(answers);

  const saveQuizSubmission = async (result: Result, answerList: string[]) => {
    const trimmedName = userName.trim();
    const trimmedPhone = phoneNumber.trim();

    if (!trimmedName || !trimmedPhone) {
      setSaveErrorMessage("Please enter your name and phone number.");
      return;
    }

    const counts = { A: 0, B: 0, C: 0, D: 0 };
    answerList.forEach((answer) => {
      counts[answer as keyof typeof counts]++;
    });

    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:4000";
      const response = await fetch(`${apiBaseUrl}/quiz-submissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          testName: "Personality Quiz",
          name: trimmedName,
          phoneNumber: trimmedPhone,
          resultType: result.type,
          resultTitle: result.title,
          resultRole: "Personality Profile",
          answers: answerList,
          scoreBreakdown: counts,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Unable to save quiz result.");
      }

      setSaveSuccessMessage("Your result is saved successfully.");
      setSaveErrorMessage("");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to save quiz result.";
      setSaveErrorMessage(message);
      setSaveSuccessMessage("");
    }
  };

  const handleStartQuiz = () => {
    if (!userName.trim() || !phoneNumber.trim()) {
      setSaveErrorMessage("Please enter your name and phone number to start.");
      return;
    }
    setSaveErrorMessage("");
    setSaveSuccessMessage("");
    setHasStarted(true);
  };

  const getProgressPercentage = () => {
    return ((currentQuestionIndex + 1) / questions.length) * 100;
  };

  if (showResults) {
    const result = calculateResult();

    return (
      <div className="min-h-screen bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#FFCE99]/30"
          >
            {/* Result Header */}
            <div
              className="h-32"
              style={{ backgroundColor: result.color + '20' }}
            />

            <div className="px-8 pb-8 -mt-16">
              <div className="flex items-end gap-6 mb-8">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center text-5xl shadow-lg"
                  style={{ backgroundColor: result.color, color: 'white' }}
                >
                  {result.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-1">
                    Your Personality Type
                  </p>
                  <h1 className="text-3xl font-bold text-[#2F1500]">
                    {result.title}
                  </h1>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-lg text-[#7A4A1A] leading-relaxed">
                  {result.description}
                </p>
              </div>
              {saveSuccessMessage ? (
                <p className="mb-4 text-sm text-green-700">{saveSuccessMessage}</p>
              ) : null}
              {saveErrorMessage ? (
                <p className="mb-4 text-sm text-red-600">{saveErrorMessage}</p>
              ) : null}

              {/* Strengths */}
              <div className="mb-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-4">
                  Your Key Strengths
                </h2>
                <div className="flex flex-wrap gap-3">
                  {result.strengths.map((strength, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: result.color + '15',
                        color: result.color
                      }}
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>

              {/* Answer Distribution */}
              <div className="mb-8 p-6 bg-[#FFF7EB] rounded-2xl">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-4">
                  Your Answer Distribution
                </h2>
                <div className="space-y-4">
                  {["A", "B", "C", "D"].map((type, index) => {
                    const count = answers.filter((a) => a === type).length;
                    const percentage = (count / questions.length) * 100;
                    const typeResult = results[type];

                    return (
                      <div key={type} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                              style={{ backgroundColor: typeResult.color }}
                            >
                              {type}
                            </span>
                            <span className="font-medium text-[#562F00]">
                              {typeResult.title}
                            </span>
                          </div>
                          <span className="text-[#7A4A1A]">
                            {count} ({percentage.toFixed(0)}%)
                          </span>
                        </div>
                        <div className="h-2 bg-[#FFCE99]/20 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: typeResult.color }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleRestart}
                  className="flex-1 px-6 py-3 border-2 border-[#562F00] text-[#562F00] font-semibold rounded-xl hover:bg-[#562F00] hover:text-white transition-all duration-300"
                >
                  Take Quiz Again
                </button>
                <a
                  href="/contact"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-[#FF9644] to-[#FFCE99] text-[#562F00] font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 text-center"
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1] py-12">
        <div className="max-w-xl mx-auto px-4">
          <div className="rounded-2xl border border-[#FFCE99]/30 bg-white p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-2">
              Personality Quiz
            </p>
            <h1 className="text-2xl font-bold text-[#2F1500] mb-2">Start Your Quiz</h1>
            <p className="text-sm text-[#7A4A1A] mb-6">
              Enter your name and phone number before starting. Your result will be saved automatically.
            </p>
            <div className="space-y-4">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-[#FFCE99]/70 bg-[#FFFDF1] px-4 py-3 text-sm text-[#2F1500] outline-none focus:border-[#FF9644]"
              />
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full rounded-xl border border-[#FFCE99]/70 bg-[#FFFDF1] px-4 py-3 text-sm text-[#2F1500] outline-none focus:border-[#FF9644]"
              />
              {saveErrorMessage ? <p className="text-sm text-red-600">{saveErrorMessage}</p> : null}
              <button
                type="button"
                onClick={handleStartQuiz}
                className="w-full rounded-xl bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md transition-all hover:shadow-lg"
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = getProgressPercentage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1] py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-2">
            Personality Assessment
          </p>
          <h1 className="text-3xl font-bold text-[#2F1500] mb-2">
            Discover Your True Self
          </h1>
          <p className="text-[#7A4A1A]">
            Answer 10 questions to uncover your unique personality type
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-xl shadow-lg border border-[#FFCE99]/30 p-8 mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-[#562F00]">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-[#AA5A00]">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="h-3 bg-[#FFCE99]/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: direction * 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -50 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl border border-[#FFCE99]/30 overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-xl text-[#2F1500] font-medium mb-8 leading-relaxed">
              {currentQuestion.text}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <motion.button
                  key={option.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`w-full flex items-start p-5 rounded-xl border-2 transition-all ${selectedOption === option.id
                    ? "border-[#FF9644] bg-[#FFF7EB]"
                    : "border-[#FFCE99]/30 hover:border-[#FF9644]/50 hover:bg-[#FFF7EB]/50"
                    }`}
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 transition-all ${selectedOption === option.id
                      ? "bg-[#FF9644] text-white"
                      : "bg-[#FFF7EB] text-[#562F00]"
                      }`}
                  >
                    {option.type}
                  </span>
                  <span className="text-left flex-1 text-[#562F00]">
                    {option.text}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-[#FFF7EB] px-8 py-4 flex justify-between border-t border-[#FFCE99]/30">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${currentQuestionIndex === 0
                ? "text-[#FFCE99] cursor-not-allowed"
                : "text-[#562F00] hover:bg-[#562F00] hover:text-white"
                }`}
            >
              ← Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className={`px-8 py-2 rounded-lg font-medium transition-all ${!selectedOption
                ? "bg-[#FFCE99]/50 text-[#7A4A1A] cursor-not-allowed"
                : "bg-gradient-to-r from-[#FF9644] to-[#FFCE99] text-[#562F00] shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                }`}
            >
              {currentQuestionIndex === questions.length - 1 ? "See Results" : "Next →"}
            </button>
          </div>
        </motion.div>

        {/* Question Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => index <= currentQuestionIndex && setCurrentQuestionIndex(index)}
              className={`h-2 rounded-full transition-all ${index === currentQuestionIndex
                ? "w-6 bg-[#FF9644]"
                : index < currentQuestionIndex
                  ? "w-2 bg-[#AA5A00] cursor-pointer"
                  : "w-2 bg-[#FFCE99]/30 cursor-not-allowed"
                }`}
              disabled={index > currentQuestionIndex}
            />
          ))}
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#FF9644]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFCE99]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </div>
  );
};

export default PersonalityQuiz;