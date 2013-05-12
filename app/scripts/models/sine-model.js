define([
	'underscore',
	'backbone',
], function (_, Backbone) {
	'use strict';

	var SineModel = Backbone.Model.extend({
		url: "data/sine.json",
		initialize: function(options) {
			this.options = options;
		}
	});

	return SineModel;
});