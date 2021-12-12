/*
	名字:	黑暗领主
	地圖:	避难准备中
	描述:	914000100
*/

function enter(pi) {
	if (pi.getQuestStatus(21000) == 0) {
		pi.playerMessage(-7,"[Portal]在進入下一張地圖之前，你只能接受雅典娜·皮爾斯的任務，她在你右邊");
	} else {
		pi.teachSkill(20000017, 0, -1);
		pi.teachSkill(20000018, 0, -1);
		pi.teachSkill(20000017, 1, 0);
		pi.teachSkill(20000018, 1, 0);
		pi.playPortalSE();
		pi.warp(914000200, 1); //燃烧森林1
		return true;
}
}