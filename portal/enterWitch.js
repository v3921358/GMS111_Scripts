/*
	名字:	神木村
	地圖:	死龙巢穴
	描述:	240040510
*/

function enter(pi) {
	if (pi.isQuestFinished(20407)) {
		pi.warp(924010200,1);  //黑魔女的洞穴
	} else if (pi.isQuestFinished(20406)) {
		pi.warp(924010100,1);  //黑魔女的洞穴
	} else if (pi.isQuestFinished(20404)) {
		pi.warp(924010000,1);   //黑魔女的洞穴
	} else {
		pi.playerMessage(-7,"[Portal]我不應該去這裡，太恐怖了！");
}
}