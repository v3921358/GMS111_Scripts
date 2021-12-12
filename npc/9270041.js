/*
	名字:	艾琳
	地圖:	废弃都市
	描述:	103000000
*/

function start() {
	ap = cm.getEventManager("AirPlane");
		if (ap == null) {
			cm.sendOk("班機正在準備中。");
		} else if (!cm.haveItem(4031731)) {
			cm.sendYesNo("你好~我是来自新加坡机场的艾琳，你沒有攜帶 #v4031731:#我不能讓你登机，机票需要花费10000枫币，你愿意购买吗？");
		} else if (ap.getProperty("entry").equals("true")) {
			cm.sendYesNo("你现在想进去吗？一旦您进入，您的机票将丢失~感谢您选择Wizet航空公司。");
		} else if (ap.getProperty("entry").equals("false") && ap.getProperty("docked").equals("true")) {
			cm.sendOk("很抱歉，登机门在起飞前一分钟关闭了。");
			cm.dispose();
		} else {
			cm.sendOk("請耐心等待，要注意班機的時間，檢票在起航前一分鐘停止收票，所以請務必準時到達。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("当你改变主意时，请再和我谈谈。");
		}
	if (mode == 1) {
		if (!cm.haveItem(4031732)) {
		if (cm.getMeso() > 10000 && cm.canHold(1072510,1)) {
			cm.gainMeso(-10000);
			cm.gainItem(4031731, 1);
			cm.sendOk("谢谢你的光顾!");
		} else {
			cm.sendOk("我认为您的ETC库存中没有足够的meso或空插槽。请检查一下，再和我谈谈。");
			}
		} else {
			cm.gainItem(4031731,-1);
			cm.warp(540010100);
			}
			}
		cm.dispose();
}