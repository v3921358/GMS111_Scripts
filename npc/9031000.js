/*
	名字:	希梅尔
	地圖:	匠人街
	描述:	910001000
*/

function start() {
	cm.sendNext("想瞭解專業科技的話，我來簡單地說明一下。在這個村子中，一共有#b采藥、採礦、裝備製作、飾品製作、煉金術#k5個匠人。為了提高專業科技的效果，我們匠人協會規定每個人可以學習2種專業科技。根據這個規定，你可以選擇學習#r2种专业技术#k。");
}

function action() {
	cm.sendOk("#您可以從Ardentmill的各個NPC獲得專業技能.\r\n\r\n1. 草藥+煉金術\r\n2. 採礦+鍛造\r\n3. 採礦+配件製作");
	cm.dispose();
}