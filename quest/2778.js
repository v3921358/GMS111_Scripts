/*
	名字:	易得的发明
	地圖:	巨大的树
	描述:	101000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("我可以告訴你關於娃娃的事情。 但這是很重要的情報，我不能白白告訴你。 如果你能幫我一個忙，我就告訴你。 就算你罵我也沒關係，但是這些娃娃不是我做的，雖然有點關係。 怎麼樣？ 你願意接受嗎？");
	if (status == 1){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.warp(910100150);
		qm.dispose();
}
}