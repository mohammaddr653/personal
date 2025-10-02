const mode = process.env.NEXT_PUBLIC_NODE_ENV;
const site_key = process.env.NEXT_PUBLIC_SITE_KEY;
const tinymce_key = process.env.NEXT_PUBLIC_TMCE_API_KEY;

export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const SERVER_API = SERVER_URL + "/api";

export const DEFAULT_IMAGE =
  SERVER_URL +
  "/public/static-images/1759131600005-673329792-abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products-medium.webp"; //تصویر پیش فرض

export const LOGO = SERVER_URL + "/public/static-images/logo.png";

export const SITE_KEY = site_key;

export const TMCE_API_KEY = tinymce_key;

//same on index.css
export const BREAK_POINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};
