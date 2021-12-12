/*
	名字:	弓箭手大师
	地圖:	凝聚力测试
	描述:	610030500
*/

function start() {
	if (cm.getPlayer().getMap().getId() == 610030500) {
		cm.sendOk("一個被稱為守護大師的傳奇時代正等著你的到來，如果想要成為王者，就必須通過密室的考驗來證明自己的能力！你必須使用你最强大的攻擊，消滅一切阻礙你的怪物，並到達弓箭手雕像以獲得祖先的弓箭，以此證明！");
		cm.dispose();
	} else if (cm.getPlayer().getMap().getId() == 610030000) {
		cm.sendOk("One of the only known Holy Archers, Lockewood is one of the Keep's most famous heroes. Of particular note is his custom white and gold battle barb, said to be blessed by a powerfull goddess. His aim was tremendously accurate over long distanes. Feared and respected for his 'Genesis Arrow' and 'Doom Phoenix', he once struck down six Typhons from the Valley of Heroes.");
		cm.dispose();
	} else if (cm.getPlayer().getMapId() == 610030540) {
		if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() == 0) {
			if (!cm.haveItem(4001258,1)) {
			cm.gainItem(4001258,1);
			}
			cm.warp(610030500,0);
		} else {
			cm.sendOk("消滅所有的守護者。");
			}
		cm.dispose();
}
}