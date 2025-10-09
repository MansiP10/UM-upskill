const colorgird = document.querySelector("#colorgird");
const colorgird_conxt = colorgird.getContext("2d");

colorgird.style.width = colorgird.width = window.innerWidth;
colorgird.style.height = colorgird.height = window.innerHeight;

const palette = [
  "orange",
  "yellow",
  "blue",
  "red",
  "green",
  "white",
  "purple",
  "pink",
  "brown",
  "gray",
  "lime",
];

const animation = (starttime) => (time) => {
  requestAnimationFrame(() => animation(starttime)(Date.now() + starttime));
  let x = 0;
  let y = 0;
  const arr = Array(20);
  colorgird_conxt.fillStyle = `rgba(0, 0, 0, 0.03)`;
  colorgird_conxt.fillRect(0, 0, colorgird.width, colorgird.height);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 2 - (Math.sin(i + time / 200) / 2) * colorgird.height;
    colorgird_conxt.fillStyle =
      palette[Math.floor(i + time / 200) % palette.length];
    const w = 100;
    colorgird_conxt.fillRect(x, colorgird.height / 2, w, arr[i]);
    x += w;
  }
};

animation(0)(0);

animation(100)(0);
