$( function(){
	var app = new (Backbone.Router.extend({
		routes: {
			"": "showTable",
			"table": "showTable",
			"chart": "showChart"
		},
		
		initialize: function() {
			this.sineValues = new SineTable();
			this.appView = new AppView();
			$('#data-view').html(this.appView.render().el);
		},
		
		showTable: function(){
			if (! this.tableView) {
				this.tableView = new TableView();
				this.tableView.render();
			}
			this.appView.$el.html(this.tableView.el);
		},
		
		showChart: function(){
			if (! this.chartView) {
				this.chartView = new ChartView();
				this.chartView.render();
			}
			this.appView.$el.html(this.chartView.el);
		}
	}));

	Backbone.history.start();
	console.log("main.js started");
});
