<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class={['flex flex-col items-center justify-center', className]} {...rest}>
	{@render children?.()}
</div>
