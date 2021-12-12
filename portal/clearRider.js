/*
	名字:	隐藏地图
	地圖:	骑士平原
	描述:	921110000
*/

function enter(pi) {
	if (pi.getQuestStatus(21610) == 1) {
		pi.forceStartQuest(21619,0);
	} else {
		pi.playerMessage(-7,"[Portal]你很努力，希望能好好善待你的狼狼");
}
}