/*
	名字:	佩森
	地圖:	白浪码头
	描述:	120020400
*/

function start() {
	if (cm.getChar().getMapId() != 120020400 ) {
		cm.sendYesNo("你想返回#m120020400#。");
	} else {
		var chat = "你想到这附近的海域参观一下吗？\r\n#b";
		chat += "\r\n#L0##m912050000#（800楓幣）";
		chat += "\r\n#L1##m912050001#（900楓幣）";
		cm.sendSimple(chat);
}
}

function action(mode, type, selection) {
	if (mode == 1) {
	if (cm.getChar().getMapId() != 120020400 ) {
		cm.warp(120020400);
		cm.dispose();
		}
		}
	switch (selection) {
	case 0:
		if (cm.getMeso() < 800) {
			cm.sendOk("嗯……你確認你自己有#b800#k楓幣嗎？請你打開背包確認一下。不夠的話，就先去把錢湊齊吧。");
		} else {
			cm.gainMeso(-800);
			cm.warp(912050000,0);
			break;
			}
	case 1:
		if (cm.getMeso() < 800) {
			cm.sendOk("嗯……你確認你自己有#b800#k楓幣嗎？請你打開背包確認一下。不夠的話，就先去把錢湊齊吧。");
		} else {
			cm.gainMeso(-800);
			cm.warp(912050001,0);
			break;
			}
			}
		cm.dispose();
}