import { useState } from 'react';

const Roadmap = () => {
    const [activeLevel, setActiveLevel] = useState(null);

    const toggleLevel = (level) => {
        setActiveLevel(activeLevel === level ? null : level);
    };

    const levels = [
        {
            id: 'beginner',
            tag: '0-3 Months',
            title: 'Phase 1: Beginner',
            overview: [
                { label: 'Focus', value: 'Form, Habit, Mobility' },
                { label: 'Frequency', value: '3-4 days/week' },
                { label: 'Goal', value: 'Muscle activation, Basic strength' }
            ],
            split: {
                title: 'Full Body Split',
                schedule: ['Day 1: Full Body', 'Day 2: Rest / Cardio', 'Day 3: Full Body', 'Day 4: Rest', 'Day 5: Full Body']
            },
            tableTitle: 'Sample Exercise Plan',
            table: [
                { ex: 'Squats', sets: '3', reps: '12-15', rest: '60s' },
                { ex: 'Push-ups/Bench Press', sets: '3', reps: '10-12', rest: '60s' },
                { ex: 'Lat Pulldown', sets: '3', reps: '10-12', rest: '60s' },
                { ex: 'Shoulder Press', sets: '3', reps: '10-12', rest: '60s' },
                { ex: 'Plank', sets: '3', reps: '30s', rest: '45s' },
            ],
            diet: ['Protein: Eggs, Milk, Dal, Chicken, Paneer', 'Carbs: Rice, Oats, Fruits', 'Water: 3+ liters/day', 'Avoid junk and sugary drinks'],
            recovery: ['7-8 hours of quality sleep', 'Focus on form over weight', 'Dynamic warm-up before sessions'],
            progress: ['Master exercise form', 'No excessive soreness', 'Consistent for 8-12 weeks']
        },
        {
            id: 'intermediate',
            tag: '6-18 Months',
            title: 'Phase 2: Intermediate',
            overview: [
                { label: 'Focus', value: 'Muscle Growth & Strength' },
                { label: 'Frequency', value: '4-5 days/week' },
                { label: 'Goal', value: 'Hypertrophy & Conditioning' }
            ],
            split: {
                title: 'Push-Pull-Legs (PPL)',
                schedule: ['Day 1: Push (Chest, Shoulder, Triceps)', 'Day 2: Pull (Back, Biceps)', 'Day 3: Legs', 'Day 4: Rest / Core', 'Day 5: Upper Body']
            },
            tableTitle: 'Sample Exercise Plan (Push Day)',
            table: [
                { ex: 'Bench Press', sets: '4', reps: '8-10', rest: '90s' },
                { ex: 'Incline DB Press', sets: '3', reps: '10', rest: '75s' },
                { ex: 'Shoulder Press', sets: '4', reps: '8-10', rest: '90s' },
                { ex: 'Lateral Raises', sets: '3', reps: '12-15', rest: '60s' },
                { ex: 'Tricep Pushdown', sets: '3', reps: '10-12', rest: '60s' },
            ],
            diet: ['Protein: 1.6–2g/kg bodyweight', 'Balanced carbs & fats', 'Pre & Post-workout meals'],
            recovery: ['Active recovery/mobility work', 'Deload week every 8-12 weeks', 'Post-workout stretching'],
            progress: ['Progressive overload achieved', 'Improved muscle definition', 'Plateau-free for 3-6 months']
        },
        {
            id: 'advanced',
            tag: '2+ Years',
            title: 'Phase 3: Advanced',
            overview: [
                { label: 'Focus', value: 'Strength, Aesthetics, Performance' },
                { label: 'Frequency', value: '5-6 days/week' },
                { label: 'Goal', value: 'Max Muscle & Conditioning' }
            ],
            split: {
                title: 'Body Part Split / Advanced PPL',
                schedule: ['Day 1: Chest', 'Day 2: Back', 'Day 3: Legs', 'Day 4: Shoulders', 'Day 5: Arms', 'Day 6: Conditioning']
            },
            tableTitle: 'Sample Exercise Plan (Chest Day)',
            table: [
                { ex: 'Barbell Bench Press', sets: '5', reps: '5-8', rest: '120s' },
                { ex: 'Incline Bench Press', sets: '4', reps: '8-10', rest: '90s' },
                { ex: 'Dumbbell Flyes', sets: '3', reps: '12', rest: '60s' },
                { ex: 'Cable Crossovers', sets: '3', reps: '15', rest: '60s' },
                { ex: 'Dips (Weighted)', sets: '3', reps: 'Failure', rest: '90s' },
            ],
            diet: ['Macronutrient tracking', 'Meal timing optimization', 'Supplements: Whey, Creatine'],
            recovery: ['Advanced mobility & foam rolling', 'Sports massage/Physio checkups', 'Strategic deloading & rest days'],
            progress: ['Strength PRs achieved', 'Body composition goals met', 'Advanced techniques mastered']
        }
    ];

    return (
        <section id="roadmap" className="py-20 bg-[#0a0a0a]">
            <div className="max-w-[1200px] mx-auto px-5">
                <h2 className="text-4xl text-center mb-2 uppercase tracking-widest font-bold">
                    Fitness Training <span className="text-primary">Roadmap</span>
                </h2>
                <p className="text-center text-[#B0B0B0] mb-12">A structured journey from absolute beginner to elite athlete.</p>

                <div className="flex flex-col gap-5 max-w-[900px] mx-auto">
                    {levels.map((level) => (
                        <div
                            key={level.id}
                            className={`bg-[#1E1E1E] rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 ${activeLevel === level.id ? 'border-primary/30' : ''}`}
                        >
                            <div
                                className="p-6 md:p-8 flex justify-between items-center cursor-pointer bg-white/[0.02]"
                                onClick={() => toggleLevel(level.id)}
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
                                    <span className="bg-primary text-background px-3 py-1 rounded-full text-xs font-bold uppercase w-fit">{level.tag}</span>
                                    <h3 className="text-xl md:text-2xl font-bold">{level.title}</h3>
                                </div>
                                <i className={`fas fa-chevron-down text-[#B0B0B0] text-xl transition-transform duration-300 ${activeLevel === level.id ? 'rotate-180 text-primary' : ''}`}></i>
                            </div>

                            <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeLevel === level.id ? 'max-h-[2000px]' : 'max-h-0'}`}>
                                <div className="p-6 md:p-8 bg-black/20 pt-0">

                                    {/* Grid 1: Overview & Split */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
                                        <div>
                                            <h4 className="text-primary text-lg font-bold mb-4 flex items-center gap-2">
                                                <i className="fas fa-bullseye"></i> Level Overview
                                            </h4>
                                            <ul className="space-y-2 text-[#B0B0B0]">
                                                {level.overview.map((item, idx) => (
                                                    <li key={idx}><strong className="text-white">{item.label}:</strong> {item.value}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-primary text-lg font-bold mb-4 flex items-center gap-2">
                                                <i className="fas fa-calendar-alt"></i> Weekly Split
                                            </h4>
                                            <p className="text-[#B0B0B0] mb-2">{level.split.title}</p>
                                            <ul className="space-y-2 text-[#B0B0B0] list-none pl-5 relative">
                                                {level.split.schedule.map((item, idx) => (
                                                    <li key={idx} className="relative before:content-['→'] before:absolute before:left-[-20px] before:text-primary">{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Table */}
                                    <div className="my-8 overflow-x-auto">
                                        <h4 className="text-primary text-lg font-bold mb-4 flex items-center gap-2">
                                            <i className="fas fa-dumbbell"></i> {level.tableTitle}
                                        </h4>
                                        <table className="w-full min-w-[500px] border-collapse">
                                            <thead>
                                                <tr>
                                                    {['Exercise', 'Sets', 'Reps', 'Rest'].map(h => (
                                                        <th key={h} className="text-left p-3 border-b border-white/5 text-primary uppercase text-sm font-semibold">{h}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {level.table.map((row, rIdx) => (
                                                    <tr key={rIdx}>
                                                        <td className="p-3 border-b border-white/5 text-[#B0B0B0]">{row.ex}</td>
                                                        <td className="p-3 border-b border-white/5 text-[#B0B0B0]">{row.sets}</td>
                                                        <td className="p-3 border-b border-white/5 text-[#B0B0B0]">{row.reps}</td>
                                                        <td className="p-3 border-b border-white/5 text-[#B0B0B0]">{row.rest}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Grid 2: Diet, Recovery, Progress */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {[
                                            { title: 'Diet Guidelines', icon: 'fa-apple-alt', items: level.diet },
                                            { title: 'Recovery & Safety', icon: 'fa-heartbeat', items: level.recovery },
                                            { title: 'Progress Criteria', icon: 'fa-check-circle', items: level.progress }
                                        ].map((sect, sIdx) => (
                                            <div key={sIdx}>
                                                <h4 className="text-primary text-lg font-bold mb-4 flex items-center gap-2">
                                                    <i className={`fas ${sect.icon}`}></i> {sect.title}
                                                </h4>
                                                <ul className="space-y-2 text-[#B0B0B0] list-none pl-5">
                                                    {sect.items.map((item, iIdx) => (
                                                        <li key={iIdx} className="relative before:content-['→'] before:absolute before:left-[-20px] before:text-primary">{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
