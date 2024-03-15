import { useEffect } from "react";
import "../pages/HomePageNew.css";
import KUTE from "kute.js";

export default function MorphBlob() {
  useEffect(() => {
    const tween = KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween.start();
  }, []);

  return (
    <svg
      id="visual"
      viewBox="0 0 960 300"
      width="960"
      height="300"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <g transform="translate(476.7439885905506 131.98264950210506)">
        <path
          id="blob1"
          className="blob-motion"
          d="M72.8 -94.3C90.4 -87.5 98 -60.9 106.2 -34.7C114.4 -8.5 123.3 17.2 115.1 35.9C106.9 54.5 81.7 66.1 59.7 83.9C37.6 101.8 18.8 125.9 -3.8 131.1C-26.5 136.4 -52.9 122.8 -72.6 104.2C-92.2 85.6 -105.1 62 -109.8 37.9C-114.4 13.9 -111 -10.5 -102 -31.6C-93 -52.7 -78.5 -70.4 -60.6 -77.1C-42.7 -83.8 -21.4 -79.4 3.1 -83.7C27.6 -88 55.3 -101.1 72.8 -94.3"
          fill="#4FACF7"
        ></path>
      </g>
      <g
        transform="translate(481.24409473430507 139.50456666688393)"
        style={{ visibility: "hidden" }}
      >
        <path
          id="blob2"
          d="M65.9 -81.9C86.4 -75.9 104.5 -57.9 102.1 -39.3C99.6 -20.8 76.6 -1.7 66.4 19.1C56.2 39.9 59 62.4 50.1 83.7C41.1 105 20.6 125 2.1 122.2C-16.5 119.3 -32.9 93.6 -42.4 72.6C-51.9 51.5 -54.5 35 -66.1 17.2C-77.7 -0.5 -98.3 -19.6 -103.5 -42.9C-108.6 -66.2 -98.4 -93.8 -78.6 -100C-58.8 -106.2 -29.4 -91.1 -3.3 -86.5C22.7 -81.9 45.5 -87.9 65.9 -81.9"
          fill="#4FACF7"
        ></path>
      </g>
    </svg>
  );
}
