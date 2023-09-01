<script>
	import Chart from 'chart.js/auto';
	import { countries } from '../../../stores/countryDataStore';
	import { onMount } from 'svelte';

	const mostPopulated = $countries
		.slice(0, -1)
		.sort((a, b) => b.population - a.population)
		.slice(0, 10);

	let ctx;

	onMount(async () => {
		const chart = new Chart(ctx, {
			type: 'polarArea',
			data: {
				labels: mostPopulated.map((country) => country?.name?.common),
				datasets: [
					{
						label: 'Population',
						data: mostPopulated.map((country) => country?.population),
						backgroundColor: [
							'#6c5ce7',
							'#d63031',
							'#00b894',
							'#fdcb6e',
							'#a29bfe',
							'#636e72',
							'#00cec9',
							'#e84393',
							'#fab1a0',
							'#55efc4'
						]
					}
				]
			}
		});
	});
</script>

<div class="col-span-1 bg-white rounded-lg h-max">
	<h1 class="px-4 py-2 font-bold border-b">Countries</h1>
	<div class="p-4"><canvas id="polar_area" bind:this={ctx} /></div>
</div>
