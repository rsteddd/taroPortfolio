import { FaInstagram, FaTiktok, FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative text-white py-12 text-center ">
            <div className="relative z-10">
                <p className="text-gray-400 mb-4 text-sm">&copy; {new Date().getFullYear()} Pika Taro. Усі права захищено.</p>
                <p className="text-purple-300 text-lg font-semibold mb-3">Зв’яжіться зі мною</p>
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://www.instagram.com/pika.symbolic.soul/" className="text-purple-400 text-3xl hover:text-purple-300 transition transform hover:scale-110">
                        <FaInstagram />
                    </a>
                    <a href="https://www.tiktok.com/@pika.symbolic.soul" className="text-purple-400 text-3xl hover:text-purple-300 transition transform hover:scale-110">
                        <FaTiktok />
                    </a>
                    <a href="#" className="text-purple-400 text-3xl hover:text-purple-300 transition transform hover:scale-110">
                        <FaTelegram />
                    </a>
                </div>
                <p className="text-gray-300 text-sm">Напишіть мені в <a href="#" className="text-purple-400 hover:text-purple-300 underline">Instagram</a> або <a href="#" className="text-purple-400 hover:text-purple-300 underline">Telegram</a>, щоб отримати консультацію.</p>
            </div>
        </footer>
    );
};

export default Footer;
