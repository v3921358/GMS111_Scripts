/*
	名字:	冰雷法师之路
	地圖:	魔法密林图书馆
	描述:	101000003
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("你想選擇冰雷法師嗎？ 因為主要使用冰内容和電内容的攻擊魔法，囙此被稱為冰雷法師。");
	if (status == 1)
		qm.sendNextPrev("還蠻有魔法師的樣子的麼，還會使用較高等級的魔法。 如會吸收敵人魔量的#b魔力吸收#k或者可提高隊員魔力的#b精神力#k，還有可使用更强大之魔法的基本技能#b咒語精通#k和#b智慧激發#k等等。");
	if (status == 2)
		qm.sendNextPrev("不過冰雷系法師的特點當屬向敵人射出强大冰塊的#b冰凍術#k和生成電場並向6個敵人施放强力閃電的#b雷電術#k。兩者都是非常强大的攻擊技能。");
	if (status == 3)
		qm.sendNextPrev("說明這樣就夠了吧……？ 魔法要直接使用才會體會到其中的樂趣。 你想選擇冰雷法師之路嗎？ 選擇的話，我就來考考你有沒有成為法師的資格。");
	if (status == 4)
		qm.sendAcceptDecline("考試很簡單……只要在準備好的考場上消滅怪物，蒐集#r30個含有黑暗力量的珠子#k就行……你想馬上參加考試嗎？ 接受的話，我就把你送到考試之林去。");
	if (status == 5){
		qm.forceStartQuest();
		qm.warp(910140000,0);
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
		qm.sendYesNo("#t4031013#全部蒐集到啦……我知道你一定很輕鬆就能通過。 好的，終於……我來讓你變成冰雷法師。 準備好了嗎……？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(220);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("好的……從現在開始，你就是#b冰雷法師#k了……法師是以較高的智力為基礎，使用自然力量壓制敵人的人……希望你一定要努力新增學識……..");
		}
	if (status == 2)
		qm.sendOk("法師必須變得更強…但是决不能把那種力量用在弱者身上。 將自己的力量用在正確的道路上……遠比變强難得多…….");
	if (status == 3){
		qm.dispose();
}
}