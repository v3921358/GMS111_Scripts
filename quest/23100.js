/*
	名字:	反抗者的培训生
	地圖:	反抗者本部
	描述:	310010000
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
	if (qm.getQuestStatus(23100) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23100) == 1) {
		qm.sendNext("恭喜你成為反抗者，從一開始你的特殊能力就讓人矚目，我相信#b#p2151001##k肯定也是在你身上感受到了什麼，才會將你送來了這裡。");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("既然你已經成為了反抗者，就得認真修煉，好好陞級了吧？ 別擔心，我會慢慢將反抗者該具備的貭素一點點教給你的。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 100 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.forceStartQuest(23128, "1");
		qm.gainExp(100);
		qm.dispose();
}
}
