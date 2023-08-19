// MobilePagination.js
import React from "react";

const MobilePagination = ({ activeIndex, handlePaginationClick, handlePaginationHover }) => {
  return (
    <div className="px-4 py-2 absolute top-0 left-0">
      {["გოფრირებული მილები", "პოლიეთილენის მილები", "პოლიპროპილენის მილები", "ფიტინგები"].map(
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
