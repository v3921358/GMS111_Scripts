/*
	名字:	Konpei
	地圖:	武器庫
	描述:	801040004
*/

function start() {
	if (cm.getPlayerCount(801040100) == 0) {       //地图人数
		cm.sendOk("老闆就在裡面，把從女老闆哪裡得到的#v4000138:##b#t4000138##k丟到擺有樹樁的窗臺下，引他出現！");
	} else {
		cm.sendOk("有其它人正在騷擾老闆，還得稍等一下！");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.resetMap(801040100);    //刷新地图
	cm.warp(801040100,0);
	cm.dispose();
}