import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  CaseStudy,
  Language,
  PortfolioContent,
  contentByLocale,
} from "./data";

interface PortfolioContextValue {
  locale: Language;
  setLocale: (lang: Language) => void;
  data: PortfolioContent;
  activeCaseStudy: CaseStudy | null;
  openCaseStudy: (caseStudyId: string) => void;
  closeCaseStudy: () => void;

}

const PortfolioContext = createContext<PortfolioContextValue | undefined>(
  undefined
);

function detectBrowserLanguage(): Language {
  if (typeof navigator === "undefined") return "en";
  const tag = navigator.language.slice(0, 2).toLowerCase();
  return tag === "es" ? "es" : "en";
}

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Language>(detectBrowserLanguage);
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(
    null
  );

  const data = contentByLocale[locale];

  const activeCaseStudy = useMemo(() => {
    if (!activeCaseStudyId) return null;
    return data.caseStudies[activeCaseStudyId] ?? null;
  }, [activeCaseStudyId, data.caseStudies]);

  const openCaseStudy = useCallback(
    (caseStudyId: string) => {
      setActiveCaseStudyId(caseStudyId);
    },
    []
  );

  const closeCaseStudy = useCallback(() => {
    setActiveCaseStudyId(null);
  }, []);

  const value = useMemo<PortfolioContextValue>(
    () => ({
      locale,
      setLocale,
      data,
      activeCaseStudy,
      openCaseStudy,
      closeCaseStudy,

    }),
    [locale, data, activeCaseStudy, openCaseStudy, closeCaseStudy]
  );

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error(
      "usePortfolioContext must be used within a PortfolioProvider"
    );
  }
  return context;
};
