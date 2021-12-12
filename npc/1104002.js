/*
	名字:	黑魔女
	地圖:	圣地
	描述:	913030000
*/

function start() {
	cm.sendNext("哦~哈哈~哈~又有個不怕死的過來拉！ 沒有那個實力，就不要充當英雄！ 看我如何收拾掉你個傻瓜！");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.removeNpc(cm.getMapId(), cm.getNpc());
		cm.spawnMonster(9001010,1); // Transforming
		}
	cm.dispose();
}