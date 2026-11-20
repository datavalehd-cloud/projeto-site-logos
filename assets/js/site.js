/* LOGOS MANUTENÇÃO — configuração central e interações */
window.LOGOS = {
  empresa: "LOGOS MANUTENÇÃO",
  whatsapp: "5571996604588",
  whatsappLabel: "(71) 99660-4588",
  cidade: "Salvador/BA"
};

(function () {
  "use strict";
  var cfg = window.LOGOS;

  function waLink(msg) {
    var url = "https://wa.me/" + cfg.whatsapp;
    if (msg) url += "?text=" + encodeURIComponent(msg);
    return url;
  }
  window.LOGOS.waLink = waLink;

  // Links com mensagem pré-preenchida
  document.querySelectorAll("a[data-wa]").forEach(function (a) {
    var msg = a.getAttribute("data-msg");
    if (!msg) {
      var page = document.querySelector("h1");
      msg = "Olá! Vim pelo site da LOGOS MANUTENÇÃO" +
        (page ? " (página: " + page.textContent.trim() + ")" : "") + ". Pode me atender?";
    }
    a.href = waLink(msg);
    a.target = "_blank";
    a.rel = "noopener";
  });

  // Menu mobile
  var menuBtn = document.querySelector(".menu-btn");
  var nav = document.querySelector(".nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Formulários que abrem o WhatsApp com a mensagem montada
  document.querySelectorAll("form[data-wa-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var titulo = form.getAttribute("data-wa-title") || "Contato pelo site";
      var linhas = ["*[" + titulo + "]*"];
      form.querySelectorAll("[data-wa-label]").forEach(function (f) {
        var v = (f.value || "").trim();
        if (v) linhas.push("• " + f.getAttribute("data-wa-label") + ": " + v);
      });
      var extra = form.getAttribute("data-wa-extra");
      if (extra) linhas.push("", extra);
      window.open(waLink(linhas.join("\n")), "_blank", "noopener");
    });
  });

  // Ano do rodapé
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
