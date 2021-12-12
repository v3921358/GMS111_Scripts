/*
	名字:	埃珅
	地圖:	专业技术村庄
	描述:	910001000
*/

function start() {
	if (cm.getPlayer().getProfessionLevel(92020000) > 0) {
		cm.sendYesNo("您確定要放弃鍛造嗎？你將失去所有鍛造經驗/等級。");
	} else {
		cm.sendYesNo("你想學打鐵匠嗎？");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (cm.getPlayer().getProfessionLevel(92020000) > 0) {
			cm.sendOk("你已經忘卻鍛造專業技术。");
			cm.teachSkill(92020000, 0, 0);
		} else {
		if (cm.getPlayer().getProfessionLevel(92030000) > 0 || cm.getPlayer().getProfessionLevel(92040000) > 0 || cm.getPlayer().getProfessionLevel(92010000) <= 0) {
			cm.sendOk("你不能學習或放弃鍛造，因為你已經有了輔助工藝或煉金術，或者你沒有採礦。");
			cm.dispose();
		} else {
			cm.sendOk("你已經學會鍛造專業技术。");
			cm.teachSkill(92020000, 0x1000000, 0); //00 00 00 01
			}
			}
			}
		cm.dispose();
}