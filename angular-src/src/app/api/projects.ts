export const logos = {
  wordpress: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/wordpress-logo-notext-rgb.png',
  react: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/React.js_logo.png',
  redux: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Redux-logo.png',
  node: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Node-logo.png',
  aws: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/aws-logo.png',
  angular: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/angular.png',
  firebase: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Firebase-logo.png',
  mongoDB: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/mongo-db-logo.png',
  express: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/express-logo.png',
  heroku: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/heroku-logo.png',
  html: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/HTML_Logo.png',
  css: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/CSS3_logo_and_wordmark.svg.png',
  js: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Badge_js-strict.svg.png',
  php: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/php_PNG23.png',
  auth0: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/auth0-logo-png-transparent.png'
};

export const ProjectsAPI = {
    projects: [
      {
        id: 11,
        link: "https://taggingthemascot.herokuapp.com/",
        name: "Tagging The Mascot",
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/tagging-the-mascot.png',
        freeHosting: true,
        description: 'Tagging the Mascot was an augmented reality geotagging event. There were 85 real world objects around the Madison area, and user as a participant team needed to be within 40 feet to each of them in order to check in and cross over an object. Who ever tag all 85 objects wins.',
        role: 'My role was to build an application what will allow participants to use their phones as an interactive map using google maps as a main canvas, guideline where to go, real-time team leaderboards, real time automated and interactive checklist, basic account management and security.',
        result: 'This product has been delivered successfully to a client Spoofing Willy Street within a deadline we set before.',
        resource: 'https://spoofingwilly.com/2018/05/09/area-man-wakes-up-after-a-weekend-binge-to-something-frightening/',
        type: 'Full Stack',
        technologiesUsed: [
          {
            text: 'React.js',
            icon: logos.react
          },
          {
            text: 'Redux',
            icon: logos.redux
          },
          {
            text: 'Firebase',
            icon: logos.firebase
          },
          {
            text: 'Node.js',
            icon: logos.node
          },
          {
            text: 'AWS',
            icon: logos.aws
          },
          {
            text: 'Heroku',
            icon: logos.heroku
          }
        ]
      },
      {
        id: 1,
        link: "http://unitedstatestaxservices.us/",
        name: "United States Tax Services",
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/usts.png',
        description: 'United States Tax Services (USTS) is a company located in Buffalo Grove, IL. The company provide a broad range of services such as: accounting, public notary, tax calculation, incorporation etc.',
        role: 'My role was to completely redesign and built brand new website with brand new branding. USTS has onboard marketing eecutive who helped me during the proccess. We choose WordPress, because the company wants to drive organic traffic from social media by posting blog posts. Another reason was that WordPress is easy to maintain and edit for the marketing team.',
        result: 'With our hard work, able to adapt and work with the ongoing team together we were be able to automated some of the client\'s proccesses related to customer support, content management and billing through the website. New blog style generated thousands of views every month with new paying customers. After all Return On Investment and Branding is what matters.',
        resource: 'https://unitedstatestaxservices.us/',
        type: 'Full Stack',
        technologiesUsed: [
          {
            text: 'WordPress',
            icon: logos.wordpress
          },
          {
            text: 'HTML5',
            icon: logos.html
          },
          {
            text: 'CSS3',
            icon: logos.css
          },
          {
            text: 'JavaScript',
            icon: logos.js
          },
          {
            text: 'PHP',
            icon: logos.php
          }
        ]
      },
      {
        id: 2,
        link: "https://spoofingwilly.com/",
        name: "Spoofing Willy Street",
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/spoofingwilly-head.png',
        description: 'Spoofing Willy Street is marketing consultancy company in Madison, WI. Spoofing Willy provide proffesional services like social media strategy, website development, photography, content creation etc.',
        role: 'Our role was to completely redesign, reengineer and improve performance of existing website. Create interactive User Experience, modern User Interface. We also helped with nnovation of internal and external software infrastracture and tools of the company. For this project We choose WordPress, becuase current team had experience with it.',
        resource: 'https://spoofingwilly.com/2018/05/09/area-man-wakes-up-after-a-weekend-binge-to-something-frightening/',
        type: 'Full Stack',
        technologiesUsed: [
          {
            text: 'WordPress',
            icon: logos.wordpress
          },
          {
            text: 'HTML5',
            icon: logos.html
          },
          {
            text: 'CSS3',
            icon: logos.css
          },
          {
            text: 'JavaScript',
            icon: logos.js
          },
          {
            text: 'PHP',
            icon: logos.php
          }
        ]
      },
      {
        id: 3,
        link: "http://www.perkinsproperties.us/",
        name: "Perkins Properties",
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/pekrins-head.png',
        description: 'Perkins Properties acquires, develops, manages, and operates unique retail, office, and restaurant properties in the Midwest. They own retail, office, commercial, restaurant and entertainment properties. Easily search for a location near you.',
        role: 'Our role was to reengineer and redesign existing WordPress website with very custommized User Inteface components. We worked with client\s marketing team to establish online presence they never had before.',
        result: 'As a result we achieved the goal we set before with a big Return On Investment and significantly better online presence.',
        resource: 'http://www.perkinsproperties.us/company/',
        type: 'Front End',
        technologiesUsed: [
          {
            text: 'WordPress',
            icon: logos.wordpress
          },
          {
            text: 'HTML5',
            icon: logos.html
          },
          {
            text: 'CSS3',
            icon: logos.css
          },
          {
            text: 'JavaScript',
            icon: logos.js
          },
          {
            text: 'PHP',
            icon: logos.php
          }
        ]
      },
      {
        id: 5,
        link: "http://badgerblinds.com/",
        name: "Badger Blinds",
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/badgerblinds-head.png',
        description: 'Badger Blinds and Shades are family owned and operated home improvement company in Madison area. They come from three generations in the window covering business and over 25 years personal experience.',
        role: 'Our role was to achieve excellent online presence through the website for small business, brouchure-like website. ',
        result: 'As a result small business started to grow and generate new potential customers every month.',
        resource: 'http://badgerblinds.com/',
        type: 'Front End',
        technologiesUsed: [
          {
            text: 'WordPress',
            icon: logos.wordpress
          },
          {
            text: 'HTML5',
            icon: logos.html
          },
          {
            text: 'CSS3',
            icon: logos.css
          },
          {
            text: 'JavaScript',
            icon: logos.js
          },
          {
            text: 'PHP',
            icon: logos.php
          }
        ]
      },
      {
        id: 6,
        link: "https://kunzeanalytics.com/",
        name: "Kunze Analytics  ",
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/kunze-head.png',
        description: 'Kunze Analytics Core Competencies auditing and improving the Assessment Industry. Some of the services they provide are: Optimizing assessment success patterns through Machine Learning, Validating Models with Client Performance and Retention Metrics, Supporting people decisions and their development with data, Focusing on people’s full potential and engagement at work',
        role: 'Our role was to design and engineer brand new website for the Brand, to attract Bussiness to Bussiness leads, potential partners and generate organic traffic using Blog post.',
        result: 'As a result of our hard work with Kunze Analytics, we achieved the milestones we set at the beginning of our journey by multipling client\'s Return on Investment, integrated blog platform with many excellent resources and executive summaries.',
        resource: 'https://www.kunzeanalytics.com/how-it-works/',
        type: 'Full Stack',
        technologiesUsed: [
          {
            text: 'WordPress',
            icon: logos.wordpress
          },
          {
            text: 'HTML5',
            icon: logos.html
          },
          {
            text: 'CSS3',
            icon: logos.css
          },
          {
            text: 'JavaScript',
            icon: logos.js
          },
          {
            text: 'PHP',
            icon: logos.php
          }
        ]
      },
      {
        id: 8,
        link: "http://www.klaritos.com/",
        name: "Klaritos Inc",
        description: 'KLĀRITOS is a novel managed-care company specializing in precision medicine.',
        role: 'Build minimalistic info based website for med-tech startup.',
        type: 'Front End',
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/klaritos-head.png',
        technologiesUsed: [
          {
            text: 'HTML5',
            icon: logos.html
          },
          {
            text: 'CSS3',
            icon: logos.css
          },
          {
            text: 'JavaScript',
            icon: logos.js
          },
          {
            text: 'PHP',
            icon: logos.php
          }
        ]
      },

    ],
  };
