/*
	����:	����
	�؈D:	��������ԭҰ
	����:	932000300
*/

function start() {
	if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
		cm.warpParty(932000400,0);
		cm.sendOk("....");
	} else {
		cm.sendOk("��Ҫ�����_�ˣ��@һ�ж����e�ԣ�Ո������@�����Tʿ��");
		}
	cm.dispose();
}
