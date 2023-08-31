<script>
	import { countries } from '../../../stores/countryDataStore';
	console.log($countries);
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
			{#each $countries as country}
				<tr class="bg-white border-b">
					<td class="px-3 py-3">
						<img class="rounded-sm w-9" src={country?.flags?.svg} alt={country?.name?.common} />
					</td>
					<td class="px-3 py-3">{country?.name?.common}</td>
					<td class="px-3 py-3">{country?.population}</td>
					<td class="px-3 py-3">{country?.cioc ?? ''}</td>
					<td class="px-3 py-3 text-center">
						<span
							class={`px-2 py-1 font-bold rounded-sm ${
								country?.unMember ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'
							}`}
						>
							{country?.unMember ? 'Yes' : 'No'}
						</span>
					</td>
					<td class="px-3 py-3">{country?.currencies}</td>
					<td class="px-3 py-3"> $2999 </td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
