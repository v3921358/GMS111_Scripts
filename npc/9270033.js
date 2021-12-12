/*
	名字:	鲍勃
	地圖:	幽灵船守卫
	描述:	541010100
*/

function start() {
	cm.sendYesNo("你想離開這個該死的地方？");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(541010060);
		}
	cm.dispose();
}