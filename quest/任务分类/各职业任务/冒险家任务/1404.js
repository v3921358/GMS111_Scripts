/*
	名字:	想成为飞侠的话
	地圖:	废都爵士酒吧
	描述:	103000003
*/

var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 3)
	status++;
	status++;
	if (status == 0)
		qm.sendNext("麥加說的那個人就是你？#h0#……嗯，據她說，你是個很有天賦的小孩……喂，你想成為飛俠嗎？ 你知道飛俠嗎？");
	if (status == 1)
		qm.sendNextPrev("有些人覺得飛俠是些偷偷摸摸的小偷，但其實不是這樣的。 冒險島世界的飛俠是在黑暗中用鋒利的短刀和飛鏢戰鬥的人。 可能有一點不是那麼堂堂正正，但是這就是飛俠的本質，沒有必要否定。");
	if (status == 2)
		qm.sendNextPrev("飛俠是可以用快速强力技能攻擊敵人的職業。 雖然你體力較弱，但因為行動快速，所以可以輕鬆地躲避怪物。 因為運氣很强，所以擅長爆擊。");
	if (status == 3)
		qm.sendAcceptDecline("怎麼樣？ 你想一起踏上飛俠之路嗎？ 如果你决定選擇飛俠之路，我就使用轉職官的特權，邀請你到#b廢都的廢都酒吧#k去……那是個隱秘的地方，你應該感到榮幸。#r但是如果更喜歡其他職業的話，你可以拒絕。 我會為你推薦飛俠之外的其他道路#k。");
	if (status == 4){
		qm.forceStartQuest();
		qm.warp(103000003);
		qm.dispose();
		}
	if (status == 5)
		qm.sendSimple("你不喜歡飛俠之路嗎？ 不喜歡的話，我也不想勉强。 那你想選擇什麼職業呢？\r\n#b#L1#戰士#l \r\n#b#L2#魔法師#l \r\n#b#L3#弓箭手#l \r\n#b#L5#海盜#l");
	if (status == 6){
		if (selection == 1)
			qm.sendOk("你想走戰士之路嗎？ 雖然很遺憾，但我尊重你的選擇。#b武術教練#k會聯系你的。 你可以通過#b左側的任務提示#k查看。");
		if (selection == 2)
			qm.sendOk("你想走魔法師之路嗎？ 雖然很遺憾，但我尊重你的選擇。#b漢斯#k會聯系你的。 你可以通過#b左側的任務提示#k查看。");
		if (selection == 3)
			qm.sendOk("你想走弓箭手之路嗎？ 雖然很遺憾，但我尊重你的選擇。#b赫麗娜#k會聯系你的。 你可以通過#b左側的任務提示#k查看。");
		if (selection == 5){
			qm.sendOk("你想走海盜之路嗎？ 雖然很遺憾，但我尊重你的選擇。#b凱琳#k會聯系你的。 你可以通過#b左側的任務提示#k查看。");
		}
		if (selection > 0 && selection < 6)
		qm.forceStartQuest(1406, selection);
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("嗯？ 還想再考慮一下嗎？");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("歡迎來到廢都酒吧。。 呵呵，好了，做好成為飛俠的準備了嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142107:#   #t1142107# \r\n#i1472061:#   #t1472061# \r\n#i1332063:#   #t1332063# \r\n#i2070015:# 500  #t2070015#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.forceStartQuest(2899,"1");
		qm.changeJob(400);
		qm.resetStats(4, 4, 4, 25);
		qm.gainItem(1142107, 1);
		qm.gainItem(1472061, 1);
		qm.gainItem(1332063, 1);
		qm.gainItem(2070015, 500);
		qm.sendNext("現在你就是飛俠了。 你已經可以使用飛俠技能了，打開技能窗看看吧。 等級升高之後，就能學習更多的技能。");
		}
	if (status == 2)
		qm.sendNext("光是技能還不够。 内容也必須符合飛俠的需要，才能說是真正的飛俠。 飛俠的主要内容是運氣，輔助内容是敏捷。 不知道提高内容的方法的話，就使用#b自動分配#k。");
	if (status == 3)
		qm.sendNextPrev("我來送你一件禮物。 我已經幫你新增了裝備、其他欄的格數。 背包的空間總是越多越好。 呵呵……。");
	if (status == 4)
		qm.sendNextPrev("我來告訴你一點需要注意的地方。 新手雖然沒關係，但是不是新手的人如果死了，之前積累的經驗值就會受到損失。 小心一點。 要是辛苦積累到的經驗值受到損失，豈不是很冤枉？");
	if (status == 5)
		qm.sendPrev("我能教你的只有這些……我給了你一件適合你用的武器，希望你能一邊旅行，一邊修煉。");
	if (status == 6){
		qm.dispose();
}
}