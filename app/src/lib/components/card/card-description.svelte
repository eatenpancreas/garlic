<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	let { class: className, children, ...rest }: HTMLAttributes<HTMLParagraphElement> = $props();
</script>

<p class={['text-muted-foreground text-sm', className]} {...rest}>
    {@render children?.()}
</p>
