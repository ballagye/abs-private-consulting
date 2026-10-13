<script lang="ts">
  import { asset } from '$app/paths';
  import { values, valuesEn, images } from '../data/site';
  import { i18n, t } from '../i18n.svelte';
  import DetailDialog from './DetailDialog.svelte';

  const vals = $derived(i18n.lang === 'en' ? valuesEn : values);
</script>

<section class="section about" id="apropos">
  <span class="kicker">{t('aboutKicker')}</span>

  <div class="top">
    <p class="manifesto">
      {t('manifestoA')}
      <em>{t('manifestoEm')}</em>
    </p>

    <div class="medal">
      <DetailDialog
        title={t('emblemTitle')}
        kicker="ABS VIP Consulting"
        paragraphs={[t('emblemP1'), t('emblemP2')]}
        image={images.medal}
        ctaLabel={t('talk')}
        ctaHref="#contact"
        triggerClass="medal-btn"
      >
        <img src={asset(images.medal.src)} alt={t('medalAlt')} width="400" height="400" />
      </DetailDialog>
    </div>
  </div>

  <ul class="values">
    {#each vals as v}
      <li>
        <h3>{v.title}</h3>
        <p>{v.text}</p>
        <i class="hair"></i>
      </li>
    {/each}
  </ul>
</section>

<style>
  .top {
    display: grid;
    grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
    gap: clamp(2rem, 6vw, 7rem);
    align-items: center;
    margin-block: clamp(2.5rem, 6vw, 5rem) clamp(4rem, 9vw, 9rem);
  }
  .manifesto {
    font-family: var(--display);
    font-size: clamp(1.8rem, 3.6vw, 3.6rem);
    line-height: 1.18;
    letter-spacing: -0.01em;
    max-width: 24ch;
  }
  .manifesto em { color: var(--or-clair); }

  .medal { justify-self: center; width: min(100%, 420px); }
  .medal :global(.medal-btn) { display: block; width: 100%; border-radius: 50%; }
  .medal img {
    width: 100%;
    height: auto;
  }
  
  .values {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(1.5rem, 4vw, 4rem);
  }
  .values li { position: relative; padding-top: 1.4rem; }
  h3 {
    font-family: var(--display);
    font-style: italic;
    font-weight: 400;
    font-size: clamp(1.8rem, 2.6vw, 2.6rem);
    color: var(--or-clair);
    margin: 0.4rem 0 0.8rem;
  }
  .values p { color: var(--gris); }
  .hair {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: var(--ligne);
  }

  @media (max-width: 860px) {
    .top, .values { grid-template-columns: 1fr; }
    .medal { width: min(70%, 300px); justify-self: start; }
  }
</style>
