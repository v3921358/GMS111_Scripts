/*
	名字:	秘密地图
	地圖:	奇怪的走廊
	描述:	310060221
*/

function enter(pi) {
	if (pi.isQuestFinished(23040)) {
	if (pi.isQuestFinished(23043) || pi.haveItem(4032743,1)) {
		pi.warp(931000300, 0);  //奇怪的洞穴岔道
		return true;
	} else {
		pi.playerMessage(-7,"[Portal]需要格里梅尔的门卡");
		}
	} else if (pi.isQuestFinished(23041)) {
	if (pi.isQuestFinished(23044) || pi.haveItem(4032743,1)) {
		pi.warp(931000301, 0);   //奇怪的洞穴岔道
		return true;
	} else {
		pi.playerMessage(-7,"[Portal]需要格里梅尔的门卡");
		}
	} else if (pi.isQuestFinished(23042)) {
	if (pi.isQuestFinished(23045) || pi.haveItem(4032743,1)) {
		pi.warp(931000302, 0);    //奇怪的洞穴岔道
		return true;
	} else {
		pi.playerMessage(-7,"[Portal]需要格里梅尔的门卡");
		}
	} else {
		pi.warp(310060220,0);   //防御系统研究所3
}
}