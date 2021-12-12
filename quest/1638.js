/*
	名字:	[十字猎人]时间神官阿卡伊勒
	地圖:	降魔十字旅团据点
	描述:	931050500
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
	if (qm.getQuestStatus(1638) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1638) == 1) {
		qm.sendNext("阿卡伊勒好像回來了！ 我在時間神殿看到他了。 但是不知道他現在去了哪裡……");
		}
		}
	if (status == 1)
		qm.sendNextPrevS("#b阿卡伊勒？ 他到底是誰？");
	if (status == 2)
		qm.sendNextPrev("阿卡伊勒……他是黑魔法師軍團長的一員，黑魔法師被封印後，他就躲藏起來了。");
	if (status == 3)
		qm.sendNextPrevS("#b軍團長？ 那麼他的出現不就意味著黑魔法師回來了嗎？");
	if (status == 4)
		qm.sendPrev("那個還不太清楚。 總之現在正在發生一些奇怪的事情。 重現的阿卡伊勒和時空門……這之間肯定有什麼聯系。 阿卡伊勒曾做過黑魔法師的謀士，時空門的目的應該不單純是想讓冒險島世界陷入混亂。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 70000 exp");
	if (status == 5){
		qm.forceCompleteQuest();
		qm.gainExp(70000);
		qm.dispose();
}
}