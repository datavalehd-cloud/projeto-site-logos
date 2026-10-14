// Gerador utilitário: cria as páginas restantes reutilizando header/footer de equipamentos.html
import { readFileSync, writeFileSync } from "node:fs";

const tpl = readFileSync("web/equipamentos.html", "utf8");

function makePage(file, title, description, currentNav, main) {
  let out = tpl
    .replace(/<title>[\s\S]*?<\/title>/, "<title>" + title + "</title>")
    .replace(/<meta name="description" content="[\s\S]*?">/, '<meta name="description" content="' + description + '">')
    .replace(/ aria-current="page"/g, "")
    .replace(/<main>[\s\S]*<\/main>/, () => "<main>\n" + main + "\n</main>");
  out = out.replace('href="' + currentNav + '"', 'href="' + currentNav + '" aria-current="page"');
  writeFileSync("web/" + file, out);
  console.log("gerada:", file);
}

const WHATS_SVG_SM = '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

function pageHead(crumb, h1, lead) {
  return `  <section class="page-head">
    <div class="container">
      <nav class="crumbs" aria-label="Trilha de navegação"><a href="index.html">Início</a> › ${crumb}</nav>
      <h1>${h1}</h1>
      <p class="lead">${lead}</p>
    </div>
  </section>`;
}

function ctaBand(h2, p, btns) {
  return `  <section class="cta-band">
    <div class="container">
      <h2>${h2}</h2>
      <p>${p}</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
${btns}
      </div>
    </div>
  </section>`;
}

