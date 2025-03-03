import { FaStar, FaHeart, FaMagic } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const useServices = () => {
    const { t } = useTranslation();

    return [
        { icon: <FaStar />, title: t("services.career"), description: t("services.career_desc") },
        { icon: <FaHeart />, title: t("services.love"), description: t("services.love_desc") },
        { icon: <FaMagic />, title: t("services.situation"), description: t("services.situation_desc") },
    ];
};
