/*
	名字:	组队任务
	地圖:	宗师的密室
	描述:	610030700
*/

function enter(pi) {
		pi.warp(610030800, 0);
	if (pi.getPlayer().getEventInstance() != null && pi.getPlayer().getEventInstance().getName().startsWith("CWKPQ")) {
		pi.gainNX(4000);
		pi.getPlayer().finishAchievement(37);
}
}