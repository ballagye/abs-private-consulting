<script lang="ts">
  import { onMount } from 'svelte';
  import { asset } from '$app/paths';
  import EmblaCarousel, { type EmblaCarouselType } from 'embla-carousel';
  import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
  import { reveal } from '../actions/reveal';
  import { services, servicesEn, serviceVisuals } from '../data/site';
  import { i18n, t } from '../i18n.svelte';
  import DetailDialog from './DetailDialog.svelte';

  const list = $derived(i18n.lang === 'en' ? servicesEn : services);
  const heading = $derived(list[active]);

  // Service survolé (desktop) : pilote l'image affichée dans la moitié droite.
  let active = $state(0);

  // ---------- Carrousel mobile (Embla) ----------
  let viewport: HTMLDivElement;
  let embla: EmblaCarouselType | undefined;
  let canPrev = $state(false);
  let canNext = $state(true);

  function sync(api: EmblaCarouselType) {
    canPrev = api.canScrollPrev();
    canNext = api.canScrollNext();
  }

  onMount(() => {
    embla = EmblaCarousel(viewport, { align: 'start', dragFree: false }, [WheelGesturesPlugin()]);
    embla.on('init', sync).on('reInit', sync).on('select', sync);
    embla.on('select', (api) => (active = api.selectedScrollSnap()));
    sync(embla);
    return () => embla?.destroy();
  });
</script>

<section class="section" id="services">
  <header class="head">
    <span class="kicker" data-reveal use:reveal>{t('svcKicker')}</span>
    <h2 class="h2" data-mask use:reveal>
      <span>{t('svcTitle1')} <em>{t('svcTitle2')}</em></span>
    </h2>
  </header>

  <!-- Desktop : moitié liste / moitié image -->
  <div class="split">
    <ol class="list">
      {#each list as s, i}
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <li
          class:active={active === i}
          onmouseenter={() => (active = i)}
          onfocusin={() => (active = i)}
        >
          <DetailDialog
            title={s.title}
            kicker={s.en}
            paragraphs={s.long}
            image={s.image ?? null}
            triggerClass="row"
          >
            <span class="name">{s.title}</span>
            <span class="short">{s.short}</span>
            <span class="arrow" aria-hidden="true">→</span>
          </DetailDialog>
        </li>
      {/each}
    </ol>

    <div class="visual" aria-hidden="true">
      <div class="frame">
        {#each serviceVisuals as v, i}
          <img
            class:on={active === i}
            src={asset(v.image.src)}
            alt=""
            style="object-position: {v.pos}; object-fit: {v.image.fit ?? 'cover'}"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        {/each}
      </div>
      <p class="caption" aria-live="off">
        <span class="kicker">{heading.en}</span>
        <span class="cap-title">{heading.title}</span>
      </p>
    </div>
  </div>

  <!-- Mobile : un seul carrousel d’images (Embla) ; le texte change avec l’image -->
  <div class="carousel">
    <div class="embla" bind:this={viewport}>
      <div class="track">
        {#each serviceVisuals as v}
          <div class="slide">
            <img src={asset(v.image.src)} alt="" style="object-position: {v.pos}; object-fit: {v.image.fit ?? 'cover'}" loading="lazy" />
          </div>
        {/each}
      </div>
      <div class="bar">
        <button class="nav" aria-label={t('prev')} disabled={!canPrev} onclick={() => embla?.scrollPrev()}>
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>
        </button>
        <button class="nav" aria-label={t('next')} disabled={!canNext} onclick={() => embla?.scrollNext()}>
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>
        </button>
      </div>
    </div>

    <DetailDialog
      title={heading.title}
      kicker={heading.en}
      paragraphs={heading.long}
      image={heading.image ?? null}
      triggerClass="info"
    >
      <span class="c-name">{heading.title}</span>
      <span class="c-short">{heading.short}</span>
      <span class="c-more">{t('more')} →</span>
    </DetailDialog>
  </div>
</section>

<style>
  .head { display: grid; gap: 1.4rem; margin-bottom: clamp(3rem, 7vw, 6rem); }

  .split {
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    gap: clamp(2rem, 4vw, 5rem);
    align-items: start;
  }
  .carousel { display: none; }

  /* ---------- Liste (desktop) ---------- */
  .list { border-top: 1px solid var(--ligne); }
  .list li { border-bottom: 1px solid var(--ligne); }

  .list :global(.row) {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 2rem;
    grid-template-areas: 'name arrow' 'short arrow';
    align-items: center;
    gap: 0 1rem;
    width: 100%;
    padding-block: clamp(1.1rem, 2vw, 1.7rem);
    transition: padding 0.5s var(--out);
  }
  .name {
    grid-area: name;
    font-family: var(--display);
    font-size: clamp(1.7rem, 3vw, 2.9rem);
    line-height: 1.1;
    color: var(--gris);
    transition: color 0.4s var(--ease);
  }
  .short {
    grid-area: short;
    font-size: 0.92rem;
    color: var(--gris);
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.5s var(--out), opacity 0.5s var(--ease);
  }
  .arrow {
    grid-area: arrow;
    justify-self: end;
    align-self: center;
    color: var(--jaune);
    opacity: 0;
    transform: translateX(-8px);
    transition: opacity 0.4s, transform 0.5s var(--out);
  }

  .list li.active :global(.row) { padding-left: 1rem; }
  .list li.active .name { color: var(--blanc); }
  .list li.active .short { max-height: 4rem; opacity: 1; }
  .list li.active .arrow { opacity: 1; transform: none; }

  /* ---------- Image (desktop) ---------- */
  .visual {
    position: sticky;
    top: calc(var(--header-h) + 1.5rem);
    display: grid;
    gap: 1rem;
  }
  .frame {
    position: relative;
    aspect-ratio: 5 / 4;
    max-height: 80vh;
    overflow: hidden;
    border: 1px solid var(--ligne);
    background: var(--noir);
  }
  .frame img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.7s var(--ease);
  }
  .frame img.on { opacity: 1; }

  .caption { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; }
  .cap-title { font-family: var(--display); font-style: italic; color: var(--jaune); }

  /* ---------- Carrousel (mobile) : un seul composant, les images défilent ---------- */
  .embla { position: relative; overflow: hidden; }
  .track { display: flex; touch-action: pan-y pinch-zoom; }
  .slide { flex: 0 0 100%; min-width: 0; aspect-ratio: 4 / 3; background: var(--noir); }
  .slide img { width: 100%; height: 100%; }

  /* Boutons ronds façon chevalblanc.com, posés en bas à droite de l image */
  .bar { position: absolute; right: 0.8rem; bottom: 0.8rem; display: flex; gap: 0.5rem; z-index: 2; }
  .nav {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 1px solid var(--blanc);
    background: rgba(17, 19, 20, 0.35);
    color: var(--blanc);
    transition: background 0.3s var(--ease), color 0.3s var(--ease), opacity 0.3s;
  }
  .nav:hover:not(:disabled) { background: var(--blanc); color: var(--noir); }
  .nav:disabled { opacity: 0.35; cursor: default; }

  .carousel :global(.info) { display: grid; gap: 0.5rem; width: 100%; margin-bottom: 1.4rem; text-align: left; order: -1; }
  .c-name { font-family: var(--display); font-size: 2.1rem; line-height: 1.1; }
  .c-short { color: var(--gris); }
  .c-more { font-size: 0.85rem; color: var(--jaune); }

  @media (max-width: 860px) {
    .split { display: none; }
    .carousel { display: grid; }
  }
</style>
