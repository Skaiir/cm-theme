import commonTheme from './common';
import bpmnioLight from './palettes/bpmnio-light';
import bpmnioDark from './palettes/bpmnio-dark';

const lightTheme = [ ...commonTheme, ...bpmnioLight ];
const darkTheme = [ ...commonTheme, ...bpmnioDark ];

export { lightTheme, darkTheme };