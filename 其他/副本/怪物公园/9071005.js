/*
	名字:	休彼德蔓
	地圖:	1阶段 : 石人寺院1
	描述:	952000000
*/


function start() {
	cm.sendYesNo("妳想回到怪物公園?");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(951000000);
		}
	cm.dispose();
}