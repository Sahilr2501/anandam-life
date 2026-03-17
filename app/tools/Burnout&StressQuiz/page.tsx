"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Question {
    id: number;
    text: string;
    icon: string;
    options: {
        id: string;
        text: string;
        value: "A" | "B" | "C";
        score: number;
    }[];
}

interface Result {
    type: "A" | "B" | "C";
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    color: string;
    bgColor: string;
    recommendations: string[];
    urgency: "high" | "medium" | "low";
}

const BurnoutQuiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [showResults, setShowResults] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [direction, setDirection] = useState(0);

    const questions: Question[] = [
        {
            id: 1,
            text: "Do you wake up feeling drained, even after a full night's sleep, and feel a sense of dread about the tasks ahead?",
            icon: "😴",
            options: [
                { id: "1A", text: "Often", value: "A", score: 3 },
                { id: "1B", text: "Sometimes", value: "B", score: 2 },
                { id: "1C", text: "Rarely", value: "C", score: 1 },
            ],
        },
        {
            id: 2,
            text: "When faced with complex, multi-step processes, do you feel an immediate sense of overwhelming paralysis rather than a drive to solve the problem?",
            icon: "🔄",
            options: [
                { id: "2A", text: "Often", value: "A", score: 3 },
                { id: "2B", text: "Sometimes", value: "B", score: 2 },
                { id: "2C", text: "Rarely", value: "C", score: 1 },
            ],
        },
        {
            id: 3,
            text: "When coordinating or preparing for major life events, do you find yourself feeling detached, irritable, or cynical rather than excited?",
            icon: "🎉",
            options: [
                { id: "3A", text: "Often", value: "A", score: 3 },
                { id: "3B", text: "Sometimes", value: "B", score: 2 },
                { id: "3C", text: "Rarely", value: "C", score: 1 },
            ],
        },
        {
            id: 4,
            text: "Do activities you usually love now feel like they require too much energy to even start?",
            icon: "🎮",
            options: [
                { id: "4A", text: "Often", value: "A", score: 3 },
                { id: "4B", text: "Sometimes", value: "B", score: 2 },
                { id: "4C", text: "Rarely", value: "C", score: 1 },
            ],
        },
        {
            id: 5,
            text: "Are you finding yourself actively pulling away from social obligations because interacting feels like a monumental chore?",
            icon: "🚶",
            options: [
                { id: "5A", text: "Often", value: "A", score: 3 },
                { id: "5B", text: "Sometimes", value: "B", score: 2 },
                { id: "5C", text: "Rarely", value: "C", score: 1 },
            ],
        },
        {
            id: 6,
            text: "Do you feel a lingering sense of inadequacy, like no matter how much you do, you aren't making real progress?",
            icon: "📉",
            options: [
                { id: "6A", text: "Often", value: "A", score: 3 },
                { id: "6B", text: "Sometimes", value: "B", score: 2 },
                { id: "6C", text: "Rarely", value: "C", score: 1 },
            ],
        },
        {
            id: 7,
            text: "Do you feel emotionally 'flat' or struggle to muster empathy when others share their frustrations?",
            icon: "💭",
            options: [
                { id: "7A", text: "Often", value: "A", score: 3 },
                { id: "7B", text: "Sometimes", value: "B", score: 2 },
                { id: "7C", text: "Rarely", value: "C", score: 1 },
            ],
        },
        {
            id: 8,
            text: "Are you experiencing unexplained physical symptoms like tension headaches, jaw tightness, or stomach issues?",
            icon: "🤕",
            options: [
                { id: "8A", text: "Often", value: "A", score: 3 },
                { id: "8B", text: "Sometimes", value: "B", score: 2 },
                { id: "8C", text: "Rarely", value: "C", score: 1 },
            ],
        },
        {
            id: 9,
            text: "Do you rely on mindless distractions just to numb your brain at the end of the day?",
            icon: "📱",
            options: [
                { id: "9A", text: "Often", value: "A", score: 3 },
                { id: "9B", text: "Sometimes", value: "B", score: 2 },
                { id: "9C", text: "Rarely", value: "C", score: 1 },
            ],
        },
        {
            id: 10,
            text: "Do minor inconveniences trigger disproportionately large emotional reactions?",
            icon: "🌪️",
            options: [
                { id: "10A", text: "Often", value: "A", score: 3 },
                { id: "10B", text: "Sometimes", value: "B", score: 2 },
                { id: "10C", text: "Rarely", value: "C", score: 1 },
            ],
        },
    ];

    const results: Record<string, Result> = {
        A: {
            type: "A",
            title: "Running on Empty",
            subtitle: "High Burnout Risk",
            description: "Your answers indicate that you are likely experiencing burnout or chronic emotional exhaustion. Your nervous system is overwhelmed, and pushing through it will only increase the friction. This isn't a sign of weakness; it's a sign that you've been carrying a heavy mental load for too long.",
            icon: "🪫",
            color: "#DC2626",
            bgColor: "#FEE2E2",
            urgency: "high",
            recommendations: [
                "Take immediate steps to offload responsibilities",
                "Set firm boundaries with work and relationships",
                "Seek support from loved ones or a professional counselor",
                "Take time off if possible - you need restorative rest",
                "Practice saying 'no' without guilt",
            ],
        },
        B: {
            type: "B",
            title: "Approaching the Edge",
            subtitle: "Moderate Stress / Warning Zone",
            description: "You are carrying a significant amount of stress, and the cracks are starting to show. You might not be in full-blown burnout yet, but your mind and body are sending you warning signals. This is a crucial window to pause and re-evaluate.",
            icon: "⚠️",
            color: "#EA580C",
            bgColor: "#FFEDD5",
            urgency: "medium",
            recommendations: [
                "Proactively schedule real, restorative rest",
                "Re-evaluate your current commitments",
                "Practice daily stress management techniques",
                "Consider speaking with a counselor",
                "Identify and reduce one major stress source this week",
            ],
        },
        C: {
            type: "C",
            title: "Balanced & Coping Well",
            subtitle: "Low Stress",
            description: "You seem to be managing your current stress levels effectively. While everyone experiences tough days, you currently have the bandwidth to bounce back and maintain your emotional equilibrium.",
            icon: "🔋",
            color: "#059669",
            bgColor: "#D1FAE5",
            urgency: "low",
            recommendations: [
                "Continue prioritizing healthy habits and routines",
                "Maintain your boundaries to keep your battery charged",
                "Share your coping strategies with others",
                "Stay mindful of early warning signs",
                "Regular self-care keeps you resilient",
            ],
        },
    };

    const handleOptionSelect = (optionId: string) => {
        setSelectedOption(optionId);
    };

    const handleNext = () => {
        if (!selectedOption) return;

        const currentQuestion = questions[currentQuestionIndex];
        const selectedOptionData = currentQuestion.options.find(
            (opt) => opt.id === selectedOption
        );

        if (selectedOptionData) {
            const newAnswers = [...answers, selectedOptionData.value];
            setAnswers(newAnswers);
            setDirection(1);

            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedOption("");
            } else {
                setTimeout(() => setShowResults(true), 300);
            }
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setDirection(-1);
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedOption("");
            const newAnswers = [...answers];
            newAnswers.pop();
            setAnswers(newAnswers);
        }
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setShowResults(false);
        setSelectedOption("");
    };

    const calculateResult = (): Result => {
        const counts = { A: 0, B: 0, C: 0 };
        answers.forEach((answer) => {
            counts[answer as keyof typeof counts]++;
        });

        // Find the most frequent answer
        let maxCount = 0;
        let resultType: "A" | "B" | "C" = "B";

        Object.entries(counts).forEach(([key, count]) => {
            if (count > maxCount) {
                maxCount = count;
                resultType = key as "A" | "B" | "C";
            }
        });

        // If there's a tie, default to B (middle ground)
        const sortedCounts = Object.values(counts).sort((a, b) => b - a);
        if (sortedCounts[0] === sortedCounts[1]) {
            resultType = "B";
        }

        return results[resultType];
    };

    const getScoreBreakdown = () => {
        const counts = { A: 0, B: 0, C: 0 };
        answers.forEach((answer) => {
            counts[answer as keyof typeof counts]++;
        });
        return counts;
    };

    const getProgressPercentage = () => {
        return ((currentQuestionIndex + 1) / questions.length) * 100;
    };

    if (showResults) {
        const result = calculateResult();
        const scoreBreakdown = getScoreBreakdown();

        return (
            <div className="min-h-screen bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1] py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Result Card */}
                        <div className="bg-white rounded-3xl shadow-xl border border-[#FFCE99]/30 overflow-hidden">
                            {/* Top Bar with Urgency Indicator */}
                            <div
                                className="h-2"
                                style={{ backgroundColor: result.color }}
                            />

                            <div className="p-8">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-8">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-5xl">{result.icon}</span>
                                            <div>
                                                <p className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00]">
                                                    Your Result
                                                </p>
                                                <h1 className="text-3xl font-bold text-[#2F1500]">
                                                    {result.title}
                                                </h1>
                                            </div>
                                        </div>
                                        <p className="text-lg font-medium" style={{ color: result.color }}>
                                            {result.subtitle}
                                        </p>
                                    </div>

                                    {/* Urgency Badge */}
                                    <div
                                        className="px-4 py-2 rounded-full text-sm font-semibold"
                                        style={{
                                            backgroundColor: result.bgColor,
                                            color: result.color
                                        }}
                                    >
                                        {result.urgency === "high" && "Immediate Attention Needed"}
                                        {result.urgency === "medium" && "Take Action Now"}
                                        {result.urgency === "low" && "Maintain Balance"}
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-8 p-6 bg-[#FFF7EB] rounded-2xl">
                                    <p className="text-lg text-[#562F00] leading-relaxed">
                                        {result.description}
                                    </p>
                                </div>

                                {/* Score Breakdown */}
                                <div className="mb-8">
                                    <h2 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-4">
                                        Your Response Pattern
                                    </h2>
                                    <div className="space-y-4">
                                        {[
                                            { key: "A", label: "Often", color: "#DC2626", bgColor: "#FEE2E2" },
                                            { key: "B", label: "Sometimes", color: "#EA580C", bgColor: "#FFEDD5" },
                                            { key: "C", label: "Rarely", color: "#059669", bgColor: "#D1FAE5" },
                                        ].map((item) => {
                                            const count = scoreBreakdown[item.key as keyof typeof scoreBreakdown];
                                            const percentage = (count / questions.length) * 100;

                                            return (
                                                <div key={item.key} className="space-y-2">
                                                    <div className="flex items-center justify-between text-sm">
                                                        <div className="flex items-center gap-2">
                                                            <span
                                                                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                                                                style={{ backgroundColor: item.color }}
                                                            >
                                                                {item.key}
                                                            </span>
                                                            <span className="font-medium text-[#562F00]">
                                                                {item.label}
                                                            </span>
                                                        </div>
                                                        <span className="text-[#7A4A1A]">
                                                            {count} {count === 1 ? 'time' : 'times'} ({percentage.toFixed(0)}%)
                                                        </span>
                                                    </div>
                                                    <div className="h-2 bg-[#FFCE99]/20 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${percentage}%` }}
                                                            transition={{ duration: 1 }}
                                                            className="h-full rounded-full"
                                                            style={{ backgroundColor: item.color }}
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Recommendations */}
                                <div className="mb-8">
                                    <h2 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-4">
                                        Recommended Actions
                                    </h2>
                                    <div className="space-y-3">
                                        {result.recommendations.map((rec, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#FFCE99]/30"
                                            >
                                                <span className="text-[#FF9644] font-bold">{index + 1}.</span>
                                                <p className="text-[#562F00] flex-1">{rec}</p>
                                            </motion.div>
                                        ))}
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
                                    <Link
                                        href="/contact"
                                        className="flex-1 px-6 py-3 bg-gradient-to-r from-[#FF9644] to-[#FFCE99] text-[#562F00] font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 text-center"
                                    >
                                        Book a Consultation
                                    </Link>
                                    <Link
                                        href="/tools"
                                        className="flex-1 px-6 py-3 bg-[#562F00] text-white font-semibold rounded-xl hover:bg-[#2F1500] transition-all duration-300 text-center"
                                    >
                                        Try Other Tools
                                    </Link>
                                </div>

                                {/* Emergency Resources */}
                                {result.urgency === "high" && (
                                    <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-200">
                                        <p className="text-sm text-red-800 text-center">
                                            <span className="font-bold">Need immediate support?</span> If you're in crisis, please reach out to a mental health professional or call a crisis helpline in your area.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
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
                        Burnout & Stress Assessment
                    </p>
                    <h1 className="text-3xl font-bold text-[#2F1500] mb-2">
                        Check Your Battery Level
                    </h1>
                    <p className="text-[#7A4A1A]">
                        Answer 10 questions to understand your current stress levels
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
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestionIndex}
                        initial={{ opacity: 0, x: direction * 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction * -50 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-xl border border-[#FFCE99]/30 overflow-hidden"
                    >
                        <div className="p-8">
                            {/* Question Header with Icon */}
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl">{currentQuestion.icon}</span>
                                <h2 className="text-xl text-[#2F1500] font-medium leading-relaxed">
                                    {currentQuestion.text}
                                </h2>
                            </div>

                            {/* Options */}
                            <div className="space-y-3">
                                {currentQuestion.options.map((option) => (
                                    <motion.button
                                        key={option.id}
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        onClick={() => handleOptionSelect(option.id)}
                                        className={`w-full flex items-center p-5 rounded-xl border-2 transition-all ${selectedOption === option.id
                                            ? "border-[#FF9644] bg-[#FFF7EB]"
                                            : "border-[#FFCE99]/30 hover:border-[#FF9644]/50 hover:bg-[#FFF7EB]/50"
                                            }`}
                                    >
                                        <span
                                            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4 transition-all ${selectedOption === option.id
                                                ? "bg-[#FF9644] text-white"
                                                : option.value === "A"
                                                    ? "bg-red-100 text-red-600"
                                                    : option.value === "B"
                                                        ? "bg-orange-100 text-orange-600"
                                                        : "bg-green-100 text-green-600"
                                                }`}
                                        >
                                            {option.value}
                                        </span>
                                        <span className="text-left flex-1 text-[#562F00] font-medium">
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
                </AnimatePresence>

                {/* Question Navigation Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {questions.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (index <= currentQuestionIndex) {
                                    setDirection(index > currentQuestionIndex ? 1 : -1);
                                    setCurrentQuestionIndex(index);
                                    setSelectedOption("");
                                }
                            }}
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

                {/* Note about answers */}
                <p className="text-center text-xs text-[#7A4A1A] mt-4">
                    Answer honestly - there are no right or wrong answers
                </p>
            </div>

            {/* Floating Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-[#FF9644]/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFCE99]/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
        </div>
    );
};

export default BurnoutQuiz;