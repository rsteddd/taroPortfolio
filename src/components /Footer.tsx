import { FaInstagram, FaTiktok, FaTelegram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="relative text-white py-12 text-center">
            <div className="relative z-10">
                <p className="text-gray-400 mb-4 text-sm">
                    &copy; {new Date().getFullYear()} Pika Taro. {t("footer.rights")}
                </p>
                <p className="text-purple-300 text-lg font-semibold mb-3">
                    {t("footer.contact")}
                </p>
                <div className="flex justify-center space-x-6 mb-4">
                    <a
                        href="https://www.instagram.com/pika.symbolic.soul/"
                        className="text-purple-400 text-3xl hover:text-purple-300 transition transform hover:scale-110"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.tiktok.com/@pika.symbolic.soul"
                        className="text-purple-400 text-3xl hover:text-purple-300 transition transform hover:scale-110"
                    >
                        <FaTiktok />
                    </a>
                    <a
                        href="#"
                        className="text-purple-400 text-3xl hover:text-purple-300 transition transform hover:scale-110"
                    >
                        <FaTelegram />
                    </a>
                </div>
                <p className="text-gray-300 text-sm">
                    {t("footer.message")}{" "}
                    <a
                        href="#"
                        className="text-purple-400 hover:text-purple-300 underline"
                    >
                        Instagram
                    </a>{" "}
                    {t("footer.or")}{" "}
                    <a
                        href="#"
                        className="text-purple-400 hover:text-purple-300 underline"
                    >
                        Telegram
                    </a>
                    , {t("footer.consultation")}.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
