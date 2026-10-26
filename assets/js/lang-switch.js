// DE | EN language switch for paulinism.github.io
// English pages live at /..., their German versions at /de/...
(function () {
  var DE_PAGES = [
    "/",
    "/projects/",
    "/achievements/",
    "/publications/",
    "/repositories/",
    "/cv/",
    "/contact/",
    "/projects/ecovolt-telemetry/",
    "/projects/ecovolt-inventory/",
    "/projects/mit-nano-fabrication/",
    "/projects/orza-digital-twin/",
    "/projects/scara-robot/",
    "/projects/endress-viscosity/",
    "/projects/agv-platform/",
  ];
  var NAV_DE = {
    "/": "über mich",
    "/projects/": "projekte",
    "/achievements/": "auszeichnungen",
    "/publications/": "publikationen",
    "/repositories/": "repositorien",
    "/cv/": "lebenslauf",
    "/contact/": "kontakt",
  };

  var path = location.pathname.replace(/index\.html$/, "");
  if (path.slice(-1) !== "/") path += "/";
  var isDe = /^\/de\//.test(path);
  var enPath = isDe ? path.replace(/^\/de/, "") || "/" : path;
  var hasDe = DE_PAGES.indexOf(enPath) !== -1;
  var dePath = hasDe ? "/de" + enPath : "/de/";
  var hash = location.hash || "";

  if (isDe) document.documentElement.setAttribute("lang", "de");

  var css =
    ".lang-switch{display:inline-flex;align-items:center;border:1px solid rgba(128,128,128,.4);border-radius:999px;padding:2px;margin-left:.6rem;gap:2px;font-weight:700;font-size:.8rem;line-height:1;white-space:nowrap}" +
    ".lang-switch a{display:inline-block;padding:.32rem .55rem;border-radius:999px;color:var(--global-text-color)!important;opacity:.7;text-decoration:none!important;letter-spacing:.04em}" +
    ".lang-switch a:hover{opacity:1}" +
    ".lang-switch a.on{background:var(--global-theme-color);color:var(--global-bg-color)!important;opacity:1}" +
    "#navbar .container{align-items:center}" +
    "@media (max-width:575.98px){.lang-switch{order:-1;margin:0 auto 0 0}}";
  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  function build() {
    var nav = document.querySelector("#navbar .container");
    if (!nav || nav.querySelector(".lang-switch")) return;
    var sw = document.createElement("div");
    sw.className = "lang-switch";
    sw.setAttribute("role", "group");
    sw.setAttribute("aria-label", isDe ? "Sprache" : "Language");
    sw.innerHTML =
      '<a href="' +
      dePath +
      (hasDe ? hash : "") +
      '" hreflang="de" lang="de"' +
      (isDe ? ' class="on" aria-current="true"' : "") +
      ">DE</a>" +
      '<a href="' +
      enPath +
      hash +
      '" hreflang="en" lang="en"' +
      (!isDe ? ' class="on" aria-current="true"' : "") +
      ">EN</a>";
    nav.appendChild(sw);

    if (!isDe) return;
    // German pages: point the menu to /de/ and translate its labels
    var links = document.querySelectorAll("#navbar .navbar-nav .nav-item > a.nav-link");
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var href = a.getAttribute("href");
      if (!NAV_DE[href]) continue;
      a.setAttribute("href", "/de" + href);
      var sr = a.querySelector(".sr-only");
      a.textContent = NAV_DE[href] + " ";
      var li = a.parentNode;
      var active = href === "/" ? enPath === "/" : enPath.indexOf(href) === 0;
      li.classList.toggle("active", active);
      if (active) {
        var s = sr || document.createElement("span");
        s.className = "sr-only";
        s.textContent = "(aktuell)";
        a.appendChild(s);
      }
    }
    // Footer line
    var foot = document.querySelectorAll("footer span");
    for (var j = 0; j < foot.length; j++) {
      if (/^\s*Hosted by/.test(foot[j].textContent)) {
        foot[j].innerHTML = foot[j].innerHTML.replace("Hosted by", "Gehostet auf").replace("Powered by", "Erstellt mit").replace(" with ", " und ");
      }
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
