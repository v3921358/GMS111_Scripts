/*
	名字:	阿卡伊勒的痕迹
	地圖:	燃烧的神木村4
	描述:	272000410
*/

var status = -1;

function start(mode, type, selection) {
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
		qm.sendNext("原來在這裡啊。 讓我找了好久。 我從克洛烏那裡收到了報告，說#b#h0##k你救了謝麗爾。 ");
	if (status == 1)
		qm.sendNextPrevS("#b那是必須要做的事情。 對了，阿卡伊勒好像到封印黑魔法師的過去的時間神殿去了。");
	if (status == 2)
		qm.sendNextPrev("是嗎？…… 已經找到阿卡伊勒的痕迹了嗎?……比我預想的還要快。");
	if (status == 3)
		qm.sendNextPrevS("#b……格萊特？");
	if (status == 4)
		qm.sendPrev("呵呵，我不能讓你這樣卑賤的東西跟在阿卡伊勒後面。 這裡將是你的墳墓……..");
	if (status == 5){
		qm.forceStartQuest();
		qm.spawnMob(9300487, 345, 2);
		qm.dispose();
}
}