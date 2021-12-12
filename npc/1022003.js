/*
	名字:	辛德
	地圖:	勇士部落
	描述:	102000000
*/

function start() {
	cm.sendYesNo("暫時只接收耐久度修理工作.\r\n想修復耐久度麼？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("需要的時候可以隨時來找我，再見朋友。");
	} else {
		cm.sendRepairWindow();
		}
	cm.dispose();
}
