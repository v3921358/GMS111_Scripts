/*
	名字:	士兵　爱那得斯
	地圖:	废弃的塔&amp;lt;第1阶段&gt;
	描述:	922010100
*/

function start() {
	cm.sendYesNo("你想出去？ 看來你被你自己打敗了。");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("如果能堅持到最後會有特別獎勵。");
	} else {
		cm.removeAll(4001022);
		cm.removeAll(4001023);
		cm.warp(221023300,0);
		}
	cm.dispose();
}