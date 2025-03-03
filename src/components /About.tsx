import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import icon from "../assets/icon.jpg";

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 text-white text-center px-6 relative overflow-hidden">
            <motion.h2
                className="text-3xl md:text-5xl font-bold mb-8 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {t("about.title")}
            </motion.h2>

            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
                <motion.img
                    src={icon}
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
                    {t("about.description")}
                </motion.p>
            </div>
        </section>
    );
};

export default About;
