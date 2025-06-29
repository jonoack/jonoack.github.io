// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-homeofficeweek",
    title: "Homeofficeweek",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-updates",
          title: "Updates",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-informationen",
          title: "Informationen",
          description: "Infos zu einzelnen Schwerpunkten.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-start-der-webseite",
        
          title: "Start der Webseite",
        
        description: "Infos zum Start der Webeseite",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/start-website/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-grundsätzlicher-ablauf",
          title: 'Grundsätzlicher Ablauf',
          description: "Wie sieht der Ablauf aus",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ablauf/";
            },},{id: "projects-technische-ausrüstung",
          title: 'Technische Ausrüstung',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/technische_ausruestung/";
            },},{id: "projects-verpflegung",
          title: 'Verpflegung',
          description: "Alles rund um das kullinarische Wohlbefinden",
          section: "Projects",handler: () => {
              window.location.href = "/projects/verpflegung/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
