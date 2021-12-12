/*
	名字:	精灵之王
	地圖:	燃烧的废墟
	描述:	272000310
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
		qm.sendNext("你救了戰神和我們種族，現在該去救雙弩精靈了。 她估計也傷得不輕。");
	if (status == 1)
		qm.sendNextPrevS("#b是的，看上去情况比戰神還要糟糕。 該怎麼幫助她呢？");
	if (status == 2)
		qm.sendAcceptDecline("雙弩精靈承受了世界上所有精靈的詛咒，囙此正在忍受更大的痛苦。 如果她這樣倒下的話，精靈們也會全部消失。 為了封锁這樣的事情發生，必須幫助雙駕精靈重新站起來。 為此，我能借助你的力量嗎？");
	if (status == 3)
		qm.sendNextPrevS("#b沒問題，我很樂意幫助你。");
	if (status == 4)
		qm.sendNextPrev("請把你的力量借給我一些。 你的體力可能會突然下降，別害怕。");
	if (status == 5){
		qm.getPlayer().addHP(999999);
		qm.getPlayer().addHP(-2000);
		qm.sendNextPrev("真讓人吃驚。 你體內的能力不輸於剛才見到的所有英雄。 我暫時恢復了大部分的能力。 我會用這個力量，為你製造拯救雙駕精靈的結晶。 稍等一下。");
		}
	if (status == 6)
		qm.sendPrev("拿着我给你的#v4033082:#阿弗利埃的精髓，去唤醒#b双警精灵#k。只要轻轻碰一碰她，就行了。");
	if (status == 7){
		qm.forceStartQuest();
		if(!qm.haveItem(4033082, 1)) qm.gainItem(4033082, 1);
		qm.dispose();
}
}
