<script>
	/**
	 * @type {{ flags: { svg: string; }; name: { common: string; }; population: number; cioc: string; unMember: boolean; language: string, currency: string }}
	 */
	export let country;
</script>

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
	<td class="px-3 py-3">
		{country?.currency || ''}
	</td>
	<td class="px-3 py-3">
		{country?.language || ''}
	</td>
</tr>
