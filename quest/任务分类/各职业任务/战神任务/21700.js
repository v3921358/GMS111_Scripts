/*
	名字:	新的开始
	地圖:	里恩
	描述:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 5) {
		qm.sendOk("哎呀？ 你要拒絕，是覺得自己一人也可以修練的意思嗎？ 比起自己一個人，接受其他人的幫助應該可以得到更好的結果啊，現在也該學學跟其他人相處的方法了。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("一副好像想起什麼的臉，果然終極之矛認出你的樣子。那麼你就是#b使用過終極之矛的英雄，狂狼勇士#k沒錯。這以外還沒有想起什麼呢？ 例如與終極之矛相關的技能...");
	if (status == 1)
		qm.sendNextPrevS("#b(告訴我了幾個記得的技能.)#k");
	if (status == 2)
		qm.sendNextPrev("雖然不多但也有收穫了。 那麼從現在起要用盡全力找回以前的能力了。雖然喪失記憶，但至少是曾經做過的事，一定可以很快地找回能力的。");
	if (status == 3)
		qm.sendNextPrevS("#b要怎麼找回能力呢？");
	if (status == 4)
		qm.sendNextPrev("這個嘛... 只有一個辦法. 修練! 修練! 修練! 修練在修練的話，總有一天身體可以找回那個被遺忘的感覺！");
	if (status == 5)
		qm.sendAcceptDecline("如果使用更熟悉的武器應該會更好，給您一把#b#v1442077:##k，帶著那個武器去#b#m140010100##k見#b企鵝老師#p1202006##k他會對你的修練提供幫助的。");
	if (status == 6){
		if(!qm.canHold(1442077, 1)) {
		qm.sendOk("無法收納物品，請清理背包空間。");
		qm.dispose();
		return;
		}
		qm.forceStartQuest();
		if(!qm.haveItem(1442077, 1)) qm.gainItem(1442077, 1);
		qm.dispose();
}
}