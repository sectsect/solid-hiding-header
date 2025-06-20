import { render, screen } from '@solidjs/testing-library';
import { expect, describe, test, vi, beforeAll } from 'vitest';
import { HidingHeader } from '@/index';

describe('HidingHeader component', () => {
  beforeAll(() => {
    // Mock window.ResizeObserver @ https://vitest.dev/guide/mocking.html#globals
    const ResizeObserverMock = vi.fn(() => ({
      disconnect: vi.fn(),
      observe: vi.fn(),
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }));
    vi.stubGlobal('ResizeObserver', ResizeObserverMock);
    // now you can access it as `ResizeObserver` or `window.ResizeObserver`
  });

  test('should exists', () => {
    const { unmount } = render(() => <HidingHeader>Header</HidingHeader>);
    const element = screen.getByRole('banner');
    expect(element).toBeTruthy();
    unmount();
  });

  test('is assigned a <div> tag', () => {
    const { unmount } = render(() => (
      <HidingHeader>Header</HidingHeader>
    ));

    const containerElm = screen.getByRole('banner');
    console.log(containerElm.tagName);
    expect(containerElm.tagName).toBe('DIV');
    unmount();
  });

  test('is assigned a <header> tag', () => {
    const { unmount } = render(() => (
      <HidingHeader component="header">Header</HidingHeader>
    ));

    const containerElm = screen.getByRole('banner');
    expect(containerElm.tagName).toBe('HEADER');
    unmount();
  });

  test('Top Level element has correct default class assigned', () => {
    const { unmount } = render(() => (
      <HidingHeader>
        <div class="inner">
          <p>Header</p>
        </div>
      </HidingHeader>
    ));

    const containerElm = screen.getByRole('banner');
    expect(containerElm).toHaveClass('hidingHeader');
    unmount();
  });

  test('Top Level element has correct default style assigned', () => {
    const { unmount } = render(() => (
      <HidingHeader>
        <div class="inner">
          <p>Header</p>
        </div>
      </HidingHeader>
    ));

    const containerElm = screen.getByRole('banner');

    // Bug for `toHaveStyle()` on CSS Custom Property @ https://github.com/testing-library/jest-dom/issues/280
    // expect(containerElm).toHaveStyle(`--hidingHeader-height: 0px;`);

    // const headerRoots = document.getElementsByClassName('hidingHeader');
    // const style = window.getComputedStyle(headerRoots[0]);
    // const hidingHeaderHeight = style.getPropertyValue('--hidingHeader-height');
    // expect(hidingHeaderHeight).toBe('0px');

    // workaround @ https://github.com/testing-library/jest-dom/issues/280#issuecomment-1908657917
    // @ts-ignore
    expect(containerElm.style._values).toMatchObject({
      '--hidingHeader-height': '0px',
    });
    unmount();
  });

  test('Top Level element has correct additional classes assigned', () => {
    const { unmount } = render(() => (
      <HidingHeader class="bg-black">
        <div class="inner">
          <p>Header</p>
        </div>
      </HidingHeader>
    ));

    const containerElm = screen.getByRole('banner');
    expect(containerElm).toHaveClass('hidingHeader', 'bg-black');
    unmount();
  });

  test('inner element has correct default class assigned', () => {
    const { unmount } = render(() => (
      <HidingHeader>
        <div class="inner">
          <p>Header</p>
        </div>
      </HidingHeader>
    ));

    const containerElm = screen.getByRole('banner');
    const innerElm = containerElm.querySelector('div');
    expect(innerElm).toHaveClass('hidingHeader-in');
    unmount();
  });

  test('inner element has correct additional classes assigned', () => {
    const { unmount } = render(() => (
      <HidingHeader innerClass="bg-black">
        <div class="inner">
          <p>Header</p>
        </div>
      </HidingHeader>
    ));

    const containerElm = screen.getByRole('banner');
    const innerElm = containerElm.querySelector('div');
    expect(innerElm).toHaveClass('hidingHeader-in', 'bg-black');
    unmount();
  });

  test('should have a element', () => {
    const { unmount } = render(() => (
      <HidingHeader>
        <div class="inner">
          <p>Header</p>
        </div>
      </HidingHeader>
    ));

    const headerElm = screen.getByText('Header'); // Use exact text match instead of regex
    expect(headerElm).toBeInTheDocument();
    unmount();
  });
});
