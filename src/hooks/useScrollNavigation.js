import { useState, useEffect, useCallback } from "react";

const useScrollNavigation = (sectionRefs) => {
  const [sidebarIndex, setSidebarIndex] = useState(null);

  const scrollToSection = useCallback(
    (sectionIndex) => {
      const sectionRef = sectionRefs[sectionIndex];
      if (sectionRef && sectionRef.current) {
        window.scrollTo({
          top: sectionRef.current.offsetTop,
          behavior: "smooth",
        });
      }
    },
    [sectionRefs]
  );

  useEffect(() => {
    const scrollNextSection = () => {
      console.log("NEXT");
      const currentSection = determineCurrentSection();
      const nextSection = getNextSection(currentSection);
      setSidebarIndex(nextSection);
      scrollToSection(nextSection);
    };

    const scrollPreviousSection = () => {
      console.log("PREV");
      const currentSection = determineCurrentSection();
      const prevSection = getPreviousSection(currentSection);
      setSidebarIndex(prevSection);
      scrollToSection(prevSection);
    };

    const determineCurrentSection = () => {
      const currentScrollPos = window.scrollY + window.innerHeight / 2;
      let currentSectionIndex = 0;

      for (let i = 0; i < sectionRefs.length; i++) {
        if (currentScrollPos >= sectionRefs[i].current.offsetTop) {
          currentSectionIndex = i;
        } else {
          break;
        }
      }
      return currentSectionIndex;
    };

    const getNextSection = (currentIndex) => {
      return (currentIndex + 1) % sectionRefs.length;
    };

    const getPreviousSection = (currentIndex) => {
      return (currentIndex - 1 + sectionRefs.length) % sectionRefs.length;
    };

    let accumulatedDeltaY = 0;
    const threshold = 250;

    const throttle = (func, limit) => {
      let inThrottle;
      return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    };

    const throttledScrollNext = throttle(scrollNextSection, 800);
    const throttledScrollPrev = throttle(scrollPreviousSection, 800);

    const handleScroll = (event) => {
      event.preventDefault();

      accumulatedDeltaY += event.deltaY;

      if (Math.abs(accumulatedDeltaY) >= threshold) {
        accumulatedDeltaY = 0;
        if (event.deltaY > 0) {
          throttledScrollNext();
        } else {
          throttledScrollPrev();
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    let initialIndex = determineCurrentSection();
    setSidebarIndex(initialIndex);

    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return { sidebarIndex, scrollToSection, setSidebarIndex };
};

export default useScrollNavigation;
