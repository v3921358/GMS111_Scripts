/*
	����:	ֻ������������;�� 3	
	�؈D:	������������
	����:	140010100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 6) {
		qm.sendOk("�ޟ��@�N�|����Ҫ��־�͌�������Խ�����ώ��Ƿǳ��@�˵ģ����㲻��׌���Լ�������ȥ�����횲�����ޟ����ܫ@�Ï����������ͬ�r�һ�ʧȥ��ӛ����");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�F�����������ʲ�N�̶ȣ��Ҵ�Ųt���ˡ����Ǻǡ����]�뵽���@���Ϲ��^߀���н��졭�����ǸЄӵ�Ҫ���ۜI���������Ǳ��顭��");
	if (status == 1)
		qm.sendNextPrevS("#b(����Ҳ�]���N�ޟ����)#k");
	if (status == 2)
		qm.sendNextPrev("�ã��F��׌�҂��_ʼ��3�A�ε�����һ�A�ε�呟����@���ޟ��Č����ǡ���#r#o9300343##k���i�i����t�������᣿");
	if (status == 3)
		qm.sendNextPrevS("#bһ�c�c����");
	if (status == 4)
		qm.sendNextPrev("#r#o9300343##k�������đ�ʿ���ĳ�������һ���𣬌�ʳ��ͳ�M�˟o�F�đ�ŭ�������������^�ĵط������������κ�ʳ��ܿ��°ɣ�");
	if (status == 5)
		qm.sendNextPrevS("#b(���������_��Ц�ɣ�)#k");
	if (status == 6)
		qm.sendAcceptDecline("���������c#b�ٴ��M���ޟ���#k��ȥ����Щ�����đ�ʿ���ޟ��õ��i�Б��Y�ɣ���#r30ֻ#k�ᣬ�������������һ���|���w�S��ȫ���Ը���ȥ���Y�ɣ���Խ���@���ώ���");
	if (status == 7){
		qm.forceStartQuest();
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.sendOk("��β����x�_�ώ��� ����.... ��̫�Є��ˣ����㲻�ܵ��˞�ֹ��");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�@�N��ʹ���30ֻ#o9300343#�������@���^�ӹ�Ȼ�]�п��e���mȻ��ʧȥ��������ӛ����ʧȥ��������������������Ȼ�ǂ�Ӣ�ۣ�ֻҪ���ϵ��Lì߀�ڣ�");
	if (status == 1)
		qm.sendNextPrevS("#b(�@�N�f�Ǟ��˰�ο�҆᣿)#k");
	if (status == 2)
		qm.sendNextPrev("���ѽ��]ʲ�N���^�m������ˡ����ѽ���Խ�����@�����^�ӡ��������ɽ�ˡ��������]ʲ�N�Ñn�d�ġ����@���^���܉��ЙC��ָ���㣬�ѽ��ܝM���ˡ�");
	if (status == 3)
		qm.sendYesNo("�F�����ȥ��#p1201000#�ɡ�����������M�����ܸ��d�ģ�");
	if (status == 4)
		qm.sendPrevS("#b(�������˼���#b�B������#k�� #b��߀��������c�V�������^��Ӗ���Л]��Ч���أ��]�뵽�����Ч��)��#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s21000000#  #q21000000#  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 700 exp",3);
	if (status == 5){
		qm.forceCompleteQuest();
		qm.teachSkill(21000000, qm.getPlayer().getSkillLevel(21000000), 10);   // Combo Ability Skill
		qm.gainExp(700);
		qm.dispose();
}
}