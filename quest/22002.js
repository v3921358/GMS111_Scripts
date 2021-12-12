/*
	名字:	早餐是三明治
	地圖:	前院
	描述:	100030102
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("你拿飯給#p1013102#吃了嗎？那麼#b#h0##k你也來吃早餐。今天的早餐是#v2022620:##t2022620#。我拿出來了。實際上如果你不幫忙拿東西給#p1013102#吃，那我也不打算讓你吃早餐。");
	if (status == 1)
		qm.sendAcceptDecline("來，我會給你#b三明治#k吃，吃完之後去找媽媽，她有事情要交代你做。");
	if (status == 2)
		qm.sendPrevS("#b(想說的話？總之先吃了 #t2022620#再回家去。)#k \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2022620# 1 #t2022620#",3);
	if (status == 3){
		qm.forceStartQuest();
		qm.evanTutorial("UI/tutorial/evan/3/0", 1);
		qm.gainItem(2022620, 1);
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
		qm.sendAcceptDecline("吃過早餐了嗎？#h0#？那麼可以幫媽媽一個忙嗎 ？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1003028# #t1003028# 1個 \r\n#i2022621# #t2022621# 5個 \r\n#i2022622# #t2022622# 5個 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 60 exp");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.evanTutorial("UI/tutorial/evan/4/0", 1);
		qm.gainItem(1003028, 1);
		qm.gainItem(2022621, 5);
		qm.gainItem(2022622, 5);
		qm.gainExp(60);
		qm.dispose();
}
}