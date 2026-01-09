import { useState } from 'react';

const Exercises = () => {
    const [filter, setFilter] = useState('all');

    const exercises = [
        { name: "Bench Press", group: "chest", desc: "Compound movement for chest strength.", img: "/images/BenchPress.jpg" },
        { name: "Push Ups", group: "chest", desc: "Bodyweight classic for chest and core.", img: "/images/PushUp.jpg" },
        { name: "Pull Ups", group: "back", desc: "Builds a wide back and strong grip.", img: "/images/Pullup.jpg" },
        { name: "Deadlift", group: "back", desc: "The king of compound lifts for total body.", img: "/images/Deadlift.jpg" },
        { name: "Squats", group: "legs", desc: "Essential for leg size and strength.", img: "/images/Squats.jpg" },
        { name: "Lunges", group: "legs", desc: "Unilateral leg work for balance and muscle.", img: "/images/Lunges.jpg" },
        { name: "Overhead Press", group: "shoulders", desc: "Builds broad, strong shoulders.", img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
        { name: "Lateral Raises", group: "shoulders", desc: "Isolates the side delts for width.", img: "/images/LateralRaises.jpg" },
        { name: "Bicep Curls", group: "arms", desc: "Classic isolation for arm size.", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
        { name: "Tricep Dips", group: "arms", desc: "Bodyweight move for horseshoe triceps.", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
        { name: "Plank", group: "core", desc: "Static hold for core stability.", img: "/images/Plank.jpg" },
        { name: "Crunches", group: "core", desc: "Targets the upper abs.", img: "/images/Crunches.jpg" }
    ];

    const filteredExercises = filter === 'all' ? exercises : exercises.filter(ex => ex.group === filter);

    const categories = ['all', 'chest', 'back', 'legs', 'shoulders', 'arms', 'core'];

    return (
        <section id="exercises" className="py-20">
            <div className="max-w-[1200px] mx-auto px-5">
                <h2 className="text-4xl text-center mb-10 uppercase tracking-widest font-bold">
                    Exercise <span className="text-primary">Library</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full border border-white/20 capitalize transition-all duration-300 ${filter === cat ? 'bg-primary text-background border-primary' : 'bg-transparent text-text hover:bg-primary hover:text-background hover:border-primary'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredExercises.map((ex, idx) => (
                        <div key={idx} className="bg-[#1E1E1E] rounded-xl overflow-hidden border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                            <div
                                className="w-full h-[200px] bg-cover bg-center bg-[#333]"
                                style={{ backgroundImage: `url('${ex.img}')` }}
                            ></div>
                            <div className="p-5">
                                <span className="text-primary text-xs uppercase tracking-widest block mb-2">{ex.group}</span>
                                <h4 className="text-lg font-bold mb-1">{ex.name}</h4>
                                <p className="text-[#B0B0B0] text-sm">{ex.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Exercises;
