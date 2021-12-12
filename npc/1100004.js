/*
	名字:	奇鲁
	地圖:	天渡
	描述:	130000210
*/

function start() {
	cm.sendYesNo("開往神秘島#b天空之城#k的船馬上就要起航，路程大概是#b2分鐘#k，費用是#b2000#k楓幣，您要支付費用乘船嗎？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("怎麼？ 你還有事要留在聖地嗎？ 那你先去解决了再來吧。");
		cm.dispose();
	} else {
	if(cm.getPlayer().getMeso() >= 2000) {
		cm.warp(200090021, 0);   
		cm.gainMeso(-2000);
	} else {
		cm.sendOk("你隨身攜帶的楓幣不够。");
		}
	cm.dispose();
}
}
