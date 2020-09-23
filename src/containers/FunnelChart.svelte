<script>
	import { afterUpdate } from 'svelte';

	export let n;
	let chartElement;

	afterUpdate(async () => {
		if (!n) return;

		n.render({
			element: chartElement,
				type: 'funneChart',
				properties: {
					qHyperCubeDef: {
						qDimensions: [
							{ qDef: { qFieldDefs: ['Case Owner Group'] }, qNullSuppression: true, qLabel: 'Department' },
						],
						qMeasures: [
							{ qDef: { qDef: 'Avg([Case Duration Time])', autoSort: false }, qSortBy: { qSortByNumeric: -1 }, qLabel: 'Avg Duration' },
						],
						qInterColumnSortOrder: [1, 0],
						qInitialDataFetch: [{
							qWidth: 2,
							qHeight: 5000,
						}],
					},
					showTitles: true,
					title: 'Funnel-chart',
					subtitle: 'Sample supernova funnelchart',
					footnote: 'Case Owner Group / Avg([Case Duration Time])',
				},
		});
	});
</script>

<style>
	.chart {
		width:100%;
		height:400px;
		padding-top: 50px;
	}
</style>

<div
	bind:this={chartElement}
	class='chart'
></div>