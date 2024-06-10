sap.ui.define(["sap/m/MessageBox"], function (MessageBox) {
  "use strict";

  return {
    onCustomButtonPress: function (oEvent) {
      oEvent.cancelBubble();

      MessageBox.show("Button pressed!");
    },

    getVisibleFormatter: function (sPrioCode) {
      debugger;
      return true;
    },
  };
});
