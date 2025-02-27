<script>
	import { onMount } from 'svelte';
	import { postEcho } from '$lib/client';

	let username = $state('');
	onMount(async () => {
		const joe = await postEcho({  body: "john!" });
		if (joe.data) {
			username = joe.data;
		}
	});
</script>

<h1>Welcome to SvelteKit, {username}</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
