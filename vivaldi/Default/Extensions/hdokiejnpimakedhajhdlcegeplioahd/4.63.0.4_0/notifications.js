Notifications=function(){var t=null,s=null,i=function(e,t){var s;if(t){var i=e.find(".message");s=i.text(),"string"==typeof t?""!=s?i.text(s+"   "+Strings.translateString(t)):i.text(Strings.translateString(t)):t instanceof Array&&(i.empty(),i.append(t)),e.css("top",0)}},n=function(e){i(t,e)},o=function(e,t){var s;t.css("top",-t.outerHeight()),t.find(".message").empty(),e&&(e.stopPropagation(),e.preventDefault())},a=function(e){o(e,t)},l=function(e){o(e,s)},r=null,c=function(e){i(s,e),clearTimeout(r),r=setTimeout(function(){l()},3e3)},g=function(e){var t=["notification"].concat(LPTools.getOption(e,"additionalClasses",[])),s=LPTools.createElement("div",{class:t.join(" "),id:e.id,role:"alert","aria-atomic":"true"}),i="undefined"!=typeof dialogs&&void 0!==dialogs.baseURL?dialogs.baseURL:"",n=LPTools.createElement("div","messageCell");n.appendChild(LPTools.createElement("img",{src:i+e.img})),n.appendChild(LPTools.createElement("span","title",e.title)),n.appendChild(LPTools.createElement("span","message")),s.appendChild(n);var o=LPTools.createElement("div",{class:"close midToneHover",title:Strings.translateString("Close")});return o.appendChild(LPTools.createElement("img",{src:i+e.closeImg})),LPPlatform.addEventListener(o,"click",e.closeHandler),s.appendChild(o),document.body.appendChild(s),$(s)},e;return{displayErrorMessage:n,displaySuccessMessage:c,initialize:function(e){t=g($.extend(e,{id:"errorMessage",img:"images/vault_4.0/Error.png",title:Strings.translateString("ERROR")+": ",closeImg:"images/vault_4.0/Error_Close.png",closeHandler:a})),s=g($.extend(e,{id:"successMessage",img:"images/vault_4.0/Success.png",title:Strings.translateString("SUCCESS")+": ",closeImg:"images/vault_4.0/Success_Close.png",closeHandler:l})),Topics.get(Topics.ERROR).subscribe(function(e){n(e)}),Topics.get(Topics.SUCCESS).subscribe(function(e){c(e)}),Topics.get(Topics.REQUEST_START).subscribe(function(){a()}),Topics.get(Topics.DIALOG_CLOSE).subscribe(function(){a()})}}}();