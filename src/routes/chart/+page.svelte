<script>
	import { page } from '$app/stores';

	import Table from '$lib/components/chart/Table.svelte';
	import { countries } from '../../stores/countryDataStore';
	import PolarAreaChart from '$lib/components/chart/PolarAreaChart.svelte';

	countries.set($page.data.data);
</script>

<div class="grid grid-cols-3 gap-8">
	<Table />
	<PolarAreaChart />
</div>
