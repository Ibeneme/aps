import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ariadpsychservices.com';
    const lastModified = new Date(); // Or use a specific date string

    const routes = [
        { path: '', changeFreq: 'daily' as const, priority: 1.0 },
        { path: '/about', changeFreq: 'monthly' as const, priority: 0.8 },
        { path: '/contact', changeFreq: 'monthly' as const, priority: 0.9 },
        { path: '/faq', changeFreq: 'weekly' as const, priority: 0.8 },
        { path: '/blog', changeFreq: 'weekly' as const, priority: 0.7 },
        { path: '/services', changeFreq: 'monthly' as const, priority: 0.9 },
        { path: '/services/adhd', changeFreq: 'monthly' as const, priority: 0.8 },
        { path: '/services/asd', changeFreq: 'monthly' as const, priority: 0.8 },
        { path: '/services/psychoed', changeFreq: 'monthly' as const, priority: 0.7 },
        { path: '/services/neuro', changeFreq: 'monthly' as const, priority: 0.7 },
        { path: '/services/mmpi', changeFreq: 'monthly' as const, priority: 0.7 },
        { path: '/services/pre-surgical', changeFreq: 'monthly' as const, priority: 0.8 },
        { path: '/services/additional', changeFreq: 'monthly' as const, priority: 0.6 },
        { path: '/locations/dallas-hq', changeFreq: 'monthly' as const, priority: 0.8 },
        { path: '/locations/houston', changeFreq: 'monthly' as const, priority: 0.8 },
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified,
        changeFrequency: route.changeFreq,
        priority: route.priority,
    }));
}