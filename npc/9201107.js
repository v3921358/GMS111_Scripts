/*
	名字:	战士大师
	地圖:	凝聚力测试
	描述:	610030500
*/

function start() {
	if (cm.getPlayer().getMap().getId() == 610030500) {
		cm.sendOk("難以置信的力量和勇氣，任何人都可以實現，但能讓戰士與眾不同的是他們鋼鐵般的意志，無論勝算如何，一個真正的戰士都會堅持到底，直到取得勝利。囙此，勇士密室是一條殘酷的道路，你必須打敗裡面的怪物，到達戰士雕像並獲得主劍，才能證明自己。");
		cm.dispose();
	} else if (cm.getPlayer().getMap().getId() == 610030000) {
		cm.sendOk("A legendary family of heroes, the de Vrisiens are the original founders of the Stormcasters. The family is unique, as each son or daughter inherits the full fighting techniques of their ancestors. This ability has proven to be immensely useful; as it allows for nearly unlimited strategy, improvisation and tactics to defeat all enemies. A true family for the generations.");
		cm.dispose();
	} else if (cm.getPlayer().getMapId() == 610030510) {
		if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() == 0) {
			if (!cm.haveItem(4001259,1)) {
			cm.gainItem(4001259,1);
			}
			cm.warp(610030500,0);
		} else {
			cm.sendOk("消滅所有的緋紅守護者。");
			}
		cm.dispose();
}
}