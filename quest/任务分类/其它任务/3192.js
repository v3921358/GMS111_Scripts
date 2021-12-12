/*
	名字:	结界图腾
	地圖:	雪域集市
	描述:	211000100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("只要等一下就可以，你太沒耐性了吧 。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendYesNo("材料已經全部收集了。請你稍等 。");
	if (status == 1)
		qm.sendPrev("來, 這是 #v2430180:##b結界的圖騰#k. 在厄運死神出現的#b枯萎木頭的森林4#k立下圖騰會阻擋厄運死神的禁止魔法.");
	if (status == 2){
		if(!qm.canHold(2430180, 1)) {
		qm.sendNext("在收到商品之前，請在您的ETC庫存中騰出一個插槽。 ");
		qm.dispose();
		return;
		}
		if(!qm.haveItem(2430180, 1)) qm.gainItem(2430180, 1);
		qm.forceStartQuest();
		qm.dispose();
}
}