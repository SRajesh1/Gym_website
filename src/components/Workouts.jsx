import { useState } from 'react';

const Workouts = () => {
    const [activeModal, setActiveModal] = useState(null);

    const workoutData = {
        hypertrophy: {
            title: "Hypertrophy Training",
            content: (
                <>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li><strong>Goal:</strong> Maximize muscle size and growth.</li>
                        <li><strong>Rep Range:</strong> 8-12 reps per set.</li>
                        <li><strong>Rest:</strong> 60-90 seconds between sets.</li>
                        <li><strong>Key Focus:</strong> Time under tension and progressive overload.</li>
                        <li><strong>Best For:</strong> Bodybuilders and those looking to improve aesthetics.</li>
                    </ul>
                    <p className="mt-4">Hypertrophy training focuses on breaking down muscle fibers to stimulate repair and growth. It involves a mix of compound and isolation exercises.</p>
                </>
            )
        },
        cardio: {
            title: "Cardio & HIIT",
            content: (
                <>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li><strong>Goal:</strong> Improve cardiovascular health and burn fat.</li>
                        <li><strong>Types:</strong> Steady-state (LISS) and High-Intensity Interval Training (HIIT).</li>
                        <li><strong>Benefits:</strong> increased stamina, heart health, and calorie burn.</li>
                        <li><strong>Frequency:</strong> 2-4 times per week depending on goals.</li>
                    </ul>
                    <p className="mt-4">HIIT involves short bursts of intense activity followed by rest, while steady-state cardio maintains a consistent effort level.</p>
                </>
            )
        },
        powerlifting: {
            title: "Powerlifting",
            content: (
                <>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li><strong>Goal:</strong> Maximize raw strength in the "Big 3" lifts.</li>
                        <li><strong>Lifts:</strong> Squat, Bench Press, Deadlift.</li>
                        <li><strong>Rep Range:</strong> 1-5 reps per set.</li>
                        <li><strong>Rest:</strong> 3-5 minutes between sets.</li>
                        <li><strong>Focus:</strong> Moving maximum weight with proper form.</li>
                    </ul>
                    <p className="mt-4">Powerlifting is about pure strength. Training volume is lower, but intensity is very high.</p>
                </>
            )
        },
        calisthenics: {
            title: "Calisthenics",
            content: (
                <>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li><strong>Goal:</strong> Master bodyweight control and functional strength.</li>
                        <li><strong>Exercises:</strong> Pull-ups, Push-ups, Dips, Muscle-ups, Levers.</li>
                        <li><strong>Benefits:</strong> minimal equipment needed, improves flexibility and coordination.</li>
                        <li><strong>Progression:</strong> Increasing leverage difficulty rather than adding external weight.</li>
                    </ul>
                    <p className="mt-4">Calisthenics builds a lean, functional physique and impressive body control.</p>
                </>
            )
        }
    };

    const styles = [
        { id: 'hypertrophy', icon: 'fa-dumbbell', title: 'Hypertrophy', desc: 'Maximize muscle growth with volume-focused training.' },
        { id: 'cardio', icon: 'fa-running', title: 'Cardio & HIIT', desc: 'Burn fat and improve endurance with high-intensity intervals.' },
        { id: 'powerlifting', icon: 'fa-weight-hanging', title: 'Powerlifting', desc: 'Build raw strength with heavy compound movements.' },
        { id: 'calisthenics', icon: 'fa-child', title: 'Calisthenics', desc: 'Master your bodyweight with functional movements.' },
    ];

    return (
        <section id="workouts" className="py-20 bg-[#0a0a0a]">
            <div className="max-w-[1200px] mx-auto px-5">
                <h2 className="text-3xl md:text-4xl font-bold text-center uppercase tracking-wider mb-12">
                    Workout <span className="text-primary">Styles</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {styles.map((style) => (
                        <div
                            key={style.id}
                            onClick={() => setActiveModal(style.id)}
                            className="bg-[#1E1E1E] p-10 rounded-[20px] transition-all duration-300 border border-white/5 cursor-pointer hover:-translate-y-2 hover:border-primary hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group relative overflow-hidden"
                        >
                            <div className="text-5xl text-primary mb-5">
                                <i className={`fas ${style.icon}`}></i>
                            </div>
                            <h3 className="text-2xl font-medium mb-4">{style.title}</h3>
                            <p className="text-[#B0B0B0] mb-6">{style.desc}</p>
                            <span className="text-primary font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                                Learn More <i className="fas fa-arrow-right"></i>
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm z-[2000] flex justify-center items-center transition-all duration-300 ${activeModal ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setActiveModal(null)}
            >
                <div
                    className={`bg-[#1E1E1E]/90 border border-white/10 rounded-2xl p-10 max-w-[600px] w-[90%] relative transform transition-all duration-300 ${activeModal ? 'scale-100' : 'scale-90'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="absolute top-4 right-5 bg-transparent border-none text-[#B0B0B0] text-3xl cursor-pointer hover:text-primary hover:rotate-90 transition-all"
                        onClick={() => setActiveModal(null)}
                    >
                        &times;
                    </button>

                    {activeModal && workoutData[activeModal] && (
                        <div className="text-center">
                            <h2 className="text-3xl text-center uppercase tracking-wider mb-5 font-bold">
                                {workoutData[activeModal].title}
                            </h2>
                            <div className="text-left text-[#B0B0B0] text-base leading-relaxed">
                                {workoutData[activeModal].content}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Workouts;
