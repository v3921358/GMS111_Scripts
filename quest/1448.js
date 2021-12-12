/*
	名字:	毁灭炮手
	地圖:	长老公馆
	描述:	211000001
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(1448) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1448) == 1) {
		qm.sendNext("你順利通過了考試……很不錯嘛？ 在那個地方見到#b凱琳#k，是不是很吃驚？ 雖然#b其他次元的凱琳#k只是分身，但是應該也很强……凱琳把你託付給我，看來她沒有看錯人。");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("和真正的海盜凱琳的戰鬥，使你成為了真正的海盜。 感覺到了嗎？ 現在剩下的就是轉職了。 做好成為更强的海盜——毁灭炮手的準備了嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142109:#   #t1142109#");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(531);
		qm.gainItem(4031059,-1);
		qm.gainItem(1142109,1);
		qm.sendOk("現在你是#b毁灭炮手#k啦。#b大炮#k的大師，真正的毁灭炮手，去盡情施展你的力量吧。");
		}
	if (status == 3){
		qm.dispose();
}
}