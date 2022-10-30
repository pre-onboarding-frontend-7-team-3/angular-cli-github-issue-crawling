import { useRef } from "react";

const useInfinityScroll = () => {
  const observerRef = useRef();
  const beginObserving = (callback) => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 1 },
    );
    observer.observe(observerRef.current);
  };
  return [observerRef, beginObserving];
};
export default useInfinityScroll;
