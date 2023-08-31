export async function load({ fetch }) {
	const res = await fetch('https://restcountries.com/v3.1/all');

	return {
		data: await res.json()
	};
}
