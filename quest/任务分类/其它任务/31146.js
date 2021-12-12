/*
	名字:	拯救南哈特
	地圖:	破坏的射手村
	描述:	271010000
*/

var status = -1;

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
	if (qm.getQuestStatus(31146) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(31146) == 1) {
	if (qm.getMap().getAllMonstersThreadsafe().size() == 0) {
		qm.sendNext("谢谢你来救我。但是我想继续留在这里。如果他们发现我不见了，可能会招来更严重的灾难。留在这里，说不定还能做点什么。");
	} else {
		qm.sendNext("请先把周围监视我的怪物消灭掉。在这之前，我什么都不会跟你说……");
		qm.dispose();
		}
		}
		}
	if (status == 1)
		qm.sendNextPrev("请你帮我转告阿勒斯。");
	if (status == 2)
		qm.sendPrev("还有……请你阻止她。我们无法让希纳斯恢复原状。这也是没有办法的办法。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 11659200 exp");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.gainExp(11659200);
		qm.dispose();
}
}