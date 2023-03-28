import { useState } from 'preact/hooks';
import SimpleCodeMirrorInstance from './SimpleCodeMirrorInstance';

export default function PreviewThemes() {

  const [ darkMode, setDarkMode ] = useState(false)

  return (
    <div className="preview">
        <input 
          type="checkbox" 
          id="toggle" 
          checked={darkMode} 
          onChange={(e) => setDarkMode(e.currentTarget.checked)}/>
        <label htmlFor="toggle">Dark Mode</label>
        <h2>JS</h2>
        <SimpleCodeMirrorInstance
          language="javascript"
          darkMode={darkMode}
        value={`import { darkTheme, lightTheme } from '@bpmn-io/cm-theme';
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

for (let i = 0; i < 10; i++) {
  console.log(i);
}

if(true) {
  console.log('true');
} else {
  console.log('false');
}

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}`} />
        <h2>CSS</h2>
        <SimpleCodeMirrorInstance
          language="css"
          darkMode={darkMode}
          value={`.foo {
  color: red;
}

#bar {
  background-color: green;
}

div:hover {
  color: blue;
}`} />
        <h2>FEEL</h2>
        <SimpleCodeMirrorInstance
          language="feel"
          darkMode={darkMode}
          value={`= if myVar then 1 + 1 else "text",
for
  fruit in [ "apple", "bananas" ], vegetable in vegetables
return
  { ingredients: [ fruit, vegetable ] }`} />
        <h2>JSON</h2>
        <SimpleCodeMirrorInstance
          language="json"
          darkMode={darkMode}
          value={`{
  "foo": "bar",
  "baz": 1,
  "qux": [1, 2, 3],
  "sub": {
    "foo": "bar",
    "baz": 1,
    "qux": [1, 2, 3]
  }
}`}/>
    </div>
  );
}