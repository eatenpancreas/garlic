<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class={['bg-card text-card-foreground rounded-lg border shadow-sm', className]} {...rest}>
	{@render children?.()}
</div>
