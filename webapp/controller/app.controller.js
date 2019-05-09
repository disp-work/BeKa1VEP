sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/m/Popover',
	'sap/m/Button'
], function (jQuery, Fragment, Controller, JSONModel, Popover, Button) {
	"use strict";

	return Controller.extend("com.hcc.bk5.BeKA.controller.app", {

		onInit : function() {
			this._setToggleButtonTooltip(!sap.ui.Device.system.desktop);
		},

		onItemSelect : function(oEvent) {
			var item = oEvent.getParameter('item');
			var viewId = this.getView().getId();
			sap.ui.getCore().byId(viewId + "--pageContainer").to(viewId + "--" + item.getKey());
		},

		handlePlanningPress: function (event) {
			var popover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content:[
					new Button({
						text: 'Wizzard',
						type: sap.m.ButtonType.Transparent,
						icon: 'sap-icon://activate'
					}),
					new Button({
						text: 'Planung abschließen',
						type: sap.m.ButtonType.Transparent,
						icon: 'sap-icon://complete'
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

			popover.openBy(event.getSource());
		},

		handleVersionsPress: function (event) {
			var popover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content:[
					new Button({
						text: 'Version anlegen',
						type: sap.m.ButtonType.Transparent,
						icon: 'sap-icon://pushpin-on'
					}),
					new Button({
						text: 'Version wiederherstellen',
						type: sap.m.ButtonType.Transparent,
						icon: 'sap-icon://pushpin-off'
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

			popover.openBy(event.getSource());
		},		

		handleViewPress: function (event) {
			var popover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content:[
					new Button({
						text: 'Teilnehmer',
						type: sap.m.ButtonType.Transparent,
						icon: 'sap-icon://employee'
					}),
					new Button({
						text: 'Veranstaltungen',
						type: sap.m.ButtonType.Transparent,
						icon: 'sap-icon://education'
					}),
					new Button({
						text: 'Hinweise',
						type: sap.m.ButtonType.Transparent,
						icon: 'sap-icon://notes'
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

			popover.openBy(event.getSource());
		},		

		handleReportingPress: function (event) {
			var popover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content:[
					new Button({
						text: 'Kapazitätsplanung',
						type: sap.m.ButtonType.Transparent,
						icon: 'sap-icon://list'
					}),
					new Button({
						text: '....',
						type: sap.m.ButtonType.Transparent,
						icon: 'sap-icon://list'
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

			popover.openBy(event.getSource());
		},
		
		handleUserNamePress: function (event) {
			var popover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content:[
					new Button({
						text: 'Feedback',
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: 'Help',
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: 'Logout',
						type: sap.m.ButtonType.Transparent
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

			popover.openBy(event.getSource());
		},

		onSideNavButtonPress : function() {
			var viewId = this.getView().getId();
			var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");
			var sideExpanded = toolPage.getSideExpanded();

			this._setToggleButtonTooltip(sideExpanded);

			toolPage.setSideExpanded(!toolPage.getSideExpanded());
		},

		_setToggleButtonTooltip : function(bLarge) {
			var toggleButton = this.byId('sideNavigationToggleButton');
			if (bLarge) {
				toggleButton.setTooltip('Large Size Navigation');
			} else {
				toggleButton.setTooltip('Small Size Navigation');
			}
		}

	});

});