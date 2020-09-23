<script>
	const srcBarchart = "assets/barchart.png";
	const srcLineChart = "assets/linechart.png";
	const srcFunnelChart = "assets/funnelchart.png";
	const srcPieChart = "assets/piechart.png";
	const srcSankeyChart = "assets/sankeychart.png";
	const srcMekkoChart = "assets/mekkochart.png";
</script>

<style>
	.grid {
		display: flex;
  	justify-content: space-between;
		max-width: 900px;
		padding-top: 50px;
	}

	.column {
		flex: 1;
		max-width: 300px;
	}
</style>

<div class="grid">
	<div class="column">
		<h3>Barchart</h3>
		<a href="/bar-chart/"><img src={srcBarchart} alt="barchart" /></a>
	</div>
	<div class="column">
		<h3>Linechart</h3>
		<a href="/line-chart/"><img src={srcLineChart} alt="linechart" /></a>
	</div>
</div>

<div class="grid">
	<div class="column">
		<h3>Piechart</h3>
		<a href="/pie-chart/"><img src={srcPieChart} alt="Piechart" /></a>
	</div>
	<div class="column">
		<h3>Funnelchart</h3>
		<a href="/funnel-chart/"><img src={srcFunnelChart} alt="Funnelchart" /></a>
	</div>
</div>

<div class="grid">
	<div class="column">
		<h3>Sankeychart</h3>
		<a href="/sankey-chart/"><img src={srcSankeyChart} alt="SankeyChart" /></a>
	</div>
	<div class="column">
		<h3>Mekkochart</h3>
		<a href="/mekko-chart/"><img src={srcMekkoChart} alt="MekkoChart" /></a>
	</div>
</div>