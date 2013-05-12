define([
	"jquery",
	"underscore",
	"backbone",
	"widget-datatable",
	"../models/sine-model",
	"template!templates/sineTable",
], function ($, _, Backbone, DataTableView, SineModel, Template) {
	'use strict';

	var SineTableView = Backbone.View.extend({
		render: function () {
			this.$el.html(Template);

			// 차트(NVD3.js)와 데이터테이블의 JSON 포맷이 다르므로 데이터테이블뷰를 확장해서 JSON 포맷을 변환한다.
			DataTableView = DataTableView.extend({
				updateDataTable: function (view) {
					view.model.clear();
					view.model.fetch({
						success: function (model) {
							view.options = $.extend({}, view.options, model.toJSON());

							view.dataTable.fnClearTable();
							view.dataTable.fnAddData(view.options[0].values);
							view.dataTable.fnDraw();
						}
					});
				}
			});

			this.dataTableView = new DataTableView({
				el: "#sineTable",
				model: new SineModel({
					type: "table"
				}),
				// 차트 데이터는 array of objects 구조이므로 aoColumns 설정 필요
				aoColumns: [
					{ "mData": "x" },
					{ "mData": "y" }
				]
			});
			this.dataTableView.render();

		}
	});

	return SineTableView;
});