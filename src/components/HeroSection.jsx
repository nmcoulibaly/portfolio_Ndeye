import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container">
        <div className="md:grid md:grid-cols-[auto,1fr] md:items-center md:gap-3">
          {/* Photo */}
          <div>
            <img
              src="/projects/img_portfolio.png"
              alt="Ndeye Mbar Coulibaly"
              className="w-40 h-40 md:w-50 md:h-50 rounded-full object-cover shadow-lg opacity-0 animate-fade-in-delay-2"
            />
        </div>
          {/* Texte de présentation */}
          <div className="text-left">
             <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {t("hero.greeting")} <span className="text-primary opacity-0 animate-fade-in-delay-1"> {t("hero.name")}</span> 
              <span className="opacity-0 animate-fade-in"> {t("hero.surname")}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 mt-4">
             {t("hero.description")}
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                {t("hero.cta")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
export default HeroSection;