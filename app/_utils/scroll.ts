export const handleScrollSvg = () => {
  const noise: HTMLDivElement | null = document.querySelector(".noise");
  const streamer1: HTMLDivElement | null = document.querySelector(
    ".streamer-container1",
  );
  const streamer2: HTMLDivElement | null = document.querySelector(
    ".streamer-container2",
  );
  var widthScreen = document.documentElement.clientWidth || window.innerWidth;

  if (!noise || !streamer1 || !streamer2) return;
  const scrollPos = window.scrollY;
  const moveAmt = scrollPos / 4;

  noise.style.transform = `translateX(${moveAmt}px)`;
  if (widthScreen > 767) {
    streamer1.style.transform = `translateX(${-moveAmt}px)`;
    streamer2.style.transform = `translateX(${moveAmt}px)`;
  } else {
    streamer1.style.transform = `translateX(${-moveAmt * 7}px)`;
    streamer2.style.transform = `translateX(${moveAmt * 7}px)`;
  }
};
