<script>
	import Map from 'ol/Map.js';
	import View from 'ol/View.js';
	import { onMount } from 'svelte';
	import { GeoJSON } from 'ol/format.js';
	import { OSM, Vector as VectorSource } from 'ol/source.js';
	import { Fill, Stroke, Style } from 'ol/style.js';
	import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
	import { fromLonLat } from 'ol/proj.js';

	export let data;

	let geoData = data.data;

	onMount(async () => {
		const vectorSoruce = new VectorSource({
			features: new GeoJSON().readFeatures(geoData, {
				dataProjection: 'EPSG:4326',
				featureProjection: 'EPSG:3857'
			})
		});

		const vectorLayer = new VectorLayer({
			source: vectorSoruce,
			style: new Style({
				stroke: new Stroke({
					color: '#000',
					width: 1
				}),
				fill: new Fill({
					color: 'rgb(49, 231, 19, .3)'
				})
			})
		});

		const map = new Map({
			layers: [
				new TileLayer({
					source: new OSM()
				}),
				vectorLayer
			],
			target: 'map',
			view: new View({
				center: fromLonLat([90.4152, 23.8041]), // Dhaka
				zoom: 2
			})
		});
	});
</script>

<div class="h-screen">
	<div id="map" class="w-full h-full" />
</div>
