/*
	名字:	玩具兵马可
	地圖:	娃娃之家
	描述:	922000010
*/

var havePendulum = false;
var complete = false;
var inQuest = false;

function start() {
	if (cm.getQuestStatus(3230) == 1) {
		inQuest = true;
	} else {
		inQuest = false;
		}
	dh = cm.getEventManager("DollHouse");
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 0 && status == 0) {
	cm.dispose();
	return;
	} else if (mode == 0 && status == 1) {
		cm.sendNext("我要知道你會留下來幫助我的。");
		cm.dispose();
	return;
	}
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	if (inQuest == true) {
	if (status == 0) {
		if (cm.haveItem(4031094)) {
			cm.sendNext("哇！你已經找到了#b#t4031094##k，謝謝你幫助我們通過這次的難關，在此之前請先檢查背包是否有足夠的空間，好讓我們能表示最高的致意。");
			havePendulum = true;
		} else {
			cm.sendSimple("嗨，我是 #b#p2040028##k, 是負責保護這個房間，在這裡你會看見等多許多小屋子但是你會發現有一些不同，你的任務是找到正確的小屋子並敲破它拿到#b#t4031094##k，因為這是玩具城鐘塔的一部分零件，喔對了順便提醒如果你打錯了小屋子那麼你將會被傳回去，這點請務必小心。\r\n#L0##b我想離開這裡#k#l");
			}
			}
	if (status == 1) {
		if (havePendulum == true) {
		if (!cm.canHold(2000010)) {
			cm.sendNext("請確認你的背包是否滿了。");
			}
			cm.sendNextPrev("你有什麼感想？你喜歡 #b100 #v2000010:##t2000010#k 我給你的獎勵嗎？非常感謝你對我們的幫助，我現在就帶你出去吧。");
		if (complete == false) {
			cm.forceCompleteQuest(3230);
			cm.gainExp(2400);
			cm.gainItem(4031094, -1);
			cm.gainItem(2000010, 100);
			complete = true;
			}
		} else {
			cm.sendYesNo("你確定你現在要放棄？那好吧.....但是請記住，下次再進來的話正確的位置會改變的，你必須好好的記住這次的經驗。");
			}
			}
	if (status == 2) {
		if (cm.getPlayer().getEventInstance() != null)
			cm.getPlayer().getEventInstance().removePlayer(cm.getChar());
			cm.dispose();
			}
	} else {
	if (status == 0)
		cm.sendNext("我不知道你是怎麼來到這裡的，但我建議你還是趕緊離開這個危險地帶。");
	if (status == 1){
		cm.warp(221023200, 4);
		cm.dispose();
}
}
}