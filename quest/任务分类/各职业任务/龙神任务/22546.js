/*
	名字:	龙的种类和特征(下)
	地圖:	戈壁地带
	描述:	102020400
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
	if (qm.getQuestStatus(22546) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(22546) == 1) {
		qm.sendNext("哦，你終於來啦，我聽#p1032104#博士說，為了找那本書，你好像在金銀島上轉了一大圈。 雖然這麼晚才還回來，但是我想你也一定很辛苦，我就不多計較了。 你在書裡面找到想要的知識了嗎？ 你想知道什麼呢？");
		}
		}
	if (status == 1)
		qm.sendNextPrevS("#b我想瞭解一下瑪瑙龍……");
	if (status == 2)
		qm.sendNextPrev("瑪瑙龍？ 我也看過那本書，瑪瑙龍不是已經滅絕了嗎？ 你在進行相關的研究嗎？ 沒想到你竟然研究這麼高深的學問。 好吧，我會盡我的能力來幫助你的。");
	if (status == 3)
		qm.sendNextPrev("雖然#m101000003#有很多關於龍的書，但關於瑪瑙龍的只有這一本。 等#m101000003#有了新書之後，我會通知你的。");
	if (status == 4)
		qm.sendNextPrev("還有，我的朋友之中，有個名叫#b#p2081000##k的人，他是哈夫林，是在#m240000000#侍奉龍的種族。 我會問問他有關瑪瑙龍的事情，有消息的話，我會告訴你的。");
	if (status == 5)
		qm.sendNextPrev("瑪瑙龍……瑪瑙龍長著黑色透明的鱗片和金色的角。 你的蜥蜴的角雖然是金色的，但鱗片卻不是黑色的……嗯……");
	if (status == 6)
		qm.sendNextPrevS("#b#b（如果被#p1013000#發現是龍的話，也許會把它殺掉！）它不是龍，是蜥蜴。");
	if (status == 7)
		qm.sendPrev("哎呦，我的耳朵。知道了。谁说它是龙了？是的，它应该是蜥蜴……嗯，玛瑙龙……\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 10000 exp");
	if (status == 8){
		qm.forceCompleteQuest();
		qm.gainExp(10000);
		qm.dispose();
}
}