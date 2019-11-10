window.onload = function () {

    var x = 20;

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Email Categories",
		horizontalAlign: "left"
	},
	data: [{
		type: "doughnut",
		startAngle: 60,
		//innerRadius: 60,
		indexLabelFontSize: 17,
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		dataPoints: [
			{ y: x, label: "Inbox" },
			{ y: x, label: "Archives" },
			{ y: x, label: "Labels" },
			{ y: x, label: "Drafts"},
			{ y: x, label: "Trash"}
		]
	}]
});
chart.render();

}