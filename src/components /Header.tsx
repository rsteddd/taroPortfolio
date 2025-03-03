import { useTranslation } from "react-i18next"; // Імпортуємо хук для роботи з перекладом
import { motion } from "framer-motion"; // Додаємо анімацію для кнопки перемикання мови

const Header = () => {
    const { i18n } = useTranslation(); // Отримуємо об'єкт i18n для роботи з мовами
    const isEnglish = i18n.language === "en"; // Перевіряємо, чи поточна мова — англійська

    const changeLanguage = () => {
        i18n.changeLanguage(isEnglish ? "ua" : "en"); // Перемикаємо мову між англійською та українською
    };

    return (
        <div className="relative flex justify-center items-center py-4">
            {/* Містичний перемикач мови */}
            <motion.div
                className="relative flex items-center justify-center w-16 h-16 bg-transparent cursor-pointer"
                onClick={changeLanguage} // При натисканні змінюємо мову
                whileHover={{ scale: 1.1 }} // Ефект збільшення при наведенні
                whileTap={{ scale: 0.9 }} // Ефект натискання
            >
                {/* Світловий ефект навколо кнопки */}
                <motion.div
                    className="absolute inset-0 w-full h-full rounded-full blur-xl"
                    animate={{ backgroundColor: isEnglish ? "#6a0dad" : "#FFD700" }} // Фіолетовий для англ. мови, золотий для укр.
                    transition={{ duration: 0.5 }} // Плавна анімація зміни кольору
                ></motion.div>

                {/* Іконка прапора */}
                <motion.span
                    className="relative text-3xl font-bold drop-shadow-lg"
                    animate={{ rotate: isEnglish ? 360 : 0 }} // Прапор обертається при зміні мови
                    transition={{ duration: 0.5 }} // Плавний поворот
                >
                    {isEnglish ? "🇬🇧" : "🇺🇦"} {/* Відображаємо відповідний прапор */}
                </motion.span>
            </motion.div>
        </div>
    );
};

export default Header;
