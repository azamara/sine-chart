define([
	"jquery",
	"underscore",
	"backbone",
	"widget-chart",
	"../models/sine-model",
	"template!templates/sineChart",
], function ($, _, Backbone, Chart, SineModel, Template) {
	'use strict';

	var SineChartView = Backbone.View.extend({

		render: function () {
			this.$el.html(Template);

			this.lineChart = new Chart({
				el: "#sineChart",
				chartType: "line",
				model: new SineModel()
			});
			this.lineChart.render();
		}
	});

	return SineChartView;
});