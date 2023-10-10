import { render, screen, within } from '@solidjs/testing-library';
import { expect, describe, test, vi, beforeAll } from 'vitest';
import { mount } from '@vue/test-utils';
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
    const wrapper = mount(HidingHeader)
    expect(wrapper).toBeTruthy()
  });

  test('is assigned a <div> tag', () => {
    render(() => (
      <HidingHeader>Header</HidingHeader>
    ));
    // screen.getByRole('button', { name: '' });

    const containerElm = screen.getByRole('banner', { name: '' });
    console.log(containerElm.tagName);
    expect(containerElm.tagName).toBe('DIV');
  });

  test('is assigned a <header> tag', () => {
    render(() => (
      <HidingHeader component="header">Header</HidingHeader>
    ));
    // screen.getByRole('button', { name: '' });

    const containerElm = screen.getByRole('banner', { name: '' });
    expect(containerElm.tagName).toBe('HEADER');
  });

  test('Top Level element has correct default class assigned', () => {
    render(() => (
      <HidingHeader>
        <div class="inner">
          <p>Header</p>
        </div>
      </HidingHeader>
    ));

    const containerElm = screen.getByRole('banner', { name: '' });
    expect(containerElm).toHaveClass('hidingHeader');
  });

  // test('Top Level element has correct default style assigned', () => {
  //   render(() => (
  //     <HidingHeader>
  //       <div class="inner">
  //         <p>Header</p>
  //       </div>
  //     </HidingHeader>
  //   ));

  //   const containerElm = screen.getByRole('banner', { name: '' });

  //   // Bug for `toHaveStyle()` on CSS Custom Property @ https://github.com/testing-library/jest-dom/issues/280
  //   // expect(containerElm).toHaveStyle(`--hidingHeader-height: 0px;`);
  //   const headerRoots = document.getElementsByClassName('hidingHeader');
  //   const style = window.getComputedStyle(headerRoots[0]);
  //   const hidingHeaderHeight = style.getPropertyValue('--hidingHeader-height');
  //   expect(hidingHeaderHeight).toBe('0px');
  // });

  test('Top Level element has correct additional classes assigned', () => {
    render(() => (
      <HidingHeader class="bg-black">
        <div class="inner">
          <p>Header</p>
        </div>
      </HidingHeader>
    ));

    const containerElm = screen.getByRole('banner', { name: '' });
    expect(containerElm).toHaveClass('hidingHeader', 'bg-black');
  });

  test('inner element has correct default class assigned', () => {
    render(() => (
      <HidingHeader>
        <div class="inner">
          <p>Header</p>
        </div>
      </HidingHeader>
    ));

    const innerElm = screen.getByRole('banner', { name: '' }).querySelector('div');
    expect(innerElm).toHaveClass('hidingHeader-in');
  });

  test('inner element has correct additional classes assigned', () => {
    render(() => (
      <HidingHeader innerClass="bg-black">
        <div class="inner">
          <p>Header</p>
        </div>
      </HidingHeader>
    ));

    const innerElm = screen.getByRole('banner', { name: '' }).querySelector('div');
    expect(innerElm).toHaveClass('hidingHeader-in', 'bg-black');
  });

  test('should have a element', () => {
    render(() => (
      <HidingHeader>
        <div class="inner">
          <p>Header</p>
        </div>
      </HidingHeader>
    ));

    const headerElm = screen.getByText(/^Header$/i); // full string match, ignore case
    expect(headerElm).toBeInTheDocument();
  });
});