/* ============ ASSISTÊNCIA TÉCNICA ============ */
const assistenciaMain = `
${pageHead("Assistência técnica", 'Assistência técnica em <span class="hl">extrusoras de solda</span>', "Conserto de extrusoras de solda, soldadoras de cunha quente e aquecedores de ar quente em Salvador/BA — Leister, Munsch e outras marcas. Atendimento em campo, retirada local ou envio por transportadora para todo o Brasil.")}

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Como funciona</span>
        <h2>Do diagnóstico à máquina <span class="hl">soldando de novo</span></h2>
      </div>
      <div class="steps steps-5">
        <div class="step">
          <h3>Envio ou retirada</h3>
          <p>Agendamos retirada em Salvador e região, atendimento em campo ou você envia a máquina por transportadora com nossas instruções de embalagem.</p>
        </div>
        <div class="step">
          <h3>Diagnóstico</h3>
          <p>Testamos resistência, motor, rosca, sensor de temperatura, bico e parte elétrica para identificar todas as falhas — não só a visível.</p>
        </div>
        <div class="step">
          <h3>Orçamento aprovado</h3>
          <p>Você recebe o orçamento com peças e prazo antes de qualquer serviço. Sem aprovação, nada é executado e sem compromisso.</p>
        </div>
        <div class="step">
          <h3>Conserto</h3>
          <p>Reparo com peças de reposição em estoque, reduzindo o tempo de máquina parada. Peças fora de estoque são informadas no orçamento.</p>
        </div>
        <div class="step">
          <h3>Retorno com garantia</h3>
          <p>Máquina retestada em solda real antes da devolução, com <b>90 dias de garantia</b> no serviço executado.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Problemas comuns</span>
        <h2>Sua máquina está com <span class="hl">algum destes defeitos?</span></h2>
        <p>Estes são os reparos que mais executamos em extrusoras de solda e equipamentos de solda de PEAD.</p>
      </div>
      <div class="defect-grid">
        <div class="defect"><b>Resistência queimada</b><span>A máquina não aquece, aquece pouco ou desarma o disjuntor ao ligar. Trocamos a resistência e testamos o circuito.</span></div>
        <div class="defect"><b>Falha no motor</b><span>Motor não gira, faz ruído estranho ou perde força durante a extrusão. Reparo ou substituição com reteste de carga.</span></div>
        <div class="defect"><b>Rosca (auger) desgastada</b><span>Extrusão fraca, cordão irregular ou material voltando. Avaliamos desgaste da rosca e do cilindro.</span></div>
        <div class="defect"><b>Sensor de temperatura</b><span>Temperatura instável, material queimado ou sem fusão correta. Troca do sensor/termopar e calibração.</span></div>
        <div class="defect"><b>Bico entupido ou gasto</b><span>Cordão de solda saindo irregular, com falhas ou bolhas. Limpeza, usinagem ou troca do bico.</span></div>
        <div class="defect"><b>Vazamento de material</b><span>Plástico derretido vazando pelo corpo da máquina: vedação, parafusos e sapatas de teflon revisados.</span></div>
        <div class="defect"><b>Problema elétrico</b><span>Cabo, plugue, interruptor ou placa com defeito, máquina dando choque ou sem ligar. Revisão elétrica completa.</span></div>
        <div class="defect"><b>Ventoinha / refrigeração</b><span>Superaquecimento e desarme térmico por falha na ventoinha ou dutos obstruídos. Limpeza e troca.</span></div>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="container split rev">
      <div>
        <span class="kicker">Envio por transportadora</span>
        <h2>Como embalar <span class="hl">sua máquina</span></h2>
        <ul class="check-list" style="margin-top:16px">
          <li>Deixe a máquina esfriar e limpe resíduos de plástico do bico e da rosca</li>
          <li>Proteja o bico e o painel com plástico-bolha (atenção especial às partes de cerâmica e vidro)</li>
          <li>Enrole o cabo elétrico sem apertar e fixe com fita</li>
          <li>Use caixa rígida com bastante enchimento — a máquina não pode se mover dentro</li>
          <li>Inclua uma folha com nome, telefone e descrição do defeito</li>
        </ul>
        <p class="muted" style="margin-top:16px">Em Salvador e região, agendamos a retirada para você não se preocupar com nada.</p>
        <a class="btn btn-ghost" style="margin-top:18px" data-wa data-msg="Olá! Quero combinar o envio/retirada da minha máquina para conserto.">Combinar envio ou retirada</a>
      </div>
      <div class="split-media">
        <img src="assets/img/oficina.jpg" alt="Bancada da oficina LOGOS Manutenção com extrusoras de solda em manutenção" loading="lazy" width="1100" height="733">
      </div>
    </div>
  </section>

  <section class="section" id="orcamento" style="padding-top:0">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Formulário de conserto</span>
        <h2>Solicite seu <span class="hl">orçamento de reparo</span></h2>
        <p>Preencha e envie: o formulário abre o WhatsApp com as informações prontas. Quanto mais detalhes, mais rápido o diagnóstico.</p>
      </div>
      <div class="form-card" style="max-width:820px">
        <form data-wa-form data-wa-title="Solicitação de conserto — LOGOS MANUTENÇÃO" data-wa-extra="Vou anexar fotos/vídeos da máquina e do defeito aqui no WhatsApp.">
          <div class="form-grid">
            <div class="field">
              <label for="c-nome">Nome <span class="req">*</span></label>
              <input id="c-nome" name="nome" type="text" required data-wa-label="Nome" autocomplete="name">
            </div>
            <div class="field">
              <label for="c-fone">WhatsApp / telefone <span class="req">*</span></label>
              <input id="c-fone" name="telefone" type="tel" required data-wa-label="Telefone" autocomplete="tel" placeholder="(00) 00000-0000">
            </div>
            <div class="field">
              <label for="c-marca">Marca</label>
              <input id="c-marca" name="marca" type="text" data-wa-label="Marca" placeholder="Ex.: Leister, Munsch…">
            </div>
            <div class="field">
              <label for="c-modelo">Modelo</label>
              <input id="c-modelo" name="modelo" type="text" data-wa-label="Modelo" placeholder="Ex.: Weldy X, Munsch…">
            </div>
            <div class="field full">
              <label for="c-defeito">Defeito principal <span class="req">*</span></label>
              <select id="c-defeito" name="defeito" required data-wa-label="Defeito">
                <option value="">Selecione…</option>
                <option>Resistência queimada — não aquece / desarma</option>
                <option>Motor — não gira, ruído ou sem força</option>
                <option>Rosca/auger — extrusão fraca ou irregular</option>
                <option>Sensor de temperatura — temperatura instável</option>
                <option>Bico — entupido, gasto ou cordão irregular</option>
                <option>Vazamento de material derretido</option>
                <option>Problema elétrico — não liga / choque</option>
                <option>Outro defeito</option>
              </select>
            </div>
            <div class="field full">
              <label for="c-desc">Descrição do problema e urgência</label>
              <textarea id="c-desc" name="descricao" data-wa-label="Descrição" placeholder="Quando começou? O que acontece ao ligar? A obra está parada? Precisa de atendimento em campo?"></textarea>
            </div>
          </div>
          <div style="margin-top:22px;display:flex;gap:12px;flex-wrap:wrap;align-items:center">
            <button class="btn btn-wa btn-lg" type="submit">${WHATS_SVG_SM} Enviar pelo WhatsApp</button>
            <span class="muted" style="font-size:.85rem">ou ligue/chame direto: (71) 99660-4588</span>
          </div>
          <p class="form-note"><b>Dica:</b> fotos e vídeos da máquina, da plaqueta de identificação e do defeito aceleram muito o orçamento — anexe na conversa do WhatsApp que vai abrir.</p>
        </form>
      </div>
    </div>
  </section>

${ctaBand("Conserto com <span class='hl'>garantia de 90 dias</span>", "Orçamento sem compromisso e aprovação antes de qualquer serviço. Sua máquina volta testada em solda real.", `        <a class="btn btn-wa btn-lg" data-wa data-msg="Olá! Quero um orçamento de conserto para minha extrusora de solda.">${WHATS_SVG_SM} Pedir orçamento agora</a>
        <a class="btn btn-ghost btn-lg" href="aluguel.html">Preciso de máquina urgente? Alugue</a>`)}
`;

