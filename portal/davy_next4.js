/*
	名字:	百草堂
	地圖:	击退海盗！
	描述:	925100400
*/

function enter(pi) {
	if (pi.getMap().getReactorByName("sMob1").getState() >= 1 && pi.getMap().getReactorByName("sMob2").getState() >= 1 && pi.getMap().getReactorByName("sMob3").getState() >= 1 && pi.getMap().getReactorByName("sMob4").getState() >= 1) {
	if (pi.isLeader()) {
		pi.warpParty(925100500,0); //海盗船长的威严
	} else {
		pi.playerMessage(-7,"[Portal]必須由組長帶隊才能進入此傳送點");
		}
	} else {
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
}
}