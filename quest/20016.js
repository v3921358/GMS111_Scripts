/*
	名字:	你了解黑暗魔法师吗？
	地圖:	圣地
	描述:	130000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 12) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("你好#h0#。歡迎來到#p1101000##m130000000#。我的名字是#b#p1101002##k，現時擔任年輕女皇的戰術家。我們最好認識一下，因為我們會經常見面。");
	if (status == 1)
		qm.sendNextPrev("我肯定你有很多問題，因為一切都發生得太快了。 我會一個接一個地解釋這一切，把所有你想知道的問題講給你聽。");
	if (status == 2)
		qm.sendNextPrev("這個島叫埃列夫。 多虧了#b#p1101000##k的魔法，這個島会像一艘船一樣漂浮在空中，在#b楓樹世界#k巡邏。 然而，現在我們停留在這裡是有原因的。");
	if (status == 3)
		qm.sendNextPrev("年輕的皇后#b#p1101000##k是楓樹世界的統治者。 但她不喜歡打破這個世界的寧靜。 她喜歡從遠處觀察，以確保楓葉世界一切順利。");
	if (status == 4)
		qm.sendNextPrev("但現時情况並非如此。我們在楓樹世界各地都發現了預示著#b黑魔法師復活#k的迹象。我們不能讓黑魔法師回來像過去一樣恐嚇着現在的楓葉世界。");
	if (status == 5)
		qm.sendNextPrev("今天的人們還沒有意識到黑魔法師有多可怕。我們都被現在所享受的寧靜所寵壞了，忘記了楓樹世界曾經是多麼的混亂和可怕。為了保持現有的一切，如果我們不採取行動，否則黑魔法師將再次統治楓葉世界。");
	if (status == 6)
		qm.sendNextPrev("這就是為什麼這位年輕的皇后决定組建一個勇敢的楓樹騎士團的原因。 你知道你需要做什麼，對嗎？ 一定要成為有能力保護楓葉世界的騎士。");
	if (status == 7)
		qm.sendNextPrev("我們必須變得更强大，這樣才能在黑魔法師復活時擊敗他。我們的主要目標就是封锁一切破坏楓葉世界的活动。");
	if (status == 8)
		qm.sendNextPrev("我的解釋到此為止。你有瞭解現在的處境了嗎？");
	if (status == 9)
		qm.sendNextPrev("我很高興你清楚我們現時的情况，但是你知道，以你現在的能力，甚至沒有足够的力量去面對黑魔法師的爪牙，更不用說黑魔法師了。你又將如何保護楓葉世界？");
	if (status == 10)
		qm.sendNextPrev("雖然你現在已經被接納為初心者，但你還不能被認可為正式的騎士。 現在的你只不過是#p1101000#騎士團的學徒，所以你要銘記這一點。");
	if (status == 11)
		qm.sendNextPrev("沒有人會在第一天就能開始成為一個强大的騎士。#b#p1101000##k想要的是一個有勇氣的，可以通過嚴格訓練不斷向上激勵成長的騎士。 所以，你首先應該在訓練中一點一點累計經驗。");
	if (status == 12)
		qm.sendAcceptDecline("從現在開始，#b#h0##k你要試著學習，如何成為一個勇敢的騎士，從左邊的入口進入訓練林。 在那裡，你會找到培訓講師#b#p1102000##k，他將教你如何變得更強。 在你到達Lv10之前，我不想看到你漫無目的地四處遊蕩。 你聽到了嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 380 exp");
	if (status == 13){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(35);
		qm.dispose();
}
}