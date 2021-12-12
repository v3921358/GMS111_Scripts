/*
	名字:	奇里路
	地圖:	天渡
	描述:	130000210
*/

function start() {
	cm.sendYesNo("你想離開聖地，前往其他地區嗎？ 那你就找對人了。這艘船開往金銀島的#b 六岔路口# k， 時間大約是#b 1 分鐘# k， 費用是#b1000#k 楓幣，您要支付費用乘船嗎？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("看來你在聖地還有事要辦，等你想去金銀島了再來找我吧。");
		cm.dispose();
	} else {
	if(cm.getPlayer().getMeso() >= 1000) {
		cm.warp(200090031, 0);   
		cm.gainMeso(-1000);
	} else {
		cm.sendOk("喂，等等。 你的錢好像不够……費用是#b1000#k金幣……");
		}
	cm.dispose();
}
}