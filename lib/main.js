var data = require("self").data;
var pageMod = require("sdk/page-mod");

// This regular expression is used so that it will catch all possible facebook messages links (localized etc)
pageMod.PageMod({
  include: /.*facebook.*messages.*/,
  contentScriptWhen: 'ready',
  contentScriptFile: data.url("delButton.js")
});
