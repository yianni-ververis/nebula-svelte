<script>
	import { afterUpdate } from 'svelte';

	export let n;
	let chartElement;

	afterUpdate(async () => {
		if (!n) return;

		n.render({
			element: chartElement,
				type: 'pieChart',
				properties: {
					qHyperCubeDef: {
						qDimensions: [
							{ qDef: { qFieldDefs: ['Case Owner Group'] }, qNullSuppression: true },
						],
						qMeasures: [
							{ qDef: { qDef: 'Avg([Case Duration Time])' } },
						],
						qInitialDataFetch: [{
							qWidth: 2,
							qHeight: 100,
						}],
					},
					showTitles: true,
					title: 'Pie-chart',
					subtitle: 'Sample supernova piechart',
					footnote: '',
				},
		});
	});
</script>

<style>
	.chart {
		width:100%;
		height:600px;
		padding-top: 50px;
	}
</style>

<div
	bind:this={chartElement}
	class='chart'
></div>