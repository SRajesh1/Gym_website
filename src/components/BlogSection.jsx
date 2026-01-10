import React from 'react';

const BlogSection = () => {
    const posts = [
        {
            title: '5 Tips for Muscle Hypertrophy',
            category: 'Training',
            image: '/images/blog1.jpg', // Placeholder
            excerpt: 'Maximize your gains with these scientifically proven techniques for muscle growth.',
            date: 'Oct 15, 2023'
        },
        {
            title: 'Ketogenic Diet Explained',
            category: 'Nutrition',
            image: '/images/blog2.jpg', // Placeholder
            excerpt: 'Is the keto diet right for you? We break down the pros, cons, and how to start.',
            date: 'Nov 02, 2023'
        },
        {
            title: 'Recovery: The Missing Link',
            category: 'Wellness',
            image: '/images/blog3.jpg', // Placeholder
            excerpt: 'Why rest days and sleep are just as important as your time in the gym.',
            date: 'Nov 20, 2023'
        }
    ];

    return (
        <section id="blog" className="py-20 bg-background-darker text-text">
            <div className="container max-w-[1200px] mx-auto px-5">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase">
                        Fitness <span className="text-primary">Journal</span>
                    </h2>
                    <a href="#" className="hidden md:inline-block text-primary font-bold uppercase hover:underline">View All Articles <i className="fas fa-arrow-right ml-2"></i></a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="aspect-video bg-card mb-6 overflow-hidden rounded-xl relative">
                                <div className="absolute top-4 left-4 bg-primary text-background text-xs font-bold px-3 py-1 rounded uppercase z-10">
                                    {post.category}
                                </div>
                                {/* Placeholder gradient */}
                                <div className="w-full h-full bg-gradient-to-br from-card to-[#2a2a2a] group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                                    <i className="fas fa-file-alt text-4xl text-white/10"></i>
                                </div>
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
                <div className="mt-10 text-center md:hidden">
                    <a href="#" className="text-primary font-bold uppercase hover:underline">View All Articles <i className="fas fa-arrow-right ml-2"></i></a>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
