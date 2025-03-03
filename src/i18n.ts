import i18n from "i18next"; // Імпортуємо бібліотеку i18next для керування перекладом
import { initReactI18next } from "react-i18next"; // Додаємо підтримку для React
import translationEN from "./locales/en.json"; // Підключаємо англійські переклади
import translationUA from "./locales/ua.json"; // Підключаємо українські переклади

i18n
    .use(initReactI18next) // Використовуємо react-i18next для інтеграції з React
    .init({
        resources: { // Визначаємо словники для мов
            en: { translation: translationEN }, // Англійський переклад
            ua: { translation: translationUA }, // Український переклад
        },
        lng: "ua", // Мова за замовчуванням — українська
        fallbackLng: "ua", // Якщо обрана мова недоступна, буде використовуватися українська
        interpolation: { escapeValue: false }, // Відключаємо екранування символів (щоб можна було використовувати HTML у перекладах)
    });

export default i18n; // Експортуємо конфігурацію для використання у проєкті
