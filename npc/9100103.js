/*
	名字:	新手转蛋机
	地圖:	废弃都市
	描述:	103000000
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
		if (Math.floor(Math.random() * 300) == 0) {
		var rareList = new Array(1102042, 2049100);
		var item = cm.gainGachaponItem(rareList[Math.floor(Math.random() * rareList.length)], 1);
	} else {
		var itemList = new Array(2040402, 2022130, 4130014, 2000004, 2000005, 2022113, 1322008, 1302021, 1322022, 1302013, 1051010, 1060079, 1002005, 1002023, 1002085, 1332017, 1322010, 1051031, 1002212, 1002117, 1040081, 1051037, 1472026, 1332015, 1041060, 1472003, 1060086, 1060087, 1472009, 1060051, 1041080, 1041106, 1092018);

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
