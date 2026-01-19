import React, { useState } from 'react';

const ClassSchedule = () => {
    const [activeDay, setActiveDay] = useState('Monday');

    const schedule = {
        'Monday': [
            { time: '06:00 AM', class: 'Morning HIIT', trainer: 'John Doe', spots: 5 },
            { time: '09:00 AM', class: 'Yoga Flow', trainer: 'Sarah Smith', spots: 8 },
            { time: '05:00 PM', class: 'Power Lifting', trainer: 'Mike Tyson', spots: 3 },
            { time: '07:00 PM', class: 'Zumba', trainer: 'Lisa Ray', spots: 12 },
        ],
        'Tuesday': [
            { time: '07:00 AM', class: 'Cardio Blast', trainer: 'John Doe', spots: 10 },
            { time: '10:00 AM', class: 'Pilates', trainer: 'Sarah Smith', spots: 6 },
            { time: '06:00 PM', class: 'CrossFit', trainer: 'Alex P.', spots: 4 },
        ],
        'Wednesday': [
            { time: '06:00 AM', class: 'Morning HIIT', trainer: 'John Doe', spots: 5 },
            { time: '05:00 PM', class: 'Boxing', trainer: 'Mike Tyson', spots: 8 },
            { time: '08:00 PM', class: 'Meditation', trainer: 'Guru Om', spots: 15 },
        ],
        'Thursday': [
            { time: '07:00 AM', class: 'Spinning', trainer: 'Emily R.', spots: 9 },
            { time: '11:00 AM', class: 'Core Strength', trainer: 'John Doe', spots: 12 },
            { time: '06:00 PM', class: 'Body Pump', trainer: 'Sarah Smith', spots: 6 },
        ],
        'Friday': [
            { time: '06:00 AM', class: 'Morning HIIT', trainer: 'John Doe', spots: 7 },
            { time: '05:00 PM', class: 'Open Gym', trainer: 'Staff', spots: 20 },
            { time: '07:00 PM', class: 'Dance Fitness', trainer: 'Lisa Ray', spots: 10 },
        ],
        'Saturday': [
            { time: '08:00 AM', class: 'Marathon Prep', trainer: 'Alex P.', spots: 15 },
            { time: '10:00 AM', class: 'Advanced Yoga', trainer: 'Sarah Smith', spots: 8 },
            { time: '04:00 PM', class: 'Full Body', trainer: 'Mike Tyson', spots: 5 },
        ],
        'Sunday': [
            { time: '09:00 AM', class: 'Recovery Stretch', trainer: 'Sarah Smith', spots: 20 },
            { time: '11:00 AM', class: 'Nutrition Talk', trainer: 'Dr. Green', spots: 30 },
        ]
    };

    const days = Object.keys(schedule);

    return (
        <section id="schedule" className="py-20 bg-background-darker text-text relative overflow-hidden -mb-10">
            {/* Decorative BG */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container max-w-[1200px] mx-auto px-5 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center uppercase tracking-wider mb-12 -mt-4">
                    Class <span className="text-primary">Schedule</span>
                </h2>

                {/* Day Selector */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
                    {days.map(day => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day)}
                            className={`px-4 py-2 md:px-6 md:py-2 rounded-full font-bold uppercase text-sm md:text-base transition-all duration-300 border border-primary/20 ${activeDay === day ? 'bg-primary text-background' : 'bg-transparent text-text hover:border-primary hover:text-primary'}`}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Schedule Grid */}
                <div className="bg-card rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-1 divide-y divide-white/5">
                        {schedule[activeDay].map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-center justify-between p-6 hover:bg-white/5 transition-colors group">
                                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto text-center md:text-left">
                                    <div className="text-xl font-bold text-primary w-24">{item.time}</div>
                                    <div>
                                        <h4 className="text-xl font-bold uppercase">{item.class}</h4>
                                        <p className="text-sm text-text-muted">Trainer: {item.trainer}</p>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0 flex items-center gap-6">
                                    <div className="text-sm text-text-muted hidden md:block">
                                        <span className="text-primary font-bold">{item.spots}</span> Spots Left
                                    </div>
                                    <button className="px-6 py-2 rounded-full border border-primary text-primary text-sm font-bold uppercase hover:bg-primary hover:text-background transition-all duration-300">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassSchedule;