/* ============ PEÇAS E CONSUMÍVEIS ============ */
function pecaCard(nome, desc, msg) {
  return `        <div class="card"><div class="card-body">
          <h3>${nome}</h3>
          <p>${desc}</p>
          <a class="btn btn-ghost btn-sm" data-wa data-msg="${msg}">Consultar disponibilidade</a>
        </div></div>`;
}
const pecasMain = `
${pageHead("Peças e consumíveis", 'Peças e consumíveis <span class="hl">em estoque</span>', "Resistências, parafusos, sapatas de teflon, bicos, cordões de solda e arames para extrusoras e soldadoras de PEAD/PP. Envio para todo o Brasil — e entrega junto com atendimento em campo em Salvador e região.")}

  <section class="section">
    <div class="container split">
      <div>
        <span class="kicker">Pronta entrega</span>
        <h2>A peça certa, <span class="hl">sem espera</span></h2>
        <p class="muted" style="margin:14px 0 20px">Máquina parada por falta de peça simples é o cenário mais comum na obra. Mantemos os itens de maior giro em estoque para despacho imediato.</p>
        <ul class="check-list">
          <li>Peças para Leister, Munsch e outras marcas</li>
          <li>Despacho no mesmo dia para itens em estoque</li>
          <li>Orientação gratuita para identificar a peça correta</li>
        </ul>
      </div>
      <div class="split-media">
        <img src="assets/img/pecas.jpg" alt="Resistências, bicos, sapatas de teflon e cordões de solda para extrusoras" loading="lazy" width="800" height="600">
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Catálogo de peças</span>
        <h2>O que temos <span class="hl">disponível</span></h2>
        <p>Informe marca e modelo da sua máquina no WhatsApp para confirmar a peça compatível.</p>
      </div>
      <div class="grid grid-4">
${pecaCard("Resistências", "Resistências de aquecimento para extrusoras, cunha quente e sopradores. Item nº 1 de reposição.", "Olá! Preciso de uma RESISTÊNCIA para meu equipamento de solda.")}
${pecaCard("Bicos", "Bicos de extrusão e de ar quente em diversos formatos, para cordão de diferentes larguras.", "Olá! Preciso de um BICO para meu equipamento de solda.")}
${pecaCard("Sapatas de teflon", "Sapatas e guias de teflon que garantem deslizamento e acabamento uniforme da solda.", "Olá! Preciso de SAPATAS DE TEFLON para minha máquina.")}
${pecaCard("Sensores de temperatura", "Termopares e sensores para controle preciso — temperatura instável compromete a solda.", "Olá! Preciso de um SENSOR DE TEMPERATURA para minha máquina.")}
${pecaCard("Parafusos e fixação", "Parafusos, presilhas, molas e itens de fixação específicos de cada modelo.", "Olá! Preciso de PARAFUSOS/ITENS DE FIXAÇÃO para minha máquina.")}
${pecaCard("Motores e ventoinhas", "Motores de acionamento e ventoinhas de refrigeração para extrusoras e sopradores.", "Olá! Preciso de MOTOR/VENTOINHA para minha máquina.")}
${pecaCard("Cordões de solda PEAD/PP", "Cordões e arames de solda Ø 2–4 mm em PEAD e PP, compatíveis com as principais extrusoras.", "Olá! Preciso de CORDÕES/ARAMES DE SOLDA (PEAD ou PP).")}
${pecaCard("Escovas e itens elétricos", "Escovas de carvão, cabos, interruptores e componentes elétricos de reposição.", "Olá! Preciso de ESCOVAS/ITENS ELÉTRICOS para minha máquina.")}
      </div>
      <p class="small-note">Fotos ilustrativas. A compatibilidade exata depende da marca e do modelo — confirme conosco antes de comprar.</p>
    </div>
  </section>

${ctaBand("Não achou sua peça?", "Descreva a máquina (marca, modelo) e a peça necessária — ou envie uma foto. Respondemos rápido pelo WhatsApp.", `        <a class="btn btn-wa btn-lg" data-wa data-msg="Olá! Preciso de uma peça específica. Vou enviar a foto e os dados da máquina.">${WHATS_SVG_SM} Consultar peça no WhatsApp</a>`)}
`;

