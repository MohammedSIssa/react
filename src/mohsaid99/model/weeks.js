const defaultThumbnail = "https://i.imgur.com/jhwRHip.png"

export let weeks = [
  {
    id: 2,
    meta: {
      summary: "برمجة هاد الموقع",
      year: 2025,
      duration: "من 8 يناير لـ 14 يناير"
    },
    events: [
      {
        tag: 'h1',
        content: "برمجة هاد الموقع 💻"
      },
      {
        tag: "img",
        content: "https://i.imgur.com/a4QOAMo.jpeg",
        size: "normal",
        thumbnail: defaultThumbnail
      },
      {
        tag: "h2",
        content: "التصميم الأول: كان بسيط"
      },
      {
        tag: "img",
        content: "https://i.imgur.com/FKy14XK.jpeg",
        size: "normal",
        thumbnail: defaultThumbnail
      },
      {
        tag: "h2",
        content: "بعدين قررت أسرق شوية إلهام من الإنستا 🙂"
      },
      {
        tag: "p",
        content: "ضفت اقتباس جديد كل أسبوع، وعملت تعديلات على التصميم بحيث يكون متجاوب أكتر"
      },
      {
        tag: "h1",
        content: "الشكل على الجوال 📱"
      },
      {
        tag: "img",
        content: "https://i.imgur.com/irrN5sh.jpeg",
        size: "small",
        thumbnail: defaultThumbnail
      },
      {
        tag: "h1",
        content: "الشكل على الشاشات الأكبر"
      },
      {
        tag: "img",
        content: "https://i.imgur.com/mFnu2wz.jpeg",
        size: "normal",
        thumbnail: defaultThumbnail
      },
      {
        tag: "p",
        content: "اليوم 14 يناير: كملت 142 يوم متواصل في تعلم اللغة العبرية 🔥"
      },
      {
        tag: "img",
        content: "https://i.imgur.com/nLRIDzc.jpeg",
        size: "small",
        thumbnail: defaultThumbnail
      }
    ]
  },
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
