<script>
	import { afterUpdate } from 'svelte';

	export let n;
	let chartElement;

	afterUpdate(async () => {
		if (!n) return;

		n.render({
			element: chartElement,
			type: 'barChart',
			properties: {
				qHyperCubeDef: {
					qDimensions: [
						{ qDef: { qFieldDefs: ['Case Owner Group'] }, qNullSuppression: true },
					],
					qMeasures: [
						{ qDef: { qDef: 'Avg([Case Duration Time])', autoSort: false }, qSortBy: { qSortByNumeric: -1 }, qLabel: 'Avg Duration' },
					],
					qInterColumnSortOrder: [1, 0],
				},
				showTitles: true,
				title: 'Bar-chart',
				subtitle: 'Sample supernova barchart',
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