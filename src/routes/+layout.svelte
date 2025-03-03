<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="fixed inset-0 -z-50 bg-gray-800"></div>

{@render children()}
