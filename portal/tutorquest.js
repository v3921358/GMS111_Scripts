/*
	����:	Ů��֮·
	�؈D:	�µ�����2
	����:	130030001
*/

function enter(pi) {
	var mapid = pi.getMapId();
	var questid;
	var state = 2;

	switch (mapid) {
	case 130030001:   //�µ�����2
		questid = 20010;
		state = 1
		break;
	case 130030002:   //�µ�����3
		questid = 20011;
		break;
	case 130030003:   //�µ�����4
		questid = 20012;
		break;
	case 130030004:  //�µ�����5
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
		pi.playerMessage(-7,"[Portal]����NPC�����΄�");
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}
}