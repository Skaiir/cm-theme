import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';

const _urlify = (color) => `%23${color.slice(1)}`;

const colors = {
  black: '#1f2b36',
  darkGrey: '#2f3d58',
  grey: '#404a5c',
  midGrey: '#576071',
  lightGrey: '#c5d1e5',
  offWhite: '#d9e0f5',
  snowWhite: '#eaf1ff',
  white: '#ffffff',
  mossGreen: '#7ab6aa',
  iceBlue: '#6cbfd8',
  waterBlue: '#065aaa',
  brightBlue: '#0a56b9',
  deepBlue: '#355472',
  red: '#9f1c15',
  orangeBrown: '#b4502f',
  yellow: '#debd71',
  lila: '#9a4890',
  purple: '#5b2c83'
};

const colorByRole = {
  lightBackground: colors.white,
  darkBackground: colors.snowWhite,
  selection: colors.snowWhite,
  tooltipBackground: colors.offWhite,
  error: colors.red,
  warning: colors.yellow,
  invalid: '#b40000'
};

export const theme = EditorView.theme(
  {
    '&': { color: colors.black, backgroundColor: colorByRole.lightBackground },
    '.cm-content': { caretColor: colors.darkGrey },
    '.cm-cursor, .cm-dropCursor': { borderLeftColor: colors.darkGrey },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
      { backgroundColor: colorByRole.selection },

    '.cm-panels': { backgroundColor: colorByRole.darkBackground, color: colors.grey },
    '.cm-panels.cm-panels-top': { borderBottom: `2px solid ${ colors.black }` },
    '.cm-panels.cm-panels-bottom': { borderTop: `2px solid ${ colors.black }` },

    '.cm-searchMatch': {
      backgroundColor: '#72a1ff59',
      outline: `1px solid ${colors.midGrey}`
    },
    '.cm-searchMatch.cm-searchMatch-selected': { backgroundColor: colors.offWhite },
    '.cm-activeLine': { backgroundColor: colorByRole.selection },
    '.cm-selectionMatch': { backgroundColor: colors.offWhite },

    '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
      outline: `1px solid ${colors.grey}`
    },

    '&.cm-focused .cm-matchingBracket': {
      backgroundColor: colors.snowWhite
    },

    '.cm-gutters': {
      backgroundColor: '#f3f7fe',
      color: '#52668d',
      border: 'none',
      padding: '0 5px'
    },

    '.cm-activeLineGutter': {
      backgroundColor: colorByRole.selection
    },

    '.cm-foldPlaceholder': {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#ddd'
    },

    '.cm-tooltip': {
      border: 'none',
      backgroundColor: colorByRole.tooltipBackground
    },
    '.cm-tooltip .cm-tooltip-arrow:before': {
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent'
    },
    '.cm-tooltip .cm-tooltip-arrow:after': {
      borderTopColor: colorByRole.tooltipBackground,
      borderBottomColor: colorByRole.tooltipBackground
    },
    '.cm-tooltip-autocomplete': {
      '& > ul > li[aria-selected]': {
        backgroundColor: colorByRole.darkBackground,
        color: colors.midGrey
      }
    },
    '& .cm-lintRange.cm-lintRange-warning::after': {
      backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='6' height='3'><path d='m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0' stroke='${_urlify(colorByRole.warning)}' fill='none' stroke-width='1.2'/></svg>")`,
    },
    '& .cm-lintRange.cm-lintRange-error::after': {
      backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='6' height='3'><path d='m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0' stroke='${_urlify(colorByRole.error)}' fill='none' stroke-width='1.2'/></svg>")`,
    },
    '& .cm-diagnostic-warning': {
      border: `1px solid ${colorByRole.warning}`,
      borderLeft: `5px solid ${colorByRole.warning}`,
      background: colorByRole.lightBackground,
    },
    '& .cm-diagnostic-error': {
      border: `1px solid ${colorByRole.error}`,
      borderLeft: `5px solid ${colorByRole.error}`,
      background: colorByRole.lightBackground
    },
    '& .cm-diagnostic': {
      padding: '3px 8px'
    }
  },
  { dark: false }
);

export const highlightStyle = syntaxHighlighting(HighlightStyle.define([
  {
    tag: [ t.macroName, t.variableName ],
    color: colors.waterBlue
  },
  {
    tag: [ t.special(t.bracket) ],
    color: colors.waterBlue,
    fontWeight: 'bold'
  },
  {
    tag: [ t.color, t.name, t.definition(t.name), t.constant(t.name), t.standard(t.name), t.propertyName, ],
    color: colors.deepBlue
  },
  {
    tag: [ t.definition(t.variableName), t.function(t.variableName), t.function(t.propertyName) ],
    color: colors.brightBlue,
  },
  { tag: [ t.labelName ], color: colors.orangeBrown },
  {
    tag: [ t.annotation ],
    color: colorByRole.invalid
  },
  {
    tag: [ t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace, t.atom, t.bool, t.special(t.variableName) ],
    color: colors.red
  },
  {
    tag: [ t.typeName, t.className, t.attributeName ],
    color: colors.lila
  },
  {
    tag: [ t.operator, t.operatorKeyword, t.tagName, t.keyword ],
    color: colors.purple
  },
  {
    tag: [ t.angleBracket, t.squareBracket, t.brace, t.separator, t.punctuation ],
    color: colors.midGrey
  },
  {
    tag: [ t.regexp ],
    color: colors.deepBlue
  },
  {
    tag: [ t.quote ],
    color: colors.darkGrey
  },
  { tag: [ t.string, t.character, t.deleted ], color: colors.orangeBrown },
  {
    tag: t.link,
    color: colors.mossGreen,
    textDecoration: 'underline',
    textUnderlinePosition: 'under'
  },
  {
    tag: [ t.url, t.escape, t.special(t.string) ],
    color: colors.red
  },
  { tag: [ t.meta ], color: colors.iceBlue },
  { tag: [ t.comment ], color: colors.midGrey, fontStyle: 'italic' },
  { tag: t.strong, fontWeight: 'bold', color: colors.deepBlue },
  { tag: t.emphasis, fontStyle: 'italic', color: colors.deepBlue },
  { tag: t.strikethrough, textDecoration: 'line-through' },
  { tag: t.heading, fontWeight: 'bold', color: colors.midGray },
  { tag: t.special(t.heading1), fontWeight: 'bold', color: colors.darkGrey },
  {
    tag: [ t.heading1, t.heading2, t.heading3, t.heading4 ],
    fontWeight: 'bold',
    color: colors.midGrey
  },
  { tag: [ t.heading5, t.heading6, t.processingInstruction, t.inserted ], color: colors.grey },
  {
    tag: [ t.contentSeparator ],
    color: colors.yellow
  },
  { tag: t.invalid, color: colors.midGrey, borderBottom: `1px dotted ${colorByRole.invalid}` }
]));

export default [
  theme,
  highlightStyle
];