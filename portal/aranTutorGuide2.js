/*
	名字:	黑暗领主
	地圖:	燃烧森林3
	描述:	914000220
*/

function enter(pi) { // tutor00
	if (pi.getInfoQuest(21002).equals("normal=o;arr0=o;arr1=o;arr2=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o")) {
		pi.playerMessage(5, "連續攻擊後使用方向鍵和攻擊鍵，可進行命令攻擊。");
		pi.updateInfoQuest(21002, "cmd=o;normal=o;arr0=o;arr1=o;arr2=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o");
		pi.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialGuide3");
		return true;
}
}