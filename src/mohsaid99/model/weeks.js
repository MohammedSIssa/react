const defaultThumbnail = "https://i.imgur.com/jhwRHip.png"

export let weeks = [
  {
    id: 1,
    meta: {
      summary: "حل أسئلة برمجة",
      year: 2025,
      duration: "من 1 يناير لـ 7 يناير",
    },
    events: [
      {
        tag: "h1",
        content: "بديت بحل أسئلة موقع بروجكت أولر",
      },
      {
        tag: "img",
        size: "normal",
        content: "https://i.imgur.com/PK0BXVx.jpeg",
        thumbnail: defaultThumbnail
      },
      {
        tag: "p",
        content: "حليت 16 سؤال من أصل 25 مقرر أحلهم خلال السنة",
      },
      {
        tag: "img",
        size: "normal",
        content: "https://i.imgur.com/C3OM08R.jpeg",
        thumbnail: defaultThumbnail
      },
      {
        tag: "p",
        content: "هاد الأسئلة فكرتها تخليك تستخدم الرياضات مع البرمجة، الأهم انك تفكر بالحل الأسرع والأخف، بتخليك تحك راسك وتجيب حلول بدها تفكير طويل"
      }
      // {
      //   tag: "ul",
      //   content: [
      //     {
      //       title: "Google",
      //       link: "https://www.google.com",
      //     },
      //     {
      //       title: "Google",
      //       link: "https://www.google.com",
      //     },
      //   ],
      // },
    ],
  },
];

export const latestWeek = weeks.length;
