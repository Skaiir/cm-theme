> **Warning**
> This library is work in progress. Expect changes.

# CodeMirror Themes

[CodeMirror](https://codemirror.net/) themes for embedding within [bpmn.io](https://bpmn.io/).

## Light theme

![image](https://user-images.githubusercontent.com/17801113/228143586-68e4a262-1159-4bec-877f-c2c2751a6ce7.png)

## Dark theme

![image](https://user-images.githubusercontent.com/17801113/228143676-d2ecb004-4c2d-4ada-b9ed-b68f4b0c5b63.png)


## Installation

```sh
npm i @bpmn-io/cm-theme
```


## Usage

```js
import { darkTheme, lightTheme } from '@bpmn-io/cm-theme';
import { EditorView } from '@codemirror/view';


// ...

const extensions = [
    lightTheme
];

// ...

new EditorView({
    state: EditorState.create({
      doc: value,
      extensions: extensions
    }),
    parent: container
});
```


## License

MIT
