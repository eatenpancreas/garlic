<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class={['flex items-center p-6 pt-0', className]} {...rest}>
	{@render children?.()}
</div>
