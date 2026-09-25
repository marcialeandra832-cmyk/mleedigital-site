export const WA_NUMBER = "5549999619123";
export const WA_BASE_URL = `https://wa.me/${WA_NUMBER}`;
export const INSTAGRAM_URL = "https://instagram.com/mlee_digital";
export const INSTAGRAM_HANDLE = "@mlee_digital";
export const SITE_URL = "https://mleedigital.com.br";
export const AUTHOR_NAME = "Márcia MLee";
export const AUTHOR_ROLE = "Fundadora & Desenvolvedora na MLee Digital";
export const AUTHOR_IMG = "https://i.ibb.co/RkWvc5JV/Chat-GPT-Image-15-12-2025-11-43-25.png";

export const getWhatsAppLink = (customText?: string) => {
  const defaultText = "Olá Marcia! Gostaria de conversar sobre a criação de um site para o meu negócio.";
  return `${WA_BASE_URL}?text=${encodeURIComponent(customText || defaultText)}`;
};
