<script lang="ts">
	import type { HeadingLevel } from './index.js';
	import type { HTMLAttributes } from 'svelte/elements';
	let {
		class: className,
		children,
		tag = 'h3',
		...rest
	}: HTMLAttributes<HTMLHeadingElement> & {
		tag?: HeadingLevel;
	} = $props();
</script>

<svelte:element
	this={tag}
	class={['text-lg leading-none font-semibold tracking-tight', className]}
	{...rest}
>
	{@render children?.()}
</svelte:element>