/* ============ ALUGUEL ============ */
const aluguelMain = `
${pageHead("Aluguel", 'Aluguel de <span class="hl">extrusoras e cunha quente</span>', "Obra pontual não justifica compra de equipamento. Alugue extrusoras de solda, soldadoras de cunha quente e aquecedores de ar quente revisados, com suporte durante todo o período — em Salvador/BA e região.")}

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Como funciona</span>
        <h2>Aluguel em <span class="hl">4 passos</span></h2>
      </div>
      <div class="steps" style="grid-template-columns:repeat(4,1fr)">
        <div class="step">
          <h3>Escolha o equipamento</h3>
          <p>Diga o material (PEAD/PP), a espessura da manta e o volume da obra — indicamos a máquina certa.</p>
        </div>
        <div class="step">
          <h3>Receba a cotação</h3>
          <p>Diária, semanal ou mensal, com caução e condições de entrega/retirada, tudo combinado pelo WhatsApp.</p>
        </div>
        <div class="step">
          <h3>Máquina revisada</h3>
          <p>Equipamento testado em solda antes de sair, com consumíveis orientados para o seu serviço.</p>
        </div>
        <div class="step">
          <h3>Suporte no uso</h3>
          <p>Durante a locação, tiramos dúvidas de regulagem e temperatura pelo WhatsApp. Quebrou? A assistência resolve.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Disponíveis para locação</span>
        <h2>Equipamentos <span class="hl">do estoque</span></h2>
        <p>Sujeito à disponibilidade de agenda — confirme pelo WhatsApp a data da sua obra.</p>
      </div>
      <div class="grid grid-3">
        <article class="card">
          <div class="card-img"><span class="tag green">Aluguel</span><img src="assets/img/prod-extrusora.jpg" alt="Extrusora de solda manual para aluguel" loading="lazy" width="800" height="600"></div>
          <div class="card-body">
            <h3>Extrusora de solda manual</h3>
            <p>Para solda de geomembrana PEAD/PP em aterros, tanques e impermeabilizações.</p>
            <a class="btn btn-primary btn-sm" data-wa data-msg="Olá! Quero alugar uma EXTRUSORA DE SOLDA MANUAL. Podem me passar valores e disponibilidade?">Ver condições</a>
          </div>
        </article>
        <article class="card">
          <div class="card-img"><span class="tag green">Aluguel</span><img src="assets/img/prod-cunha-quente.jpg" alt="Soldadora de cunha quente para aluguel" loading="lazy" width="800" height="600"></div>
          <div class="card-body">
            <h3>Soldadora de cunha quente</h3>
            <p>Solda contínua rápida para grandes extensões de manta PEAD.</p>
            <a class="btn btn-primary btn-sm" data-wa data-msg="Olá! Quero alugar uma SOLDADORA DE CUNHA QUENTE. Podem me passar valores e disponibilidade?">Ver condições</a>
          </div>
        </article>
        <article class="card">
          <div class="card-img"><span class="tag green">Aluguel</span><img src="assets/img/prod-ar-quente.jpg" alt="Aquecedor de ar quente para aluguel" loading="lazy" width="800" height="600"></div>
          <div class="card-body">
            <h3>Aquecedor de ar quente</h3>
            <p>Solda manual de mantas, reparos pontuais e secagem.</p>
            <a class="btn btn-primary btn-sm" data-wa data-msg="Olá! Quero alugar um AQUECEDOR DE AR QUENTE. Podem me passar valores e disponibilidade?">Ver condições</a>
          </div>
        </article>
      </div>
      <p class="small-note">Fotos ilustrativas. Modelos específicos, valores, caução e prazo mínimo variam conforme disponibilidade — tudo informado na cotação, sem surpresas.</p>
    </div>
  </section>

${ctaBand("Obra com prazo apertado?", "Reserve o equipamento para a data da sua obra. Aluguel com suporte e, se precisar, nossa assistência técnica fica de prontidão.", `        <a class="btn btn-wa btn-lg" data-wa data-msg="Olá! Preciso alugar equipamento de solda de PEAD para uma obra. Podem verificar disponibilidade?">${WHATS_SVG_SM} Reservar equipamento</a>
        <a class="btn btn-ghost btn-lg" href="equipamentos.html">Prefere comprar? Veja a vitrine</a>`)}
`;

