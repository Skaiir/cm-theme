import { useState, useRef, useEffect } from 'preact/hooks';

import { LanguageSupport } from '@codemirror/language';
import { lightTheme, darkTheme } from '../../src/index';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { json } from '@codemirror/lang-json';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { feel } from 'lang-feel';

const _langMap = {
  javascript: javascript(),
  css: css(),
  feel: feel(),
  json: json()
}

export default function SimpleCodeMirrorInstance({
  language,
  darkMode,
  value: initialValue
}) {

  const [value, setValue] = useState(initialValue);
  const container = useRef(null);

  useEffect(() => {
    
    if (!language || !value || value === undefined) 
      return;

    const extensions = [
      (darkMode ? darkTheme : lightTheme),
      new LanguageSupport(_langMap[language], [])
    ]

    if (container.current) {
      const view = new EditorView({
        state: EditorState.create({
          doc: value,
          extensions: extensions
        }),
        parent: container.current
      });

      return () => view.destroy();
    }

  }, [ language, darkMode, value ]);
  

  return <div className={"cm-editor"} ref={container} />
}