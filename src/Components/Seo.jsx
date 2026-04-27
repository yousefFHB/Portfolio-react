import { useEffect } from 'react';

const DEFAULT_TITLE = 'یوسف فرح بخش | Yousef Farahbakhsh | Front-End Developer Portfolio';
const DEFAULT_DESCRIPTION =
  'Portfolio of Yousef Farahbakhsh (یوسف فرح بخش), front-end developer. Explore React, Next.js, Tailwind CSS, responsive UI, and modern web projects.';
const DEFAULT_KEYWORDS =
  'Yousef Farahbakhsh, Yousef, یوسف فرح بخش, یوسف فرحبخش, یوسف, توسعه دهنده فرانت اند, برنامه نویس فرانت اند, front-end developer, React developer, portfolio, Next.js, Tailwind CSS, JavaScript, web developer';
const DEFAULT_IMAGE = '/Home-page.png';
function upsertMeta(selector, attributes, content) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  element.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function upsertStructuredData(structuredData) {
  const existing = document.getElementById('page-structured-data');

  if (!structuredData) {
    existing?.remove();
    return;
  }

  const script = existing || document.createElement('script');
  script.id = 'page-structured-data';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);

  if (!existing) {
    document.head.appendChild(script);
  }
}

export default function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  structuredData = null,
}) {
  useEffect(() => {
    const pageTitle = title || DEFAULT_TITLE;
    const pageDescription = description || DEFAULT_DESCRIPTION;
    const pageKeywords = keywords || DEFAULT_KEYWORDS;
    const pageUrl = window.location.href;
    const imageUrl = new URL(image || DEFAULT_IMAGE, window.location.origin).href;
    const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow';

    document.title = pageTitle;
    document.documentElement.lang = 'fa';

    upsertMeta('meta[name="description"]', { name: 'description' }, pageDescription);
    upsertMeta('meta[name="keywords"]', { name: 'keywords' }, pageKeywords);
    upsertMeta('meta[name="author"]', { name: 'author' }, 'Yousef Farahbakhsh | یوسف فرح بخش');
    upsertMeta('meta[name="robots"]', { name: 'robots' }, robotsContent);
    upsertMeta('meta[name="googlebot"]', { name: 'googlebot' }, robotsContent);
    upsertMeta('meta[property="og:type"]', { property: 'og:type' }, type);
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, 'Yousef Farahbakhsh | یوسف فرح بخش');
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale' }, 'fa_IR');
    upsertMeta('meta[property="og:title"]', { property: 'og:title' }, pageTitle);
    upsertMeta('meta[property="og:description"]', { property: 'og:description' }, pageDescription);
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, pageUrl);
    upsertMeta('meta[property="og:image"]', { property: 'og:image' }, imageUrl);
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, pageTitle);
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, pageDescription);
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, imageUrl);
    upsertLink('canonical', pageUrl);
    upsertStructuredData(structuredData);
  }, [title, description, keywords, image, type, noindex, structuredData]);

  return null;
}
