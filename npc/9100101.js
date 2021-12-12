/*
	名字:	新手转蛋机
	地圖:	魔法密林
	描述:	101000000
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
		var rareList = new Array(1382047, 1372037, 1382045, 1372035, 1382048);
		var item = cm.gainGachaponItem(rareList[Math.floor(Math.random() * rareList.length)], 1);
	} else {
		var itemList = new Array(2000005, 2022113, 2002018, 1382001, 1050008, 1442017, 1002084, 1050003, 1002064, 1061006, 1051027, 1442009, 1050056, 1051047, 1050049, 1040080, 1051055, 1372010, 1422005, 1002143, 1302027, 1061087, 1372003, 1302019, 1051023, 1050054, 1061083, 1051017, 1002028, 1322010, 1332013, 1050055, 1002245);

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
