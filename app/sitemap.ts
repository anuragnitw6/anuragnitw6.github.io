import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://anuragnitw6.github.io";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },

        {
            url: `${baseUrl}/patterns`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },

        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },

        {
            url: `${baseUrl}/problems/two-sum`,
            lastModified: new Date(),
        },

        {
            url: `${baseUrl}/problems/group-anagrams`,
            lastModified: new Date(),
        },

        {
            url: `${baseUrl}/problems/valid-anagram`,
            lastModified: new Date(),
        },

        {
            url: `${baseUrl}/problems/top-k-frequent-elements`,
            lastModified: new Date(),
        },

        {
            url: `${baseUrl}/problems/longest-consecutive-sequence`,
            lastModified: new Date(),
        },
    ];
}