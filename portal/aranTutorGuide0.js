/*
	����:	�ڰ�����
	�؈D:	ȼ��ɭ��1
	����:	914000200
*/

function enter(pi) {
	if (pi.getInfoQuest(21002).equals("arr0=o;mo1=o;mo2=o;mo3=o")) {
		pi.playerMessage(5, "����Ctrl�I�Ɍ������M��һ�㹥�� ��");
		pi.updateInfoQuest(21002, "normal=o;arr0=o;mo1=o;mo2=o;mo3=o");
		pi.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialGuide1");
		return true;
}
}