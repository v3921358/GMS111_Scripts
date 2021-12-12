/*
	名字:	J
	地圖:	矿山后山
	描述:	931000030
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else
	status--;
	if (status == 0)
		cm.sendNext("呼…终于甩掉了。虽然不觉得会输给那个家伙，但却没有信心保护你们。你们为什么会在那里？太危险了。村庄的老人没有跟你们说不要到矿山这边吗？");
	if (status == 1)
		cm.sendNextPrev("對、對不起。#h0#沒有錯，反而還救了我。", 2159007);
	if (status == 2)
		cm.sendNextPrev("嗯？ 這樣看來，你…不像是村莊的人。 這奇怪的衣服到底是什麼？ 你該不會是被實驗的孩子吧？");
	if (status == 3)
		cm.sendNextPrev("#b（简单地说明刚才发生的事情。）#k", 2159007);
	if (status == 4)
		cm.sendNextPrev("…呼…這樣啊…雖然猜測黑色之翼可能在進行危險的計畫，沒想到是真的…真是可怕，快去通知大家，要想出對策才行。");
	if (status == 5)
		cm.sendNextPrevS("#b那個…請問你是誰呢？ 為什麼會突然在那裡出現？ 還有，為什麼會救我們呢？");
	if (status == 6)
		cm.sendNextPrev("…這個…你們也都長大了，也遇到這樣的事情，想瞞也瞞不了…好吧，就告訴你。 你也知道我們的村莊被黑色之翼統治的事吧？");
	if (status == 7)
		cm.sendNextPrev("被搶走的礦山、被控制的議會、監視者的存在……我們村莊的人像奴隸一樣乖乖的聽從他們的命令。 但是黑色之翼再厲害，也沒有辦法統治我們的心。");
	if (status == 8)
		cm.sendNextPrev("我們是末日反抗軍，和隊友一起對抗黑色之翼的反抗軍。 我不能告訴你名字，但可以告訴你我的代號叫J。 現在瞭解吧？");
	if (status == 9)
		cm.sendNextPrev("懂了的話，就快回村莊吧，這裡太危險了，不要再跑到這裡來。 曾經是實驗者的孩子，讓他在這裡有可能再被抓回去，我把他帶回我隊友那裡。 看見我的事要保密，不可以說出去。");
	if (status == 10)
		cm.sendNextPrevS("#b我可以再問一個問題嗎？ 我可以參加末日反抗軍嗎？");
	if (status == 11)
		cm.sendPrev("呵…你想也對抗黑色之翼啊？ 只要你有心，也不是不能加入末日反抗軍。 但不是現在，等你到Lv10以上，末日反抗軍會先和你連絡。 如果到時還想加入的話會有機會再見面的，那就先這樣了。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#  \r\n#i2000000# 3 #t2000000#\r\n#i2000003# 3 #t2000003# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 90 exp");
	if (status == 12){
		cm.forceCompleteQuest(23007);
		cm.gainItem(2000000, 3);
		cm.gainItem(2000003, 3);
		cm.gainExp(90);
		cm.dispose();
		cm.warp(310000000, 8);
}
}