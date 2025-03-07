<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	export { className as class };
	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class={['flex flex-col space-y-1.5 p-6 pb-0', className]} {...rest}>
	{@render children?.()}
</div>
