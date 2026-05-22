/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_NOTIFICATION: string;
  readonly VITE_EMAILJS_TEMPLATE_AUTOREPLY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
