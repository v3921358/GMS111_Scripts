/*
	����:	��ŷ�׵Ľ��
	�؈D:	��ŷ��
	����:	910150001
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(24031) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(24031) == 1) {
		qm.sendSimple("��������ѽ�������Ǻþ�û�Ե��ˡ�������������ʳ������������˹�ȥ����˵Ҫȥ�ͺ�ħ��ʦս������û�ܸ���ȥ�����㲻֪�����ж��ڡ�\r\n#L0##b�Ҳ��Ǵ�Ӧ����������#l\n#k");
		}
		}
	if (status == 1)
		qm.sendSimple("û��������Ϊ��Ļ������ڱ�û�����ð�յ�����ȴ������ǵĹ���������������һ��������������������֮�֡��������ٴκ���һ����ð�յ����籼�ܡ���\r\n#L0##b�����������С�ð�յ����绹û�лָ���ƽ��ս����û�������Ҳ������������#p1033240#�������ٵȵ���#l\n#k");
	if (status == 2)
		qm.sendNextPrev("�����ٵ��ˣ�˫���顭��");
	if (status == 3)
		qm.sendNextPrev("�Ҳ���˵���������뿪֮���Ҿͺܺ��û��һ�����ȥ�����ڼ��������һֱ�ڿ��ű��������ľ����ׯ��������������������˺ܶ�顣");
	if (status == 4)
		qm.sendNextPrev("���㺦�º�ħ��ʦ��Ҳ�������һ��ս�������Ҳ�Ӧ������һ����ȥ�ġ�����Ӧ�ú�����һ�𡭡�һֱ�����");
	if (status == 5)
		qm.sendPrev("��������Ҳ������뿪���ˡ��ͺ�ħ��ʦ��ս����û��������Ҫ����һ��ս�����ס��ҵ����ѣ�˫���顣\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 7700 exp");
	if (status == 6){
		qm.forceCompleteQuest();
		qm.gainExp(7700);
		qm.dispose();
}
}