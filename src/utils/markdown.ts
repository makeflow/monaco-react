import highlight from "highlight.js";
import marked from "marked";

import "../styles/atom-one-light.css";

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
    "Markdown",
    "Go"
  ]
});

let renderer = new marked.Renderer();

export function markdownRender(markdown: string): string {
  return marked(markdown, {
    renderer,
    highlight: (code: string) => {
      return highlight.highlightAuto(code).value;
    }
  });
}
