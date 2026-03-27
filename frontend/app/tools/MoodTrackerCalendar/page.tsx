"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Question {
    id: number;
    text: string;
    icon: string;
    category: string;
    options: {
        id: string;
        text: string;
        value: "A" | "B" | "C" | "D";
    }[];
}

interface Result {
    type: "A" | "B" | "C" | "D";
    title: string;
    subtitle: string;
    description: string;
    pattern: string;
    trackingTip: string;
    icon: string;
    color: string;
    bgColor: string;
    lightColor: string;
    characteristics: string[];
    triggers: string[];
    selfCare: string[];
    quote?: string;
}

const MoodTrackerQuiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [showResults, setShowResults] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [direction, setDirection] = useState(0);

    const questions: Question[] = [
        {
            id: 1,
            text: "On an average, relatively uneventful day, your default baseline mood usually hovers around:",
            icon: "🌅",
            category: "Daily Baseline",
            options: [
                { id: "1A", text: "A low hum of low-grade anxiety or feeling like I'm forgetting to do something.", value: "A" },
                { id: "1B", text: "Focused and energetic; I'm usually thinking about what I need to accomplish next.", value: "B" },
                { id: "1C", text: "Even-keeled and neutral. It takes a lot to pull me out of my baseline.", value: "C" },
                { id: "1D", text: "Receptive but easily influenced by the moods of the people I interact with.", value: "D" },
            ],
        },
        {
            id: 2,
            text: "When you hit a frustrating, complex roadblock, your immediate emotional response is:",
            icon: "🛑",
            category: "Technical Trigger",
            options: [
                { id: "2A", text: "Self-doubt. I worry that I'm not skilled enough or that I've messed everything up.", value: "A" },
                { id: "2B", text: "Hot frustration. I want to aggressively force a fix or try multiple workarounds.", value: "B" },
                { id: "2C", text: "Emotional detachment. I shut down feelings and strictly read error logs.", value: "C" },
                { id: "2D", text: "Overwhelm. I need to step away before I can even look at the problem.", value: "D" },
            ],
        },
        {
            id: 3,
            text: "When coordinating a major, high-stakes family event, you primarily feel:",
            icon: "🎉",
            category: "Event Trigger",
            options: [
                { id: "3A", text: "Constantly worried about details slipping and disappointing others.", value: "A" },
                { id: "3B", text: "Like a general directing troops. I get annoyed if people aren't moving fast enough.", value: "B" },
                { id: "3C", text: "Highly logistical. I focus on budgets and schedules, ignoring emotional weight.", value: "C" },
                { id: "3D", text: "Sensory overload. Noise, dynamics, and questions drain my battery rapidly.", value: "D" },
            ],
        },
        {
            id: 4,
            text: "When facing a massive life change with bureaucratic uncertainty, you tend to:",
            icon: "📋",
            category: "Transition Trigger",
            options: [
                { id: "4A", text: "Spiral into 'what-if' scenarios, imagining the worst possible outcomes.", value: "A" },
                { id: "4B", text: "Treat it as a competition, getting agitated by slow processing or red tape.", value: "B" },
                { id: "4C", text: "Create a rigid checklist and refuse to think about it until approved.", value: "C" },
                { id: "4D", text: "Procrastinate because the size of the change feels too heavy to process.", value: "D" },
            ],
        },
        {
            id: 5,
            text: "When tracking metrics that fluctuate daily and are out of your control, you feel:",
            icon: "📊",
            category: "Performance Trigger",
            options: [
                { id: "5A", text: "Nervous. A downward trend makes me question my entire strategy.", value: "A" },
                { id: "5B", text: "Activated. I immediately want to tweak or change strategy to regain control.", value: "B" },
                { id: "5C", text: "Analytical. It's just data. I look objectively without emotional attachment.", value: "C" },
                { id: "5D", text: "Exhausted. The highs and lows take a massive emotional toll on me.", value: "D" },
            ],
        },
        {
            id: 6,
            text: "When you finally get to engage in a hobby you love, it serves as:",
            icon: "🎮",
            category: "Leisure Relief",
            options: [
                { id: "6A", text: "A brief distraction from worries, though anxiety waits for me when it's over.", value: "A" },
                { id: "6B", text: "A way to channel excess energy and competitive drive into something harmless.", value: "B" },
                { id: "6C", text: "A structured block of 'me time' I schedule to maintain a balanced routine.", value: "C" },
                { id: "6D", text: "A complete escape that allows my brain to finally turn off stress receptors.", value: "D" },
            ],
        },
        {
            id: 7,
            text: "If a close friend or family member misunderstands you, you immediately feel:",
            icon: "💔",
            category: "Conflict Trigger",
            options: [
                { id: "7A", text: "Guilt and a desperate need to over-explain until they reassure me.", value: "A" },
                { id: "7B", text: "Defensive. I want to argue my point and prove my intentions were correct.", value: "B" },
                { id: "7C", text: "Dismissive. If they want to misunderstand me, that's their problem.", value: "C" },
                { id: "7D", text: "Deeply hurt. I absorb their negative emotions and carry them for days.", value: "D" },
            ],
        },
        {
            id: 8,
            text: "Before you even realize you are emotionally triggered, your body warns you by:",
            icon: "⚠️",
            category: "Physical Manifestation",
            options: [
                { id: "8A", text: "Racing heart, shallow breathing, or a knot in my stomach.", value: "A" },
                { id: "8B", text: "Clenched jaw, tight shoulders, or feeling physically restless and hot.", value: "B" },
                { id: "8C", text: "Fatigue or numbness, like my body is powering down to low-battery mode.", value: "C" },
                { id: "8D", text: "Headaches, feeling heavy, or craving sleep or comfort food.", value: "D" },
            ],
        },
        {
            id: 9,
            text: "If your carefully planned daily itinerary suddenly falls apart, you react by:",
            icon: "🗺️",
            category: "Unpredictability Trigger",
            options: [
                { id: "9A", text: "Panicking. I struggle to pivot and worry the entire day is ruined.", value: "A" },
                { id: "9B", text: "Taking charge to forge a new path, getting irritable if others are slow.", value: "B" },
                { id: "9C", text: "Calmly accepting it and waiting for someone else to propose next steps.", value: "C" },
                { id: "9D", text: "Feeling internally scattered. I need quiet to recalibrate my energy.", value: "D" },
            ],
        },
        {
            id: 10,
            text: "When you realize you're in a bad emotional place, the most effective reset is to:",
            icon: "🔄",
            category: "Reset Button",
            options: [
                { id: "10A", text: "Talk it out with someone I trust to gain external perspective.", value: "A" },
                { id: "10B", text: "Go for a hard workout or tackle a project with tangible results.", value: "B" },
                { id: "10C", text: "Spend time alone doing something structured like organizing.", value: "C" },
                { id: "10D", text: "Engage in deep self-care—turn off phone, listen to music, sleep.", value: "D" },
            ],
        },
    ];

    const results: Record<string, Result> = {
        A: {
            type: "A",
            title: "The Internalizer",
            subtitle: "Anxiety & Overthinking Triggers",
            description: "Your primary triggers revolve around uncertainty, a fear of failure, and the perceived judgment of others. When triggered, your energy turns inward, causing you to overthink and spiral into 'what-if' scenarios.",
            pattern: "You often absorb stress mentally before it hits you physically.",
            trackingTip: "When tracking your mood, pay special attention to anticipatory anxiety—track how you feel leading up to an event, not just the event itself.",
            icon: "🧠",
            color: "#7C3AED",
            bgColor: "#EDE9FE",
            lightColor: "#F5F3FF",
            quote: "\"The mind is a wonderful servant but a terrible master. Your thoughts are not facts.\"",
            characteristics: [
                "Thoughtful and introspective",
                "Highly self-aware",
                "Detail-oriented thinker",
                "Sensitive to criticism",
                "Future-oriented planner",
            ],
            triggers: [
                "Uncertainty and ambiguity",
                "Perceived judgment from others",
                "Fear of making mistakes",
                "Anticipatory anxiety",
                "Social evaluation",
            ],
            selfCare: [
                "Practice mindfulness to calm racing thoughts",
                "Journal to externalize worries",
                "Challenge 'what-if' scenarios with evidence",
                "Set aside 'worry time' each day",
                "Learn to distinguish thoughts from facts",
            ],
        },
        B: {
            type: "B",
            title: "The Reactor",
            subtitle: "Frustration & Control Triggers",
            description: "Your primary triggers revolve around inefficiency, feeling blocked, or a loss of control. When triggered, your energy pushes outward. You experience stress as frustration, impatience, or a competitive urge to 'fix' the problem immediately.",
            pattern: "Your emotions often manifest as physical tension and a high-adrenaline response.",
            trackingTip: "Track your irritability levels. Often, anger or frustration is a secondary emotion covering up underlying exhaustion or feeling unappreciated.",
            icon: "⚡",
            color: "#DC2626",
            bgColor: "#FEE2E2",
            lightColor: "#FEF2F2",
            quote: "\"Between stimulus and response there is a space. In that space is our power to choose our response.\"",
            characteristics: [
                "Action-oriented and decisive",
                "Natural leader in crises",
                "High energy and drive",
                "Impatient with inefficiency",
                "Competitive spirit",
            ],
            triggers: [
                "Feeling blocked or slowed down",
                "Inefficient processes",
                "Loss of control",
                "Slow decision-making",
                "Red tape and bureaucracy",
            ],
            selfCare: [
                "Channel energy into physical activity",
                "Practice pausing before reacting",
                "Recognize frustration as a signal, not a solution",
                "Delegate when possible",
                "Use competitive drive in constructive ways",
            ],
        },
        C: {
            type: "C",
            title: "The Compartmentalizer",
            subtitle: "Detachment & Logic Triggers",
            description: "Your primary triggers are situations that are overly emotional, chaotic, or lack clear logic. To protect yourself, your instinct is to detach and intellectualize your feelings. While this makes you great in a crisis, it can lead to emotional bottling.",
            pattern: "You may not realize you are stressed until you feel completely burned out or physically ill.",
            trackingTip: "Don't just track 'Good' or 'Bad.' Force yourself to track nuanced emotions (e.g., 'bored,' 'content,' 'lonely,' 'satisfied') to build emotional vocabulary.",
            icon: "🧊",
            color: "#2563EB",
            bgColor: "#DBEAFE",
            lightColor: "#EFF6FF",
            quote: "\"Emotional intelligence is not the opposite of logic—it's the integration of both.\"",
            characteristics: [
                "Calm under pressure",
                "Logical and analytical",
                "Excellent problem-solver",
                "Emotionally steady",
                "Crisis-ready",
            ],
            triggers: [
                "Emotional chaos",
                "Illogical situations",
                "Feeling out of control",
                "Dramatic environments",
                "Unstructured emotions",
            ],
            selfCare: [
                "Practice identifying and naming emotions",
                "Schedule time to check in with feelings",
                "Journal to explore emotional landscape",
                "Allow yourself to feel without judgment",
                "Balance logic with emotional awareness",
            ],
        },
        D: {
            type: "D",
            title: "The Absorber",
            subtitle: "Overwhelm & Sensory Triggers",
            description: "Your primary triggers are environmental—loud noises, crowded spaces, and the heavy emotional states of the people around you. You are deeply empathetic, meaning you act as an emotional sponge, which can lead to rapid depletion of your social and emotional battery.",
            pattern: "Your emotional shifts are often tied directly to your physical environment and social interactions.",
            trackingTip: "Track your energy levels alongside your mood. You will likely see a direct correlation between how much social interaction you've had and your subsequent emotional dips.",
            icon: "🧽",
            color: "#059669",
            bgColor: "#D1FAE5",
            lightColor: "#ECFDF5",
            quote: "\"Empathy is a superpower, but even superheroes need to recharge.\"",
            characteristics: [
                "Deeply empathetic",
                "Sensitive to environments",
                "Intuitive and perceptive",
                "Nurturing and caring",
                "Attuned to others' needs",
            ],
            triggers: [
                "Loud noises and crowds",
                "Others' negative emotions",
                "Conflict and tension",
                "Sensory overload",
                "Emotional atmospheres",
            ],
            selfCare: [
                "Create quiet, calm spaces to recharge",
                "Set boundaries with emotional energy",
                "Practice grounding techniques",
                "Schedule alone time after social events",
                "Learn to differentiate your emotions from others'",
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
        const counts = { A: 0, B: 0, C: 0, D: 0 };
        answers.forEach((answer) => {
            counts[answer as keyof typeof counts]++;
        });

        // Find the most frequent answer
        let maxCount = 0;
        let resultType: "A" | "B" | "C" | "D" = "A";

        Object.entries(counts).forEach(([key, count]) => {
            if (count > maxCount) {
                maxCount = count;
                resultType = key as "A" | "B" | "C" | "D";
            }
        });

        return results[resultType];
    };

    const getScoreBreakdown = () => {
        const counts = { A: 0, B: 0, C: 0, D: 0 };
        answers.forEach((answer) => {
            counts[answer as keyof typeof counts]++;
        });
        return counts;
    };

    const checkForTie = () => {
        const counts = { A: 0, B: 0, C: 0, D: 0 };
        answers.forEach((answer) => {
            counts[answer as keyof typeof counts]++;
        });
        const sortedCounts = Object.values(counts).sort((a, b) => b - a);
        return sortedCounts[0] === sortedCounts[1];
    };

    const getProgressPercentage = () => {
        return ((currentQuestionIndex + 1) / questions.length) * 100;
    };

    if (showResults) {
        const result = calculateResult();
        const scoreBreakdown = getScoreBreakdown();
        const isTie = checkForTie();

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
                            {/* Top Bar */}
                            <div
                                className="h-2"
                                style={{ backgroundColor: result.color }}
                            />

                            <div className="p-8">
                                {/* Header */}
                                <div className="flex items-start gap-6 mb-8">
                                    <div
                                        className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg"
                                        style={{ backgroundColor: result.lightColor, color: result.color }}
                                    >
                                        {result.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <p className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00]">
                                                Your Emotional Pattern
                                            </p>
                                            {isTie && (
                                                <span className="px-3 py-1 bg-[#FFCE99]/20 text-[#AA5A00] text-xs rounded-full">
                                                    Blended Style
                                                </span>
                                            )}
                                        </div>
                                        <h1 className="text-3xl font-bold text-[#2F1500] mb-1">
                                            {result.title}
                                        </h1>
                                        <p className="text-lg" style={{ color: result.color }}>
                                            {result.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {isTie && (
                                    <div className="mb-6 p-4 bg-[#FFCE99]/10 rounded-xl border border-[#FFCE99]/30">
                                        <p className="text-sm text-[#562F00]">
                                            <span className="font-bold">Note:</span> You show a blend of emotional patterns, which is common. Different situations may bring out different responses in you.
                                        </p>
                                    </div>
                                )}

                                {/* Quote */}
                                {result.quote && (
                                    <div className="mb-6 p-6 bg-[#FFF7EB] rounded-xl border-l-4" style={{ borderLeftColor: result.color }}>
                                        <p className="text-lg italic text-[#562F00]">
                                            {result.quote}
                                        </p>
                                    </div>
                                )}

                                {/* Description */}
                                <div
                                    className="mb-8 p-6 rounded-2xl"
                                    style={{ backgroundColor: result.lightColor }}
                                >
                                    <p className="text-lg leading-relaxed" style={{ color: result.color }}>
                                        {result.description}
                                    </p>
                                </div>

                                {/* Pattern and Tracking Tip */}
                                <div className="mb-8 grid md:grid-cols-2 gap-4">
                                    <div className="p-5 bg-[#FFF7EB] rounded-xl border border-[#FFCE99]/30">
                                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-2">
                                            Your Pattern
                                        </h3>
                                        <p className="text-[#562F00]">🔍 {result.pattern}</p>
                                    </div>
                                    <div className="p-5 bg-[#FFF7EB] rounded-xl border border-[#FFCE99]/30">
                                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-2">
                                            Tracking Tip
                                        </h3>
                                        <p className="text-[#562F00]">📝 {result.trackingTip}</p>
                                    </div>
                                </div>

                                {/* Three Column Grid */}
                                <div className="mb-8 grid md:grid-cols-3 gap-4">
                                    {/* Characteristics */}
                                    <div className="p-5 bg-[#FFF7EB] rounded-xl border border-[#FFCE99]/30">
                                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-3">
                                            Your Traits
                                        </h3>
                                        <ul className="space-y-2">
                                            {result.characteristics.map((item, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm text-[#562F00]">
                                                    <span className="text-[#FF9644] mt-1">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Common Triggers */}
                                    <div className="p-5 bg-[#FFF7EB] rounded-xl border border-[#FFCE99]/30">
                                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-3">
                                            Common Triggers
                                        </h3>
                                        <ul className="space-y-2">
                                            {result.triggers.map((trigger, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm text-[#562F00]">
                                                    <span className="text-[#FF9644] mt-1">⚠️</span>
                                                    {trigger}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Self-Care Strategies */}
                                    <div className="p-5 bg-[#FFF7EB] rounded-xl border border-[#FFCE99]/30">
                                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-3">
                                            Self-Care
                                        </h3>
                                        <ul className="space-y-2">
                                            {result.selfCare.map((care, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm text-[#562F00]">
                                                    <span className="text-[#FF9644] mt-1">💚</span>
                                                    {care}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Answer Distribution */}
                                <div className="mb-8 p-6 bg-[#FFF7EB] rounded-2xl">
                                    <h2 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-4">
                                        Your Emotional Response Pattern
                                    </h2>
                                    <div className="space-y-4">
                                        {[
                                            { key: "A", label: "Internalizer", color: "#7C3AED", bgColor: "#EDE9FE" },
                                            { key: "B", label: "Reactor", color: "#DC2626", bgColor: "#FEE2E2" },
                                            { key: "C", label: "Compartmentalizer", color: "#2563EB", bgColor: "#DBEAFE" },
                                            { key: "D", label: "Absorber", color: "#059669", bgColor: "#D1FAE5" },
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
                                        Talk to Someone
                                    </Link>
                                    <Link
                                        href="/tools"
                                        className="flex-1 px-6 py-3 bg-[#562F00] text-white font-semibold rounded-xl hover:bg-[#2F1500] transition-all duration-300 text-center"
                                    >
                                        Try Other Tools
                                    </Link>
                                </div>

                                {/* Note */}
                                <p className="mt-6 text-xs text-center text-[#7A4A1A]">
                                    Understanding your emotional patterns is the first step toward greater self-awareness and emotional well-being.
                                </p>
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
                        Mood Tracker & Emotional Patterns
                    </p>
                    <h1 className="text-3xl font-bold text-[#2F1500] mb-2">
                        Understand Your Emotional Triggers
                    </h1>
                    <p className="text-[#7A4A1A]">
                        Answer 10 questions to discover how you respond to different situations and what drains your battery
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
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-[#AA5A00] font-medium">{currentQuestion.category}</span>
                        <div className="flex-1 h-3 bg-[#FFCE99]/20 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99]"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
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
                            {/* Question Header with Icon and Category */}
                            <div className="flex items-start gap-4 mb-6">
                                <span className="text-4xl">{currentQuestion.icon}</span>
                                <div>
                                    <span className="inline-block px-3 py-1 bg-[#FFF7EB] text-[#AA5A00] text-xs font-semibold rounded-full mb-2">
                                        {currentQuestion.category}
                                    </span>
                                    <h2 className="text-xl text-[#2F1500] font-medium leading-relaxed">
                                        {currentQuestion.text}
                                    </h2>
                                </div>
                            </div>

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
                                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 transition-all ${selectedOption === option.id
                                                ? "bg-[#FF9644] text-white"
                                                : option.value === "A"
                                                    ? "bg-purple-100 text-purple-600"
                                                    : option.value === "B"
                                                        ? "bg-red-100 text-red-600"
                                                        : option.value === "C"
                                                            ? "bg-blue-100 text-blue-600"
                                                            : "bg-green-100 text-green-600"
                                                }`}
                                        >
                                            {option.value}
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
                    Answer honestly - understanding your patterns is the first step toward emotional well-being
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

export default MoodTrackerQuiz;