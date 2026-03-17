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
    role: string;
    description: string;
    icon: string;
    color: string;
    bgColor: string;
    lightColor: string;
    characteristics: string[];
    idealRoles: string[];
    workStyle: string[];
    values: string[];
    recommendations: string[];
    quote?: string;
}

const CareerQuiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [showResults, setShowResults] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [direction, setDirection] = useState(0);

    const questions: Question[] = [
        {
            id: 1,
            text: "When you envision your ideal daily work environment, it looks like:",
            icon: "🏢",
            options: [
                { id: "1A", text: "A quiet, focused space where I can dive deep into complex logic, build systems, or write clean code without interruption.", value: "A" },
                { id: "1B", text: "A fast-paced, high-energy environment where I'm tracking dynamic data, managing risks, and making strategic decisions.", value: "B" },
                { id: "1C", text: "A creative and analytical space where I'm tracking digital trends, optimizing content, and testing engagement tactics.", value: "C" },
                { id: "1D", text: "A highly collaborative setting where I'm constantly interacting with people, organizing events, or mediating team goals.", value: "D" },
            ],
        },
        {
            id: 2,
            text: "You are handed a major project. The part you are most excited about is:",
            icon: "🚀",
            options: [
                { id: "2A", text: "Figuring out the underlying architecture, setting up systems, and building the foundational framework.", value: "A" },
                { id: "2B", text: "Analyzing market potential, forecasting ROI, and figuring out how to maximize growth.", value: "B" },
                { id: "2C", text: "Researching the target audience, optimizing keywords, and designing strategy to outrank competition.", value: "C" },
                { id: "2D", text: "Assembling the right team, making everyone feel valued, and guiding the group toward a shared vision.", value: "D" },
            ],
        },
        {
            id: 3,
            text: "If you had a free afternoon to upgrade your professional skills, you would most likely:",
            icon: "📚",
            options: [
                { id: "3A", text: "Read through technical documentation for a new programming language or framework.", value: "A" },
                { id: "3B", text: "Study historical market charts, economic trends, or advanced brokerage strategies.", value: "B" },
                { id: "3C", text: "Dive into analytics to see how digital traffic flows and A/B test different engagement tactics.", value: "C" },
                { id: "3D", text: "Attend a networking event or take a workshop on leadership and communication.", value: "D" },
            ],
        },
        {
            id: 4,
            text: "How do you define a 'successful' day at work?",
            icon: "🏆",
            options: [
                { id: "4A", text: "The systems I built are running flawlessly, and I successfully debugged a major issue.", value: "A" },
                { id: "4B", text: "I made a shrewd, data-backed decision that resulted in measurable financial gains.", value: "B" },
                { id: "4C", text: "A campaign I optimized gained massive visibility and engagement metrics spiked.", value: "C" },
                { id: "4D", text: "I helped a colleague overcome a hurdle and the team feels energized and aligned.", value: "D" },
            ],
        },
        {
            id: 5,
            text: "When faced with an unexpected setback or failure, your instinct is to:",
            icon: "🔄",
            options: [
                { id: "5A", text: "Isolate the exact point of failure, rewrite the logic, and push a fix.", value: "A" },
                { id: "5B", text: "Cut losses, reassess market conditions, and pivot strategy to protect assets.", value: "B" },
                { id: "5C", text: "Look at user data to see drop-off points, refine approach, and try a new angle.", value: "C" },
                { id: "5D", text: "Call a team meeting to talk through the issue, boost morale, and brainstorm solutions.", value: "D" },
            ],
        },
        {
            id: 6,
            text: "The type of problem that keeps you engaged and in a 'flow state' involves:",
            icon: "🧠",
            options: [
                { id: "6A", text: "Building a bridge between how the front-end looks and how the back-end functions.", value: "A" },
                { id: "6B", text: "Finding patterns in chaos to predict where a market or industry is heading next.", value: "B" },
                { id: "6C", text: "Decoding algorithms to ensure a product reaches the exact right audience.", value: "C" },
                { id: "6D", text: "Navigating complex interpersonal dynamics to help people reach their potential.", value: "D" },
            ],
        },
        {
            id: 7,
            text: "If you were to take your career international, your primary motivation would be:",
            icon: "🌍",
            options: [
                { id: "7A", text: "Accessing top-tier tech hubs and collaborating with world-class engineers.", value: "A" },
                { id: "7B", text: "Tapping into emerging global economies and understanding international markets.", value: "B" },
                { id: "7C", text: "Studying cross-cultural digital behavior across different demographics.", value: "C" },
                { id: "7D", text: "Building a diverse, global network of friends and professional contacts.", value: "D" },
            ],
        },
        {
            id: 8,
            text: "What kind of impact do you most want your work to have?",
            icon: "💫",
            options: [
                { id: "8A", text: "Create robust, lasting tools and infrastructure that others can rely on.", value: "A" },
                { id: "8B", text: "Generate wealth, foster economic growth, and build successful enterprises.", value: "B" },
                { id: "8C", text: "Influence how people discover information and connect them with resources.", value: "C" },
                { id: "8D", text: "Empower individuals, foster community, and improve people's daily lives.", value: "D" },
            ],
        },
        {
            id: 9,
            text: "When starting a new initiative from scratch, your first step is usually:",
            icon: "🎯",
            options: [
                { id: "9A", text: "Setting up the repository and defining the technical requirements.", value: "A" },
                { id: "9B", text: "Calculating the budget, assessing risk, and looking at the competitive landscape.", value: "B" },
                { id: "9C", text: "Researching what people are searching for and identifying market gaps.", value: "C" },
                { id: "9D", text: "Reaching out to your network to find the right people to bring ideas to life.", value: "D" },
            ],
        },
        {
            id: 10,
            text: "You feel most frustrated at work when:",
            icon: "😤",
            options: [
                { id: "10A", text: "Things are disorganized, poorly structured, or lack logical consistency.", value: "A" },
                { id: "10B", text: "You are held back from taking calculated risks or forced to move too slowly.", value: "B" },
                { id: "10C", text: "You put massive effort into a project but it remains invisible or fails to gain traction.", value: "C" },
                { id: "10D", text: "The workplace culture is toxic, overly competitive, or lacks empathy.", value: "D" },
            ],
        },
    ];

    const results: Record<string, Result> = {
        A: {
            type: "A",
            title: "The Architect",
            role: "Systems & Development",
            description: "You thrive in environments where you can build, structure, and problem-solve. You have a highly logical mind that enjoys figuring out how things work under the hood. You value technical mastery and creating solutions that are elegant and functional.",
            icon: "🏗️",
            color: "#2563EB",
            bgColor: "#DBEAFE",
            lightColor: "#EFF6FF",
            quote: "\"The best way to predict the future is to build it.\"",
            characteristics: [
                "Logical and analytical thinker",
                "Enjoys understanding how systems work",
                "Detail-oriented and precise",
                "Values elegant, efficient solutions",
                "Independent problem-solver",
            ],
            idealRoles: [
                "Software Engineer / Developer",
                "Systems Architect",
                "Database Administrator",
                "DevOps Engineer",
                "Technical Lead",
            ],
            workStyle: [
                "Deep focus work",
                "Structured environments",
                "Clear technical requirements",
                "Minimal interruptions",
                "Quality-driven processes",
            ],
            values: [
                "Technical mastery",
                "Elegant solutions",
                "System reliability",
                "Continuous learning",
                "Logical consistency",
            ],
            recommendations: [
                "Pursue roles in software engineering, full-stack development, or systems architecture",
                "Build a portfolio of complex projects to showcase your technical skills",
                "Stay updated with emerging technologies and best practices",
                "Consider contributing to open-source projects",
                "Balance technical depth with communication skills",
            ],
        },
        B: {
            type: "B",
            title: "The Strategist",
            role: "Finance & Markets",
            description: "You are driven by growth, strategy, and tangible results. You have a keen eye for assessing risk and reward, making you naturally suited for fast-paced, high-stakes environments. You value foresight, efficiency, and making decisions that generate significant return on investment.",
            icon: "📈",
            color: "#059669",
            bgColor: "#D1FAE5",
            lightColor: "#ECFDF5",
            quote: "\"In the middle of difficulty lies opportunity.\"",
            characteristics: [
                "Strategic and forward-thinking",
                "Comfortable with calculated risks",
                "Data-driven decision maker",
                "Results-oriented",
                "Thrives under pressure",
            ],
            idealRoles: [
                "Financial Analyst",
                "Investment Banker",
                "Stock Broker",
                "Corporate Strategist",
                "Portfolio Manager",
            ],
            workStyle: [
                "Fast-paced environments",
                "Data-rich contexts",
                "Competitive settings",
                "Performance-driven culture",
                "Dynamic markets",
            ],
            values: [
                "Growth and ROI",
                "Strategic foresight",
                "Efficiency",
                "Market intelligence",
                "Tangible results",
            ],
            recommendations: [
                "Pursue roles in finance, investment banking, or corporate strategy",
                "Develop expertise in financial modeling and data analysis",
                "Stay informed about global economic trends",
                "Build a network in the finance community",
                "Consider certifications like CFA or MBA",
            ],
        },
        C: {
            type: "C",
            title: "The Optimizer",
            role: "Visibility & Digital Marketing",
            description: "You operate at the intersection of creativity and data. You are fascinated by how people discover information and what drives them to engage. You value reach, visibility, and using metrics to constantly refine and improve the user journey.",
            icon: "📊",
            color: "#DC2626",
            bgColor: "#FEE2E2",
            lightColor: "#FEF2F2",
            quote: "\"Content is fire, but data is the fuel that makes it spread.\"",
            characteristics: [
                "Creative and analytical blend",
                "Curious about human behavior",
                "Data-informed decision maker",
                "Experimentation mindset",
                "Trend-aware",
            ],
            idealRoles: [
                "SEO Specialist",
                "Digital Marketing Manager",
                "Growth Hacker",
                "Content Strategist",
                "Marketing Analyst",
            ],
            workStyle: [
                "Creative environments",
                "Data-driven culture",
                "Fast iteration cycles",
                "A/B testing mindset",
                "Cross-functional teams",
            ],
            values: [
                "Visibility and reach",
                "User engagement",
                "Data-driven decisions",
                "Continuous optimization",
                "Creative impact",
            ],
            recommendations: [
                "Pursue roles in SEO, digital marketing, or growth hacking",
                "Master analytics tools (Google Analytics, SEMrush, etc.)",
                "Stay updated on algorithm changes and digital trends",
                "Build a portfolio of successful campaigns",
                "Develop both creative and technical marketing skills",
            ],
        },
        D: {
            type: "D",
            title: "The Catalyst",
            role: "People & Leadership",
            description: "Your greatest asset is your ability to understand and connect with others. You are motivated by building relationships, fostering collaboration, and helping people succeed. You value empathy, communication, and shared success.",
            icon: "🤝",
            color: "#7C3AED",
            bgColor: "#EDE9FE",
            lightColor: "#F5F3FF",
            quote: "\"Alone we can do so little; together we can do so much.\"",
            characteristics: [
                "High emotional intelligence",
                "Natural relationship builder",
                "Collaborative mindset",
                "Empathetic leader",
                "Community-oriented",
            ],
            idealRoles: [
                "HR Manager",
                "Project Manager",
                "Team Lead",
                "Counselor",
                "Community Manager",
            ],
            workStyle: [
                "Collaborative environments",
                "People-centered culture",
                "Team-oriented projects",
                "Open communication",
                "Supportive atmospheres",
            ],
            values: [
                "Empathy and connection",
                "Team success",
                "Personal growth",
                "Shared achievement",
                "Positive culture",
            ],
            recommendations: [
                "Pursue roles in HR, project management, or team leadership",
                "Develop coaching and mentoring skills",
                "Build expertise in conflict resolution",
                "Create environments where people thrive",
                "Balance empathy with organizational goals",
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
                                                Your Career Profile
                                            </p>
                                            {isTie && (
                                                <span className="px-3 py-1 bg-[#FFCE99]/20 text-[#AA5A00] text-xs rounded-full">
                                                    Multi-Potential
                                                </span>
                                            )}
                                        </div>
                                        <h1 className="text-3xl font-bold text-[#2F1500] mb-1">
                                            {result.title}
                                        </h1>
                                        <p className="text-lg" style={{ color: result.color }}>
                                            {result.role}
                                        </p>
                                    </div>
                                </div>

                                {isTie && (
                                    <div className="mb-6 p-4 bg-[#FFCE99]/10 rounded-xl border border-[#FFCE99]/30">
                                        <p className="text-sm text-[#562F00]">
                                            <span className="font-bold">Note:</span> You show aptitude across multiple areas, which is a strength! This suggests you might enjoy interdisciplinary roles or have versatile career interests.
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

                                    {/* Ideal Roles */}
                                    <div className="p-5 bg-[#FFF7EB] rounded-xl border border-[#FFCE99]/30">
                                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-3">
                                            Ideal Roles
                                        </h3>
                                        <ul className="space-y-2">
                                            {result.idealRoles.map((role, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm text-[#562F00]">
                                                    <span className="text-[#FF9644] mt-1">→</span>
                                                    {role}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Work Style */}
                                    <div className="p-5 bg-[#FFF7EB] rounded-xl border border-[#FFCE99]/30">
                                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-3">
                                            Work Style
                                        </h3>
                                        <ul className="space-y-2">
                                            {result.workStyle.map((style, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm text-[#562F00]">
                                                    <span className="text-[#FF9644] mt-1">•</span>
                                                    {style}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Values */}
                                <div className="mb-8 p-5 bg-[#FFF7EB] rounded-xl border border-[#FFCE99]/30">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-3">
                                        What You Value
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {result.values.map((value, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-full text-sm"
                                                style={{ backgroundColor: result.lightColor, color: result.color }}
                                            >
                                                {value}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Answer Distribution */}
                                <div className="mb-8 p-6 bg-[#FFF7EB] rounded-2xl">
                                    <h2 className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-4">
                                        Your Career Orientation
                                    </h2>
                                    <div className="space-y-4">
                                        {[
                                            { key: "A", label: "Architect", color: "#2563EB", bgColor: "#DBEAFE" },
                                            { key: "B", label: "Strategist", color: "#059669", bgColor: "#D1FAE5" },
                                            { key: "C", label: "Optimizer", color: "#DC2626", bgColor: "#FEE2E2" },
                                            { key: "D", label: "Catalyst", color: "#7C3AED", bgColor: "#EDE9FE" },
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
                                        Next Steps
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
                                        Career Consultation
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
                                    This is a starting point for self-discovery. Your ideal career may combine elements from different profiles.
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
                        Career Fit Explorer
                    </p>
                    <h1 className="text-3xl font-bold text-[#2F1500] mb-2">
                        Discover Your Career Path
                    </h1>
                    <p className="text-[#7A4A1A]">
                        Answer 10 questions to understand your natural career orientation and ideal work environment
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
                                                    ? "bg-blue-100 text-blue-600"
                                                    : option.value === "B"
                                                        ? "bg-green-100 text-green-600"
                                                        : option.value === "C"
                                                            ? "bg-red-100 text-red-600"
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
                    Answer based on your natural preferences - there are no right or wrong answers
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

export default CareerQuiz;