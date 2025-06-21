import { expect, describe, test } from 'vitest';
import { sanitize, nl2br, sanitizeTextarea, escAttr } from './sanitize';

describe('sanitize utilities', () => {
  describe('sanitize', () => {
    test('should sanitize HTML while preserving safe tags', () => {
      const input = '<p>Safe content</p><script>alert("unsafe")</script>';
      const result = sanitize(input);
      
      expect(result).toContain('<p>Safe content</p>');
      expect(result).not.toContain('<script>');
    });

    test('should preserve target attribute', () => {
      const input = '<a href="#" target="_blank">Link</a>';
      const result = sanitize(input);
      
      expect(result).toContain('target="_blank"');
    });
  });

  describe('nl2br', () => {
    test('should convert newlines to <br> tags', () => {
      const input = 'Line 1\nLine 2\r\nLine 3\rLine 4';
      const result = nl2br(input);
      
      expect(result).toBe('Line 1<br>Line 2<br>Line 3<br>Line 4');
    });

    test('should handle empty string', () => {
      const result = nl2br('');
      expect(result).toBe('');
    });
  });

  describe('sanitizeTextarea', () => {
    test('should sanitize and convert newlines', () => {
      const input = '<script>alert("test")</script>\nLine 2';
      const result = sanitizeTextarea(input);
      
      expect(result).not.toContain('<script>');
      expect(result).toContain('<br>');
    });
  });

  describe('escAttr', () => {
    test('should escape HTML entities and remove tags', () => {
      const input = '<script>alert("test")</script>&lt;test&gt;';
      const result = escAttr(input);
      
      expect(result).not.toContain('<script>');
      expect(result).not.toContain('<');
      expect(result).not.toContain('>');
    });

    test('should handle special characters', () => {
      const input = 'Test & "quotes" and \'apostrophes\'';
      const result = escAttr(input);
      
      expect(result).toContain('&amp;');
      expect(result).toContain('&quot;');
    });

    test('should handle empty string', () => {
      const result = escAttr('');
      expect(result).toBe('');
    });
  });
}); 