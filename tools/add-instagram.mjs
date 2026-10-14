// Adiciona Instagram (@logos.manutencao) ao lado do WhatsApp em todas as páginas
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const IG_URL = "https://www.instagram.com/logos.manutencao/";
const IG_GLYPH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>';

const igFloat = `  <a class="ig-float" href="${IG_URL}" target="_blank" rel="noopener" aria-label="Instagram @logos.manutencao">
    ${IG_GLYPH.replace('stroke="currentColor"', 'stroke="#fff"')}
  </a>
`;
const igHeaderBtn = `    <a class="btn btn-ghost btn-sm icon-only" href="${IG_URL}" target="_blank" rel="noopener" aria-label="Instagram @logos.manutencao">
      ${IG_GLYPH}
    </a>
`;
const igFooterLi = `          <li><a href="${IG_URL}" target="_blank" rel="noopener">Instagram: @logos.manutencao</a></li>\n`;

const files = readdirSync("web").filter((f) => f.endsWith(".html"));
for (const f of files) {
  let html = readFileSync("web/" + f, "utf8");
  html = html.replace(/<a class="wa-float"[\s\S]*?<\/a>/, (m) => '<div class="float-bar">\n' + igFloat + m + "\n</div>");
  html = html.replace('    <a class="btn btn-wa btn-sm" data-wa data-msg="Olá! Vim pelo site da LOGOS MANUTENÇÃO e quero falar com um atendente.">', igHeaderBtn + '    <a class="btn btn-wa btn-sm" data-wa data-msg="Olá! Vim pelo site da LOGOS MANUTENÇÃO e quero falar com um atendente.">');
  html = html.replace('          <li><a data-wa data-msg="Olá! Vim pelo site da LOGOS MANUTENÇÃO.">WhatsApp: (71) 99660-4588</a></li>\n', '          <li><a data-wa data-msg="Olá! Vim pelo site da LOGOS MANUTENÇÃO.">WhatsApp: (71) 99660-4588</a></li>\n' + igFooterLi);
  writeFileSync("web/" + f, html);
  console.log("atualizada:", f);
}
