/*
	名字:	Amos the Strong
	地圖:	670010500
	描述:	670010500
*/

function start() {
	var em = cm.getEventManager("Amoria");
	if (em == null) {
		cm.sendOk("腳本錯誤，請稍後嘗試。");
		cm.dispose();
		return;
		}
	switch(cm.getMapId()) {
	case 670010500:
		if (!cm.isLeader()) {
			cm.sendOk("很抱歉，我不能與妳交談，請告訴妳的組長與我談話。");
			cm.dispose();
			return;
			}
		if (cm.haveItem(4031597,30)) {
			cm.mapMessage(6, "向右走，通過大門，可以到達下一個階段!");
			cm.warpParty(670010600);
			cm.gainItem(4031597,-30);

		} else {
			cm.sendOk("我需要組長一起給我30個#v4031597:##b#t4031597##k");
			}
			cm.dispose();
			break;
	case 670010600:
		if (!cm.isLeader()) {
			cm.sendOk("很抱歉，我不能與妳交談，請告訴妳的組長與我談話。");
			cm.dispose();
			return;
			}
			cm.warpParty(670010700);
			cm.dispose();
			break;
	case 670010700:
		if (!cm.isLeader()) {
			cm.sendOk("很抱歉，我不能與妳交談，請告訴妳的組長與我談話。");
			cm.dispose();
			return;
			}
		if (em.getProperty("apq4").equals("0") || em.getProperty("apq4").equals("1")) {
			cm.warpParty(670010700,18);
			cm.spawnMob(9400536,1,674,511);
			em.setProperty("apq4", "2");
		} else {
			if (cm.haveItem(4031594,1)) {
			cm.gainItem(4031594,-1);
			cm.warpParty(670010800, -1);
		} else {
			cm.sendOk("請消滅怪物，並把#v4031594:##b#t4031594##k帶回來作為證物。");
			}
			}
			cm.dispose();
			break;
}
}