/* ============ OBRAS E CLIENTES ============ */
const obrasMain = `
${pageHead("Obras e clientes", 'Obras e <span class="hl">clientes atendidos</span>', "Serviços de solda de PEAD, recuperação de equipamentos e atendimentos em campo em Salvador/BA e região. Abaixo, exemplos do tipo de serviço que realizamos.")}

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Portfólio</span>
        <h2>Onde nossas máquinas <span class="hl">trabalham</span></h2>
        <p>Aterros sanitários, estações de tratamento, tanques de contenção, mineração e impermeabilizações em geral.</p>
      </div>
      <div class="gallery">
        <figure><img src="assets/img/obra-aterro.jpg" alt="Instalação e solda de geomembrana PEAD em aterro sanitário" loading="lazy" width="900" height="675"><figcaption><b>Aterro sanitário</b>Instalação e solda de geomembrana PEAD com cunha quente · foto ilustrativa</figcaption></figure>
        <figure><img src="assets/img/obra-tanque.jpg" alt="Solda por extrusão de geomembrana em tanque de contenção" loading="lazy" width="900" height="675"><figcaption><b>Tanque de contenção</b>Solda por extrusão em revestimento interno · foto ilustrativa</figcaption></figure>
        <figure><img src="assets/img/oficina.jpg" alt="Recuperação de extrusoras de solda em oficina" loading="lazy" width="1100" height="733"><figcaption><b>Recuperação de máquinas</b>Extrusoras revisadas e retestadas em oficina própria · foto ilustrativa</figcaption></figure>
      </div>
      <p class="small-note">Substitua as fotos ilustrativas por fotos reais das suas obras e equipamentos consertados — isso aumenta muito a confiança de quem chega pelo Google.</p>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Depoimentos</span>
        <h2>O que dizem <span class="hl">os clientes</span></h2>
        <p class="muted" style="font-size:.85rem">Exemplos de formato — substitua por depoimentos reais (com nome, empresa e cidade).</p>
      </div>
      <div class="grid grid-3">
        <div class="quote">
          <span class="stars" aria-label="5 estrelas">★★★★★</span>
          <p>“A extrusora queimou no meio da obra do aterro. Retiraram na segunda e na quarta estava soldando de novo. Salvou nosso cronograma.”</p>
          <footer><b>Depoimento de exemplo</b>Substituir por cliente real</footer>
        </div>
        <div class="quote">
          <span class="stars" aria-label="5 estrelas">★★★★★</span>
          <p>“Aluguei uma cunha quente para um serviço pontual de impermeabilização. Máquina revisada e suporte pelo WhatsApp o tempo todo.”</p>
          <footer><b>Depoimento de exemplo</b>Substituir por cliente real</footer>
        </div>
        <div class="quote">
          <span class="stars" aria-label="5 estrelas">★★★★★</span>
          <p>“Compro resistências e cordão de solda sempre aqui. Despacho no mesmo dia e orientação correta da peça pelo modelo da máquina.”</p>
          <footer><b>Depoimento de exemplo</b>Substituir por cliente real</footer>
        </div>
      </div>
    </div>
  </section>

${ctaBand("Sua obra pode ser <span class='hl'>a próxima</span>", "Fale com a gente: venda, conserto, peças ou aluguel — atendimento rápido para quem não pode parar a obra.", `        <a class="btn btn-wa btn-lg" data-wa data-msg="Olá! Vi o site da LOGOS MANUTENÇÃO e quero um atendimento.">${WHATS_SVG_SM} Falar no WhatsApp</a>`)}
`;

