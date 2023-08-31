import { htmlEscape } from 'escape-goat';
import DOMPurify from 'isomorphic-dompurify';
import striptags from 'striptags';

/**
 * Sanitize the HTML input.
 *
 * @param  str - The string to sanitize.
 * @returns string
 */
export const sanitize = (str: string) =>
  DOMPurify.sanitize(str, {
    ADD_ATTR: ['target'],
  });

/**
 * Convert new lines to <br> tags.
 *
 * @param  str - The string to convert.
 * @returns string
 */
export const nl2br = (str: string): string =>
  str.replace(/(?:\r\n|\r|\n)/g, '<br>');

/**
 * Sanitize the HTML input and convert new lines to <br> tags.
 *
 * @param  str - The string to sanitize and convert.
 * @returns string
 */
export const sanitizeTextarea = (str: string) => sanitize(nl2br(str));

/**
 * Escape the string for use in HTML attributes.
 *
 * @param  str - The string to escape.
 * @returns string
 */
export const escAttr = (str: string) => htmlEscape(striptags(str));
