/*
	����:	����ɭ��
	�؈D:	����ɭ��
	����:	930000000
*/

function enter(pi) {
	switch(pi.getMapId()) {
	case 930000000:
		pi.warp(930000100,0);  //ɭ�ֳ���
		break;
	case 930000100:
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(930000200,0);  //���ʵ�ɭ��
	} else {
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
		}
		break;
	case 930000200:
	if (pi.getMap().getReactorByName("spine") != null && pi.getMap().getReactorByName("spine").getState() < 4) {
		pi.playerMessage(-7,"[Portal]��׵��ס��ȥ·");
	} else {
		pi.warp(930000300,0); //��֮��
		}
		break;
}
}