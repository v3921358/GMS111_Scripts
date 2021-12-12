/*
	名字:	生存的法则
	地圖:	废都爵士酒吧
	描述:	103000003
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("我想測定一下你的實力，所以要進行簡單的適應訓練，看看你是否具備適應環境的能力。你是否現在就想接受考驗？");
	if (status == 1){
		qm.forceStartQuest();
		qm.warp(910310100,0);
		qm.resetMap(910310100);
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getMap().getAllMonstersThreadsafe().size() == 0) {
		qm.sendOk("呼呼。 這種程度不算什麼吧？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 100 exp");
	} else {
		qm.sendOk("請消滅完地圖裡面所有的#b三眼章魚#k再來與我交談。");
		qm.dispose();
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(100);
		qm.dispose();
}
}