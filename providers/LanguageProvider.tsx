"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@/lib/i18n';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'pt-BR',
  setLanguage: () => {},
  isLoading: true,
});

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState(i18n.language || 'pt-BR');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setLanguageState(lng);
      setIsLoading(false);
    };

    i18n.on('languageChanged', handleLanguageChange);
    
    // Se o i18n já foi inicializado
    if (i18n.isInitialized) {
      setLanguageState(i18n.language);
      setIsLoading(false);
    }

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};
