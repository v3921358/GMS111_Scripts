/*
	名字:	黑暗领主
	地圖:	燃烧森林2
	描述:	914000210
*/

function enter(pi) { // tutor00
	if (pi.getInfoQuest(21002).equals("normal=o;arr0=o;arr1=o;mo1=o;mo2=o;mo3=o;mo4=o")) {
		pi.playerMessage(5, "連續按下Ctrl鍵，可發動連續攻擊。");
		pi.updateInfoQuest(21002, "normal=o;arr0=o;arr1=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o");
		pi.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialGuide2");
		return true;
}
}