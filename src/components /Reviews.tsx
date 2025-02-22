import { motion } from "framer-motion";

const Reviews = () => {
    const reviews = [
        { name: "Андрій", text: "Дуже точний розклад! Дуже дякую за допомогу!" },
        { name: "Марина", text: "Карти Таро відкрили мені очі на ситуацію. Рекомендую!" },
        { name: "Ольга", text: "Професійний підхід та неймовірна точність!" }
    ];

    return (
        <section className="py-20 text-white text-center px-6">
            <motion.h2
                className="text-3xl md:text-5xl font-bold mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Відгуки
            </motion.h2>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <motion.div
                        key={index}
                        className="p-6 border border-purple-500 rounded-xl shadow-lg
                        bg-gradient-to-b from-black to-purple-900/20 backdrop-blur-lg
                        transition-transform transform hover:scale-105 hover:shadow-purple-500/50"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <p className="text-lg italic">"{review.text}"</p>
                        <h4 className="mt-4 font-semibold text-purple-400">- {review.name}</h4>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
