/*
	����:	���
	�؈D:	�ʺ��
	����:	1000000
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		cm.sendNext("�@�e��λ춲ʺ�u�|�����Ľ�#b#m1010000##k�Ĵ��䡭���ѽ�֪���ʺ�u�����־����ĵط��ɣ� �@�eֻ���F���^���Ĺ֫F����������İɡ�");
	if (status == 1)
		cm.sendNextPrev("�����ϣ��׃�ø�ǿ�󣬾�ȥ#b#m2000000##k�������e�˴�ȥ#b���y�u#k�� �ǂ��u��Ҏģ�ܴ��@�e���ǱȲ��ϵá�");
	if (status == 2)
		cm.sendPrev(" �f�ڽ��y�u���ԌW�����T���I���ܡ� �����ǽ�#b#m102000000##k�������� �����f���e߀�зǳ������ĸ�ԭ���f�������e�кܶ���ʿ�� �Ǹ�ԭ�����������N�ӵĵط��أ�");
	if (status == 3){
		cm.dispose();
}
}