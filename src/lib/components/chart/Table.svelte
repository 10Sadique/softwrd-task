<script>
	import TableRow from './TableRow.svelte';
	import { countries } from '../../../stores/countryDataStore';
</script>

<div class="relative col-span-2 overflow-hidden rounded-lg">
	<table class="w-full text-xs text-left">
		<thead class="text-xs text-gray-700 bg-gray-50">
			<tr>
				<th scope="col" class="px-3 py-3">Flag</th>
				<th scope="col" class="px-3 py-3">Name</th>
				<th scope="col" class="px-3 py-3">Population</th>
				<th scope="col" class="px-3 py-3">CIOC</th>
				<th scope="col" class="px-3 py-3">UN Member Status</th>
				<th scope="col" class="px-3 py-3">Currencies</th>
				<th scope="col" class="px-3 py-3">Language</th>
			</tr>
		</thead>
		<tbody>
			{#each $countries as country (country?.name?.common)}
				<TableRow {country} />
			{/each}
		</tbody>
	</table>
</div>
