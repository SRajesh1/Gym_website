import { useState, useEffect } from 'react';

const Exercises = () => {
    const [filter, setFilter] = useState('all');
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const exercises = [
        {
            name: "Bench Press",
            group: "chest",
            desc: "Compound movement for chest strength.",
            img: "/images/BenchPress.jpg",
            videos: [
                { title: "Proper Bench Press Form", videoId: "rT7DgCr-3pg", duration: "8:45", difficulty: "Beginner" },
                { title: "Common Bench Press Mistakes", videoId: "BYKScL2sgCs", duration: "10:22", difficulty: "Intermediate" },
                { title: "Advanced Bench Press Techniques", videoId: "esQi683XR44", duration: "12:15", difficulty: "Advanced" },
                { title: "Bench Press for Powerlifting", videoId: "34ICPhTAIlw", duration: "15:30", difficulty: "Advanced" }
            ]
        },
        {
            name: "Push Ups",
            group: "chest",
            desc: "Bodyweight classic for chest and core.",
            img: "/images/PushUp.jpg",
            videos: [
                { title: "Perfect Push-Up Form Tutorial", videoId: "IODxDxX7oi4", duration: "6:30", difficulty: "Beginner" },
                { title: "Push-Up Variations for Muscle", videoId: "0GsVJsS6474", duration: "9:12", difficulty: "Intermediate" },
                { title: "100 Push-Ups Challenge Guide", videoId: "AGiWSCaE1kM", duration: "8:45", difficulty: "Intermediate" },
                { title: "Advanced Push-Up Progressions", videoId: "5L4kdK-vqBY", duration: "11:20", difficulty: "Advanced" }
            ]
        },
        {
            name: "Pull Ups",
            group: "back",
            desc: "Builds a wide back and strong grip.",
            img: "/images/Pullup.jpg",
            videos: [
                { title: "How to Do Your First Pull-Up", videoId: "eGo4IYlbE5g", duration: "10:15", difficulty: "Beginner" },
                { title: "Pull-Up Form Breakdown", videoId: "HRrbKGzqII0", duration: "7:50", difficulty: "Intermediate" },
                { title: "Weighted Pull-Ups Tutorial", videoId: "tB3X4TjTIes", duration: "9:30", difficulty: "Advanced" },
                { title: "Pull-Up Variations for Back", videoId: "cwF1BRGvZH0", duration: "12:00", difficulty: "Intermediate" }
            ]
        },
        {
            name: "Deadlift",
            group: "back",
            desc: "The king of compound lifts for total body.",
            img: "/images/Deadlift.jpg",
            videos: [
                { title: "Deadlift Form for Beginners", videoId: "op9kVnSso6Q", duration: "11:40", difficulty: "Beginner" },
                { title: "Common Deadlift Errors", videoId: "hCDzSR6bW10", duration: "8:25", difficulty: "Intermediate" },
                { title: "Sumo vs Conventional Deadlift", videoId: "VL5ZWlcdOv8", duration: "13:10", difficulty: "Intermediate" },
                { title: "Deadlift Technique Mastery", videoId: "VGZrATR1O4E", duration: "15:45", difficulty: "Advanced" }
            ]
        },
        {
            name: "Squats",
            group: "legs",
            desc: "Essential for leg size and strength.",
            img: "/images/Squats.jpg",
            videos: [
                { title: "Squat Basics for Beginners", videoId: "ultWZbUMPL8", duration: "9:20", difficulty: "Beginner" },
                { title: "How to Squat Properly", videoId: "gcNh17Ckjgg", duration: "10:05", difficulty: "Intermediate" },
                { title: "Front Squat vs Back Squat", videoId: "yQuCi2h_kNI", duration: "11:30", difficulty: "Intermediate" },
                { title: "ATG Squats Technique", videoId: "VZkDJz42354", duration: "8:45", difficulty: "Advanced" }
            ]
        },
        {
            name: "Lunges",
            group: "legs",
            desc: "Unilateral leg work for balance and muscle.",
            img: "/images/Lunges.jpg",
            videos: [
                { title: "Lunge Variations Tutorial", videoId: "QOVaHwm-Q6U", duration: "7:15", difficulty: "Beginner" },
                { title: "Walking Lunges Technique", videoId: "L8fvypPrzzs", duration: "6:40", difficulty: "Beginner" },
                { title: "Bulgarian Split Squats", videoId: "2C-uNgKwPLE", duration: "9:50", difficulty: "Intermediate" },
                { title: "Advanced Lunge Progressions", videoId: "D7KaRcUTQeE", duration: "10:30", difficulty: "Advanced" }
            ]
        },
        {
            name: "Overhead Press",
            group: "shoulders",
            desc: "Builds broad, strong shoulders.",
            img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            videos: [
                { title: "Overhead Press Form Guide", videoId: "2yjwXTZQDDI", duration: "8:30", difficulty: "Beginner" },
                { title: "Military Press Technique", videoId: "F3QY5vMz_6I", duration: "9:45", difficulty: "Intermediate" },
                { title: "Standing vs Seated OHP", videoId: "wol7Hko8RhY", duration: "7:20", difficulty: "Intermediate" },
                { title: "Push Press Explosive Power", videoId: "iaBVSJm78ko", duration: "11:15", difficulty: "Advanced" }
            ]
        },
        {
            name: "Lateral Raises",
            group: "shoulders",
            desc: "Isolates the side delts for width.",
            img: "/images/LateralRaises.jpg",
            videos: [
                { title: "Lateral Raise Tutorial", videoId: "3VcKaXpzqRo", duration: "6:10", difficulty: "Beginner" },
                { title: "Perfect Lateral Raise Form", videoId: "q5sNYB1Q6aM", duration: "8:25", difficulty: "Beginner" },
                { title: "Lateral Raise Variations", videoId: "kDqklk1ZESo", duration: "10:00", difficulty: "Intermediate" },
                { title: "Cable Lateral Raise Tips", videoId: "PPrzBWZDOhA", duration: "7:50", difficulty: "Intermediate" }
            ]
        },
        {
            name: "Bicep Curls",
            group: "arms",
            desc: "Classic isolation for arm size.",
            img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            videos: [
                { title: "Bicep Curl Form Basics", videoId: "ykJmrZ5v0Oo", duration: "7:40", difficulty: "Beginner" },
                { title: "Barbell vs Dumbbell Curls", videoId: "sAq_ocpRh_I", duration: "9:15", difficulty: "Intermediate" },
                { title: "Hammer Curls Tutorial", videoId: "zC3nLlEvin4", duration: "6:30", difficulty: "Beginner" },
                { title: "Advanced Bicep Techniques", videoId: "dN1iCMO_SfU", duration: "12:20", difficulty: "Advanced" }
            ]
        },
        {
            name: "Tricep Dips",
            group: "arms",
            desc: "Bodyweight move for horseshoe triceps.",
            img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            videos: [
                { title: "Tricep Dips Tutorial", videoId: "6kALZikXxLc", duration: "6:50", difficulty: "Beginner" },
                { title: "Bench Dips vs Bar Dips", videoId: "yN6Q1UI_xkE", duration: "8:35", difficulty: "Intermediate" },
                { title: "Weighted Dips Progression", videoId: "2z8JmcrW-As", duration: "10:10", difficulty: "Advanced" },
                { title: "Ring Dips Mastery", videoId: "yN3CMAMvaGs", duration: "11:45", difficulty: "Advanced" }
            ]
        },
        {
            name: "Plank",
            group: "core",
            desc: "Static hold for core stability.",
            img: "/images/Plank.jpg",
            videos: [
                { title: "Plank Form Tutorial", videoId: "ASdvN_XEl_c", duration: "5:20", difficulty: "Beginner" },
                { title: "Plank Variations for Core", videoId: "pvIjsG5Svck", duration: "8:00", difficulty: "Intermediate" },
                { title: "Side Plank Technique", videoId: "K2VljzCC16g", duration: "6:45", difficulty: "Intermediate" },
                { title: "Advanced Plank Progressions", videoId: "TgZwYw1LZaU", duration: "9:30", difficulty: "Advanced" }
            ]
        },
        {
            name: "Crunches",
            group: "core",
            desc: "Targets the upper abs.",
            img: "/images/Crunches.jpg",
            videos: [
                { title: "Crunch Basics Tutorial", videoId: "Xyd_fa5zoEU", duration: "5:15", difficulty: "Beginner" },
                { title: "Bicycle Crunches Guide", videoId: "1we3bh9uhqY", duration: "7:10", difficulty: "Beginner" },
                { title: "Ab Crunch Variations", videoId: "4lYMJmXaBrI", duration: "9:25", difficulty: "Intermediate" },
                { title: "Weighted Crunch Techniques", videoId: "sWjTnBmCHTY", duration: "8:50", difficulty: "Advanced" }
            ]
        }
    ];

    const filteredExercises = filter === 'all' ? exercises : exercises.filter(ex => ex.group === filter);
    const categories = ['all', 'chest', 'back', 'legs', 'shoulders', 'arms', 'core'];

    // Close modal with ESC key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && selectedExercise) {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [selectedExercise]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedExercise) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedExercise]);

    const openModal = (exercise) => {
        setSelectedExercise(exercise);
        setSelectedVideo(null);
    };

    const closeModal = () => {
        setSelectedExercise(null);
        setSelectedVideo(null);
    };

    const playVideo = (video) => {
        setSelectedVideo(video);
    };

    const backToVideos = () => {
        setSelectedVideo(null);
    };

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
            case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
            case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
            default: return 'bg-gray-500/20 text-gray-400';
        }
    };

    return (
        <>
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
                            <div
                                key={idx}
                                onClick={() => openModal(ex)}
                                className="bg-[#1E1E1E] rounded-xl overflow-hidden border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary cursor-pointer group"
                            >
                                <div
                                    className="w-full h-[200px] bg-cover bg-center bg-[#333] relative overflow-hidden"
                                    style={{ backgroundImage: `url('${ex.img}')` }}
                                >
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="text-center">
                                            <i className="fas fa-play-circle text-5xl text-primary mb-2"></i>
                                            <p className="text-white font-bold text-sm uppercase">Watch Tutorials</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <span className="text-primary text-xs uppercase tracking-widest block mb-2">{ex.group}</span>
                                    <h4 className="text-lg font-bold mb-1">{ex.name}</h4>
                                    <p className="text-[#B0B0B0] text-sm mb-3">{ex.desc}</p>
                                    <div className="flex items-center gap-2 text-xs text-primary">
                                        <i className="fas fa-video"></i>
                                        <span>{ex.videos.length} Tutorial Videos</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Catalog Modal */}
            {selectedExercise && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={closeModal}
                >
                    {/* Backdrop with glassmorphism */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>

                    {/* Modal Container */}
                    <div
                        className="relative bg-background-darker border border-white/10 rounded-2xl w-full max-w-[1100px] max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="sticky top-0 z-10 bg-background-darker/95 backdrop-blur-lg border-b border-white/10 pt-7 pb-5 px-5 md:pt-8 md:pb-6 md:px-6 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                                <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 border-primary/50">
                                    <img src={selectedExercise.img} alt={selectedExercise.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 min-w-0 py-1">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase leading-normal break-words mb-1">{selectedExercise.name}</h3>
                                    <span className="inline-block px-2 md:px-3 py-1 bg-primary/20 text-primary text-xs uppercase tracking-wider rounded-full border border-primary/30">
                                        {selectedExercise.group}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={closeModal}
                                className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary hover:text-background transition-all duration-300 border border-white/10 hover:border-primary"
                            >
                                <i className="fas fa-times text-xl"></i>
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="p-6">
                            {!selectedVideo ? (
                                // Video Catalog Grid
                                <>
                                    <h4 className="text-xl font-bold mt-6 mb-6 uppercase flex items-center gap-2">
                                        <i className="fas fa-video text-primary"></i>
                                        Tutorial Videos ({selectedExercise.videos.length})
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {selectedExercise.videos.map((video, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => playVideo(video)}
                                                className="group cursor-pointer bg-card rounded-xl overflow-hidden border border-white/5 hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                                            >
                                                <div className="relative aspect-video bg-black/50">
                                                    <img
                                                        src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                                                        alt={video.title}
                                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                                                        onError={(e) => {
                                                            e.target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all flex items-center justify-center">
                                                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                            <i className="fas fa-play text-2xl text-background ml-1"></i>
                                                        </div>
                                                    </div>
                                                    <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 rounded text-xs font-bold">
                                                        {video.duration}
                                                    </div>
                                                </div>
                                                <div className="p-4">
                                                    <h5 className="font-bold text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                                        {video.title}
                                                    </h5>
                                                    <div className="flex items-center justify-between">
                                                        <span className={`text-xs px-2 py-1 rounded border ${getDifficultyColor(video.difficulty)}`}>
                                                            {video.difficulty}
                                                        </span>
                                                        <span className="text-xs text-text-muted">
                                                            <i className="fas fa-clock mr-1"></i>{video.duration}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                // Video Player
                                <div className="space-y-4">
                                    <button
                                        onClick={backToVideos}
                                        className="flex items-center gap-2 text-primary hover:underline transition-all"
                                    >
                                        <i className="fas fa-arrow-left"></i>
                                        <span className="font-bold uppercase text-sm">Back to Videos</span>
                                    </button>

                                    <div className="aspect-video rounded-xl overflow-hidden bg-black border-2 border-primary/30">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                                            title={selectedVideo.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full"
                                        ></iframe>
                                    </div>

                                    <div className="bg-card p-5 rounded-xl border border-white/5">
                                        <h4 className="text-xl font-bold mb-2">{selectedVideo.title}</h4>
                                        <div className="flex flex-wrap gap-3 text-sm">
                                            <span className={`px-3 py-1 rounded-full border ${getDifficultyColor(selectedVideo.difficulty)}`}>
                                                {selectedVideo.difficulty}
                                            </span>
                                            <span className="px-3 py-1 bg-white/5 rounded-full">
                                                <i className="fas fa-clock mr-2"></i>{selectedVideo.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleIn {
                    from { 
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to { 
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }
            `}</style>
        </>
    );
};

export default Exercises;
