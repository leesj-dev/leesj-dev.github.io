module.exports = {
  title: `leesj-dev`,
  description: `이승준`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://leesj.me`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `leesj-dev/leesj-dev.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'G-NZR06N68FF', // Google Analytics Tracking ID
  author: {
    name: `이승준`,
    bio: {
      role: ``,
      description: ['블로그.', 'b l o g.'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/leesj-dev`, // `https://github.com/leesj-dev`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      instagram: `https://instagram.com/lee.sj_04`,
      email: `kevinjun0913@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.07 ~',
        activity: '개인 블로그 개발 및 운영',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/leesj-dev/leesj-dev.github.io',
          demo: 'https://leesj.me',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '블로그 개발',
        description:
          '소소한 개인 프로젝트들을 진행하면서 이것을 기록으로 남기기 위해, Gatsby 기반의 블로그를 만들게 되었다.',
        techStack: ['gatsby', 'react'],
        links: {
          github: 'https://github.com/leesj-dev/leesj-dev.github.io',
          demo: 'https://leesj-dev.github.io',
        },
      },
    ],
  },
};
