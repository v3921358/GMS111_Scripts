/*
	����:	��������
	�؈D:
	����:	����
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 12) {
		qm.sendOk("���������ң����נ��������Қ⯂��!");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�ҽK춁��ˣ�*����*�����@Ҽ�����Һ����Ŀ՚⡣��Ҽ����̫ꖣ�����Ҽ�Ø䣡����Ҽ��ֲ�����Ҽ�仨��Woohahahaha���@̫����˼�h�ˣ��@���������е�����Ҫ�õö࣬���҅s�������u���Y���͊������������ҵ����ˆ᣿�ţ��Ҍ�����ӡ��ͬ��");
	if (status == 1)
		qm.sendNextPrevS("#b�ۣ������fԒ!");
	if (status == 2)
		qm.sendNextPrev("�ҵ����˺���֡������ҬF�ڲ������κ������ˣ����f�h�ѽ�����ˡ������õģ��ܸ��dҊ�������҂��������ܶ�˴ˡ�");
	if (status == 3)
		qm.sendNextPrevS("#b�ţ���ʲ����˼���҂��������ܶ�˴ˣ�ʲ��f����");
	if (status == 4)
		qm.sendNextPrev("����ʲ����˼�������ҏĵ��Y�����ˡ������ҵ����ˣ����ԣ���Ȼ������؟��������ң�Ӗ���ң������ҳɞ�Ҽ�l���ѵ����������@��");
	if (status == 5)
		qm.sendNextPrevS("#bʲ�᣿Ҽ�l�������������Ҳ����ס���ʲ�����Ǌ������ˣ������fʲ�᣿");
	if (status == 6)
		qm.sendNextPrev("�����fʲ�᣿���ľ����c�ҵ��`���_�������s���҂��F�ڲ����ͬҼ�����ˡ��������Ҫ��ጆ᣿�Y�����������ҵ����ˡ��҂��ܵ����s�ļs���������ܸ�׃���⡭���s���ܱ����ơ�");
	if (status == 7)
		qm.sendNextPrevS("#b�ȵȣ��ȵȡ�׌��ֱ�f�ɡ������f�҄e�o�x��ֻ�܎�������");
	if (status == 8)
		qm.sendNextPrev("�����գ��٣�����ô�ˣ��㡭���ѵ��������ҵ�������");
	if (status == 9)
		qm.sendNextPrevS("#b�������������ǘӡ���ֻ�ǲ�֪�����Ƿ�ʂ���ˌ��");
	if (status == 10)
		qm.sendNextPrev("Ҽ��P- PET�������Ž��Ҍ���᣿����ҡ���ʲ�ᣬ�������������������ˣ�");
	if (status == 11)
		qm.sendNextPrevS("#b...#b(�����ɵض�����������������Ҽֻ���档Ҽ����С���ˡ�)#k");
	if (status == 12)
		qm.sendAcceptDecline("����ʲ���ǘӿ����ң����������������ҵ�������ʲ�ᡣ�ʂ���ˆ᣿");
	if (status == 13){
		qm.forceStartQuest();
		qm.sendNext("������ɱ¾#r#o1210100#s#k!�F�ھ������ҕ����V�����ܴ򔡶��#o1210100#s!�������_�h!");
		}
	if (status == 14)
		qm.sendPrev("��Ҽ�£������䊅��AP�ˆ᣿���ܵ����ҵ����˺ͱR�˵ć���Ӱ푣����������뿴��������ʲ�ᣬ�ڊ�ʹ���@������֮ǰ���ְl����AP�͊���ħ�g���b�䡣 ");
	if (status == 15){
		qm.evanTutorial("UI/tutorial/evan/11/0", -1);
		qm.resetStats(4, 4, 12, 12);
		qm.dispose();
}
}
