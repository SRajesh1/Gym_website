import React from 'react';

const BlogSection = () => {
    const posts = [
        {
            title: '5 Tips for Muscle Hypertrophy',
            category: 'Training',
            image: '/images/BenchPress.jpg', // Muscle building
            excerpt: 'Maximize your gains with these scientifically proven techniques for muscle growth.',
            date: 'Oct 15, 2023'
        },
        {
            title: 'Ketogenic Diet Explained',
            category: 'Nutrition',
            image: '/images/Crunches.jpg', // Core/fitness nutrition
            excerpt: 'Is the keto diet right for you? We break down the pros, cons, and how to start.',
            date: 'Nov 02, 2023'
        },
        {
            title: 'Recovery: The Missing Link',
            category: 'Wellness',
            image: '/images/Plank.jpg', // Balance and wellness
            excerpt: 'Why rest days and sleep are just as important as your time in the gym.',
            date: 'Nov 20, 2023'
        }
    ];

    return (
        <section id="blog" className="py-20 bg-background-darker text-text">
            <div className="container max-w-[1200px] mx-auto px-5">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase">
                        Fitness <span className="text-primary">Journal</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="aspect-video bg-card mb-6 overflow-hidden rounded-xl relative">
                                <div className="absolute top-4 left-4 bg-primary text-background text-xs font-bold px-3 py-1 rounded uppercase z-10">
                                    {post.category}
                                </div>
                                {/* Blog Image */}
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                                />
                            </div>
                            <div className="text-sm text-text-muted mb-2">{post.date}</div>
                            <h3 className="text-xl font-bold uppercase mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-text-muted text-sm line-clamp-3 mb-4">
                                {post.excerpt}
                            </p>
                            <span className="text-primary font-bold uppercase text-sm group-hover:underline">Read More</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
