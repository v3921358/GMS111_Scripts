/*
	名字:	剑客之路
	地圖:	战士圣殿
	描述:	102000003
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
		qm.sendNext("你想走劍客之路嗎？ 我來為你簡單地說明一下劍客。 劍客是最一般意義上的戰士。 主要使用的武器是#b劍#k和#b斧#k。");
	if (status == 1)
		qm.sendNextPrev("作為戰士，劍客的技能中有很多自我强化技能。 讓自己熟練使用武器的#b精准武器#k，造成强力傷害的#b終極劍斧#k，提高攻擊速度的#b快速武器#k，使身體變得強壯的#b物理訓練#k等等。");
	if (status == 2)
		qm.sendNextPrev("當然還有更强大的攻擊技能。 你知道#b輕舞飛揚#k技能嗎？ 它是揮舞刀劍或者斧頭給予眼前的敵人施加二連擊的技能，要是有了它，狩獵也會比之前容易很多。");
	if (status == 3)
		qm.sendNextPrev("攻擊時若能啟動#b鬥氣集中#k的話，就可以累積鬥氣點數，並通過它使用更强大的鬥氣消耗技能。");
	if (status == 4)
		qm.sendNextPrev("好了，說明就到這裡。 下麵是選擇時間。 你想選擇劍客嗎？ 選擇的話，我就把你送到準備好的考場去。 在裡面蒐集#r30個含有黑暗力量的珠子#k，就可以成為真正的劍客。");
	if (status == 5)
		qm.sendAcceptDecline("只要你接受任務，就可以馬上開始考試。 如果不願意的話，就現在拒絕。 拒絕之後，聽聽其他道路的說明也不錯。 怎麼樣……你想參加劍客的考試嗎？");
	if (status == 6){
		qm.forceStartQuest();
		qm.warp(910230000,0);
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
		qm.sendYesNo("#t4031013#全部蒐集到啦。 非常好！ 我知道你一定可以做到。 你展現出了一個好劍客的資質。 現在你可以成為劍客了。 好的，最後我再問你一次。 你想成為劍客嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(110);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("好的！ 從現在起你就是#b劍客#k了！ 劍客是為了追求力量而不斷戰鬥的人……希望你不要失去鬥志，勇敢前行。");
		}
	if (status == 2)
		qm.sendOk("今後你會獲得比現在更强的力量，但是决不能把那種力量用在弱者身上。 必須把自己的力量用在正確的事情上，那是你的責任。");
	if (status == 3){
		qm.dispose();
}
}