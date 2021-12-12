/*
	名字:	奇怪的石像
	地圖:	人偶师的秘密通道
	描述:	910510100
*/

function start() {
	if (cm.getPlayerCount(910510202) <= 0 && cm.isQuestActive(21734) ==1 ) {//判断地图是否有人。判断任务
		cm.sendOk("居然被你找到这里来！");
	} else {
		cm.sendOk("裡面有人或者沒有接受相關任務而無法進入此洞穴！");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.getMap(910510202).resetFully();//地图刷新
	cm.spawnMobOnMap(9300346,1,205,257,910510202);//召唤怪物
	cm.warp(910510202, 0);
	cm.dispose();
}