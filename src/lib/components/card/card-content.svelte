<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	let { class: className, children, ...rest }: HTMLAttributes<HTMLParagraphElement> = $props();
</script>

<div class={['p-6', className]} {...rest}>
	{@render children?.()}
</div>
