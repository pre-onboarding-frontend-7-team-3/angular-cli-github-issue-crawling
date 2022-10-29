import { useCallback, useRef, useEffect } from "react";

const useInfiniteScroll = (onIntersectObserver) => {
  const ref = useRef(null);

  const options = {
    root: null,
    rootMargin: "10px",
    threshod: 0,
  };

  const onIntersect = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersectObserver(entry, observer);
        }
      });
    },
    [onIntersectObserver],
  );

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const observer = new IntersectionObserver(onIntersect, options);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [onIntersect, ref, options]);

  return ref;
};

export default useInfiniteScroll;
