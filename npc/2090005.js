/*
	名字:	鹤
	地圖:	港口通道&amp;lt;开往百草堂&gt;
	描述:	200000141
*/

var status = -1;

var select = -1;
var togo;

function start() {
	if (cm.getMapId() == 251000000) {
		togo = "百草堂";
		cm.sendYesNo("冒險家，旅途愉快嗎？仙鶴計程車竭誠為您服務 #b武陵#k怎樣，有興趣嗎？只需要#b500 楓幣#k就可以。");
	} else if (cm.getMapId() == 250000100) {
		togo = "武陵";
		cm.sendSimple("冒險家，旅途愉快嗎？仙鶴計程車竭誠為您服務，請選擇想去的地方。#b\r\n#L0#天空之城(1500 楓幣)#l\r\n#L1#百草堂(500 楓幣)#l");
	} else if (cm.getMapId() == 200000141) {
		togo = "天空之城";
		cm.sendSimple("冒險家，旅途愉快嗎？仙鶴計程車竭誠為您服務，請選擇想去的地方。#b\r\n#L0#武陵(1500 楓幣)#l");
}
}

function action(mode, type, selection) {
	if (togo == "百草堂") {
		baiCaoTang(mode, type, selection);
	} else if (togo == "武陵") {
		muLung(mode, type, selection);
	} else if (togo == "天空之城") {
		tianKong(mode, type, selection);
}
}

function baiCaoTang(mode, type, selection) {
	if (mode == 1)
	status++;
	else
	status--;
	if (status == -2) {
		cm.sendOk("有需要的話，隨時都可以來光顧！");
		cm.dispose();
	} else if (status == 0) {
		if (cm.getMeso() < 500) {
		cm.sendOk("看來你沒有足夠的楓幣。");
	} else {
		cm.gainMeso(-500);
		cm.warp(250000100, 0);
		}
		cm.dispose();
	} else {
		cm.dispose();
}
}

function muLung(mode, type, selection) {
	if (mode == 1)
	status++;
	else
	status--;
	if (status == -1) {
	if (select == 1) {
		cm.sendOk("有需要的話，隨時都可以來光顧！");
		}
		cm.dispose();
	} else if (status == 0) {
		if (select == -1)
			select = selection;
		if (select == 0) {
			if (cm.getMeso() < 1500) {
			cm.sendOk("看來你沒有足夠的楓幣。");
		} else {
			cm.gainMeso(-1500);
			cm.warp(200090310, 1);
			}
			cm.dispose();
		} else if (select == 1) {
			cm.sendYesNo("要向 #b百草堂#移動嗎？只要中途不做出危險的動作消下去，很快就能到達，價錢是#b500 楓幣#k。");
			}
	} else if (status == 1) {
		if (select == 1) {
			if (cm.getMeso() < 500) {
			cm.sendOk("看來你沒有足夠的楓幣。");
		} else {
			cm.gainMeso(-500);
			cm.warp(251000000, 0);
			}
			}
			cm.dispose();
		} else {
			cm.dispose();
}
}

function tianKong(mode, type, selection) {
	if (mode == 1)
	status++;
	else
	status--;
	if (status == 0) {
		if (cm.getMeso() < 1500) {
		cm.sendOk("看來你沒有足夠的楓幣。");
	} else {
		cm.gainMeso(-1500);
		cm.warp(200090300, 1);
		}
		cm.dispose();
	} else {
		cm.dispose();
}
}