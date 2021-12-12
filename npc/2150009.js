/*
	名字:	红狗
	地圖:	码头&amp;lt;开往埃德尔斯坦&gt;
	描述:	200000170
*/

function start() {
	cm.sendYesNo("你想到埃德爾斯坦去？費用是800楓幣……想去的話，就快點上倆。");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("看來你不太喜歡到陌生的地方去旅行。");
		cm.dispose();
	} else {
	if(cm.getPlayer().getMeso() >= 800) {
		cm.warp(200090600, 0);
		cm.gainMeso(-800);
	} else {
		cm.sendOk("嗯……你確定自己有#b800#k楓幣嗎？請你打開背包確認一下下。不夠的話，就先去把錢湊齊吧。");
		}
	cm.dispose();
}
}