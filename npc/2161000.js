/*
	名字:	班·雷昂
	地圖:	接见室
	描述:	211070100
*/

function start() {
	cm.sendAcceptDecline("你們是來打敗我的勇士嗎？或者你是反黑法師聯盟的？不管你是誰。。。如果我們確定彼此的目的，就沒有必要閒聊。。.\r\n快點，你們這些傻瓜!");
}

function action(mode, type, selection) {
	if (mode == 1 && cm.getMap().getAllMonstersThreadsafe().size() == 0) {
		cm.removeNpc(cm.getMapId(), 2161000);
		cm.spawnMob(8840010, 0, -181);
	if (!cm.getPlayer().isGM()) {
		cm.getMap().startSpeedRun();
		}
		}
	cm.dispose();
}