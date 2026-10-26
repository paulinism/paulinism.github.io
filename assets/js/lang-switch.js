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
    "/achievements/": "erfolge",
    "/publications/": "publikationen",
    "/repositories/": "code",
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
    ".lang-switch{display:inline-flex;align-items:center;border:1px solid rgba(128,128,128,.4);border-radius:999px;padding:2px;gap:1px;font-weight:700;font-size:.72rem;line-height:1;white-space:nowrap}" +
    ".lang-switch a{display:inline-block;padding:.28rem .45rem;border-radius:999px;color:var(--global-text-color)!important;opacity:.7;text-decoration:none!important;letter-spacing:.04em}" +
    ".lang-switch a:hover{opacity:1}" +
    ".lang-switch a.on{background:var(--global-theme-color);color:var(--global-bg-color)!important;opacity:1}" +
    "li.lang-item{display:flex;align-items:center;margin-left:.35rem}" +
    "#navbar .container{align-items:center}" +
    ".lang-switch.mobile{display:none}" +
    "@media (min-width:576px){#navbar .navbar-nav .nav-link{padding-left:.3rem!important;padding-right:.3rem!important}#search-toggle .nav-link{font-size:0!important}#search-toggle .nav-link i{font-size:1rem}}" +
    "@media (max-width:575.98px){li.lang-item{display:none}.lang-switch.mobile{display:inline-flex;order:-1;margin:0 auto 0 0}}";
  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  function makeSwitch(extra) {
    var sw = document.createElement("div");
    sw.className = "lang-switch" + (extra ? " " + extra : "");
    sw.setAttribute("role", "group");
    sw.setAttribute("aria-label", isDe ? "Sprache" : "Language");
    sw.innerHTML =
      '<a href="' +
      enPath +
      hash +
      '" hreflang="en" lang="en"' +
      (!isDe ? ' class="on" aria-current="true"' : "") +
      ">EN</a>" +
      '<a href="' +
      dePath +
      (hasDe ? hash : "") +
      '" hreflang="de" lang="de"' +
      (isDe ? ' class="on" aria-current="true"' : "") +
      ">DE</a>";
    return sw;
  }

  function build() {
    var nav = document.querySelector("#navbar .container");
    if (!nav || nav.querySelector(".lang-switch")) return;
    var list = nav.querySelector(".navbar-nav");
    if (list) {
      var li = document.createElement("li");
      li.className = "lang-item";
      li.appendChild(makeSwitch(""));
      var theme = list.querySelector("#light-toggle");
      var themeLi = theme ? theme.closest("li") : null;
      if (themeLi && themeLi.parentNode === list) list.insertBefore(li, themeLi);
      else list.appendChild(li);
    }
    nav.appendChild(makeSwitch("mobile"));

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
