import * as highlight from "highlight.js";
import marked from "marked";

highlight.configure({
  tabReplace: "  ",
  classPrefix: "hljs-",
  languages: [
    "CSS",
    "HTML, XML",
    "JavaScript",
    "PHP",
    "Python",
    "Stylus",
    "TypeScript",
    "Markdown"
  ]
});

export function mark(markdown: string): string {
  return marked(markdown, {
    highlight: (code: string): string => {
      return highlight.highlightAuto(code).value;
    }
  });
}
