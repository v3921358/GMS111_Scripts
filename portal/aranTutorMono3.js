/*
	名字:	黑暗领主
	地圖:	燃烧森林1
	描述:	914000200
*/

function enter(pi) { // tutor01
	if (pi.getInfoQuest(21002).equals("normal=o;arr0=o;mo1=o;mo2=o;mo3=o")) {
		pi.updateInfoQuest(21002, "normal=o;arr0=o;mo1=o;mo2=o;mo3=o;mo4=o");
		pi.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/legendBalloon6");
		return true;
}
}