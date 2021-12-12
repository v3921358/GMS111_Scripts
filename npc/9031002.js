/*
	名字:	诺布
	地圖:	专业技术村庄
	描述:	910001000
*/

function start() {
	if (cm.getPlayer().getProfessionLevel(92010000) > 0) {
		cm.sendSimple("\r\n#b#L0#放弃採礦(你將失去所有採礦經驗/等級)#l\r\n#L1#100塊#v4011010:#交换#v2028067:##l");
	} else {
		cm.sendSimple("\r\n#b#L0#學習採礦#l\r\n#L1#100塊#v4011010:#交换#v2028067:##l");
}
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		if (cm.getPlayer().getProfessionLevel(92020000) > 0 || cm.getPlayer().getProfessionLevel(92030000) > 0 || cm.getPlayer().getProfessionLevel(92040000) > 0) {
			cm.sendOk("請先放弃鍛造/配件製作/煉金術。");
		} else if (cm.getPlayer().getProfessionLevel(92000000) > 0) {
			cm.sendOk("你不能學習或放弃採礦，因為你已經有草藥了。");
		} else if (cm.getPlayer().getProfessionLevel(92010000) > 0) {
			cm.sendOk("你已經忘卻採礦專業技术。");
			cm.teachSkill(92010000, 0, 0);
		} else {
			cm.sendOk("你已經學會採礦專業技术。");
			cm.teachSkill(92010000, 0x1000000, 0); //00 00 00 01
			if (cm.canHold(1512000,1)) {
			cm.gainItem(1512000,1);
			}
			}
			break;
	case 1:
		if (!cm.haveItem(4011010, 100)) {
			cm.sendOk("你需要100塊#v4011010:#礦石碎片。");
		} else if (!cm.canHold(2028067, 1)) {
			cm.sendOk("請騰出一些空間。");
		} else {
			cm.sendOk("謝謝你對採礦專業的貢獻。");
			cm.gainItem(2028067, 1);
			cm.gainItem(4011010, -100);
			}
			}
		cm.dispose();
}