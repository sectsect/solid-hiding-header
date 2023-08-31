import striptags from 'striptags';
import truncate from 'truncate';

const siteUrl = import.meta.env.VITE_PUBLIC_SITE_URL || '';

/**
 * Format the string for meta description tag.
 *
 * @param  str - string
 * @returns string
 */
export const formatDescription = (str: string) =>
  truncate(striptags(str.replace(/\n/g, '')), 120);

/**
 * Build the URL for canonical link tag.
 *
 * @param  path - Page path to be formatted
 * @returns string
 */
export const buildCanonicalUrl = (path: string) => `${siteUrl}${path}`;
