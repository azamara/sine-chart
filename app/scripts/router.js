/**
 * Created with IntelliJ IDEA.
 * User: azamara
 * Date: 13. 5. 12.
 * Time: 오후 2:43
 * To change this template use File | Settings | File Templates.
 */
define([
	"jquery",
	"underscore",
	"backbone",
	"views/index-view",
	"views/sineChart-view",
	"views/sineTable-view",
	"models/sine-model",
	"widget-plugins"
], function ($, _, Backbone, IndexView, SineChartView, SineTableView, SineModel) {

	var MainRouter = Backbone.Router.extend({
		routes: {
			"": "index",
			"index": "index",

			"chart": "sineChart",
			"table": "sineTable",

		},

		index: function () {
			var indexView = new IndexView({
				el: "#webApp"
			});
			indexView.render();

			var sineChartView = new SineChartView({
				el: "#sineChartView"
			});
			sineChartView.render();

			var sineTableView = new SineTableView({
				el: "#sineTableView"
			});
			sineTableView.render();
		},

		sineChart: function () {
			var sineChartView = new SineChartView({
				el: "#webApp"
			});
			sineChartView.render();
		},

		sineTable: function () {
			var sineTableView = new SineTableView({
				el: "#webApp"
			});
			sineTableView.render();
		}
	});

	new MainRouter();

	Backbone.history.start();
});