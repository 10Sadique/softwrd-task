<script>
	const routes = [
		{ id: 1, label: 'Layout', route: '/layout' },
		{ id: 2, label: 'Chart', route: '/chart' },
		{ id: 3, label: 'Map', route: '/map' }
	];
</script>

<div class="h-screen flex flex-col items-center justify-center">
	<!-- <h1 class="text-3xl font-bold mb-6">Softwrd Assesment</h1> -->
	<div class="space-x-4 font-semibold text-lg">
		{#each routes as route}
			<a class="hover:underline" href={route.route}>{route.label}</a>
		{/each}
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
