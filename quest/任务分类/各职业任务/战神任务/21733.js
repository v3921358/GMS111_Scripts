/*
	����:	�鱨��Ϯ���¼�
	�؈D:	��������
	����:
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("ι�������ģ� ��һ�����¡�");
	if (status == 1)
		qm.sendNextPrev("���к���Ҫ����� �s�o��#b#m104000004##k��");
	if (status == 2)
		qm.sendPrevS("#b#(ι������#p1002104#��ǰ���ǽ���Ӣ�۵Ćᡭ��)#l\n#k",3);
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}

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
	if (status == 0)
		qm.sendNext("�������]�뵽߀�������@�N���顣 ���N���]�뵽��ż��߀��Ǳ�����@�e�� ƽ�r���������ޟ��ˣ���ȫ�������o��Ӌ�ˡ� ");
	if (status == 1)
		qm.sendNextPrevS("#b�����𣬶�������ҡ���");
	if (status == 2)
		qm.sendNextPrev("���� Ӣ�۴��˲��؃ȾΡ� ��Ҳ��֪���ǂ������� ���ص�Ǹ�� ���^���@Ҳ��¶�������������c��");
	if (status == 3)
		qm.sendNextPrevS("#b���㣿");
	if (status == 4)
		qm.sendNextPrev("��ż��ӑ�����ǂ��n���� ����ǂ��n���Ǽٵģ���ż���ǲ����@�N�d���ӱ�������һȺ���܁����v�ġ� �ǂ��n������C���˺�ɫ֮���Ŀ���䌍�ǽ��y�u��ӡʯ��");
	if (status == 5)
		qm.sendNextPrevS("#b������ô˵�����ҵ�λ��Ҳ��¶�ˡ�");
	if (status == 6)
		qm.sendNextPrev("���ġ������Ϊ�������ռĹ������ļ��ų�ȥ�ģ�û�뵽���˵��˵��С�ƽʱ�Ҳ�����ô��С�ĵġ��ô�Ҳ�Ǹ��鱨���ˣ��ܻ�Ϊ�Լ�׼��һ����·�ġ����ڹؼ�����#b#s21100000#  #q21100000##k���������֪����");
	if (status == 7)
		qm.sendPrev("��ɫ֮������ô�˷�����Ҳû����ֹ������ǿ������������Ŭ����ֱ�����ܺ�ħ��ʦΪֹ����Ҳ�ᾡ���Ŭ��Ϊ���ռ���Ϣ�ġ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s21100000#  #q21100000#  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 5700 exp");
	if (status == 8){
		qm.forceCompleteQuest();
		qm.teachSkill(21100000, qm.getPlayer().getSkillLevel(21100000), 20); 
		qm.gainExp(5700);
		qm.dispose();
}
}