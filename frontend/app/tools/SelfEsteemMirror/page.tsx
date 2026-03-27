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
    strength?: string;
    growthArea?: string;
    icon: string;
    color: string;
    bgColor: string;
    lightColor: string;
    characteristics: string[];
    innerVoice: string;
    affirmations: string[];
    practices: string[];
    quote?: string;
}

const SelfEsteemQuiz: React.FC = () => {
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
            text: "When you look in the mirror in the morning, your default internal monologue is usually:",
            icon: "🪞",
            category: "Daily Reflection",
            options: [
                { id: "1A", text: "Neutral to positive. I accept myself as I am today.", value: "A" },
                { id: "1B", text: "Focused on improvement. I notice what I need to fix or work on.", value: "B" },
                { id: "1C", text: "Avoidant. I try not to look too long to avoid nitpicking.", value: "C" },
                { id: "1D", text: "Highly critical. I zero in on flaws and feel dissatisfied.", value: "D" },
            ],
        },
        {
            id: 2,
            text: "Your code push gets rejected from GitHub. Your first thought about your abilities is:",
            icon: "💻",
            category: "Technical Roadblock",
            options: [
                { id: "2A", text: "\"Normal part of process. I'll read the error log and resolve it.\"", value: "A" },
                { id: "2B", text: "\"I need to work harder and figure this out immediately.\"", value: "B" },
                { id: "2C", text: "\"I'll ignore this for now. Maybe web development isn't for me.\"", value: "C" },
                { id: "2D", text: "\"I'm not smart enough. Everyone else gets this faster.\"", value: "D" },
            ],
        },
        {
            id: 3,
            text: "When looking at others' success in areas you aspire to, you think:",
            icon: "🎯",
            category: "Ambition Comparison",
            options: [
                { id: "3A", text: "\"They figured it out, which means I can too.\"", value: "A" },
                { id: "3B", text: "\"I need to double my efforts to be better than them.\"", value: "B" },
                { id: "3C", text: "\"Too much work. I'll stick to what's comfortable.\"", value: "C" },
                { id: "3D", text: "\"I don't have what it takes. I'll probably fail.\"", value: "D" },
            ],
        },
        {
            id: 4,
            text: "You make a mistake on a minor detail for a major family event. You internally react by:",
            icon: "🎊",
            category: "High-Stakes Mistake",
            options: [
                { id: "4A", text: "Acknowledging it, forgiving myself, and finding a solution.", value: "A" },
                { id: "4B", text: "Feeling frustrated with myself, then rushing to fix it.", value: "B" },
                { id: "4C", text: "Brushing it off externally, but feeling embarrassed inside.", value: "C" },
                { id: "4D", text: "Spiraling into guilt, thinking I'm ruining everything.", value: "D" },
            ],
        },
        {
            id: 5,
            text: "Someone gives you a genuine compliment. You typically respond by:",
            icon: "🌟",
            category: "Accepting Compliments",
            options: [
                { id: "5A", text: "Saying \"Thank you!\" and genuinely absorbing the feedback.", value: "A" },
                { id: "5B", text: "Saying thanks, but pointing out something I could've done better.", value: "B" },
                { id: "5C", text: "Deflecting with a joke or changing the subject.", value: "C" },
                { id: "5D", text: "Dismissing it, assuming they're just being polite.", value: "D" },
            ],
        },
        {
            id: 6,
            text: "A bad tactical call costs you a competitive game. You tell yourself:",
            icon: "🎮",
            category: "Competitive Setback",
            options: [
                { id: "6A", text: "\"Good match, just miscalculated. I'll get 'em next time.\"", value: "A" },
                { id: "6B", text: "\"Can't believe I made such a stupid mistake. Need to grind.\"", value: "B" },
                { id: "6C", text: "\"Whatever, it's just a game.\" (Even though it bothers you)", value: "C" },
                { id: "6D", text: "\"I'm so bad at this. I always choke under pressure.\"", value: "D" },
            ],
        },
        {
            id: 7,
            text: "A complex concept isn't clicking for you today. You feel:",
            icon: "📚",
            category: "Skill Plateau",
            options: [
                { id: "7A", text: "Patient. Learning takes time, so I'll take a break.", value: "A" },
                { id: "7B", text: "Annoyed. I push myself until I force understanding.", value: "B" },
                { id: "7C", text: "Bored. I switch to something easier to avoid feeling stuck.", value: "C" },
                { id: "7D", text: "Defeated. Proof that I'm not talented enough.", value: "D" },
            ],
        },
        {
            id: 8,
            text: "You're exhausted but someone asks for a favor. If you say no, your inner voice says:",
            icon: "🚧",
            category: "Boundary Test",
            options: [
                { id: "8A", text: "\"My rest is important. It's okay to protect my time.\"", value: "A" },
                { id: "8B", text: "\"I should have found a way. Need to be more efficient.\"", value: "B" },
                { id: "8C", text: "\"Hope they're not mad. I'll avoid them for a few days.\"", value: "C" },
                { id: "8D", text: "\"I'm a bad, selfish person for not helping.\"", value: "D" },
            ],
        },
        {
            id: 9,
            text: "You finish a creative project, then see a polished professional design. You feel:",
            icon: "🎨",
            category: "Creative Comparison",
            options: [
                { id: "9A", text: "Inspired. I admire their work and think what I can learn.", value: "A" },
                { id: "9B", text: "Competitive. I want to scrap mine and start over better.", value: "B" },
                { id: "9C", text: "Apathetic. My project feels pointless to continue.", value: "C" },
                { id: "9D", text: "Inadequate. I feel embarrassed by my work.", value: "D" },
            ],
        },
        {
            id: 10,
            text: "At the end of the day, alone with your thoughts, the tone of your mind is:",
            icon: "🌙",
            category: "Self-Compassion Baseline",
            options: [
                { id: "10A", text: "Warm, forgiving, and generally supportive.", value: "A" },
                { id: "10B", text: "Like a strict coach, reviewing what was achieved.", value: "B" },
                { id: "10C", text: "Distracted. I keep my mind occupied to avoid self-evaluation.", value: "C" },
                { id: "10D", text: "Like a harsh critic, replaying failures on loop.", value: "D" },
            ],
        },
    ];

    const results: Record<string, Result> = {
        A: {
            type: "A",
            title: "The Nurturer",
            subtitle: "High Self-Compassion & Secure Self-Worth",
            description: "You have a healthy, grounded relationship with yourself. You recognize that your worth is not tied to your productivity, perfect code, or winning every match. When you make mistakes, you treat yourself with the same kindness and understanding you would offer a good friend.",
            strength: "Resilience. You bounce back from setbacks quickly because your inner voice is a safe place.",
            icon: "🌿",
            color: "#059669",
            bgColor: "#D1FAE5",
            lightColor: "#ECFDF5",
            quote: "\"Self-compassion is simply giving the same kindness to ourselves that we would give to others.\"",
            characteristics: [
                "Kind inner voice",
                "Accepts imperfection",
                "Resilient in face of setbacks",
                "Genuinely accepts compliments",
                "Balanced self-perspective",
            ],
            innerVoice: "Warm, supportive, and forgiving. Your inner voice sounds like a caring friend who has your back no matter what.",
            affirmations: [
                "I am enough, exactly as I am.",
                "My worth is not determined by my productivity.",
                "I treat myself with the same kindness I offer others.",
                "Mistakes are opportunities to learn and grow.",
                "I deserve love and respect from myself.",
            ],
            practices: [
                "Continue your nurturing self-talk",
                "Share your self-compassion skills with others",
                "Model healthy self-worth for those around you",
                "Keep your balanced perspective",
                "You're doing great - keep going!",
            ],
        },
        B: {
            type: "B",
            title: "The Driver",
            subtitle: "Conditional Self-Worth / High Achiever",
            description: "Your self-esteem is highly tied to your achievements, competence, and output. Your inner voice sounds like a demanding coach. While this drives you to succeed and master new skills, it also means you are exhausting to live with internally. You likely struggle to feel 'good enough' unless you are actively winning or producing.",
            growthArea: "Learning to separate your inherent value as a person from your daily productivity and performance metrics.",
            icon: "🏎️",
            color: "#DC2626",
            bgColor: "#FEE2E2",
            lightColor: "#FEF2F2",
            quote: "\"You are a human being, not a human doing. Your worth is not measured by your output.\"",
            characteristics: [
                "Ambitious and driven",
                "Sets high standards",
                "Achievement-oriented",
                "Hardworking and disciplined",
                "Results-focused",
            ],
            innerVoice: "Like a strict coach who's never quite satisfied. 'Good, but could be better. Work harder. Don't slack off.'",
            affirmations: [
                "I am worthy even when I'm not producing.",
                "My value comes from who I am, not what I do.",
                "Rest is productive. Recovery is essential.",
                "I am enough, even on unproductive days.",
                "My achievements don't define my worth.",
            ],
            practices: [
                "Schedule guilt-free rest days",
                "Practice self-acceptance on low-productivity days",
                "Notice when you tie worth to output",
                "Celebrate effort, not just outcomes",
                "Ask yourself: 'What would I tell a friend?'",
            ],
        },
        C: {
            type: "C",
            title: "The Deflector",
            subtitle: "Avoidant Self-Esteem",
            description: "You protect yourself from your inner critic by avoiding situations that might trigger it. Instead of facing failure or fully accepting praise, you deflect, use self-deprecating humor, or quit when things get too hard. You might convince yourself you 'don't care' as a defense mechanism against feeling inadequate.",
            growthArea: "Practicing vulnerability and allowing yourself to care deeply about things, even if it means risking failure.",
            icon: "🛡️",
            color: "#7C3AED",
            bgColor: "#EDE9FE",
            lightColor: "#F5F3FF",
            quote: "\"The cave you fear to enter holds the treasure you seek. Vulnerability is courage.\"",
            characteristics: [
                "Uses humor to deflect",
                "Avoids vulnerability",
                "Downplays achievements",
                "Quits when things get hard",
                "Pretends not to care",
            ],
            innerVoice: "Distracted and avoidant. 'Let's not think about that. What's on TV? Oh, look, a notification!'",
            affirmations: [
                "It's safe to care deeply about things.",
                "My feelings are valid and worth exploring.",
                "I can face discomfort and grow from it.",
                "Vulnerability is strength, not weakness.",
                "I deserve to take up space.",
            ],
            practices: [
                "Practice sitting with discomfort",
                "Allow yourself to care, even if it risks failure",
                "Accept compliments with a simple 'thank you'",
                "Notice when you're deflecting and pause",
                "Journal to explore avoided feelings",
            ],
        },
        D: {
            type: "D",
            title: "The Critic",
            subtitle: "Harsh Inner Voice / Low Self-Esteem",
            description: "Your inner critic is currently running the show. You have a habit of internalizing mistakes as permanent character flaws. You hold yourself to impossible standards and speak to yourself in a way you would never tolerate from a friend. This heavy internal burden makes every challenge feel exponentially harder.",
            growthArea: "Actively interrupting the cycle of negative self-talk and consciously practicing self-compassion, even when it feels unnatural at first.",
            icon: "⚡",
            color: "#2563EB",
            bgColor: "#DBEAFE",
            lightColor: "#EFF6FF",
            quote: "\"Be kind to yourself. The voice in your head matters. You deserve your own compassion.\"",
            characteristics: [
                "Harsh self-criticism",
                "Perfectionist tendencies",
                "Internalizes mistakes",
                "Impossible standards",
                "Difficulty accepting kindness",
            ],
            innerVoice: "A relentless critic. 'You're not good enough. You always mess up. Everyone else is better.'",
            affirmations: [
                "I am worthy of love and kindness, especially from myself.",
                "Mistakes don't define me. I am not my failures.",
                "I speak to myself with the compassion I'd offer a friend.",
                "Every day, I'm learning to be kinder to myself.",
                "I deserve to feel good about who I am.",
            ],
            practices: [
                "Notice negative self-talk without judgment",
                "Ask: 'Would I say this to someone I love?'",
                "Practice one small self-compassionate statement daily",
                "Celebrate tiny wins and efforts",
                "Consider speaking with a counselor",
            ],
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
            const newAnswers = [...answers, selectedOptionData.value];
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
            const newAnswers = [...answers];
            newAnswers.pop();
            setAnswers(newAnswers);
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

    const calculateResult = (): Result => calculateResultFromAnswers(answers);

    const getScoreBreakdown = () => {
        const counts = { A: 0, B: 0, C: 0, D: 0 };
        answers.forEach((answer) => {
            counts[answer as keyof typeof counts]++;
        });
        return counts;
    };

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
                    testName: "Self Esteem Mirror",
                    name: trimmedName,
                    phoneNumber: trimmedPhone,
                    resultType: result.type,
                    resultTitle: result.title,
                    resultRole: result.subtitle,
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
                                                Your Self-Esteem Pattern
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
                                            <span className="font-bold">Note:</span> You show a blend of self-esteem patterns, which is common. Different situations may bring out different inner voices.
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
                                {saveSuccessMessage ? (
                                    <p className="mb-4 text-sm text-green-700">{saveSuccessMessage}</p>
                                ) : null}
                                {saveErrorMessage ? (
                                    <p className="mb-4 text-sm text-red-600">{saveErrorMessage}</p>
                                ) : null}

                                {/* Strength or Growth Area */}
                                <div className="mb-8">
                                    {result.strength && (
                                        <div className="p-5 bg-[#FFF7EB] rounded-xl border border-[#FFCE99]/30">
                                            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-2">
                                                Your Strength
                                            </h3>
                                            <p className="text-[#562F00]">✨ {result.strength}</p>
                                        </div>
                                    )}
                                    {result.growthArea && (
                                        <div className="p-5 bg-[#FFF7EB] rounded-xl border border-[#FFCE99]/30">
                                            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-2">
                                                Growth Area
                                            </h3>
                                            <p className="text-[#562F00]">🌱 {result.growthArea}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Inner Voice Card */}
                                <div className="mb-8 p-6 bg-[#FFF7EB] rounded-2xl border border-[#FFCE99]/30">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-3">
                                        Your Inner Voice Sounds Like
                                    </h3>
                                    <p className="text-lg text-[#562F00] italic">"{result.innerVoice}"</p>
                                </div>

                                {/* Two Column Grid */}
                                <div className="mb-8 grid md:grid-cols-2 gap-4">
                                    {/* Characteristics */}
                                    <div className="p-5 bg-[#FFF7EB] rounded-xl border border-[#FFCE99]/30">
                                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-3">
                                            Key Characteristics
                                        </h3>
                                        <ul className="space-y-2">
                                            {result.characteristics.map((item, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm text-[#562F00]">
                                                    <span className="text-[#FF9644] mt-1">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Daily Practices */}
                                    <div className="p-5 bg-[#FFF7EB] rounded-xl border border-[#FFCE99]/30">
                                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-3">
                                            Daily Practices
                                        </h3>
                                        <ul className="space-y-2">
                                            {result.practices.map((practice, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm text-[#562F00]">
                                                    <span className="text-[#FF9644] mt-1">→</span>
                                                    {practice}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Affirmations */}
                                <div className="mb-8 p-6 bg-[#FFF7EB] rounded-2xl">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-4">
                                        Affirmations for You
                                    </h3>
                                    <div className="space-y-3">
                                        {result.affirmations.map((affirmation, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#FFCE99]/30"
                                            >
                                                <span className="text-[#FF9644] text-xl">💭</span>
                                                <p className="text-[#562F00] italic">{affirmation}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Answer Distribution */}
                                <div className="mb-8 p-6 bg-[#FFF7EB] rounded-2xl">
                                    <h2 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-4">
                                        Your Response Pattern
                                    </h2>
                                    <div className="space-y-4">
                                        {[
                                            { key: "A", label: "Nurturer", color: "#059669", bgColor: "#D1FAE5" },
                                            { key: "B", label: "Driver", color: "#DC2626", bgColor: "#FEE2E2" },
                                            { key: "C", label: "Deflector", color: "#7C3AED", bgColor: "#EDE9FE" },
                                            { key: "D", label: "Critic", color: "#2563EB", bgColor: "#DBEAFE" },
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
                                    Your relationship with yourself can change and heal. These insights are a starting point for growth.
                                </p>
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
                            Self Esteem Mirror
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
                        Self-Esteem Mirror
                    </p>
                    <h1 className="text-3xl font-bold text-[#2F1500] mb-2">
                        Reflect on Your Inner Voice
                    </h1>
                    <p className="text-[#7A4A1A]">
                        Answer 10 questions to understand your relationship with yourself and discover your self-esteem pattern
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
                                                        ? "bg-green-100 text-green-600"
                                                        : option.value === "B"
                                                            ? "bg-red-100 text-red-600"
                                                            : option.value === "C"
                                                                ? "bg-purple-100 text-purple-600"
                                                                : "bg-blue-100 text-blue-600"
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
                    Answer honestly - your relationship with yourself is the foundation of all others
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

export default SelfEsteemQuiz;