import {motion} from "framer-motion";
import {useServices} from "../data/services.tsx";
import {useTranslation} from "react-i18next";

const Services = () => {
    const {t} = useTranslation();
    const services = useServices();

    return (
        <section
            className="relative py-20 text-white text-center px-6 overflow-hidden">
            <motion.h2
                className="text-4xl md:text-6xl font-bold mb-12 tracking-wider relative z-10"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1}}
            >
                {t("services.title")}
            </motion.h2>

            <div
                className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="p-8 bg-purple-900 bg-opacity-30 backdrop-blur-lg rounded-2xl shadow-xl flex flex-col items-center transform transition duration-300 hover:scale-105 hover:bg-opacity-50 hover:shadow-purple-600/50"
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: index * 0.2}}
                    >
                        <div
                            className="text-6xl text-purple-400 mb-4 animate-pulse">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 uppercase tracking-wide">
                            {service.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
