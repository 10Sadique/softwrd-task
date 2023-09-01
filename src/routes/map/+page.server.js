export async function load({ fetch }) {
	const res = await fetch('countries.geojson');

	return {
		data: await res.json()
	};
}
