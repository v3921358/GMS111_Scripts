/*
	����:	�ڰ�����
	�؈D:	ȼ��ɭ��3
	����:	914000220
*/

function enter(pi) { // tutor00
	if (pi.getInfoQuest(21002).equals("normal=o;arr0=o;arr1=o;arr2=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o")) {
		pi.playerMessage(5, "�B�m������ʹ�÷����I�͹����I�����M���������");
		pi.updateInfoQuest(21002, "cmd=o;normal=o;arr0=o;arr1=o;arr2=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o");
		pi.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialGuide3");
		return true;
}
}