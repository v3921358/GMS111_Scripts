/*
	名字:	新手转蛋机
	地圖:	林中之城
	描述:	105000000
*/

function start() {
	if (cm.haveItem(5220000)) {
		cm.sendOk("你想使用 #v5220000:#在我這裡碰碰運氣嗎？");
	} else {
		cm.sendOk("你身上沒有#v5220000:#，我不能為你服務，請先到百貨公司買票。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	var item;
		if (Math.floor(Math.random() * 1) == 0) {
		var rareList = new Array(1082149, 1102042, 2049100);
		var item = cm.gainGachaponItem(rareList[Math.floor(Math.random() * rareList.length)], 1);
	} else {

		var itemList = new Array(2044102,2044502,2041020,2041017,2041011,2041014,2044702,2044602,2043302,2040302,2040805,
		2040502,2044402,2040902,2040708,2040402,2043002,2044101,2041022,2044701,2040804,2040702,
		2040707,2043801,2044001,2043701,2048003,2048000,4020001,4020002,2060001,2020002,2012003,
		4004002,4020007,2000004,2012001,2050003,2020005,4010006,2020004,2002002,2020012,2020009,
		4010005,2020003,4004000,2000005,2020013,2030000,2030001,2030002,2030003,2030004,2030005,
		2030006,2030007,2030019,2020000,2012002,4020005,4010004,2020014,4006001,4006000,2050002,
		2002003,1032003,1302022,1432009,1102014,1102018,1322023,1322025,1032008,1432008,
		1322022,1442018,1442039,1322027,1032004,1032026,1442015,1032016,1032018,1422004,1422006,
		1302021,1322024,1322012,1051017,1432015,1032001,1432018,1432000,1402014,1032000,1422000,
		1032009,1082145,1452004,1452000,1002162,1452003,1040068,1060057,1002163,1452001,1002161,
		1002038,1002036,1002013,1372002,1372003,1040044,1041048,1041049,1002150,1472004,1002175,
		1472003,1472002,1041050,1041047,1332013,1060019,1442009,1442006,1422002,1402003,1040021,
		1442010,1002009,1442007,1442031,1332002,1060017,2100000,2044902,2044901,2044803, 2044804);

		var item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1);
	if (item != -1) {
		cm.gainItem(5220000, -1);
		cm.sendOk("You have obtained #b#t" + item + "##k。");
	} else {
		cm.sendOk("請檢查您的物品清單，看看您是否有票，或者庫存是否已滿。");
		}
		}
	cm.dispose();
}