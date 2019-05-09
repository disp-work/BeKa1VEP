sap.ui.define([
	'sap/ui/core/mvc/Controller'
], function(Controller) {
	"use strict";

	var timelineController = Controller.extend("com.hcc.bk5.BeKA.controller.timelineList", {

		onInit: function() {
		},

		onExit: function() {
		},
		
		ontimelineSelect: function(oEvent) {
			var oItem, oCtx;
			return;
			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext();

			sap.ui.core.UIComponent.getRouterFor(this).navTo("timeline",{
				timelineKey : oCtx.getProperty("key")
			});			
		}.bind(this)
	});

	return timelineController;
});