/*
	名字:	埃欧雷的结界
	地圖:	埃欧雷
	描述:	910150001
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
	if (qm.getQuestStatus(24031) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(24031) == 1) {
		qm.sendSimple("啊……哎呀……真是好久没吃到了。精灵们制作的食物……让我想起了过去。你说要去和黑魔法师战斗，我没能跟着去……你不知道我有多后悔。\r\n#L0##b我不是答应你会回来的吗？#l\n#k");
		}
		}
	if (status == 1)
		qm.sendSimple("没错。正是因为你的话，我在变得荒凉的冒险岛世界等待精灵们的归来。我相信你们一定会回来，向我伸出友谊之手……我想再次和你一起，在冒险岛世界奔跑……\r\n#L0##b还……还不行。冒险岛世界还没有恢复和平。战斗还没结束，我不想把你卷进来。#p1033240#，你能再等等吗？#l\n#k");
	if (status == 2)
		qm.sendNextPrev("不能再等了，双弩精灵……");
	if (status == 3)
		qm.sendNextPrev("我不是说过了吗？你离开之后，我就很后悔没有一起跟着去……在几百年里，我一直在看着冰冻起来的精灵村庄，等着你归来……我想了很多遍。");
	if (status == 4)
		qm.sendNextPrev("就算害怕黑魔法师，也必须和你一起战斗……我不应该让你一个人去的……我应该和你在一起……一直到最后。");
	if (status == 5)
		qm.sendPrev("所以这次我不会再离开你了。和黑魔法师的战斗还没结束，我要和你一起战斗到底。我的朋友，双弩精灵。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 7700 exp");
	if (status == 6){
		qm.forceCompleteQuest();
		qm.gainExp(7700);
		qm.dispose();
}
}