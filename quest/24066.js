/*
	����:	�޷���������
	�؈D:	��ŷ��
	����:	101050000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�����ǵĴ��׾����������õ�ԭ��������ȥֻ��һ�������侲������˵��#r��ħ��ʦ�ķ�ӡ�����Ѿ������������Ѿ��⿪#k�ˡ�");
	if (status == 1)
		qm.sendNextPrev("������ʵ�ܼ򵥡��ӹ����������������飬���Կ�����ħ��ʦ������������Ѻۡ�����ͨ�����ϵ����������������������𽥻ָ���");
	if (status == 2)
		qm.sendNextPrev("�����Ļ����������������Ҳ���𽥱�ǿ�����������˻���û��սʤ���䡣����ʲô�赲��һ������");
	if (status == 3)
		qm.sendNextPrev("����ֻ��һ����#r��ħ��ʦ��������Ȼ�������ѷ죬���������ڱ�ǿ#k��");
	if (status == 4)
		qm.sendNextPrev("��ħ��ʦ�������ǿ��˵����ħ��ʦ�ķ�ӡ���ڱ����������������ڻص�ð�յ����硭��ֻ����ô���͡�");
	if (status == 5)
		qm.sendPrev("�����ǣ����ڵġ�������������������ʱ���ð�յ�����������Σ��֮�С�Σ�������������Ǻ�ħ��ʦ��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1000 exp");
	if (status == 6){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(1000);
		qm.dispose();
}
}