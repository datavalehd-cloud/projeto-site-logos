// Substitui o logo antigo (span com svg de chave) pelo novo logo.svg em todas as páginas
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const files = readdirSync("web").filter((f) => f.endsWith(".html"));
const spanRe = /<span class="logo-mark" aria-hidden="true">\s*<svg[\s\S]*?<\/svg>\s*<\/span>/g;
const img = '<img class="logo-mark" src="assets/img/logo.svg" alt="" width="40" height="40">';

for (const f of files) {
  let html = readFileSync("web/" + f, "utf8");
  const n = (html.match(spanRe) || []).length;
  html = html.replace(spanRe, img);
  if (!html.includes('rel="icon"')) {
    html = html.replace(
      '<link rel="stylesheet" href="assets/css/style.css">',
      '<link rel="stylesheet" href="assets/css/style.css">\n<link rel="icon" type="image/svg+xml" href="assets/img/logo.svg">'
    );
  }
  writeFileSync("web/" + f, html);
  console.log(f, "-> logos substituídos:", n);
}
