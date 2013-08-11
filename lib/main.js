var data = require("self").data;
var tabs = require("sdk/tabs");
var menuitem = require("menuitems");

menuitem.Menuitem({
  id: "clickme",
  menuid: "menu_ToolsPopup",
  label: "Facebook - Delete All Messages",
  image: data.url("icon.png"),
  onCommand: function() {
    if(tabs.activeTab.url.contains("facebook.com/messages")) {
        tabs.activeTab.attach({
          contentScriptFile: data.url("delAction.js")
        });
    } else {
        tabs.open({
          url: "https://www.facebook.com/messages/",
          onOpen: function onOpen(tab) {
            tab.attach({
              contentScript: 'alert("Please login into Facebook and navigate to www.facebook.com/messages/\\nThen, wait for the messages page to load and click the same option once more.");',
            });
          }
        });
    }
  }
});
