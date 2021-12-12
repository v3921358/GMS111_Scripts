/*
	名字:	对秘密团体的疑惑
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
		qm.sendNext("喂，主人，你不覺得有點奇怪嗎？ 剛才做的黑色之翼的任務……有很多可疑之處。 我還以為從#o9001028#手上解救出#t4000144#是件好事呢…");
	if (status == 1)
		qm.sendNextPrevS("#b沒有必要故意把那個東西放在袋子裏，對吧？ 而且必須在#m922030010#前面打開，好像有點奇怪。 如果要讓它回歸自由的話，在什麼地方放走應該都一樣啊？");
	if (status == 2)
		qm.sendNextPrev("嗯，放出去之後，你聽到衛兵們在發火嗎？ 說對他們站崗造成了妨礙。 對吧？ 衛兵是壞人嗎？");
	if (status == 3)
		qm.sendNextPrevS("#b而且#o9300390#消失的時候說的話……太奇怪了。 說我們是小偷……雖然消滅了怪物，但我的心裡感覺很不好受。");
	if (status == 4)
		qm.sendNextPrev("雖然那個名叫#p1013203#的人類讓我們不要在意，但我想來想去還是覺得很奇怪。 這次的事情好像不是什麼好事。 你覺得呢，主人？");
	if (status == 5)
		qm.sendPrev("名叫黑色之翼的團體……那是個秘密團體，一定隱藏著某種我們不知道的事情，對吧？ 雖然我不想去懷疑……但還是覺得很可疑。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 30000 exp");
	if (status == 6){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(30000);
		qm.dispose();
}
}