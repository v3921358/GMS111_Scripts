/*
	名字:	卡森
	地圖:	蒙特鸠协会
	描述:	261000010
*/

function start() {
	if (cm.getQuestStatus(3310) == 1) {
		cm.sendSimple("要提高警惕，要除去讓哈悶變得兇暴的魔法陣並不是件容易的事兒。\r\n\r\n#L1##b可以去廢棄的研究室制禦哈悶嗎？#l");
	} else {
		cm.sendOk("煉金術……還有煉金術士……都很重要。 但更重要的是，可以包容這一切的瑪加提亞村莊……瑪加提亞的名譽要保存下去。 你有這個能力嗎？#k");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(926120100, 0);
		}
	cm.dispose();
}