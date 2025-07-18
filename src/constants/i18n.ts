export const I18N_CONFIG = {
  DEFAULT_LANGUAGE: 'pt-BR',
  FALLBACK_LANGUAGE: 'en-US',
  SUPPORTED_LANGUAGES: [
    { code: 'pt-BR', name: 'Português (Brasil)', flag: '🇧🇷' },
    { code: 'en-US', name: 'English (US)', flag: '🇺🇸' },
    { code: 'es-ES', name: 'Español', flag: '🇪🇸' },
    { code: 'fr-FR', name: 'Français', flag: '🇫🇷' },
  ],
  NAMESPACES: ['common', 'frontpage', 'navigation', 'dashboard'],
  DEBUG: process.env.NODE_ENV === 'development',
} as const;

export type SupportedLanguage = typeof I18N_CONFIG.SUPPORTED_LANGUAGES[number]['code'];
export type SupportedNamespace = typeof I18N_CONFIG.NAMESPACES[number];
