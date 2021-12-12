/*
	名字:	秘密团体的第三个任务
	地圖:	青蛙嘴里的房子
	描述:	922030000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("我要交給你的第三個任務是蒐集#t4000594#。 狩獵#m220000000#時間塔最深處的#r#o9001028##k，偶爾可以獲得#b#v4000594:##t4000594##k。 你只要蒐集#b100個#k交給我就行。");
	if (status == 1)
		qm.sendNextPrev("我會一直待在這個地方，你只要來這裡找我就行了。\ r\n…………話說，你飼養的蜥蜴的外形非常奇特啊。 就像一隻龍…………。 不過，應該不可能是龍吧。");
	if (status == 2)
		qm.sendNextPrevS("#b.......................");
	if (status == 3)
		qm.sendAcceptDecline("好吧，我可以把你送到有#r#o9001028##k的地方去。 你想現在就去嗎？");
	if (status == 4){
		qm.forceStartQuest();
		qm.warp(922030002,1);
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
	if (status == 0)
		qm.sendYesNo("任務好像完成啦。 讓我看看你蒐集到的#b#v4000594:##t4000594##k吧。");
	if (status == 1)
		qm.sendNextPrev("呵呵……很好。 這樣的話，就可以執行我們的計畫了……");
	if (status == 2)
		qm.sendNextPrevS("#b喂……我有個問題……");
	if (status == 3)
		qm.sendNextPrev("不好意思，因為要處理你蒐集到的自由的靈魂，我現在很忙。 你能在我完成處理工作之後再來找我嗎？ 好像需要花費一點時間……");
	if (status == 4)
		qm.sendPrevS("#b（到人迹罕至的時間塔深處捕捉怪物，會對別人有什麼幫助嗎？雖然很想問他，但他看起來好像很忙。過一會兒再來找他吧。）\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 44669 exp",3);
	if (status == 5){
		qm.forceCompleteQuest();
		qm.gainItem(4000594, -100);
		qm.gainExp(44669);
		qm.dispose();
}
}