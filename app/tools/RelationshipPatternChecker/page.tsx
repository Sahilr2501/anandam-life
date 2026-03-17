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
        value: "A" | "B" | "C" | "D";
    }[];
}

interface Result {
    type: "A" | "B" | "C" | "D";
    title: string;
    subtitle: string;
    description: string;
    coreStrength?: string;
    growthArea?: string;
    icon: string;
    color: string;
    bgColor: string;
    lightColor: string;
    characteristics: string[];
    recommendations: string[];
    quote?: string;
}

const RelationshipPatternChecker: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [showResults, setShowResults] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [direction, setDirection] = useState(0);

    const questions: Question[] = [
        {
            id: 1,
            text: "When you first start getting close to someone (dating or a new best friend), your primary underlying feeling is usually:",
            icon: "💭",
            options: [
                { id: "1A", text: "Comfortable. I enjoy the connection and let things develop naturally.", value: "A" },
                { id: "1B", text: "Excited but nervous. I worry they might not like me as much as I like them.", value: "B" },
                { id: "1C", text: "Cautious. I maintain my independence and keep a little distance.", value: "C" },
                { id: "1D", text: "Conflicted. I want closeness but also feel a strong urge to pull away.", value: "D" },
            ],
        },
        {
            id: 2,
            text: "When a conflict or argument arises with someone you care about, your instinct is to:",
            icon: "⚡",
            options: [
                { id: "2A", text: "Address it directly and calmly, listen to their side, and find a mutual solution.", value: "A" },
                { id: "2B", text: "Feel anxious, apologize quickly, or push to resolve it immediately so they don't pull away.", value: "B" },
                { id: "2C", text: "Withdraw. I need space to process and prefer to let it blow over.", value: "C" },
                { id: "2D", text: "Feel overwhelmed, lash out defensively, then completely shut down or walk away.", value: "D" },
            ],
        },
        {
            id: 3,
            text: "How do you feel about relying on others for emotional support?",
            icon: "🤝",
            options: [
                { id: "3A", text: "Comfortable leaning on loved ones and happy to support them in return.", value: "A" },
                { id: "3B", text: "I want to rely on them but fear my needs are a burden or they won't be there.", value: "B" },
                { id: "3C", text: "I prefer to handle problems on my own. Relying on others feels vulnerable.", value: "C" },
                { id: "3D", text: "I crave support but trusting others is difficult. I often push people away.", value: "D" },
            ],
        },
        {
            id: 4,
            text: "If your partner or close friend suddenly seems distant or takes a long time to text back, you usually:",
            icon: "📱",
            options: [
                { id: "4A", text: "Assume they're just busy and go about my day without overthinking.", value: "A" },
                { id: "4B", text: "Immediately wonder if I did something wrong or if they're losing interest.", value: "B" },
                { id: "4C", text: "Feel secretly relieved to have space, or focus on my own projects.", value: "C" },
                { id: "4D", text: "Assume the worst and start putting my guard up to protect myself.", value: "D" },
            ],
        },
        {
            id: 5,
            text: "How do you typically express your needs and boundaries?",
            icon: "🛡️",
            options: [
                { id: "5A", text: "Openly and directly. I trust my needs are valid and will be respected.", value: "A" },
                { id: "5B", text: "I hint or keep quiet to avoid coming across as 'needy' or demanding.", value: "B" },
                { id: "5C", text: "I'm very strict. If someone crosses them, I'm quick to distance myself.", value: "C" },
                { id: "5D", text: "My boundaries fluctuate wildly. Sometimes none, other times walls.", value: "D" },
            ],
        },
        {
            id: 6,
            text: "When thinking about long-term commitment, your internal reaction is:",
            icon: "🔒",
            options: [
                { id: "6A", text: "Positive. It feels like a natural progression of a healthy relationship.", value: "A" },
                { id: "6B", text: "Desperate but scary. I want it deeply but fear it will fall apart.", value: "B" },
                { id: "6C", text: "Restricting. It feels like loss of personal freedom and independence.", value: "C" },
                { id: "6D", text: "Confusing. I want connection but it feels dangerous or suffocating.", value: "D" },
            ],
        },
        {
            id: 7,
            text: "How do you view your own self-worth in the context of a relationship?",
            icon: "💎",
            options: [
                { id: "7A", text: "I know my value, whether single or in a relationship.", value: "A" },
                { id: "7B", text: "My self-esteem fluctuates based on attention and validation I receive.", value: "B" },
                { id: "7C", text: "I derive worth from achievements and independence, not relationships.", value: "C" },
                { id: "7D", text: "I struggle with feeling fundamentally unlovable or unworthy.", value: "D" },
            ],
        },
        {
            id: 8,
            text: "If a relationship ends or a friendship falls apart, your healing process looks like:",
            icon: "🌱",
            options: [
                { id: "8A", text: "I grieve, learn from the experience, and eventually move forward.", value: "A" },
                { id: "8B", text: "I'm devastated, obsessing over what I could have done differently.", value: "B" },
                { id: "8C", text: "I bounce back quickly, telling myself I didn't need them anyway.", value: "C" },
                { id: "8D", text: "It reinforces my belief that people always leave, making trust harder.", value: "D" },
            ],
        },
        {
            id: 9,
            text: "When someone you are seeing wants to spend almost all their free time with you, you feel:",
            icon: "⏰",
            options: [
                { id: "9A", text: "Happy they want to connect, but I carve out time for my own hobbies.", value: "A" },
                { id: "9B", text: "Validated and loved. This is exactly the kind of closeness I want.", value: "B" },
                { id: "9C", text: "Suffocated and overwhelmed. I immediately need to create distance.", value: "C" },
                { id: "9D", text: "Flattered at first, but then highly suspicious of their motives.", value: "D" },
            ],
        },
        {
            id: 10,
            text: "Ultimately, what is your biggest underlying fear in relationships?",
            icon: "😰",
            options: [
                { id: "10A", text: "Losing a meaningful connection, though I know I'd eventually be okay.", value: "A" },
                { id: "10B", text: "Being abandoned, rejected, or found out to be 'not enough.'", value: "B" },
                { id: "10C", text: "Losing independence, being controlled, or forced to be vulnerable.", value: "C" },
                { id: "10D", text: "Being trapped where I'm deeply hurt, betrayed, or emotionally unsafe.", value: "D" },
            ],
        },
    ];

    const results: Record<string, Result> = {
        A: {
            type: "A",
            title: "Secure Attachment",
            subtitle: "Balanced & Resilient",
            description: "You are generally comfortable with intimacy, trust, and mutual dependence. You don't fear being alone, but you also don't fear getting close to others. You are naturally skilled at communicating your needs openly and navigating conflict without resorting to defensive extremes.",
            coreStrength: "Emotional regulation and healthy boundary setting",
            icon: "🏛️",
            color: "#059669",
            bgColor: "#D1FAE5",
            lightColor: "#ECFDF5",
            quote: "\"Secure attachment is like a safe harbor - you can venture out into the world knowing you have a place to return to.\"",
            characteristics: [
                "Comfortable with intimacy and independence",
                "Trusts others and is trustworthy",
                "Communicates needs openly and directly",
                "Navigates conflict constructively",
                "Maintains healthy, flexible boundaries",
            ],
            recommendations: [
                "Continue nurturing your secure foundation",
                "Help others feel safe in relationships",
                "Share your emotional wisdom with partners",
                "Maintain your balanced approach to connection",
                "Your security is a gift - model it for others",
            ],
        },
        B: {
            type: "B",
            title: "Anxious (Preoccupied) Attachment",
            subtitle: "Seeking Security",
            description: "You crave deep emotional intimacy but often harbor a persistent fear that others don't want to be as close to you as you do to them. You are highly attuned to shifts in your partner's mood and might overthink their actions. You often look to your relationships for validation and security.",
            growthArea: "Building self-soothing skills and finding internal validation",
            icon: "🌊",
            color: "#DC2626",
            bgColor: "#FEE2E2",
            lightColor: "#FEF2F2",
            quote: "\"The anxious heart seeks external reassurance, but true security is built from within.\"",
            characteristics: [
                "Craves deep connection but fears rejection",
                "Highly sensitive to partner's moods",
                "Tends to overthink and ruminate",
                "Seeks validation from relationships",
                "Worries about being 'not enough'",
            ],
            recommendations: [
                "Practice self-soothing when anxiety rises",
                "Build self-worth independent of relationships",
                "Communicate needs without fear of rejection",
                "Learn to sit with uncertainty",
                "Consider therapy to explore attachment patterns",
            ],
        },
        C: {
            type: "C",
            title: "Avoidant (Dismissive) Attachment",
            subtitle: "Independent & Self-Reliant",
            description: "You highly value your independence and self-sufficiency, sometimes to the point of pushing others away. Emotional closeness can feel suffocating or restrictive to you. You tend to deal with conflict by withdrawing or minimizing the importance of the relationship to protect yourself from vulnerability.",
            growthArea: "Learning to lean on others and realizing that vulnerability does not equal weakness",
            icon: "🏔️",
            color: "#EA580C",
            bgColor: "#FFEDD5",
            lightColor: "#FFF7ED",
            quote: "\"Independence is strength, but true freedom includes the choice to connect.\"",
            characteristics: [
                "Values independence above all",
                "Discomfort with emotional closeness",
                "Withdraws during conflict",
                "Minimizes importance of relationships",
                "Struggles to rely on others",
            ],
            recommendations: [
                "Practice leaning on trusted others",
                "Recognize vulnerability as strength",
                "Gradually open up in safe relationships",
                "Notice when you're withdrawing and pause",
                "Small steps toward connection add up",
            ],
        },
        D: {
            type: "D",
            title: "Fearful-Avoidant (Disorganized) Attachment",
            subtitle: "Conflicted & Cautious",
            description: "You experience a confusing push-and-pull dynamic. You deeply desire close relationships, but you are also terrified of the vulnerability they require. Because past experiences may have taught you that closeness leads to pain, you might simultaneously seek affection and reject it when it gets too real.",
            growthArea: "Creating a sense of internal safety and untangling past relationship traumas",
            icon: "🌪️",
            color: "#7C3AED",
            bgColor: "#EDE9FE",
            lightColor: "#F5F3FF",
            quote: "\"Healing begins when we understand that our past does not have to dictate our future connections.\"",
            characteristics: [
                "Desires connection but fears it deeply",
                "Experiences push-pull in relationships",
                "May have history of relationship trauma",
                "Struggles to trust consistently",
                "Fluctuates between clinging and pushing away",
            ],
            recommendations: [
                "Create a sense of internal safety first",
                "Work with a therapist to heal past wounds",
                "Practice consistent, gentle boundaries",
                "Go slowly in new relationships",
                "Be patient - healing takes time and compassion",
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
                                                Your Attachment Style
                                            </p>
                                            {isTie && (
                                                <span className="px-3 py-1 bg-[#FFCE99]/20 text-[#AA5A00] text-xs rounded-full">
                                                    Mixed Style
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
                                            <span className="font-bold">Note:</span> You show a blend of attachment styles, which is common. Your results show your primary pattern, but you may exhibit different styles in different relationships or situations. Attachment exists on a spectrum.
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

                                {/* Core Strength or Growth Area */}
                                <div className="mb-8 grid md:grid-cols-2 gap-4">
                                    {result.coreStrength && (
                                        <div className="p-5 bg-[#FFF7EB] rounded-xl border border-[#FFCE99]/30">
                                            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-2">
                                                Core Strength
                                            </h3>
                                            <p className="text-[#562F00]">✨ {result.coreStrength}</p>
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

                                {/* Characteristics */}
                                <div className="mb-8">
                                    <h2 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-4">
                                        Key Characteristics
                                    </h2>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {result.characteristics.map((char, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start gap-3 p-3 bg-white rounded-lg border border-[#FFCE99]/30"
                                            >
                                                <span className="text-[#FF9644] mt-1">•</span>
                                                <p className="text-[#562F00] text-sm">{char}</p>
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
                                            { key: "A", label: "Secure", color: "#059669", bgColor: "#D1FAE5" },
                                            { key: "B", label: "Anxious", color: "#DC2626", bgColor: "#FEE2E2" },
                                            { key: "C", label: "Avoidant", color: "#EA580C", bgColor: "#FFEDD5" },
                                            { key: "D", label: "Fearful", color: "#7C3AED", bgColor: "#EDE9FE" },
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
                                        Recommended Steps
                                    </h2>
                                    <div className="space-y-3">
                                        {result.recommendations.map((rec, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#FFCE99]/30 hover:shadow-md transition-all"
                                            >
                                                <span
                                                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                                                    style={{ backgroundColor: result.color }}
                                                >
                                                    {index + 1}
                                                </span>
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

                                {/* Note about Attachment Spectrum */}
                                <p className="mt-6 text-xs text-center text-[#7A4A1A]">
                                    Attachment exists on a spectrum. You may show different styles with different people or in different situations. This is a starting point for self-awareness, not a fixed label.
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
                        Attachment Style Assessment
                    </p>
                    <h1 className="text-3xl font-bold text-[#2F1500] mb-2">
                        Understand Your Relationship Patterns
                    </h1>
                    <p className="text-[#7A4A1A]">
                        Answer 10 questions to discover your attachment style and how it affects your relationships
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
                                                            ? "bg-orange-100 text-orange-600"
                                                            : "bg-purple-100 text-purple-600"
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
                    Answer honestly - there are no right or wrong answers. Your results are a starting point for self-awareness.
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

export default RelationshipPatternChecker;