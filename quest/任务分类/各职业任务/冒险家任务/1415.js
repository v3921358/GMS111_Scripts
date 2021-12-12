/*
	名字:	火毒法师之路
	地圖:	魔法密林图书馆
	描述:	101000003
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 5) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("火毒法師就像名字所說，是法師，更高等級的稱為巫師。 因為可以使用的魔法分為火内容和毒内容，所以才被稱為火毒法師。");
	if (status == 1)
		qm.sendNextPrev("還蠻有魔法師的樣子的麼，還會使用較高等級的魔法。 如會吸收敵人魔量的#b魔力吸收#k或者可提高隊員魔力的#b精神力#k，還有可使用更强大之魔法的基本技能#b咒語精通#k和#b智慧激發#k等等。");
	if (status == 2)
		qm.sendNextPrev("但是火毒系法師的特點無疑當屬射出强力火焰箭的#b火焰讚歌#k與射出劇毒水滴連同周圍的敵人全部中毒的#b毒霧術#k了。 兩者都是非常强大的攻擊技能。");
	if (status == 3)
		qm.sendNextPrev("受的傷害會提高至給予敵人持續傷害的數量的#b元素吸收#k與生成火焰牆的#b燎原之火#k等也是非常有用的技能。");
	if (status == 4)
		qm.sendNextPrev("介紹姑且到此為止如何……重要的是，魔法還得親自體驗才是最有意思的。 那麼，你要選擇火毒法師之路嗎？ 若如此，我要考驗一下你是否具有成為法師的資格。");
	if (status == 5)
		qm.sendAcceptDecline("考試很簡單……只要在準備好的考場上消滅怪物，蒐集#r30個含有黑暗力量的珠子#k就行……你想馬上參加考試嗎？ 接受的話，我就把你送到考試之林去。");
	if (status == 6){
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
		qm.sendYesNo("#t4031013#全部蒐集到啦……我知道你一定很輕鬆就能通過。 好的，終於……我來讓你變成火毒法師。 準備好了嗎……？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(210);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("好的……從現在開始，你就是#b火毒法師#k了……法師是以較高的智力為基礎，使用自然力量壓制敵人的人……希望你一定要努力新增學識…..");
		}
	if (status == 2)
		qm.sendOk("法師必須變得更強…但是决不能把那種力量用在弱者身上。 將自己的力量用在正確的道路上……遠比變强難得多…..");
	if (status == 3){
		qm.dispose();
}
}