/*
	名字:	寻找赫丽娜
	地圖:	魔法密林
	描述:	101000000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(24068) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(24068) == 1) {
		qm.sendNext("你来找我，是想成为弓箭手吗？嗯？好像不是的样子……熟悉的面孔……你……你……！");
		}
		}
	if (status == 1)
		qm.sendNextPrev("双弩精灵！");
	if (status == 2)
		qm.sendPrev("你还活着啊！我就知道你会活下来的！我一直这么坚信着！坚信…………身为王的你绝不会死在魔法师的手中！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 2000 exp");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.gainExp(2000);
		qm.dispose();
}
}