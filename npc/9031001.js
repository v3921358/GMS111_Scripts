/*
	名字:	斯切塔
	地圖:	专业技术村庄 
	描述:	910001000
*/

function start() {
	if (cm.getPlayer().getProfessionLevel(92000000) > 0) {
		cm.sendSimple("\r\n#b#L0#忘卻草藥(你將失去所有草藥經驗/等級)#l\r\n#L1#100根#v4022023:#交换#v2028066:##l");
	} else {
		cm.sendSimple("\r\n#b#L0#學習草藥#l\r\n#L1#100根#v4022023:#交换#v2028066:##l");
}
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		if (cm.getPlayer().getProfessionLevel(92020000) > 0 || cm.getPlayer().getProfessionLevel(92030000) > 0 || cm.getPlayer().getProfessionLevel(92040000) > 0) {
			cm.sendOk("請先放弃鍛造/配件製作/煉金術。");
		} else if (cm.getPlayer().getProfessionLevel(92010000) > 0) {
			cm.sendOk("你不能學習或放弃草藥，因為你已經有了採礦。");
		} else if (cm.getPlayer().getProfessionLevel(92000000) > 0) {
			cm.sendOk("你已經忘卻草藥專業技术。");
			cm.teachSkill(92000000, 0, 0);
		} else {
			cm.sendOk("你已經學會草藥專業技术。");
			cm.teachSkill(92000000, 0x1000000, 0); //00 00 00 01
			if (cm.canHold(1502000,1)) {
			cm.gainItem(1502000,1);
			}
			}
			break;
	case 1:
		if (!cm.haveItem(4022023, 100)) {
			cm.sendOk("你需要100根#v4022023:#草藥。");
		} else if (!cm.canHold(2028066, 1)) {
			cm.sendOk("請騰出一些空間。");
		} else {
			cm.sendOk("謝謝你對草藥的貢獻！");
			cm.gainItem(2028066, 1);
			cm.gainItem(4022023, -100);
			} 
			}
		cm.dispose();
}