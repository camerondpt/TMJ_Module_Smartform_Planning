import { QuartzTransformerPlugin } from "../types"
import rehypePrettyCode, { Options as CodeOptions, Theme as CodeTheme } from "rehype-pretty-code"

// The grammar data is now part of the code itself
const clinicalGrammar = {
  "name": "clinical",
  "scopeName": "source.clinical",
  "fileTypes": ["clinic", "tmd"],
  "patterns": [{ "include": "#main" }],
  "repository": {
    "main": {
      "patterns": [
        { "match": "\\b(section|header)\\b", "name": "keyword.control.clinical" },
        { "match": "\\b(grid|button|checkbox|neg_pos|number)\\b", "name": "keyword.other.widget.clinical" },
        { "match": "\\b(text|paragraph)\\b", "name": "entity.name.tag.clinical" },
        {
          "begin": "\\[",
          "end": "\\]",
          "beginCaptures": { "0": { "name": "punctuation.section.bracket.begin.clinical" } },
          "endCaptures": { "0": { "name": "punctuation.section.bracket.end.clinical" } },
          "patterns": [{ "match": "[^\\]]+", "name": "string.unquoted.clinical" }]
        }
      ]
    }
  }
}

interface Theme extends Record<string, CodeTheme> {
  light: CodeTheme
  dark: CodeTheme
}

interface Options {
  theme?: Theme
  keepBackground?: boolean
}

const defaultOptions: Options = {
  theme: {
    light: "github-light",
    dark: "github-dark",
  },
  keepBackground: false,
}

export const SyntaxHighlighting: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts: CodeOptions = { 
    ...defaultOptions, 
    ...userOpts,
    getHighlighter: (options) => 
      import("shiki").then((shiki) => 
        shiki.getHighlighter({
          ...options,
          langs: [
            ...(options.langs ?? []),
            clinicalGrammar as any
          ]
        })
      )
  }

  return {
    name: "SyntaxHighlighting",
    htmlPlugins() {
      return [[rehypePrettyCode, opts]]
    },
  }
}
