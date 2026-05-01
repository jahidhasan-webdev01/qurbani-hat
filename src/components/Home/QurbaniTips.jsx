"use client"

import { useState } from "react";

const QurbaniTips = () => {
    const [selectedTips, setSelectedTips] = useState(1);

    const qurbaniTips = [
        {
            id: 1,
            category: "Before Buying",
            icon: "🟢",
            tips: [
                "Check animal health (bright eyes, clean skin, active movement)",
                "Verify age (meets Qurbani requirements)",
                "Ensure no physical defects (no broken horns, limping, blindness)",
                "Compare weight vs price carefully",
                "Check teeth to estimate age",
                "Observe breathing (should not be heavy or abnormal)",
                "Avoid animals that look weak or too skinny",
                "Look for proper body fat distribution"
            ]
        },
        {
            id: 2,
            category: "During Purchase",
            icon: "🟡",
            tips: [
                "Ask for vaccination history",
                "Buy from trusted sellers or farms",
                "Check feeding quality (natural food is better)",
                "Avoid animals injected with steroids",
                "Negotiate price based on weight and quality",
                "Confirm delivery or transport options",
                "Take a receipt or proof of purchase",
                "Inspect animal again before finalizing"
            ]
        },
        {
            id: 3,
            category: "Transport & Handling",
            icon: "🚚",
            tips: [
                "Transport animals in a safe and spacious vehicle",
                "Avoid overcrowding during transport",
                "Handle animals gently to prevent injury",
                "Do not tie too tightly",
                "Allow rest after transport",
                "Provide water immediately after arrival"
            ]
        },
        {
            id: 4,
            category: "Before Qurbani Day",
            icon: "🔴",
            tips: [
                "Keep animal in a clean and dry place",
                "Provide enough food & clean water",
                "Avoid stressing or beating the animal",
                "Do not starve the animal before Qurbani",
                "Keep away from extreme heat or rain",
                "Tie the animal in a comfortable position",
                "Keep children supervised around animals"
            ]
        },
        {
            id: 5,
            category: "On Qurbani Day",
            icon: "⚪",
            tips: [
                "Follow Islamic rules properly",
                "Use a very sharp knife for quick slaughter",
                "Do not slaughter animals in front of other animals",
                "Ensure humane and quick process",
                "Recite the proper dua before slaughter",
                "Make sure the animal is calm",
                "Face the animal towards Qibla if possible"
            ]
        },
        {
            id: 6,
            category: "After Qurbani",
            icon: "🟤",
            tips: [
                "Distribute meat into three parts (family, relatives, poor)",
                "Store meat in clean and hygienic conditions",
                "Use proper packaging for refrigeration",
                "Clean the area immediately after slaughter",
                "Dispose of waste properly",
                "Wash hands and tools thoroughly",
                "Avoid leaving meat in open air too long"
            ]
        }
    ];

    const activeTips = qurbaniTips.find((tip) => tip.id === selectedTips);

    return (
        <div className="container mx-auto py-10 lg:py-20 flex flex-col items-center px-5 lg:px-0 animate__animated animate__fadeIn">
            <h1 className="font-bold text-2xl animate__animated animate__fadeInUp">Qurbani Tips</h1>
            <div className="mt-5 flex flex-row gap-2 lg:gap-5 flex-wrap">
                {
                    qurbaniTips.map((tips, index) => <button onClick={() => setSelectedTips(tips.id)} key={index} className={`btn btn-sm  ${selectedTips === tips.id
                            ? "bg-purple-500 text-white"
                            : "btn-outline"
                        }`}>{tips.icon} {tips.category}</button>)
                }
            </div>

            <div className="mt-5 border border-purple-400 p-5 rounded-md">
                <ol className="text-gray-600 space-y-2">
                    {
                        activeTips?.tips.map((tip, index) => <li key={index}><span className="font-bold">{index + 1}.</span> {tip}</li>)
                    }
                </ol>
            </div>
        </div>
    );
};

export default QurbaniTips;