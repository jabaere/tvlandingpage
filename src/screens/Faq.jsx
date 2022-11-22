import React from "react";
import { FaqQusetion } from "../components/faqQusetion";
import "../faq.css";
import "aos/dist/aos.css";
import { faqData } from "../api/api";

export const Faq = () => {
  return (
    <div className="faqContainer aos-init" data-aos="fade-right" id="faq">
      <h1 data-aos="zoom-in-up" className="aos-init">
        FAQ
      </h1>
      {faqData.map((item, index) => (
        <FaqQusetion
          question={item.question}
          answer={item.answer}
          key={index}
        />
      ))}
    </div>
  );
};
