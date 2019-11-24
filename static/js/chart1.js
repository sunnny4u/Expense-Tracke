window.onload = function () {

    var x = 20;

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Expense Analytics",
		horizontalAlign: "left"
	},
	data: [{
		type: "doughnut",
		startAngle: 10,
		//innerRadius: 60,
		indexLabelFontSize: 17,
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		dataPoints: [
			{ y: 10, label: "Inbox" },
			{ y: 15, label: "Archives" },
			{ y: 25, label: "Labels" },
			{ y: 10, label: "Drafts"},
			{ y: 10, label: "Trash"},
            { y: 10, label: "Trash"},
            { y: 20, label: "Trash"}
		]
	}]
});
chart.render();

}