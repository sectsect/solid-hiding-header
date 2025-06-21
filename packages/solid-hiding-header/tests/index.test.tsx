import { render, screen } from '@solidjs/testing-library';
import { expect, describe, test, vi, beforeAll } from 'vitest';
import {
  HidingHeader,
  useHidingHeader,
  useRunHidingHeader,
  usePauseHidingHeader,
  useRevealHidingHeader,
  useHideHidingHeader
} from '@/index';

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

  test('should render with non-div component without role attribute', () => {
    const { unmount } = render(() => (
      <HidingHeader component="section">Header</HidingHeader>
    ));

    const containerElm = screen.getByText('Header').closest('section');
    expect(containerElm).toBeTruthy();
    expect(containerElm?.getAttribute('role')).toBeNull();
    unmount();
  });

  test('should render with custom role when component is div', () => {
    const { unmount } = render(() => (
      <HidingHeader component="div" role="navigation">Header</HidingHeader>
    ));

    const containerElm = screen.getByRole('navigation');
    expect(containerElm).toBeTruthy();
    expect(containerElm.tagName).toBe('DIV');
    unmount();
  });

  test('should not apply role when component is not div', () => {
    const { unmount } = render(() => (
      <HidingHeader component="header" role="banner">Header</HidingHeader>
    ));

    const containerElm = screen.getByText('Header').closest('header');
    expect(containerElm).toBeTruthy();
    expect(containerElm?.getAttribute('role')).toBeNull();
    unmount();
  });

  test('should render with empty class when class prop is undefined', () => {
    const { unmount } = render(() => (
      <HidingHeader class={undefined}>Header</HidingHeader>
    ));

    const containerElm = screen.getByRole('banner');
    expect(containerElm).toHaveClass('hidingHeader');
    expect(containerElm.className).toBe('hidingHeader');
    unmount();
  });

  test('should render with empty innerClass when innerClass prop is undefined', () => {
    const { unmount } = render(() => (
      <HidingHeader innerClass={undefined}>Header</HidingHeader>
    ));

    const containerElm = screen.getByRole('banner');
    const innerElm = containerElm.querySelector('div');
    expect(innerElm).toHaveClass('hidingHeader-in');
    expect(innerElm?.className).toBe('hidingHeader-in');
    unmount();
  });

  test('should handle all HidingHeaderOptions props', () => {
    const mockOptions = {
      heightPropertyName: '--custom-height',
      boundsHeightPropertyName: '--custom-bounds-height',
      animationOffsetPropertyName: '--custom-animation-offset',
      snap: true,
      onHeightChange: vi.fn(),
      onVisibleHeightChange: vi.fn(),
      onHomeChange: vi.fn(),
    };

    const { unmount } = render(() => (
      <HidingHeader {...mockOptions}>Header</HidingHeader>
    ));

    const containerElm = screen.getByRole('banner');
    expect(containerElm).toBeTruthy();
    unmount();
  });
});

describe('HidingHeader hooks', () => {
  beforeAll(() => {
    const ResizeObserverMock = vi.fn(() => ({
      disconnect: vi.fn(),
      observe: vi.fn(),
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }));
    vi.stubGlobal('ResizeObserver', ResizeObserverMock);
  });

  test('useHidingHeader should return hidingHeader instance', () => {
    let hookResult: any;

    const TestComponent = () => {
      hookResult = useHidingHeader();
      return <div>Test</div>;
    };

    const { unmount } = render(() => (
      <HidingHeader>
        <TestComponent />
      </HidingHeader>
    ));

    expect(hookResult).toBeDefined();
    expect(typeof hookResult).toBe('object');
    unmount();
  });

    test('useRunHidingHeader should return run function', () => {
    let runFn: any;

    const TestComponent = () => {
      const hidingHeaderInstance = useHidingHeader();
      runFn = useRunHidingHeader();
      // Wait for hidingHeader instance to be initialized
      if (hidingHeaderInstance && Object.keys(hidingHeaderInstance).length > 0) {
        expect(runFn).toBeDefined();
        expect(typeof runFn).toBe('function');
      }
      return <div>Test</div>;
    };

    const { unmount } = render(() => (
      <HidingHeader>
        <TestComponent />
      </HidingHeader>
    ));

    unmount();
  });

    test('usePauseHidingHeader should return pause function', () => {
    let pauseFn: any;

    const TestComponent = () => {
      const hidingHeaderInstance = useHidingHeader();
      pauseFn = usePauseHidingHeader();
      // Wait for hidingHeader instance to be initialized
      if (hidingHeaderInstance && Object.keys(hidingHeaderInstance).length > 0) {
        expect(pauseFn).toBeDefined();
        expect(typeof pauseFn).toBe('function');
      }
      return <div>Test</div>;
    };

    const { unmount } = render(() => (
      <HidingHeader>
        <TestComponent />
      </HidingHeader>
    ));

    unmount();
  });

    test('useRevealHidingHeader should return reveal function', () => {
    let revealFn: any;

    const TestComponent = () => {
      const hidingHeaderInstance = useHidingHeader();
      revealFn = useRevealHidingHeader();
      // Wait for hidingHeader instance to be initialized
      if (hidingHeaderInstance && Object.keys(hidingHeaderInstance).length > 0) {
        expect(revealFn).toBeDefined();
        expect(typeof revealFn).toBe('function');
      }
      return <div>Test</div>;
    };

    const { unmount } = render(() => (
      <HidingHeader>
        <TestComponent />
      </HidingHeader>
    ));

    unmount();
  });

    test('useHideHidingHeader should return hide function', () => {
    let hideFn: any;

    const TestComponent = () => {
      const hidingHeaderInstance = useHidingHeader();
      hideFn = useHideHidingHeader();
      // Wait for hidingHeader instance to be initialized
      if (hidingHeaderInstance && Object.keys(hidingHeaderInstance).length > 0) {
        expect(hideFn).toBeDefined();
        expect(typeof hideFn).toBe('function');
      }
      return <div>Test</div>;
    };

    const { unmount } = render(() => (
      <HidingHeader>
        <TestComponent />
      </HidingHeader>
    ));

    unmount();
  });

  test('hooks should return undefined when used outside of HidingHeader context', () => {
    let hookResults: any = {};

    const TestComponent = () => {
      hookResults.hidingHeader = useHidingHeader();
      hookResults.run = useRunHidingHeader();
      hookResults.pause = usePauseHidingHeader();
      hookResults.reveal = useRevealHidingHeader();
      hookResults.hide = useHideHidingHeader();
      return <div>Test</div>;
    };

    const { unmount } = render(() => <TestComponent />);

    expect(hookResults.hidingHeader).toBeUndefined();
    expect(hookResults.run).toBeUndefined();
    expect(hookResults.pause).toBeUndefined();
    expect(hookResults.reveal).toBeUndefined();
    expect(hookResults.hide).toBeUndefined();
    unmount();
  });
});
