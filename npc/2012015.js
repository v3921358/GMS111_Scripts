/*
	名字:	冰峰雪域魔法石
	地圖:	通天塔&amp;lt;1层&gt; 
	描述:	200082100
*/

function start() {
	if (cm.haveItem(4001019)) {
		cm.sendOk("妳打算消耗一個#v4001019:"#快速移動到 #b#p2012014##k 嗎？");
	} else {
		cm.sendOk("使用#v4001019:"#啟動魔法石，能快速從#b#p2012015##k移動到#b#p2012014##k。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.gainItem(4001019, -1);
	cm.warp(200080200,0);
	cm.dispose();
}
