/*
	名字:	黑暗领主
	地圖:	燃烧森林1
	描述:	914000200
*/

function enter(pi) {
	if (pi.getInfoQuest(21002).equals("arr0=o;mo1=o;mo2=o;mo3=o")) {
		pi.playerMessage(5, "按下Ctrl鍵可對怪物進行一般攻擊 。");
		pi.updateInfoQuest(21002, "normal=o;arr0=o;mo1=o;mo2=o;mo3=o");
		pi.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialGuide1");
		return true;
}
}