sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.btp.helloworld.controller.View1", {
        onInit() {
        },

        onHelloWorldPress() {
            const sMessage = this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("helloWorldMessage");
            MessageToast.show(sMessage);
        }
    });
});