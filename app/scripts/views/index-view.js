define([
	"jquery",
	"underscore",
	"backbone",
	"template!templates/index",
], function ($, _, Backbone, Template) {
    'use strict';

    var IndexView = Backbone.View.extend({
	    render: function () {
		    this.$el.html(Template);
	    }
    });

    return IndexView;
});