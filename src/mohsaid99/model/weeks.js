export let weeks = [
  {
    id: 1,
    meta: {
      summary: "ملخص الأسبوع الأول",
      year: 2025,
      duration: "من 28 مايو لـ 3 أبريل",
    },
    events: [
      {
        tag: "h1",
        content: "الأسبوع الأول",
      },
      {
        tag: "img",
        size: "extra-small, small, normal, long",
        content: "https://i.imgur.com/uxRtuBm.png",
        thumbnail: "https://i.imgur.com/3GM3Yod.jpg",
      },
      {
        tag: "p",
        content: "فقرة عشوائية",
      },
      {
        tag: "ul",
        content: [
          {
            title: "Google",
            link: "https://www.google.com",
          },
          {
            title: "Google",
            link: "https://www.google.com",
          },
        ],
      },
    ],
  },
];

export const latestWeek = weeks.length;
