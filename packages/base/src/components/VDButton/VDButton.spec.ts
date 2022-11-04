import { mount } from '@vue/test-utils';
import { expect, it } from 'vitest';
import VDButton from './VDButton.vue';

it('displays message', () => {
  const wrapper = mount(VDButton, {
    props: {
      msg: 'Hello world',
      label: 'test',
    },
  });

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world');
});
