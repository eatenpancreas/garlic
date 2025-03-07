<script>
	import { client } from '$lib';
	import * as Card from '$lib/components/card';
	import Link from '$lib/components/Link.svelte';
	import { onMount } from 'svelte';

	let message = $state('Loading...');
	onMount(async () => {
		message = await client.get('/demo/hello');
	});
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{message}</Card.Title>
		<Card.Description>It's garlic time!</Card.Description>
	</Card.Header>
	<Card.Content>
		<Link href="https://github.com/eatenpancreas/svelte-rs">Repository</Link>
	</Card.Content>
	<Card.Footer>🧄</Card.Footer>
</Card.Root>
