/*
	����:	��Ը֮��
	�؈D:	���
	����:	140000000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 8) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(21201) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(21202) == 2) {
		qm.sendNext("�������l�fҪ׌�ҳɞ���˺�ħ�����Ă��������ģ� �Y�������{�䣬����Եس�˯�ˎװ��꣬���ҁG��һ߅���ܲ������ ʲ�N�� �벻�����ˣ� һ���벻�����˾������£� ����������ң���Ӛ�ҵĕr�����N�f�ā�������...");
		}
		}
	if (status == 1)
		qm.sendNextPrevS("�fҪ��#p1203000#�C���Լ��Č�����Ո���o��һ���C����");
	if (status == 2)
		qm.sendNextPrev("�]�e�� �������˵õ��ң���������ĵؿ�ధ�� Ҫ֪�������@�Ӄ�����������������eȥ�Ұ��� �ܹ��ͺ�ħ�����࿹�����ǿ��#p1201001#�������ˣ� �Y����s�������ڱ����Y��һ�ž��ǎװ��ꡭ��...");
	if (status == 3)
		qm.sendNextPrevS("#b��Ҳ�]�п�ధ�� ");
	if (status == 4)
		qm.sendNextPrev("ʲ�N�� �]�п�ధ�� ���l�����[��Ҫ�õ��ң�������ϧ�pϥ�¹��ధ�� Ҫ��#p1203000#���N���𑪡����ȵȣ� ���� ���y�������y���ѽ���������?");
	if (status == 5)
		qm.sendNextPrevS("#b��һ�c�c����.");
	if (status == 6)
		qm.sendNextPrev("�����治���Ǒ��񰡡����裬��裡 ������һ�c���]�иЄӣ����� �mȻ���˺�ħ�������{�䣬�����Mʧ���B�����ҵ����ⶼ�]���ˡ���������ˣ����Ȼ߀�������ң��治�����ҵ����˰���");
	if (status == 7)
		qm.sendNextPrev("������ʧȥӛ��Ҳ߀���ҵ����ˡ� �ǽ��^�O��Ӗ�������w��Ȼ�ܹ�ӛ�î����ļ��ܣ��mȻ�ڱ����г�˯�˔����꣬���@һ�c��߀�Ǻ�����ġ� �ðɣ��Ҏ��ㆾ�����������");
	if (status == 8)
		qm.sendAcceptDecline("��ĵȼ���û����ǰ��ô�ߣ�û�����㻽�����е��������������Ȱ��㻽��һ���ֵ�������������������Ҳ�����һЩ�����ָ���ǰ�������ɡ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142130#  #t1142130#");
	if (status == 9){
		if(!qm.canHold(1142130, 1)) {
		qm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		qm.dispose();
		return;
		}
		qm.forceCompleteQuest();
		qm.getPlayer().changeJob(2110);
		qm.gainItem(1142130,1);
		qm.dispose();
}
}