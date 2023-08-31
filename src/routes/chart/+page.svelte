<script>
	import { countries } from '../../stores/countryDataStore';
	import Table from '$lib/components/chart/Table.svelte';
	import PolarAreaChart from '$lib/components/chart/PolarAreaChart.svelte';

	export let data;

	// @ts-ignore
	countries.set(data.data);
</script>

<div class="grid grid-cols-3 gap-8">
	<Table />
	<PolarAreaChart />
</div>
