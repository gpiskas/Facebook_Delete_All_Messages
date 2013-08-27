/*
*  Facebook - Delete All Messages
*  Copyright (C) 2013  George Piskas
*
*  This program is free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  This program is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  You should have received a copy of the GNU General Public License along
*  with this program; if not, write to the Free Software Foundation, Inc.,
*  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*
*  Contact: geopiskas@gmail.com
*/

function getLocalizedText(lang) {
    if(lang.contains('English')) {
        return 'Delete Conversation'
    } else if(lang.contains('Español')) {
        return 'Eliminar conversación'
    } else if(lang.contains('Deutsch')) {
        return 'Unterhaltung löschen'
    } else if(lang.contains('Français')) {
        return 'Supprimer la conversation'
    } else if(lang.contains('Italiano')) {
        return 'Elimina conversazione'
    } else if(lang.contains('Brasil')) {
        return 'Excluir conversa'
    } else if(lang.contains('Portugal')) {
        return 'Eliminar conversa'
    } else if(lang.contains('Türkçe')) {
        return 'Konuşmayı Sil'
    } else if(lang.contains('Ελληνικά')) {
        return 'Διαγραφή συζήτησης'
    } else if(lang.contains('Afrikaans')) {
        return 'Skrap Gesprek'
    } else if(lang.contains('Azərbaycan')) {
        return 'dili Söhbəti Sil'
    } else if(lang.contains('Indonesia')) {
        return 'Hapus Percakapan'
    } else if(lang.contains('Melayu')) {
        return 'Padam Perbualan'
    } else if(lang.contains('Català')) {
        return 'Esborra la conversa'
    } else if(lang.contains('Čeština')) {
        return 'Odstranit konverzaci'
    } else if(lang.contains('Cymraeg')) {
        return 'Dileu\'r Sgwrs'
    } else if(lang.contains('Dansk')) {
        return 'Slet samtale'
    } else if(lang.contains('Esperanto')) {
        return 'Forigi konversacion'
    } else if(lang.contains('Filipino')) {
        return 'Tanggalin ang Pag-uusap'
    } else if(lang.contains('Gaeilge')) {
        return 'Scrios an Comhrá'
    } else if(lang.contains('Galego')) {
        return 'Borrar a conversa'
    } else if(lang.contains('Kurdî')) {
        return 'Axaftinê Jê Bibe'
    } else if(lang.contains('Lietuvių')) {
        return 'Ištrinti pokalbį'
    } else if(lang.contains('Magyar')) {
        return 'Beszélgetés törlése'
    } else if(lang.contains('Nederlands')) {
        return 'Gesprek verwijderen'
    } else if(lang.contains('Norsk')) {
        return 'Slett samtale '
    } else if(lang.contains('Polski')) {
        return 'Usuń konwersację'
    } else if(lang.contains('Română')) {
        return 'Şterge conversaţia'
    } else if(lang.contains('Shqip')) {
        return 'Fshije bisedën'
    } else if(lang.contains('Slovenčina')) {
        return 'Odstrániť konverzáciu'
    } else if(lang.contains('Slovenščina')) {
        return 'Izbriši pogovor'
    } else if(lang.contains('Suomi')) {
        return 'Poista viestiketju'
    } else if(lang.contains('Svenska')) {
        return 'Ta bort konversation'
    } else if(lang.contains('Việt')) {
        return 'Xóa cuộc trò chuyện'
    } else if(lang.contains('Беларуская')) {
        return 'Выдаліць размову'
    } else if(lang.contains('Български')) {
        return 'Изтриване на разговора'
    } else if(lang.contains('Русский')) {
        return 'Удалить переписку'
    } else if(lang.contains('Српски')) {
        return  'Избриши разговор'
    } else if(lang.contains('Українська')) {
        return 'Видалити розмову'
    } else if(lang.contains('Հայերեն')) {
        return 'Ջնջել խոսակցությունը'
    } else if(lang.contains('עברית‏')) {
        return 'מחק/י שיחה'
    } else if(lang.contains('العربية‏')) {
        return 'حذف المحادثة'
    } else if(lang.contains('فارسی‏')) {
        return 'زدودن گفت‌وگو'
    } else if(lang.contains('हिन्दी')) {
        return 'वार्तालाप हटाएँ'
    } else if(lang.contains('বাংলা')) {
        return 'কথোপকথন বিলোপ করুন'
    } else if(lang.contains('ਪੰਜਾਬੀ')) {
        return 'ਵਾਰਤਾਲਾਪ ਮਿਟਾਉ'
    } else if(lang.contains('தமிழ்')) {
        return 'உரையாடலை நீக்கு'
    } else if(lang.contains('తెలుగు')) {
        return 'సంభాషణను తొలగించండి'
    } else if(lang.contains('മലയാളം')) {
        return 'സംഭാഷണം ഇല്ലാതാക്കുക'
    } else if(lang.contains('ภาษาไทย')) {
        return 'ลบการสนทนา'
    } else if(lang.contains('ភាសាខ្មែរ')) {
        return 'លុបចេញ ការសន្ទនា'
    } else if(lang.contains('한국어')) {
        return '대화 삭제'
    } else if(lang.contains('中文')) {
        return '删除对话'
    } else if(lang.contains('日本語')) {
        return 'スレッドを削除'
    }
    return 'Delete Conversation'
}

function createButton() {
    var span = document.createElement('span');
    span.setAttribute('class', 'uiButtonGroupItem buttonItem');
    
    var a = document.createElement('a');
    a.setAttribute('class', 'uiButton uiButtonOverlay uiButtonNoText');
    a.setAttribute('role', 'button');
    a.setAttribute('aria-label', 'Delete all listed conversations');
    a.setAttribute('data-hover', 'tooltip');
    a.onclick = function(){
        if (confirm("Are you sure you wish to proceed?")) {
            var lang = document.getElementsByClassName('rhcFooterWrap')[0].getElementsByTagName('a')[0].innerHTML;

            var index = -1;
            var delText = getLocalizedText(lang);
            var buttons = document.getElementsByClassName('uiMenu uiSelectorMenu')[0].getElementsByTagName('a');
            for(var i=0;i<buttons.length;i++) {
                if(buttons[i].innerHTML.contains(delText)) {
                    index = i;
                    break;
                }
            }

            if(index==-1) {
                alert('Problem detected! Please contact the developer and provide the following information: ('+lang+' '+index+')'); 
                return;
            }

            var convList = document.getElementById('wmMasterViewThreadlist').getElementsByClassName('_k_');
            
            function deleteConv(){
                timer = setTimeout(deleteConv, 0);
                convList[0].click();
                document.getElementsByClassName('uiSelectorButton')[0].click();
                document.getElementsByClassName('uiMenu uiSelectorMenu')[0].getElementsByTagName('a')[index].click();
                document.getElementsByName('delete_conversation')[0].click();
                if(convList.length==0) {
                    clearInterval(timer);
                    alert('The listed conversations have been deleted!\nIf not, contact the developer and provide the following information: ('+lang+' '+index+')'); 
                }
            }

            timer = setTimeout(deleteConv, 0);
        }
    }
    
    var innerspan = document.createElement('span');
    innerspan.setAttribute('class', 'uiButtonText');
    innerspan.innerHTML = "Delete Allxts";
    
    a.appendChild(innerspan);
    span.appendChild(a);
    return span;
}

setTimeout(function(){document.getElementsByClassName('uiButtonGroup uiButtonGroupOverlay')[0].appendChild( createButton() )}, 200);
