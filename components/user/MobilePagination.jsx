"use client";
import { useLanguage } from "@/utils/languageContext";
const MobilePagination = ({ activeIndex, handlePaginationClick, handlePaginationHover }) => {
  const { selectedLanguage } = useLanguage(); // Get the selected language from the context

  // Define labels based on the selected language
  const labels = {
    GEO: ["გოფრირებული მილები", "პოლიეტილენის მილები", "პოლიპროპილენის მილები", "ფიტინგები"],
    ENG: ["Corrugated Pipes", "Polyethylene Pipes", "PPRC Pipes", "Fittings"],
    RUS: ["Гофрированные трубы", "Трубы из полиэтилена", "Трубы из ППРК", "Арматура"],
  };

  return (
    <div className="px-4 py-2 absolute top-0 left-0">
      {labels[selectedLanguage].map(
        (label, index) => (
          <span
            key={index}
            className={`mob-dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => handlePaginationClick(index)}
            onMouseEnter={() => handlePaginationHover(index)}
          >
            {label}
          </span>
        )
      )}
    </div>
  );
};

export default MobilePagination;
