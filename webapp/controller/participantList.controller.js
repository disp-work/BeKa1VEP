sap.ui.define([
	'sap/ui/core/mvc/Controller'
], function(Controller) {
	"use strict";

	var ParticipantController = Controller.extend("com.hcc.bk5.BeKA.controller.participantList", {

		onInit: function() {
		},

		onExit: function() {
		},
		
		onParticipantSelect: function(oEvent) {
			var oItem, oCtx;
			return;
			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext();

			sap.ui.core.UIComponent.getRouterFor(this).navTo("participant",{
				participantKey : oCtx.getProperty("key")
			});			
		}.bind(this)
	});

	return ParticipantController;
});