/*
	名字:	普洛
	地圖:	企鹅港口
	描述:	140020300
*/

function start() {
	if (cm.haveItem(4032338)) {
		cm.sendYesNo("你想去金银岛吗？既然你有#v4032338:#,这次我可以免费送你过去！");
	} else {
		var chat = "你想離開里恩，到其他地區去嗎？這裡的船開往金银岛和列娜海峡。#b";
		chat += "\r\n#L0#金银岛 (800)楓幣";
		chat += "\r\n#L1#列娜海峡(800)楓幣";
		cm.sendSimple(chat);
}
}

function action(mode, type, selection) {
	if (mode == 1) {
	if (cm.haveItem(4032338)) {
		cm.warp(200090070,0);
		cm.dispose();
		}
		}
	switch (selection) {
	case 0:
		if (cm.getMeso() > 800) {
			cm.warp(200090070,0);
			cm.gainMeso(-800);
		} else {
			cm.sendOk("嗯……你確認你自己有#b800#k楓幣嗎？請你打開背包確認一下。不夠的話，就先去把錢湊齊吧。");
			}
			break;
	case 1:
		if (cm.getMeso() > 800) {
			cm.warp(141000100,0);
			cm.gainMeso(-800);
		} else {
			cm.sendOk("嗯……你確認你自己有#b800#k楓幣嗎？請你打開背包確認一下。不夠的話，就先去把錢湊齊吧。");
			}
			}
		cm.dispose();
}