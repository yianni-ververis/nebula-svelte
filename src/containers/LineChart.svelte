<script>
	import { afterUpdate } from 'svelte';

	export let n;
	let chartElement;

	afterUpdate(async () => {
		if (!n) return;
		
		n.render({
			element: chartElement,
				type: 'lineChart',
				properties: {
					qHyperCubeDef: {
						qDimensions: [
							{ qDef: { qFieldDefs: ['Date.autoCalendar.YearMonth'] } },
						],
						qMeasures: [
							{ qDef: { qDef: 'Sum([Number of New Cases])', autoSort: false }, qSortBy: { qSortByNumeric: 1 } },
						],
						qInterColumnSortOrder: [1, 0],
					},
					showTitles: true,
					title: 'Line-chart',
					subtitle: 'Sample supernova linechart',
					footnote: '',
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