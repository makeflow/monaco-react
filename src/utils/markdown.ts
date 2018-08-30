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

let renderer = new marked.Renderer();

marked.setOptions({
  renderer,
  highlight: (code: string): string => {
    return highlight.highlightAuto(code).value;
  }
});

export function markdownRender(markdown: string): string {
  return marked(markdown);
}
