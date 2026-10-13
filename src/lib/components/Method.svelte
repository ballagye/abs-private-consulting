<script lang="ts">
  import { reveal } from '../actions/reveal';
  import { steps, stepsEn } from '../data/site';
  import { i18n, t } from '../i18n.svelte';

  const list = $derived(i18n.lang === 'en' ? stepsEn : steps);
</script>

<section class="section" id="methode">
  <div class="wrap">
    <div class="aside">
      <span class="kicker">{t('methKicker')}</span>
      <h2 class="h2" data-mask use:reveal><span>{t('methTitle1')} <em>{t('methTitle2')}</em></span></h2>
    </div>

    <ol class="steps">
      {#each list as s}
        <li>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      {/each}
    </ol>
  </div>
</section>

<style>
  .wrap {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
    gap: clamp(3rem, 8vw, 9rem);
    align-items: start;
  }
  .aside { position: sticky; top: calc(var(--header-h) + 3rem); display: grid; gap: 1.4rem; }

  .steps { display: grid; gap: clamp(2.5rem, 5vw, 4.5rem); counter-reset: s; }
  .steps li {
    display: grid;
    gap: 0.6rem;
    padding-top: 1.6rem;
    border-top: 1px solid var(--ligne);
  }
  h3 {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(1.5rem, 2.4vw, 2.3rem);
    line-height: 1.15;
    margin-bottom: 0.6rem;
  }
  p { color: var(--gris); }

  @media (max-width: 860px) {
    .wrap { grid-template-columns: 1fr; }
    .aside { position: static; }
  }
</style>
