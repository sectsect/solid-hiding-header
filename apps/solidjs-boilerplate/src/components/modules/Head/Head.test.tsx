import { render } from '@solidjs/testing-library';
import { expect, describe, test, vi } from 'vitest';
import { MetaProvider } from '@solidjs/meta';
import type { JSX } from 'solid-js';
import Head from './Head';

// Mock the AppConfig to avoid import issues
vi.mock('@/constants/AppConfig', () => ({
  AppConfig: {
    title: 'Test Site',
    description: 'Test description',
    og: {
      image: {
        url: 'https://example.com/default-og-image.jpg'
      }
    }
  }
}));

describe('Head component', () => {
  const renderWithMeta = (component: () => JSX.Element) => {
    return render(() => (
      <MetaProvider>
        {component()}
      </MetaProvider>
    ));
  };

  test('should render with default title and description', () => {
    const { unmount } = renderWithMeta(() => <Head />);
    
    // Check if document head contains the expected meta tags
    expect(document.title).toBe('Test Site');
    
    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription?.getAttribute('content')).toBe('Test description');
    
    unmount();
  });

  test('should render with custom title and description', () => {
    const customTitle = 'Custom Page';
    const customDescription = 'Custom page description';
    
    const { unmount } = renderWithMeta(() => (
      <Head title={customTitle} description={customDescription} />
    ));
    
    expect(document.title).toBe('Custom Page | Test Site');
    
    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription?.getAttribute('content')).toBe(customDescription);
    
    unmount();
  });

  test('should use website type when canonical is undefined', () => {
    const { unmount } = renderWithMeta(() => <Head />);
    
    const ogType = document.querySelector('meta[property="og:type"]');
    expect(ogType?.getAttribute('content')).toBe('website');
    
    unmount();
  });

  test('should use article type when canonical is provided', () => {
    const { unmount } = renderWithMeta(() => <Head canonical="/test" />);
    
    const ogType = document.querySelector('meta[property="og:type"]');
    expect(ogType?.getAttribute('content')).toBe('article');
    
    unmount();
  });

  test('should use custom OG image when provided', () => {
    const customOgImage = {
      og: {
        image: {
          url: '/custom-image.jpg'
        }
      }
    };
    
    const { unmount } = renderWithMeta(() => <Head {...customOgImage} />);
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    // The actual implementation prepends siteUrl, but since siteUrl is empty in test, it just returns the path
    expect(ogImage?.getAttribute('content')).toContain('custom-image.jpg');
    
    unmount();
  });

  test('should use default OG image when custom image is not provided', () => {
    const { unmount } = renderWithMeta(() => <Head />);
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    expect(ogImage?.getAttribute('content')).toBe('https://example.com/default-og-image.jpg');
    
    unmount();
  });
}); 