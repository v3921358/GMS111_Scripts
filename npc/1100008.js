/*
	名字:	奇鲁
	地圖:	码头&amp;lt;开往圣地&gt;
	描述:	200000161
*/

function start() {
	cm.sendYesNo("這艘船預定開往聖地，那裡是神獸和女皇希納斯居住的島。如果你對騎士感興趣，可以去那裡看看……怎麼樣？你想到聖地去嗎？移動時間大約是#b2分鐘#k，費用是#b2000楓幣#k.");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("天氣很好，就算是去趟旅遊也不錯！！");
		cm.dispose();
	} else {
	if(cm.getPlayer().getMeso() >= 2000) {
		cm.warp(200090020, 0);
		cm.gainMeso(-2000);
	} else {
		cm.sendOk("你隨身攜帶的楓幣不够。");
		}
	cm.dispose();
}
}
