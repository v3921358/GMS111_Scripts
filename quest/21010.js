/*
	名字:	英雄的归来
	地圖:	寒冷森林1
	描述:	140090100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	}
	if (status == 3) {
		qm.sendOk("哎呀，不用客氣啦！送英雄一瓶藥水也不是什麼了不起的事。倘若您改變心意在告訴我吧。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendSimple("咦？#b#p1201000##k大人到這裡有什麼事情...啊，這位是不是#b#p1201000##k認識的人呢？\r\n#b#L0# 什麼？你說這位是英雄嗎?");
	if (status == 1)
		qm.sendNextPrev("     #i4001170#");
	if (status == 2)
		qm.sendNextPrev("這位正是#b#p1201000##k家族數百年等待的英雄！喔喔！難怪看起來不是什麼平凡的人物...");
	if (status == 3)
		qm.sendAcceptDecline("但是，因為黑魔法師的詛咒而在巨冰裡沉睡著，所以，好像英雄的體力都消耗掉了的樣子。#b我給你一個#b#v2000022:##t2000022##k，趕緊喝喝看#k。");
	if (status == 4){
		if (!qm.haveItem(2000022))
		qm.gainItem(2000022,1);
		qm.sendNext("您先大口喝下，我再繼續說下去~");
		}
	if (status == 5)
		qm.sendOkS("#b(藥水該怎麼喝呢？...想不起來了...)#k",3);
	if (status == 6){
		qm.forceStartQuest();
		qm.summonMsg(0xE);
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
		qm.sendNext("長久以來尋找英雄的痕跡，在冰雪中挖掘，果然真正的英雄出現了！預言果真是真的！#b#p1201000##k大人做了正確的選擇英雄回來了，現在沒有必要再畏懼黑魔法師了！");
	if (status == 1)
		qm.sendNextPrev("啊！真是的，我耽誤英雄太久了。先收拾起快樂的心情...其他企鵝應該也有同樣的想法。我知道您很忙，不過在前往村莊的路上 #b也請您和其他企鵝們談一談#k。可以和英雄談話，大家應該會很興奮!\r\n\r\n #fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000022# 5 #t2000022#\r\n#i2000023# 5 #t2000023#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 16 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainItem(2000022,5);
		qm.gainItem(2000023,5);
		qm.gainExp(16);
		qm.sendNext("想要升級嗎？不曉得您有沒有獲得技能點數。在楓之谷內透過轉職之後每上升1級就會獲得3點的技能點數。按下 #bK鍵#k 就能欄位就能確認。");
		}
	if (status == 3)
		qm.sendOkS("#b(這麼親切的說明，可是我什麼都想不起來。我真的是英雄嗎？那麼先確認技能看看...可是我該怎麼確認呢?)#k",3);
	if (status == 4){
		qm.summonMsg(0xF);
		qm.dispose();
}
}