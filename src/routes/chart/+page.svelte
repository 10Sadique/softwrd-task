<script>
	import { page } from '$app/stores';

	import Table from '$lib/components/chart/Table.svelte';
	import { countries } from '../../stores/countryDataStore';
	import PolarAreaChart from '$lib/components/chart/PolarAreaChart.svelte';

	const data = $page.data.data.slice(0, -1).map((country) => ({
		...country,
		currency: country?.currencies
			? Object.keys(country.currencies).length > 1
				? Object.keys(country.currencies).join(', ')
				: Object.keys(country.currencies).toString()
			: null,
		language: country?.languages
			? Object.values(country.languages).length > 1
				? Object.values(country.languages).join(', ')
				: Object.values(country.languages).toString()
			: null
	}));

	countries.set(data);
</script>

<div class="grid grid-cols-3 gap-8">
	<Table />
	<PolarAreaChart />
</div>
