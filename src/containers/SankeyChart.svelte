<script>
	import { afterUpdate } from 'svelte';

	export let n;
	let chartElement;

	afterUpdate(async () => {
		if (!n) return;

		n.render({
			element: chartElement,
				type: 'sankeyChart',
				properties: {
					qHyperCubeDef: {
						qDimensions: [
							{ qDef: { qFieldDefs: ['Case Owner Group'] }, qNullSuppression: true, qLabel: 'Department' },
							{ qDef: { qFieldDefs: ['Priority'] }, qNullSuppression: true },
						],
						qMeasures: [
							{ qDef: { qDef: 'Avg([Case Duration Time])', autoSort: false }, qSortBy: { qSortByNumeric: -1 }, qLabel: 'Avg Duration' },
						],
						qInterColumnSortOrder: [2, 0, 1],
						qInitialDataFetch: [{
							qWidth: 3,
							qHeight: 3000,
						}],
					},
					showTitles: true,
					title: 'Sankey-chart',
					subtitle: 'Sample supernova sankeychart',
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