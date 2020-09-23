<script>
	import { afterUpdate } from 'svelte';

	export let n;
	let chartElement;

	afterUpdate(async () => {
		if (!n) return;

		n.render({
			element: chartElement,
				type: 'mekkoChart',
				properties: {
					qHyperCubeDef: {
						qDimensions: [
							{ qDef: { qFieldDefs: ['Case Owner Group'] } },
							{ qDef: { qFieldDefs: ['Priority'] } },
						],
						qMeasures: [
							{ qDef: { qDef: '=Count([Case Is Closed])' } },
						],
						qInterColumnSortOrder: [2, 0, 1],
						qInitialDataFetch: [{
							qWidth: 3,
							qHeight: 100,
						}],
					},
					showTitles: true,
					title: 'Mekko-chart',
					subtitle: 'Sample supernova mekkochart',
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