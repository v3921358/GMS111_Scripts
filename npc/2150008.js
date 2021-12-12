/*
	名字:	红狗
	地圖:	埃德尔斯坦临时机场
	描述:	310000010
*/

function start() {
	var chat = "你想離開埃德爾斯坦，到其他地區去嗎？這裡的船開往維多利亞和天空之城。費用是800楓幣。你想去哪裡？\r\n#b";
	chat += "\r\n#L0#維多利亞";
	chat += "\r\n#L1#天空之城";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	if (cm.getMeso() < 800) {
		cm.sendOk("嗯……你確認你自己有#b800#k楓幣嗎？請你打開背包確認一下。不夠的話，就先去把錢湊齊吧。");
	} else {
		if (selection == 0){
			cm.gainMeso(-800);
			cm.warp(200090710, 0);
			}
		if (selection == 1){
			cm.gainMeso(-800);
			cm.warp(200090610, 0);
			}
			}
		cm.dispose();
}