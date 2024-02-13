import wheelIcon from "./wheel.png";
import fistIcon from "./fist.png";
import helmetIcon from "./helmet.png";
import sunIcon from "./sun.png";
import clockIcon from "./clock.png";
import tirelogo from "./tire-logo-1.png";

const siteData = {
  features: [
    {
      title: "Ultimate Handling",
      description:
        "Ultra-high turn up and lower belt angle for ultimate handling on and off the track.",
    },
    {
      title: "Maximum Grip",
      description:
        "Dedicated motorsports-inspired compound for maximum wet and dry grip on and off the track.",
    },
    {
      title: "Race Ready",
      description:
        "Engineered to dominate in sanctioned competition categories requiring a 200 UTQG tire.",
    },
    {
      title: "Consistent Performance",
      description:
        "Tread design delivers consistent contact to the road while minimizing localized heat.",
    },
  ],

  specsData: [
    { name: "Part #", value: "110105285" },
    { name: "Load I.D.", value: "SL" },
    { name: "UTQG Rating", value: "200/A/A" },
    { name: "Unit Weight", value: "15.2" },
    { name: "Rim Width (Meas.)", value: "6.0" },
    { name: "Rim Width (Appr.)", value: "5.0 - 6.5" },
    { name: "Overall Width (inches)", value: "7.6" },
  ],

  specsData2: [
    { name: "Overall Diameter (inches)", value: "22.0" },
    { name: "Tread Width (inches)", value: "6.7" },
    { name: "Tread Depth", value: "7" },
    { name: "Static Radius (inches)", value: "10.1" },
    { name: "Rev/Mile", value: "945" },
    {
      name: "Max Load at Cold Inflation Pressure (Lbs. @PSI) Single)",
      value: "992@51",
    },
    { name: "Type", value: "BW" },
  ],

  featureIcons: [
    {
      image: wheelIcon,
      description: "Ultimate Handling",
      detail:
        "Ultra-high turn up and lower belt angle for ultimate handling on and off the track.",
    },
    {
      image: fistIcon,
      description: "Maximum Grip",
      detail:
        "Dedicated motorsports-inspired compound for maximum wet and dry grip on and off the track.",
    },
    {
      image: helmetIcon,
      description: "Race Ready",
      detail:
        "Engineered to dominate in sanctioned competition categories requiring a 200 UTQG tire.",
    },
    {
      image: clockIcon,
      description: "Consistent Performance",
      detail:
        "Tread design delivers consistent contact to the road while minimizing localized heat.",
    },
    { image: sunIcon, description: "Summer Tire", detail: "" },
  ],

  productLogo: tirelogo,

  tags: ["Performance Cars", "Competition"],

  productDescriptionLong:
    "When you absolutely have to finish first, the competition-silencing \n ADVAN A052® is your one-way ticket to the podium. This race-ready,\n extreme performance summer tire delivers physics-defying levels of\ngrip, making a statement on the street and a standout on the track.",

  imageInfo: {
    image1: [
      {
        x: 50,
        y: 9,
        feature: "High Stability Compound Rib",
        detail:
          "Extra wide outer rib delivers powerful, uninterrupted cornering capability.",
      },
      {
        x: 66,
        y: 43,
        feature: "Motorsports Construction",
        detail:
          "Produced on the same production line as our ADVAN competition tires.",
      },
    ],
    image2: [
      {
        x: 60,
        y: 15,
        feature: "New MS Compound",
        detail:
          "Combines the extreme grip of motorsports technology with BluEarth™ fuel efficiency.",
      },
      {
        x: 65,
        y: 44,
        feature: "Rounded Rib Profile",
        detail:
          "Provides a more cohesive contact patch to minimize heat buildup during aggressive driving.",
      },
    ],
    image3: [
      {
        x: 64,
        y: 43,
        feature: "New MS Compound",
        detail:
          "Competitive in all conditions from Pikes Peak International Hill Climb to One Lap of America to the local amateur autocross.",
      },
    ],
    image4: [
      {
        x: 58,
        y: 43,
        feature: "Notched Micro Grooves",
        detail:
          "Dissipate heat to keep tires temperatures at the optimum level across the entire section width.",
      },
    ],
  },
};

export default siteData;