/* ============ DICAS ============ */
function dica(titulo, resumo, corpo) {
  return `        <details class="card tip-card">
          <summary class="card-body" style="cursor:pointer;list-style:none">
            <span class="tip-meta">Dica técnica</span>
            <h3>${titulo}</h3>
            <p>${resumo}</p>
            <span class="go hl" style="font-family:var(--font-display);font-size:.8rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase">Ler dica ▾</span>
          </summary>
          <div class="card-body" style="border-top:1px solid var(--line)">
${corpo}
          </div>
        </details>`;
}
const dicasMain = `
${pageHead("Dicas", 'Dicas técnicas: <span class="hl">solda de PEAD</span> e extrusoras', "Conteúdo prático para quem trabalha com solda de geomembrana e manutenção de extrusoras. Dúvida que não está aqui? Pergunte pelo WhatsApp — respondemos.")}

  <section class="section">
    <div class="container">
      <div class="grid grid-2">
${dica("Como regular a temperatura na solda de PEAD", "Temperatura errada é a causa nº 1 de solda fraca ou material queimado. Veja como ajustar ar e extrusão.", `            <p class="muted">A solda de PEAD por extrusão depende de três temperaturas trabalhando juntas: o ar quente que pré-aquece o substrato, o plástico extrudido e a manta. Regras práticas:</p>
            <ul class="check-list" style="margin-top:12px">
              <li>PEAD geralmente solda bem entre 220 °C e 280 °C no material extrudido — siga a recomendação do fabricante da manta</li>
              <li>Superfície úmida, suja ou fria derruba a qualidade: limpe e seque a faixa de solda</li>
              <li>Cordão com brilho fosco e bolhas = temperatura baixa ou velocidade alta demais</li>
              <li>Fumaça, cheiro forte e cordão amarelado = temperatura alta — o PEAD degrada e a solda enfraquece</li>
            </ul>
            <p class="muted" style="margin-top:12px">Faça sempre um corpo de prova antes de iniciar a solda de produção e teste o cordão por torção/descascamento.</p>`)}
${dica("Por que a extrusora entope — e como evitar", "Resíduo carbonizado, temperatura baixa e material errado entopem o bico e a rosca. Prevenção é simples.", `            <p class="muted">Entupimento quase sempre vem de uma destas causas:</p>
            <ul class="check-list" style="margin-top:12px">
              <li>Plástico queimado acumulado no bico por desligar sem purgar — ao terminar, extrude material novo até sair limpo</li>
              <li>Cordão de solda de material diferente do equipamento (PP em máquina regulada para PEAD, ou vice-versa)</li>
              <li>Temperatura baixa demais: o material não plastifica e empaca na rosca</li>
              <li>Cordão úmido ou sujo — armazene os consumíveis em local seco e fechado</li>
            </ul>
            <p class="muted" style="margin-top:12px">Nunca use objeto metálico pontiagudo para desobstruir o bico quente: risque apenas com espátula de madeira/teflon ou aqueça e purgue. Se o entupimento persistir, a rosca pode estar desgastada — traga para avaliação.</p>`)}
${dica("Extrusão x cunha quente: qual usar?", "Cada processo tem o lugar certo na obra. Errar a escolha custa tempo e qualidade de solda.", `            <p class="muted">Resumo direto para decidir:</p>
            <ul class="check-list" style="margin-top:12px">
              <li><b>Cunha quente</b>: emendas longas e retas entre mantas — rápida, uniforme e com canal para teste de pressão (dupla solda)</li>
              <li><b>Extrusão</b>: detalhes, cantos, remendos, solda de tubulações/inserts e sobreposições onde a cunha não alcança</li>
              <li>Na prática, a obra completa usa as duas: cunha nas emendas corridas e extrusão nos arremates</li>
            </ul>
            <p class="muted" style="margin-top:12px">Para reparo de furos e rasgos em manta já instalada, a extrusora é a única opção viável.</p>`)}
${dica("Como escolher o cordão de solda certo (PEAD x PP)", "Material, diâmetro e armazenamento do consumível definem a resistência da solda.", `            <p class="muted">Pontos de atenção na compra do consumível:</p>
            <ul class="check-list" style="margin-top:12px">
              <li>O cordão deve ser do mesmo material da manta: PEAD com PEAD, PP com PP — misturar gera solda que não funde direito</li>
              <li>Diâmetro Ø 3–4 mm é o mais comum em extrusoras manuais; confirme a bitola aceita pela sua máquina</li>
              <li>Material virgem tem solda mais resistente que reprocessado — pergunte a procedência</li>
              <li>Guarde em local seco e longe do sol: cordão úmido cria bolhas na solda</li>
            </ul>
            <p class="muted" style="margin-top:12px">Temos cordões PEAD e PP em estoque — consulte pelo WhatsApp a bitola para o seu equipamento.</p>`)}
${dica("Checklist antes de enviar sua máquina para conserto", "Cinco minutos de verificação aceleram o diagnóstico e evitam retrabalho.", `            <p class="muted">Antes de mandar a extrusora para a assistência:</p>
            <ul class="check-list" style="margin-top:12px">
              <li>Anote marca, modelo e número de série (plaqueta de identificação)</li>
              <li>Descreva o defeito com detalhes: quando começou, o que acontece, o que já foi tentado</li>
              <li>Fotografe a máquina inteira, a plaqueta e o defeito (bico, cabo, painel)</li>
              <li>Envie junto os acessórios que acompanham (bicos extras, chave, maleta)</li>
              <li>Limpe o equipamento — excesso de plástico grudado dificulta a avaliação</li>
            </ul>
            <p class="muted" style="margin-top:12px">Use nosso <a href="assistencia.html#orcamento">formulário de conserto</a>: ele monta a mensagem pronta no WhatsApp.</p>`)}
${dica("Manutenção preventiva: faça a máquina durar", "Rotina simples de limpeza e inspeção evita 80% das paradas de emergência.", `            <p class="muted">Rotina recomendada para quem usa a extrusora todo dia:</p>
            <ul class="check-list" style="margin-top:12px">
              <li><b>Todo fim de uso:</b> purgar o material, limpar bico e sapatas ainda mornos (nunca frios e encrostados)</li>
              <li><b>Semanal:</b> verificar escovas de carvão do motor, aperto de parafusos e estado do cabo elétrico</li>
              <li><b>Mensal:</b> conferir temperatura com termômetro de contato — sensor descalibrado queima material e solda</li>
              <li><b>Contínuo:</b> usar apenas consumíveis secos e limpos, e nunca forçar a extrusão com material empacado</li>
            </ul>
            <p class="muted" style="margin-top:12px">Oferecemos revisão preventiva com reteste de solda — vale a pena antes de obras longas. Consulte pelo WhatsApp.</p>`)}
      </div>
    </div>
  </section>

${ctaBand("Ficou com dúvida técnica?", "Mande sua pergunta pelo WhatsApp — se for caso de conserto, já aproveitamos para avaliar sua máquina.", `        <a class="btn btn-wa btn-lg" data-wa data-msg="Olá! Tenho uma dúvida técnica sobre solda de PEAD / minha extrusora.">${WHATS_SVG_SM} Perguntar agora</a>`)}
`;

