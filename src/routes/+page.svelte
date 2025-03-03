<script>
	import { onMount } from 'svelte';
	import { getDemoHelloFromRust } from '$lib/client';

	let message = $state('Loading...');
	onMount(async () => {
		const { data } = await getDemoHelloFromRust();
		if (data) message = data;
	});
</script>

<h1 class="p-8 text-center text-4xl text-gray-200">{message}</h1>
