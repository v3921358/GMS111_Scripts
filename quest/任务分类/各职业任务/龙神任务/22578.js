/*
	名字:	秘密团体的第二个任务
	地圖:
	描述:	米乐
*/

var status = -1;

function start(mode, type, selection) {
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
		qm.sendNext("主人，主人～這次的事情也完成了嗎？ 這樣就能幫助到冒險島世界的人嗎？");
	if (status == 1)
		qm.sendNextPrevS("#b消滅僵屍的話，一定會對#m211000000#地區起到幫助。");
	if (status == 2)
		qm.sendNextPrev("嘿嘿，是嗎～怪物消滅得越多越好。 但是那個#t4032471#是什麼啊？");
	if (status == 3)
		qm.sendNextPrev("#b這個嘛？ 我也不知道。 他們是個好團體，應該是用來做什麼好事的吧。");
	if (status == 4)
		qm.sendNextPrev("是嗎？ 但是那個團體為什麼要秘密行動呢？ 這樣的話，做的好事別人就不可能知道了啊？");
	if (status == 5)
		qm.sendNextPrevS("#b不是有句話說“左手施惠，不讓右手知道”嗎？");
	if (status == 6)
		qm.sendNextPrev("左手，右手？ 那是什麼意思？ 是要孤立右手嗎？");
	if (status == 7)
		qm.sendNextPrevS("#b……不，不是這個意思……是說做好事不應該到處宣揚，要默默地做。");
	if (status == 8)
		qm.sendNextPrev("嗯？ 我希望別人能知道。 這可真奇怪。 太小心謹慎了。 雖然很有意思，但我沒辦法理解。 主人可以理解嗎？");
	if (status == 9)
		qm.sendPrevS("#b我也不是沒有想到……一定是另有深意。 不過不管怎樣，反正是好事。 有問題的話，等下次接到任務的時候再問吧。 問問他們到底是什麼團體。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 50000 exp",3);
	if (status == 10){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(50000);
		qm.dispose();
}
}