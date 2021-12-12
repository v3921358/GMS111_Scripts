/*
	名字:	卡利安
	地圖:	专业技术村庄
	描述:	910001000
*/

function start() {
	if (cm.getPlayer().getProfessionLevel(92040000) > 0) {
		cm.sendYesNo("您確定要放弃煉金術嗎？你將失去所有煉金術經驗/等級。");
	} else {
		cm.sendYesNo("你想學煉金術嗎？");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (cm.getPlayer().getProfessionLevel(92040000) > 0) {
			cm.sendOk("你已經忘卻煉金術技术。");
			cm.teachSkill(92040000, 0, 0);
		} else {
		if (cm.getPlayer().getProfessionLevel(92020000) > 0 || cm.getPlayer().getProfessionLevel(92030000) > 0 || cm.getPlayer().getProfessionLevel(92000000) <= 0) {
			cm.sendOk("你不能學習或放弃煉金術，因為你已經有了鍛造或配件工藝，或者你沒有草藥。");
			cm.dispose();
		} else {
			cm.sendOk("你已經學會了煉金術技术。");
			cm.teachSkill(92040000, 0x1000000, 0); //00 00 00 01
			}
			}
			}
		cm.dispose();
}