/*
	名字:	女皇之路
	地圖:	新的启程2
	描述:	130030001
*/

function enter(pi) {
	var mapid = pi.getMapId();
	var questid;
	var state = 2;

	switch (mapid) {
	case 130030001:   //新的启程2
		questid = 20010;
		state = 1
		break;
	case 130030002:   //新的启程3
		questid = 20011;
		break;
	case 130030003:   //新的启程4
		questid = 20012;
		break;
	case 130030004:  //新的启程5
		questid = 20013;
		break;
		default:
		return;
		}
	if (pi.getQuestStatus(questid) == state) {
		pi.playPortalSE();
		pi.warp(pi.getMapId() + 1, "sp");
	} else {
	if (mapid == 130030001) {
		pi.playerMessage(-7,"[Portal]请点击NPC接收任務");
	} else {
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
}
}
}