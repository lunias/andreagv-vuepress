module.exports = {
    title: 'Andrea Gallego-Valencia',
    description: 'Andrea Gallego\'s Photography Portfolio and Blog',
    theme: 'modern-blog',
    plugins: [
        ['@vuepress/back-to-top']
    ],
    themeConfig: {
        nav: [
            {
                text: 'Home',
                link: '/',
                icon: 'el-icon-house'
            },
            {
                text: 'Projects',
                link: '/projects/',
                icon: 'el-icon-camera'
            },
            {
                text: 'Résumé',
                link: 'https://andreagv.com/Andrea_Gallego_Valencia_Resume.pdf',
                icon: 'el-icon-document',
                external: true
            }
        ],
        footer: {
            contact: [
                {
                    type: 'instagram',
                    link: 'https://github.com/vuejs/vuepress'
                },
                {
                    type: 'youtube',
                    link: 'https://github.com/vuejs/vuepress'
                },
                {
                    type: 'facebook',
                    link: 'https://github.com/vuejs/vuepress'
                },
                {
                    type: 'linkedin',
                    link: 'https://github.com/vuejs/vuepress'
                }
            ],
            copyright: [
                {
                    text: 'Privacy Policy',
                    link: 'https://policies.google.com/privacy?hl=en-US',
                },
                {
                    text: 'MIT Licensed | Copyright © 2020-present Andrea Gallego-Valencia',
                    link: '',
                }
            ]
        },
        sitemap: true,
        hostname: "https://andreagv.com/",
        summary: true,
        socialShare: true,
        socialShareNetworks: ["twitter", "reddit", "facebook"],
        googleAnalytics: "UA-137350132-3",
        disqus: "andreagv",
        heroImage: "/hero.jpg",
        about: {
            fullName: "Andrea Gallego-Valencia",
            bio: "I am a Photographer / Videographer living near Minnapolis, MN.  I love capturing the world in new ways everyday ♥ ...",
            image: "/andreagv.jpg"
        }
    }
}
