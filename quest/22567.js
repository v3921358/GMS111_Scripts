/*
	����:	��������ĵ�һ������
	�؈D:	ͨ����&amp;lt;���ܷ���&gt
	����:	200080601
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
	if (qm.getQuestStatus(22567) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(22567) == 1) {
		qm.sendNextS("#b���ó�#p2012034#�����L�����ĳ��L���M�������Mȥ����",3);
		}
		}
	if (status == 1)
		qm.sendNextPrevS("#b����#p2012034#���M�׃ȣ�ʹ��׃����ԭ��Ġ�B����#k\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 15484 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainItem(4032468, -10);
		qm.gainExp(15484);
		qm.sendNextS("#b������������R�r�ɆT����߀�Ԟ���������ء� �]�뵽����������y�öࡣ ���^���X�����܈F�w��߀ͦ����˼�ġ� ���f�أ�",3);
		}
	if (status == 3)
		qm.sendNext("����Ȥ�ɣ����ˡ� �����@���F�w����Ҫ�ѳ��L���M������ʲ�N�ط��أ�",1013000);
	if (status == 4)
		qm.sendNextPrevS("#b�@���@���N�� �@��ˎ������ֲ���ϵģ���֪���������Л]���á�����");
	if (status == 5)
		qm.sendNextPrev("�ţ� �ȵȣ����ˣ����f���Ǆ��",1013000);
	if (status == 6)
		qm.sendNextPrevS("#b���Ҳ�Ǆ���᣿ ������!");
	if (status == 7)
		qm.sendNextPrev("���^��߀�Ǻ��y���ܡ����ߣ��ðɣ��@�ξ����ˡ�",1013000);
	if (status == 8)
		qm.sendNextPrevS("#b����Ҳ�S�����ó��L���M������M�r��������L�ɣ� �r���������ڵ��Yʩ�ʣ���߼Zʳ�Įa����");
	if (status == 9)
		qm.sendNextPrev("Ŷ���ǆ᣿ �Zʳ���˵�Ԓ���͛]�˰��I�ˣ��Ǻܺð��� ���ǂ������µĈF�w�᣿",1013000);
	if (status == 10)
		qm.sendPrevS("#b�ţ��������@�ӵġ�",3);
	if (status == 11){
		qm.dispose();
}
}