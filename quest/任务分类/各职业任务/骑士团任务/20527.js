/*
	名字:	骑士的品格
	地圖:	圣地
	描述:	130000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("怎麼會這樣……你到了100級，騎寵還是普通#t1902005#嗎？ 看你臉都紅了。 你覺得這樣能保持高級騎士的品味嗎？");
	if (status == 1)
		qm.sendNextPrev("相信每個人都會和你說，你這種行為會給女皇的名譽造成影響。 希望你為女皇著想，作出正確的行動。 你去見見#b#p1102002##k，他會告訴你#b更强的騎寵#k的事情。 ");
	if (status == 2)
		qm.sendAcceptDecline("你該不會忘了#p1102002#的位置吧？…… 不會真忘了吧？ 為了飼養#t1902005#，他就在#b#m130010220##k。");
	if (status == 3){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
}
}