/* ============ CONTATO ============ */
const contatoMain = `
${pageHead("Contato", 'Fale com a <span class="hl">LOGOS Manutenção</span>', "Atendimento rápido pelo WhatsApp para venda, conserto, peças e aluguel de equipamentos de solda de PEAD em Salvador/BA e região.")}

  <section class="section">
    <div class="container split">
      <div>
        <span class="kicker">Canais de atendimento</span>
        <h2>Estamos <span class="hl">a uma mensagem</span> de distância</h2>
        <ul class="contact-list" style="margin-top:22px">
          <li>
            <span class="ci" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></span>
            <div><b>WhatsApp / telefone</b><span><a data-wa data-msg="Olá! Vim pelo site da LOGOS MANUTENÇÃO e quero um atendimento.">(71) 99660-4588</a> — canal mais rápido</span></div>
          </li>
          <li>
            <span class="ci" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
            <div><b>Horário de atendimento</b><span>Segunda a sexta: 8h às 18h · Sábado: 8h às 12h<br>Urgências de obra: chame no WhatsApp</span></div>
          </li>
          <li>
            <span class="ci" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
            <div><b>Localização</b><span>Salvador/BA — atendimento em campo na região metropolitana e envio por transportadora para todo o Brasil</span></div>
          </li>
        </ul>
        <div class="map-wrap">
          <iframe title="Mapa da região de atendimento — Salvador/BA" src="https://www.google.com/maps?q=Salvador,Bahia&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div>
        <div class="form-card">
          <h2 style="font-size:1.4rem;margin-bottom:6px">Envie sua <span class="hl">mensagem</span></h2>
          <p class="muted" style="font-size:.9rem;margin-bottom:20px">O formulário abre o WhatsApp com a mensagem pronta — resposta em horário comercial.</p>
          <form data-wa-form data-wa-title="Contato pelo site — LOGOS MANUTENÇÃO">
            <div class="form-grid">
              <div class="field">
                <label for="n-nome">Nome <span class="req">*</span></label>
                <input id="n-nome" name="nome" type="text" required data-wa-label="Nome" autocomplete="name">
              </div>
              <div class="field">
                <label for="n-fone">Telefone <span class="req">*</span></label>
                <input id="n-fone" name="telefone" type="tel" required data-wa-label="Telefone" autocomplete="tel" placeholder="(00) 00000-0000">
              </div>
              <div class="field full">
                <label for="n-assunto">Assunto</label>
                <select id="n-assunto" name="assunto" data-wa-label="Assunto">
                  <option>Comprar equipamento</option>
                  <option selected>Conserto / assistência técnica</option>
                  <option>Peças e consumíveis</option>
                  <option>Aluguel de equipamento</option>
                  <option>Outro assunto</option>
                </select>
              </div>
              <div class="field full">
                <label for="n-msg">Mensagem <span class="req">*</span></label>
                <textarea id="n-msg" name="mensagem" required data-wa-label="Mensagem" placeholder="Conte o que você precisa: equipamento, marca/modelo, defeito, cidade da obra…"></textarea>
              </div>
            </div>
            <button class="btn btn-wa btn-lg" type="submit" style="margin-top:20px;width:100%">${WHATS_SVG_SM} Enviar pelo WhatsApp</button>
            <p class="form-note">Seus dados são usados apenas para o atendimento — nada é armazenado no site.</p>
          </form>
        </div>
      </div>
    </div>
  </section>
`;

