/*
	名字:	阿里安特
	地圖:	阿里安特宫殿
	描述:	260000300
*/

function enter(pi) {
	if (pi.haveItem(4031582)) {
		pi.warp(260000301, "out00");  //阿里安特宫殿&amp;lt;庭院&gt
	} else {
		pi.playerMessage(-7,"[Portal]你沒有攜帶宮殿出入證，不准進入宮殿");
}
}