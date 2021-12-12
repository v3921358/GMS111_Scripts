/*
	名字:	可罗宾
	地圖:	生命之穴入口
	描述:	240040700
*/

var morph;

function start() {
	morph = cm.getMorphState();
	if (morph == 2210003 || cm.isQuestFinished(7301)) {
		cm.sendOk("我的兄弟！ 不要擔心人類的入侵。 我會保護你們的。 進來！");
	} else {
		var hp = cm.getPlayerStat("HP");
		if (hp > 500) {
			cm.addHP(-500);
		} else if (hp > 1 && hp <= 500) {
			cm.addHP(-(hp - 1));
			}
			cm.sendOk("人類！ 不得超過此範圍，離開這裡！");
}
}

function action(mode, type, selection) {
	if (morph == 2210003 || cm.isQuestFinished(7301)) {
		cm.cancelItem(2210003);
		cm.warp(240050000, 0);
	if (cm.haveItem(4031454)) { // Paladin
		cm.gainItem(4031454, -1);
		cm.gainItem(4031455, 1);
		}
	if (cm.getQuestStatus(6169) == 1) { // Temporary
		cm.gainItem(4031461, 1);
		}
	} else {
		cm.warp(240040600, "st00");
		}
	cm.dispose();
}