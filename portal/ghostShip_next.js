/*
	名字:	雾海
	地圖:	第1作战室
	描述:	923020110
*/

function enter(pi) {
	if (!pi.isLeader()) {
		pi.playerMessage(-7,"[Portal]必須由組長帶隊才能進入此傳送點");
	} else {
	if (pi.getMap().getAllMonstersThreadsafe().size() != 0) {
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
		return;
		}
	if (((pi.getMapId() % 10) | 0) == 4) { //last stage
	if (pi.getMap().getAllMonstersThreadsafe().size() != 0) {
		pi.playerMessage(-7,"[Portal]兩個開關都必須接通");
		return;
		}
		var bossroom = pi.getMapId() + 66;//90-14 = 76, 90-24=66
	if (((bossroom % 100) | 0) != 90) {
		bossroom += 10;
		}
		pi.warpParty(bossroom, 0);
		} else {
		pi.warpParty(pi.getMapId() + 1, ((pi.getMapId() % 10) | 0) == 3 ? 1 : 2);
}
}
}