<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import Loader from '../lib/components/Loader.svelte';
  import Header from '../lib/components/Header.svelte';
  import Footer from '../lib/components/Footer.svelte';
  import { i18n } from '../lib/i18n.svelte';
  import { initScroll } from '../lib/scroll';

  import type { LayoutProps } from "./$types";
  let { children }: LayoutProps = $props();

  // Le préchargeur est orchestré en CSS (--loader-total) ; on débloque le scroll à sa fin.
  onMount(() => {
    const stopScroll = initScroll();
    try {
      const saved = localStorage.getItem('abs-lang');
      if (saved === 'en' || saved === 'fr') i18n.lang = saved;
    } catch {}
    document.documentElement.lang = i18n.lang;

    const total = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--loader-total')) || 2.6;
    const t = setTimeout(() => document.documentElement.setAttribute('data-ready', ''), total * 1000 + 600);
    return () => {
      clearTimeout(t);
      stopScroll();
    };
  });
</script>

<svelte:head>
  <title>ABS VIP Consulting — Conciergerie privée</title>
  <meta
    name="description"
    content="Conciergerie privée et lifestyle management, 24h/24 et 7j/7, entre Londres et Paris : voyages, jets privés, chauffeur, hôtels, protection rapprochée."
  />
</svelte:head>

<Loader />
<Header />
<main>{@render children()}</main>
<Footer />
