/*
	名字:	马斯特玛
	地圖:	时间通道
	描述:	220050300
*/

function start() {
	cm.sendYesNo("你確定好要挑戰自我了麼？");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(927000100, 0);
		cm.spawnMonster(9001041,1);//召唤怪物
		}
	cm.dispose();
}