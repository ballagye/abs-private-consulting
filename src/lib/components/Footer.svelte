<script lang="ts">
  import { asset } from '$app/paths';
  import { nav, contact } from '../data/site';
  import { t } from '../i18n.svelte';
</script>

<footer>
  <div class="rule" aria-hidden="true"></div>
  <div class="inner">
    <div class="brand">
      <img class="logo" src={asset('images/abs-medaille.webp')} alt="Logo ABS" width="96" height="96" />
      <p class="wm">VIP<br />Consulting</p>
    </div>

    <div class="cols">
      <div>
        <h4>ABS VIP Consulting</h4>
        <p>{t('footTag')}</p>
      </div>
      <div>
        <h4>{t('footNav')}</h4>
        {#each nav as n}<a href={n.href}>{t(n.key)}</a>{/each}
      </div>
      <div>
        <h4>{t('footReach')}</h4>
        <a href={contact.phoneHref}>{contact.phone}</a>
        <a href="mailto:{contact.email}">{t('fEmail')}</a>
      </div>
      <div>
        <h4>{t('footFollow')}</h4>
        {#each contact.socials as s}<a href={s.href} target="_blank" rel="noopener">{s.label}</a>{/each}
      </div>
    </div>
  </div>

  <p class="legal">{t('footLegal')}</p>
</footer>

<style>
  footer {
    padding: 0 var(--gutter) 2rem;
    background: var(--noir);
    color: var(--blanc);
    border-top: 1px solid var(--jaune);
  }
  footer .rule { display: none; }
  .inner {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: clamp(2rem, 6vw, 7rem);
    padding-block: clamp(3rem, 7vw, 6rem);
    max-width: calc(var(--max) + var(--gutter) * 2);
    margin-inline: auto;
  }
  .brand { display: grid; gap: 1.2rem; justify-items: start; }
  .brand img { width: 96px; height: auto; }
  .wm { font-size: 0.7rem; letter-spacing: 0.5em; text-transform: uppercase; color: var(--or-clair); line-height: 1.6; }

  .cols { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 2rem; }
  h4 { font-size: 0.7rem; font-weight: 400; letter-spacing: 0.32em; text-transform: uppercase; color: var(--or); margin-bottom: 1rem; }
  .cols p { color: var(--gris); font-size: 0.92rem; max-width: 34ch; }
  .cols a { display: block; padding-block: 0.15em; color: var(--gris); font-size: 0.92rem; transition: color 0.3s, transform 0.5s var(--out); }
  .cols a:hover { color: var(--jaune); transform: translateX(4px); }

  .legal {
    max-width: calc(var(--max) + var(--gutter) * 2);
    margin-inline: auto;
    padding-top: 1.6rem;
    font-size: 0.74rem;
    color: var(--gris);
  }

  @media (max-width: 960px) {
    .inner { grid-template-columns: 1fr; }
    .cols { grid-template-columns: 1fr 1fr; }
  }
</style>
