import type { Component, JSX } from 'solid-js';
import { createEffect, createContext, useContext, mergeProps } from 'solid-js';

import type { HidingHeaderOptions } from 'hiding-header';
import { hidingHeader } from 'hiding-header';
import { createStore } from 'solid-js/store';
import { Dynamic } from 'solid-js/web';

const Context = createContext<undefined | ReturnType<typeof hidingHeader>>(
  undefined,
);

export const useHidingHeader = () => useContext(Context);
export const useRunHidingHeader = () => useContext(Context)?.run;
export const usePauseHidingHeader = () => useContext(Context)?.pause;
export const useRevealHidingHeader = () => useContext(Context)?.reveal;
export const useHideHidingHeader = () => useContext(Context)?.hide;

export interface HidingHeaderProps {
  children?: JSX.Element;
  class?: JSX.HTMLAttributes<HTMLDivElement>['class'];
  innerClass?: JSX.HTMLAttributes<HTMLDivElement>['class'];
  component?: string | Component<JSX.HTMLAttributes<HTMLElement>>;
  role?: JSX.HTMLAttributes<HTMLDivElement>['role'];
  heightPropertyName?: HidingHeaderOptions['heightPropertyName'];
  boundsHeightPropertyName?: HidingHeaderOptions['boundsHeightPropertyName'];
  animationOffsetPropertyName?: HidingHeaderOptions['animationOffsetPropertyName'];
  snap?: HidingHeaderOptions['snap'];
  onHeightChange?: HidingHeaderOptions['onHeightChange'];
  onVisibleHeightChange?: HidingHeaderOptions['onVisibleHeightChange'];
  onHomeChange?: HidingHeaderOptions['onHomeChange'];
}

export const HidingHeader: Component<HidingHeaderProps> = rawProps => {
  let container: HTMLElement;

  const props = mergeProps(
    {
      // class: 'hidingHeader',
      // innerClass: 'hidingHeader-in',
      component: 'div',
      role: 'banner',
    },
    rawProps,
  );

  const [hidingHeaderInstance, setHidingHeaderInstance] = createStore<
    ReturnType<typeof hidingHeader>
  >({} as ReturnType<typeof hidingHeader>);

  createEffect(() => {
    const instance = hidingHeader(container, {
      heightPropertyName: props.heightPropertyName,
      boundsHeightPropertyName: props.boundsHeightPropertyName,
      animationOffsetPropertyName: props.animationOffsetPropertyName,
      snap: props.snap,
      onHeightChange: props.onHeightChange,
      onVisibleHeightChange: props.onVisibleHeightChange,
      onHomeChange: props.onHomeChange,
    });
    setHidingHeaderInstance(instance);
  });

  return (
    <Dynamic
      component={props.component}
      class={props.class ? `hidingHeader ${props.class}` : 'hidingHeader'}
      role={props.component === 'div' ? props.role : undefined}
      ref={container}
    >
      <div
        class={
          props.innerClass
            ? `hidingHeader-in ${props.innerClass}`
            : 'hidingHeader-in'
        }
      >
        <Context.Provider value={hidingHeaderInstance}>
          {props.children}
        </Context.Provider>
      </div>
    </Dynamic>
  );
};
