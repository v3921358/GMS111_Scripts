/*
	����:	���ȵ�
	�؈D:	��ֵ�ʵ����
	����:	931000013
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) 
	status++;
	else 
	status--;
	if (cm.getPlayer().getMapId() == 931000011 || cm.getPlayer().getMapId() == 931000030) {
	cm.dispose();
	return;
	}
	if (cm.getInfoQuest(23007).indexOf("vel01=2") == -1 && cm.getInfoQuest(23007).indexOf("vel01=3") == -1) {
	if (status == 0)
		cm.sendNext("��Ŷ��Ŷ�� ���N��ģ� �����ǂ����ӵ��P�S���Ѳ��������ˣ� �Ƶ��ˣ�");
	if (status == 1)
		cm.sendNextPrevS("#b�����F�ڛ]�|��������˰ɣ� ���N�҂��߰ɣ�");
	if (status == 2)
		cm.sendNext("�������ǡ�");
	if (status == 3)
		cm.sendNextPrevS("#b�y������һֱ���@�e��");
	if (status == 4)
		cm.sendNextPrev("��Ȼ���ǰ��� �Ҳ�����ڌ�����Y��");
	if (status == 5)
		cm.sendNextPrevS("#b�Ǿ�һ���߰ɣ� ���c��");
	if (status == 6){
		cm.warp(931000020,1);
		cm.updateInfoQuest(23007, "vel00=2;vel01=2");
		cm.dispose();
		}
	} else if (cm.getInfoQuest(23007).indexOf("vel01=2") != -1 && cm.getInfoQuest(23007).indexOf("vel01=3") == -1) {
	if (status == 0)
		cm.sendNext("�ѡ��ѽ��þÛ]���߳�������ˡ��@�����e����");
	if (status == 1)
		cm.sendNextPrevS("#bȥ�҂��Ĵ��f�� ���Ǻ�ɫ֮��׷�ρ�ǰ���҂����c���ܰɣ�");
	if (status == 2){
		cm.updateInfoQuest(23007, "vel00=2;vel01=3");
		cm.ShowWZEffect("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
		cm.dispose();
		}
	} else {
		cm.sendOk("�ѽ��þÛ]���߳�������ˡ�");
		cm.dispose();
}
}