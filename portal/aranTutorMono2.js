/*
	名字:	黑安领主
	地圖:	伤病营舍
	描述:	914000000
*/

function enter(pi) {
	if (pi.getInfoQuest(21002).equals("mo1=o;mo2=o")) {
		pi.updateInfoQuest(21002, "mo1=o;mo2=o;mo3=o");
		pi.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/legendBalloon3");
		return true;
}
}