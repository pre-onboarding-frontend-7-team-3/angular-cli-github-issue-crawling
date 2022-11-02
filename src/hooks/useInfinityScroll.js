import { useEffect, useRef } from "react";

const useInfinityScroll = (setPage) => {
  const inView = useRef();

  useEffect(() => {
    const target = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((page) => page + 1);
        }
      },
      { threshold: 1 },
    );
    target.observe(inView.current);
  }, []);

  return { inView };
};

export default useInfinityScroll;
