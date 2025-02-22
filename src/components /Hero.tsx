import { motion } from "framer-motion";
import { FaStar, FaSpa } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="relative text-white text-center py-24 px-6 flex flex-col items-center justify-center min-h-screen overflow-hidden">
            {/* Анімовані піки та зірки */}
            <motion.div
                className="absolute top-10 left-1/4 text-purple-400 text-6xl"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
                <FaStar />
            </motion.div>

            <motion.div
                className="absolute top-16 right-1/4 text-purple-500 text-8xl opacity-60"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            >
                <FaSpa />
            </motion.div>

            {/* Декоративні піки */}
            <div className="absolute bottom-10 left-10 text-5xl text-purple-700 opacity-50">
                ♠
            </div>
            <div className="absolute bottom-16 right-10 text-6xl text-purple-600 opacity-40">
                ♠
            </div>

            {/* Заголовок */}
            <motion.h1
                className="text-6xl md:text-8xl font-bold z-10 tracking-wide font-[Cinzel]"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Розкрийте свою долю
            </motion.h1>

            {/* Підзаголовок */}
            <motion.p
                className="text-lg md:text-2xl text-gray-300 mt-4 max-w-2xl z-10 leading-relaxed font-[Cormorant Garamond]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Досліджуйте глибини своєї долі за допомогою магії карт Таро.
                <br />Відкрийте істину через знаки, що ведуть вас до майбутнього. ♠
            </motion.p>
        </section>
    );
};

export default Hero;
