import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import "../assets/css/ScroolToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check the scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <CSSTransition
      in={isVisible}
      timeout={300} // Animation duration
      classNames="fade" // CSS class
      unmountOnExit
    >
      <Button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "1000",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
        }}
      >
        ↑
      </Button>
    </CSSTransition>
  );
};

export default ScrollToTop;
