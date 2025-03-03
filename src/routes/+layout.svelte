<script lang="ts">
	import Center from '$lib/components/Center.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col pb-16">
	<div class="h-16 w-full border-b"></div>
	<Center class="grow">{@render children()}</Center>
</div>
