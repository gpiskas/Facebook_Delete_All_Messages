var data = require("self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    include: /.*www.facebook.com.*/,
  contentScriptWhen: 'ready',
  contentScriptFile: data.url("delButton.js")
});
