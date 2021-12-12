/*
	名字:	人偶师的痕迹
	地圖:	特鲁的情报商店
	描述:	104000004
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("嗯？喂喂，怎麼這樣？大陸最高情報商人得到的最新消息！可以相信的。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("忙嗎，英雄大人？這段期間，我用所有的方法打聽了維多利亞島當中，找到了有趣的情報。就是關於#o9300346#的…");
	if (status == 1)
		qm.sendNextPrev("你知道? 英雄教訓#b#o9300346##k後在#m102010100#裡的入口不再運作了 ? #o9300346#傢伙 ,感覺在別的地方準備居住的地方。");
	if (status == 2)
		qm.sendAcceptDecline("有人看見#o9300346#躲進了#b诅咒森林#k的#b#m101040310##k裏的#b人偶師的藏身處#k。 情報很可靠。 快去那邊擊退#r#o9300346##k吧。");
	if (status == 3){
		qm.forceStartQuest();
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
		qm.sendSimple("看來打倒了#o9300346#…怎麼是不高興的表情啊？發生什麼事了？#b#L0#(告訴了根本就沒有關於#t4032323#的情報。)#l\n#k");
	if (status == 1)
		qm.sendPrev("啊哈！是那個啊，哈哈哈…是那個的話不用擔心。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s21100005#  #q21100005#  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 7500 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.teachSkill(21100005, qm.getPlayer().getSkillLevel(21100000), 20);
		qm.gainExp(7500);
		qm.dispose();
}
}