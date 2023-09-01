<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Softwrd Assesment</title>
</svelte:head>

<slot />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
