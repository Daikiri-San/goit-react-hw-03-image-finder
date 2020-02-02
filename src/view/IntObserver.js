function createObserver(observeElem, func) {
  const onEntry = entry => {
    if (entry[0].isIntersecting) {
      func();
    }
  };

  const options = {
    rootMargin: '0px 0px 500px 0px',
    threshold: 0.01,
  };

  const observer = new IntersectionObserver(onEntry, options);

  observer.observe(observeElem);
}

export default createObserver;
