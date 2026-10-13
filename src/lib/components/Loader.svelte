<script lang="ts">
  import { asset } from '$app/paths';
</script>

<!--
  Préchargeur : fond noir, logo ABS en blanc et « VIP Consulting » qui s'écartent
  en fondu ; puis le voile entier remonte pour dévoiler la page.
-->
<div class="loader" aria-hidden="true">
  <div class="mark">
    <img class="logo" src={asset('images/abs-medaille.webp')} alt="" width="160" height="160" />
    <span class="sub">VIP Consulting</span>
  </div>
</div>

<style>
  .loader {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: grid;
    place-items: center;
    background: var(--noir);
    pointer-events: none;
    animation: lift 0.9s cubic-bezier(0.7, 0, 0.2, 1) calc(var(--loader-total) - 0.5s) forwards;
  }
  .mark { display: grid; justify-items: center; gap: 1.4rem; }
  img {
    width: clamp(110px, 14vw, 160px);
    height: auto;
    opacity: 0;
    animation: in 0.9s var(--out) 0.1s forwards;
  }
  .sub {
    color: var(--blanc);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    margin-right: -0.5em;
    opacity: 0;
    animation: space 1.3s var(--out) 0.35s forwards;
  }
  @keyframes in { to { opacity: 1; } }
  @keyframes space {
    from { opacity: 0; letter-spacing: 0.15em; }
    to { opacity: 1; letter-spacing: 0.5em; }
  }
  @keyframes lift {
    to { transform: translateY(-100%); visibility: hidden; }
  }
</style>