makePage("assistencia.html",
  "Assistência Técnica em Extrusoras de Solda — Salvador/BA | LOGOS Manutenção",
  "Conserto de extrusoras de solda em Salvador/BA: resistência queimada, motor, rosca, sensor de temperatura e bico. Garantia de 90 dias, retirada ou envio por transportadora.",
  "assistencia.html", assistenciaMain);

makePage("pecas.html",
  "Peças e Consumíveis para Extrusoras de Solda | LOGOS Manutenção",
  "Resistências, bicos, sapatas de teflon, sensores, cordões de solda e arames PEAD/PP para extrusoras Leister, Munsch e outras. Envio para todo o Brasil.",
  "pecas.html", pecasMain);

makePage("aluguel.html",
  "Aluguel de Extrusoras de Solda e Cunha Quente — Salvador/BA | LOGOS Manutenção",
  "Alugue extrusoras de solda, soldadoras de cunha quente e aquecedores de ar quente em Salvador/BA. Equipamentos revisados com suporte para obras pontuais.",
  "aluguel.html", aluguelMain);

makePage("obras.html",
  "Obras e Clientes — Solda de PEAD | LOGOS Manutenção",
  "Serviços de solda de geomembrana PEAD, recuperação de extrusoras e atendimento em campo em aterros, tanques e impermeabilizações em Salvador/BA e região.",
  "obras.html", obrasMain);

makePage("dicas.html",
  "Dicas Técnicas: Solda de PEAD e Extrusoras de Solda | LOGOS Manutenção",
  "Como regular a temperatura na solda de PEAD, por que a extrusora entope, cordão certo PEAD x PP e manutenção preventiva de extrusoras de solda.",
  "dicas.html", dicasMain);

makePage("contato.html",
  "Contato — LOGOS Manutenção Salvador/BA | Extrusoras de Solda",
  "Fale com a LOGOS Manutenção em Salvador/BA: WhatsApp (71) 99660-4588, atendimento seg-sex 8h-18h e sáb 8h-12h. Venda, conserto, peças e aluguel de extrusoras de solda.",
  "contato.html", contatoMain);

console.log("OK");
