---
title: Info
layout: default
nav_order: 2
---

# Info

En esta página encontrarán la información principal de la cursada y accesos rápidos a documentos y encuestas.

<div class="fm-grid">

  <div class="fm-card">
    <h3>Régimen de cursada</h3>
    <a class="fm-btn primary" href="{{ '/assets/docs/regimen_de_cursada.pdf' | relative_url }}" target="_blank" rel="noopener">
      Descargar
    </a>
  </div>

  <div class="fm-card">
    <h3>Horarios</h3>
    <p>Martes y jueves de <strong>18 a 21hs</strong>.</p>
  </div>

  <div class="fm-card">
    <h3>Encuestas</h3>
    <div class="fm-row">
      <select id="fm-encuesta" class="fm-select">
        <option value="" selected disabled>Seleccionar…</option>
        <option value="{{ '/assets/docs/encuesta_1.html' | relative_url }}">1C 2025</option>
        <option value="{{ '/assets/docs/encuesta_2.html' | relative_url }}">2C 2025</option>
        <option value="{{ '/assets/docs/encuesta_3.html' | relative_url }}">Verano 2026</option>
      </select>

      <a id="fm-ver-encuesta" class="fm-btn primary" href="#" target="_blank" rel="noopener">Ver</a>
    </div>

    <script>
      (function () {
        const select = document.getElementById("fm-encuesta");
        const btn = document.getElementById("fm-ver-encuesta");

        function sync() {
          const url = select.value;
          btn.href = url ? url : "#";
          btn.style.pointerEvents = url ? "auto" : "none";
          btn.style.opacity = url ? "1" : "0.6";
        }

        select.addEventListener("change", sync);
        sync();
      })();
    </script>
  </div>

</div>
