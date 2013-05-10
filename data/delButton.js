var outerspan = document.createElement('span');
outerspan.setAttribute('class', 'uiButtonGroup uiButtonGroupOverlay');

var span = document.createElement('span');
span.setAttribute('class', 'uiButtonGroupItem buttonItem');

var a = document.createElement('a');
a.setAttribute('class', 'uiButton uiButtonOverlay uiButtonNoText');
a.setAttribute('role', 'button');
a.setAttribute('aria-label', 'Delete all listed conversations');
a.setAttribute('data-hover', 'tooltip');
a.onclick = function(){
    var answer = confirm("Are you sure you wish to proceed?");
    if (answer) {
        // load more
        //document.getElementsByClassName('clearfix pts uiMorePager stat_elem _2to _g6')[0].getElementsByTagName('a')[0].click();
        var convList = document.getElementById('wmMasterViewThreadlist').getElementsByClassName('_k_');
        while (convList.length!=0) {
            convList[0].click();
            document.getElementsByClassName('uiSelectorButton')[0].click();
            document.getElementsByClassName('uiMenu uiSelectorMenu')[0].getElementsByTagName('a')[8].click();
            document.getElementsByName('delete_conversation')[0].click();
        }
        alert('Your conversations have been deleted!'); 
        
    }
}

var innerspan = document.createElement('span');
innerspan.setAttribute('class', 'uiButtonText');
innerspan.innerHTML = "Delete All";

a.appendChild(innerspan);
span.appendChild(a);
outerspan.appendChild(span);

var old = document.getElementsByClassName('_2nd rfloat')[0].getElementsByTagName('span')[0];
document.getElementsByClassName('_2nd rfloat')[0].getElementsByTagName('div')[0].removeChild(old);
document.getElementsByClassName('_2nd rfloat')[0].getElementsByTagName('div')[0].appendChild(outerspan);
document.getElementsByClassName('_2nd rfloat')[0].getElementsByTagName('div')[0].appendChild(old);
