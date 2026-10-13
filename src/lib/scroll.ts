import Lenis from 'lenis';

let lenis: Lenis | undefined;

/** Défilement fluide (inertie). Désactivé si l'utilisateur préfère réduire les animations. */
export function initScroll(): () => void {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

	lenis = new Lenis({ lerp: 0.1, smoothWheel: true, anchors: { offset: -84 } });

	let raf = 0;
	const loop = (time: number) => {
		lenis?.raf(time);
		raf = requestAnimationFrame(loop);
	};
	raf = requestAnimationFrame(loop);

	return () => {
		cancelAnimationFrame(raf);
		lenis?.destroy();
		lenis = undefined;
	};
}

/** Fige / libère le scroll (menu ou dialog ouvert). */
export function lockScroll(lock: boolean) {
	if (lock) lenis?.stop();
	else lenis?.start();
}

/** Descend tout en bas de la page. */
export function scrollToBottom() {
	const top = document.documentElement.scrollHeight;
	if (lenis) lenis.scrollTo(top, { duration: 1.4 });
	else window.scrollTo({ top, behavior: 'smooth' });
}
