<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	let {
		class: className,
		children,
		href,
		...rest
	}: HTMLAttributes<HTMLAnchorElement> & { href: string } = $props();
</script>

<a {href} class={['text-info underline', className]} {...rest}>
	{@render children?.()}
</a>
