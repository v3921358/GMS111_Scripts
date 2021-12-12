/*
	名字:	倒下的骑士
	地圖:	黑魔女的洞穴
	描述:	924010100
*/

function start() {
	if (cm.getPlayerCount(913030000) == 0) {
		cm.sendYesNo("快！ 時間來不急了，黑巫婆正在用魔法攻佔聖地，快去制止即將發生的一切！");
	} else {
		cm.sendOk("黑巫婆正在與其他騎士戰鬥中。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("你難道忘記了自己的職責所在嗎？");
	} else {
		cm.warp(913030000, 0);
		cm.spawnNpc(1104002,-430, 88);
		}
	cm.dispose();
}