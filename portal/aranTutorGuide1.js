/*
	����:	�ڰ�����
	�؈D:	ȼ��ɭ��2
	����:	914000210
*/

function enter(pi) { // tutor00
	if (pi.getInfoQuest(21002).equals("normal=o;arr0=o;arr1=o;mo1=o;mo2=o;mo3=o;mo4=o")) {
		pi.playerMessage(5, "�B�m����Ctrl�I���ɰl���B�m������");
		pi.updateInfoQuest(21002, "normal=o;arr0=o;arr1=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o");
		pi.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialGuide2");
		return true;
}
}