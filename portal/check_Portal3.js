/*
	名字:	过去的神木村
	地圖:	燃烧的废墟
	描述:	272000310
*/

function enter(pi) {
	if (pi.isQuestActive(31175) && !pi.isQuestFinished(31176)) {
		pi.warp(272000410, 2); //燃烧的神木村4
	} else {
		pi.warp(272000400, 1); //燃烧的神木村4
}
}
