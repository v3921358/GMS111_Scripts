/*
	名字:	金银岛
	地圖:	飞花院地下
	描述:	103050300
*/

function enter(pi) {
	if (pi.getPlayer().getLevel() >= 20) {
		pi.warp(103050310,1);  //修炼场1
	} else {
		pi.playerMessage(-7,"[Portal]進入此傳送點，必須達到20級");
}
}