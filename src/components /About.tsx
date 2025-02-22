import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="py-20 text-white text-center px-6 relative overflow-hidden">
            <motion.h2
                className="text-3xl md:text-5xl font-bold mb-8 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Про мене
            </motion.h2>

            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
                <motion.img
                    src="/src/assets/icon.jpg"
                    alt="Tarot Reader"
                    className="w-72 h-96 object-cover border-4 border-purple-500 rounded-lg shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                />

                <motion.p
                    className="text-lg text-white max-w-lg"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Вітаю! Мене звати Христина, і я професійний таролог. Я допомагаю людям розкривати приховані відповіді, знаходити баланс у житті та приймати важливі рішення. Карти Таро – це не просто інструмент передбачення, а глибоке дзеркало вашої душі, що розкриває нові можливості та підказує правильний шлях.
                    <br /><br />
                    Кожен розклад – це унікальна подорож, де ми разом відкриваємо істину та шукаємо рішення для питань, які хвилюють вас найбільше. Незалежно від того, чи цікавить вас кохання, кар’єра, фінанси або життєвий шлях – я допоможу вам побачити картину цілісно та знайти відповіді, які відкриють двері до нового майбутнього.
                </motion.p>
            </div>
        </section>
    );
};

export default About;
