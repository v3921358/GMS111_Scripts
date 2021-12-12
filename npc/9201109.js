/*
	名字:	魔法大师
	地圖:	凝聚力测试
	描述:	610030500
*/

function start() {
	if (cm.getPlayer().getMap().getId() == 610030500) {
		cm.sendOk("作為一個强大的精英法師，應當知道智慧的價值，這是一個法師的標誌性品質，囙此，魔法師室是一個扭曲的迷宮，充滿了詭異的概念——傳送技能是你唯一可以在裡面走動的技能，你還必須殺死裡面的許多怪物，在你解開迷宮並擊敗其中的所有敵人後，尋找到法師雕像裏隱藏的魔法杖。");
		cm.dispose();
	} else if (cm.getPlayer().getMap().getId() == 610030000) {
		cm.sendOk("A name forever remembered, Rafael was an exceptionally skilled sorcerer, and the foremost master of mental magic powers, telekinesis and telepathy. In addition to that, he was one of the 'Elite Mages' who mastered all the elements. He was last seen looking for the 'Temple of the Elementals' to turn the tide against the invading Krakian Army...");
		cm.dispose();
	} else if (cm.getPlayer().getMapId() == 610030521) {
		if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() == 0) {
			cm.warp(610030522,0);
		} else {
			cm.sendOk("消滅所有的怪物。");
			}
			cm.dispose();
	} else if (cm.getPlayer().getMapId() == 610030522) {
		if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() == 0) {
			if (!cm.haveItem(4001257,1)) {
			cm.gainItem(4001257,1);
			}
			cm.warp(610030500,0);
		} else {
			cm.sendOk("消滅所有的怪物。");
			}
			cm.dispose();
}
}