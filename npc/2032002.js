/*
	名字:	奥拉
	地圖:	未知废矿区I
	描述:	280010000
*/

var status = -1;

var selectedType;
var scrolls;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		cm.sendSimple("怎麼樣？都搜集好了嗎？#b\r\n#L0#告訴我應該做什麼？#l\r\n#L1#已經搜集好了物品！#l\r\n#L2#我要離開這裡！#l");
	if (status == 1){
	selectedType = selection;
		if (selection == 0) {
			cm.sendOk("為了解除殘暴炎魔的前置，你必須收集我需要的核心材料。");
			cm.safeDispose();
			}
		if (selection == 1) {
			if (!cm.haveItem(4001018)) { //documents
			cm.sendOk("請給我#b#t4001018##k謝謝。");
			cm.safeDispose();
		} else {
			if (!cm.haveItem(4001015, 30)) { //documents
			cm.sendYesNo("帶來了是嘛??\r\n為了確保您能拿到酬勞請先空出空間。");
			scrolls = false;
		} else {
			cm.sendYesNo("帶來了是嘛??\r\n為了確保您能拿到酬勞請先空出空間。");
			scrolls = true;
			}
			}
			}
		if (selection ==2) {
			cm.sendYesNo("你確定要退出？如果你是組隊長，一旦你離開組隊，那麼這項任務就無法繼續下去。是否決定退出？");
			}
			}
	if (status == 2){
		var eim = cm.getEventInstance();
		if (selectedType == 1) {

			cm.gainItem(4001018, -1);
			if (scrolls) {
			cm.gainItem(4001015, -30);
			}
			cm.givePartyItems(4031061, 1);
			if (scrolls) {
			cm.givePartyItems(2030007, 5);
			cm.givePartyExp(20000);
		} else {
			cm.givePartyExp(12000);
			}

			if (eim != null) {
			eim.finishPQ();
			}
			cm.dispose();
			}
		if (selectedType == 2) {
			if (eim != null) {
			if (cm.isLeader())
			eim.disbandParty();
		else
			eim.leftParty(cm.getChar());
		} else {
			cm.warp(280090000, 0);
			}
		cm.dispose();
}
}
}