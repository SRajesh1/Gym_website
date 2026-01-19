import { useState } from 'react';

const BMICalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [result, setResult] = useState(null);

    const recommendations = {
        underweight: {
            title: "Underweight",
            msg: "You are below the healthy weight range. It's important to nourish your body properly.",
            tips: ["Strength training focus", "High-calorie protein diet", "Muscle gain workout plan"],
            color: "#ffc107"
        },
        normal: {
            title: "Normal Weight",
            msg: "You are in a healthy range. Maintain your lifestyle with a balanced diet and regular exercise.",
            tips: ["Balanced workout (cardio + strength)", "Maintenance diet", "Lifestyle consistency"],
            color: "#D4FF00"
        },
        overweight: {
            title: "Overweight",
            msg: "You are slightly above the healthy range. Small changes can make a big difference.",
            tips: ["Fat-burning workouts", "Calorie-deficit diet", "Cardio-based plans"],
            color: "#ff9800"
        },
        obese: {
            title: "Obese",
            msg: "Health risks are higher in this range. We recommend professional guidance for long-term health.",
            tips: ["Low-impact workouts", "Medical disclaimer focus", "Beginner-level fitness plans"],
            color: "#f44336"
        }
    };

    const calculateBMI = () => {
        const h = parseFloat(height);
        const w = parseFloat(weight);

        if (h && w) {
            const bmi = (w / ((h / 100) ** 2)).toFixed(1);
            let state = '';
            if (bmi < 18.5) state = 'underweight';
            else if (bmi < 25) state = 'normal';
            else if (bmi < 30) state = 'overweight';
            else state = 'obese';

            setResult({ bmi, ...recommendations[state] });
        } else {
            alert("Please enter valid height and weight values.");
        }
    };

    const reset = () => {
        setHeight('');
        setWeight('');
        setAge('');
        setResult(null);
    };

    return (
        <section id="bmi" className="py-20">
            <div className="max-w-[1200px] mx-auto px-5">
                <h2 className="-mt-4 text-3xl md:text-4xl font-bold text-center uppercase tracking-wider mb-2">
                    BMI <span className="text-primary">Calculator</span>
                </h2>
                <p className="text-center text-[#B0B0B0] mb-12">Get personalized health insights and fitness recommendations.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#1E1E1E] p-10 rounded-[25px] border border-white/5 shadow-2xl max-w-[1000px] mx-auto">
                    {/* Form */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col sm:flex-row gap-5">
                            <div className="flex-1">
                                <label className="block mb-2 text-[#B0B0B0]">Height (cm)</label>
                                <input
                                    type="number"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    placeholder="e.g. 175"
                                    className="w-full p-3 bg-[#121212] border border-white/10 rounded-lg text-text focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block mb-2 text-[#B0B0B0]">Weight (kg)</label>
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    placeholder="e.g. 70"
                                    className="w-full p-3 bg-[#121212] border border-white/10 rounded-lg text-text focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <div className="flex-1">
                                <label className="block mb-2 text-[#B0B0B0]">Age</label>
                                <input
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    placeholder="e.g. 25"
                                    className="w-full p-3 bg-[#121212] border border-white/10 rounded-lg text-text focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block mb-2 text-[#B0B0B0]">Gender</label>
                                <div className="flex gap-5 mt-2">
                                    {['male', 'female'].map(g => (
                                        <label key={g} className="flex items-center gap-2 cursor-pointer text-[#B0B0B0] hover:text-white transition-colors capitalize">
                                            <input
                                                type="radio"
                                                name="gender"
                                                checked={gender === g}
                                                onChange={() => setGender(g)}
                                                className="appearance-none w-5 h-5 border-2 border-white/20 rounded-full checked:border-primary checked:bg-primary relative"
                                            />
                                            {g}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <button onClick={calculateBMI} className="px-8 py-3 rounded-full font-bold uppercase tracking-wider bg-primary text-background hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                                Calculate BMI
                            </button>
                            <button onClick={reset} className="px-5 py-3 rounded-full font-bold text-sm uppercase tracking-wider border border-white/10 text-[#B0B0B0] hover:text-primary hover:border-primary transition-all duration-300 bg-transparent">
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* Result */}
                    <div className="bg-black/30 rounded-2xl p-8 border border-white/5 flex flex-col justify-center text-center animate-fade-in relative overflow-hidden">
                        <div className="mb-6">
                            <div className="text-[5rem] font-bold leading-none mb-2" style={{ color: result ? result.color : 'var(--primary-color)' }}>
                                {result ? result.bmi : '--'}
                            </div>
                            <div className="text-2xl font-semibold uppercase tracking-widest text-[#B0B0B0]" style={{ color: result ? result.color : '#B0B0B0' }}>
                                {result ? result.title : 'Enter Details'}
                            </div>
                        </div>

                        <div className="text-[#B0B0B0]">
                            <p className="mb-6 leading-relaxed">
                                {result ? result.msg : 'Fill in your physical data to see where you stand and get custom advice.'}
                            </p>

                            {result && (
                                <div className="text-left bg-white/5 p-5 rounded-xl animate-fade-in translate-y-2 transition-all">
                                    <h4 className="text-primary font-bold mb-3 flex items-center gap-2">
                                        <i className="fas fa-lightbulb"></i> Recommendations:
                                    </h4>
                                    <ul className="space-y-2">
                                        {result.tips.map((tip, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-[#B0B0B0]">
                                                <span className="text-primary">•</span> {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <p className="mt-10 text-center text-[#B0B0B0] text-sm max-w-[800px] mx-auto leading-relaxed">
                    <strong>Disclaimer:</strong> BMI is a general health indicator. It does not measure body fat directly. Consult a healthcare professional for accurate medical diagnosis.
                </p>
            </div>
        </section>
    );
};

export default BMICalculator;
