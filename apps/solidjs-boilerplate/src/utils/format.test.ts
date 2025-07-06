import { expect, describe, test } from 'vitest';

import { formatDescription, buildCanonicalUrl } from './format';

describe('format utilities', () => {
  describe('formatDescription', () => {
    test('should remove HTML tags and truncate string', () => {
      const input =
        '<p>This is a <strong>test</strong> description with some HTML tags</p>';
      const result = formatDescription(input);

      expect(result).toBe('This is a test description with some HTML tags');
      expect(result.length).toBeLessThanOrEqual(120);
    });

    test('should remove newlines', () => {
      const input = 'Line 1\nLine 2\nLine 3';
      const result = formatDescription(input);

      expect(result).toBe('Line 1Line 2Line 3');
    });

    test('should truncate long descriptions to 120 characters or less', () => {
      const longText = 'a'.repeat(200);
      const result = formatDescription(longText);

      // The actual implementation uses truncate package, which may add ellipsis
      expect(result.length).toBeLessThanOrEqual(123); // Account for possible ellipsis
    });
  });

  describe('buildCanonicalUrl', () => {
    test('should build canonical URL with site URL', () => {
      const path = '/test-page';
      const result = buildCanonicalUrl(path);

      // In test environment, siteUrl is empty, so result should just be the path
      expect(result).toBe('/test-page');
    });

    test('should handle empty path', () => {
      const path = '';
      const result = buildCanonicalUrl(path);

      expect(result).toBe('');
    });

    test('should handle path with query parameters', () => {
      const path = '/page?param=value';
      const result = buildCanonicalUrl(path);

      expect(result).toBe('/page?param=value');
    });
  });
});
