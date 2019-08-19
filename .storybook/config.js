import { configure,addDecorator } from '@storybook/react';
import requireContext from 'require-context.macro';
import { withInfo } from '@storybook/addon-info';
import 'storybook-chromatic';

addDecorator(withInfo); 


import '../src/index.css';

const req = requireContext('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
