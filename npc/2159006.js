/*
	����:	���ȵ�
	�؈D:	��ֵ�ʵ����
	����:	931000010
*/

var status = -1;

var answer = false;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	if (status == 5) {
		cm.sendOk("#b����������Ҫ���ֵģ�ͻȻ��һ������#k");
		return;
		}
	status--;
	}
	if (cm.getPlayer().getMapId() == 931000011) {
	cm.dispose();
	return;
	}
	if (cm.getInfoQuest(23007).indexOf("vel00=1") == -1 && cm.getInfoQuest(23007).indexOf("vel01=1") == -1) {
	if (status == 0)
		cm.sendNext("�������ٿ����ˡ���");
	if (status == 1)
		cm.sendNextPrev("���N�����@�e�� �@�e�ǽ�ֹ����ĵط���");
	if (status == 2)
		cm.sendNextPrevS("#b�����l����");
	if (status == 3)
		cm.sendNextPrev("�ҡ������@�e�����Ͽ���");
	if (status == 4){
		cm.updateInfoQuest(23007, "vel00=1");
		cm.showWZEffect("Effect/Direction4.img/Resistance/ClickVel");
		cm.dispose();
		}
	} else if (cm.getInfoQuest(23007).indexOf("vel00=1") != -1 && cm.getInfoQuest(23007).indexOf("vel01=1") == -1) {
	if (status == 0)
		cm.sendNext("���ǡ�#r���Y÷����ʿ#k�Č���ߡ� �ҽ���#bؐ�ȵ�#k���mȻ��֪���ゃ���N���M��ģ����c��ȥ�� Ҫ�Ǳ���ʿ�l�F��Ԓ�����군�ˣ�");
	if (status == 1)
		cm.sendNextPrevS("#b����ߣ� �㵽�����fʲ�N���� �@�e������ʲ�N�ط��� ���ʲ�NҪ�Mȥ�e�氡��");
	if (status == 2)
		cm.sendNextPrev("�㲻֪�����Y÷���� ���Y÷����ʿ����ɫ֮��į���ƌW�ң� �@�e�Ǹ��Y÷�����о��ң����Y÷�����@�e�����w��򞡭");
	if (status == 3)
		cm.sendNextPrevS("#b���w����򞣿");
	if (status == 4)
		cm.sendNextPrev("�������w��򞣬�������ץ�����f����Ҳ��׃�Ɍ��Ʒ�� �����ܣ�");
	if (status == 5)
		cm.sendNextPrevS("#bʲ�N�� �ӡ����ܡ��� �����㡭��");
	if (status == 6)
		cm.sendNextPrev("���u�� Сһ�c�� ���Y÷����ʿ���ˡ�");
	if (status == 7){
		cm.updateInfoQuest(23007, "vel00=2");
		cm.dispose();
		cm.warp(931000011, 0);
		}
	} else if (cm.getInfoQuest(23007).indexOf("vel01=1") != -1) {
	if (status == 0)
		cm.sendNext("���U�����Y÷���������³�ȥ�ˡ��죬�ͳìF�ڣ�����c�߰ɡ�");
	if (status == 1)
		cm.sendNextPrevS("#b��һ�������߆᣿ �����أ�");
	if (status == 2)
		cm.sendNextPrev("�қ]���k�����ߡ� ���Y÷����ʿӛ���Լ�����^�����Ж|����ֻҪ��һ�����R�Ͼ͕��l�F�ġ���������߰ɡ�");
	if (status == 3)
		cm.sendNextPrevS("#b�����ԣ� ��Ҳ����һ���ߣ�");
	if (status == 4)
		cm.sendNextPrev("���f�������ˣ����ο��ҡ����P���@�e�档 ��Ҫ��Ҳ�Ӳ��ˡ��x�x����ғ��ġ� �þÛ]�����@�N�P�����ˡ� �죬��ȥ�ɡ�");
	if (status == 5)
		cm.sendYesNo("#b��ؐ�ȵٰ��۾��]���������������һ�У�ԓ���N�k����#k");
	if (status == 6){
		cm.gainExp(60);
		cm.dispose();
		cm.warp(931000013, 0);
}
}
}