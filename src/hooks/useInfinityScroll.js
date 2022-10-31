import { useRef } from "react";

const useInfinityScroll = () => {
  const observerRef = useRef();
  let observer;
  const beginObserving = (callback) => {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 1 },
    );
    observer.observe(observerRef.current);
  };

  const finishObserving = () => {
    observer?.disconnect();
  };

  return [observerRef, beginObserving, finishObserving];
};

export default useInfinityScroll;
