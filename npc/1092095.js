/*
	名字:	奶牛
	地圖:	诺特勒斯号牛棚
	描述:	912000100
*/

function start() {
	if (cm.haveItem(4033019)) {
		cm.gainItem(4033048, 1);
		cm.gainItem(4033019, -1);
	} else {
		cm.sendOk("你不喂我#v4033019:#就没得牛奶。");
		}
	cm.dispose();
}