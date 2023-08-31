<script>
	const routes = [
		{ label: 'Layout', route: '/layout' },
		{ label: 'Chart', route: '/chart' },
		{ label: 'Map', route: '/map' }
	];
</script>

<div class="h-screen flex flex-col items-center justify-center">
	<div class="space-x-4 font-semibold text-lg">
		{#each routes as route}
			<a class="hover:underline" href={route.route}>{route.label}</a>
		{/each}
	</div>
</div>
