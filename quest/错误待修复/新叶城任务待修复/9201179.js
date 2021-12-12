/*
	名字:	利亚尼姆矿石堆
	地圖:	外星人基地走廊
	描述:	610040010
*/

function start() {
                cm.sendYesNo("。。。。");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.gainItem(4033193, 1);
    }
    cm.dispose();
}
