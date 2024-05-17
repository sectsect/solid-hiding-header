import { Route, Router } from '@solidjs/router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@solidjs/testing-library';
import userEvent from '@testing-library/user-event';
import { expect, describe, test } from 'vitest';

import Counter from '@/components/modules/Counter/Counter';

describe('Counter component', () => {
  test('should be updated the count on click Increment button', async () => {
    // const result = render(() => <Counter />);
    render(() => <Counter />, {
      wrapper: props => (
        <Router
          // eslint-disable-next-line @typescript-eslint/no-shadow
          root={props => <>{props.children}</>}
        >
          <Route path="/" component={() => <>{props.children}</>} />
        </Router>
      ),
    });
    // screen.getByRole('button', {name: '' });

    const incrementButton = screen.getByRole('button', { name: 'Increment' });

    // make sure count starts out '0'.
    const countLabel = screen.getByText('Count:', {
      exact: false,
    });
    expect(countLabel).toHaveTextContent('0');

    await userEvent.click(incrementButton);

    // update count to '1'.
    expect(countLabel).toHaveTextContent('1');
  });
});
