/*
	名字:	梅兹
	地圖:	专业技术村庄
	描述:	910001000
*/

function start() {
	if (cm.getPlayer().getProfessionLevel(92030000) > 0) {
		cm.sendYesNo("您確定要放弃飾品製作嗎？你將失去所有飾品製作經驗/等級。");
	} else {
		cm.sendYesNo("你想學飾品製作嗎？");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (cm.getPlayer().getProfessionLevel(92030000) > 0) {
			cm.sendOk("你已經忘卻飾品專業技术。");
			cm.teachSkill(92030000, 0, 0);
		} else {
		if (cm.getPlayer().getProfessionLevel(92020000) > 0 || cm.getPlayer().getProfessionLevel(92040000) > 0 || cm.getPlayer().getProfessionLevel(92010000) <= 0) {
			cm.sendOk("你不能學習或放弃配件製作，因為你已經有了鍛造術或煉金術，或者你沒有採礦術。");
			cm.dispose();
		} else {
			cm.sendOk("你已經學會了飾品製作。");
			cm.teachSkill(92030000, 0x1000000, 0); //00 00 00 01
			}
			}
			}
		cm.dispose();
}