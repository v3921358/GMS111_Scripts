/*
	����:	���ܴ�����
	�؈D:	������
	����:	104000000
*/

var text = "";

function start() {
	var �ȼ� = cm.getPlayerStat("LVL");
	if (�ȼ� < 10) {
		cm.askMapSelection("");
		cm.dispose();
		return;
}
	if (�ȼ� >= 10) {
		text += "#0#��ϣ�������";
}
	if (�ȼ� >= 25) {
		text += "#1#�������";
}
	if (�ȼ� >= 30) {
		text += "#2#������껪1";
}
	if (�ȼ� >= 50) {
		text += "#3#������껪2";
}
	if (�ȼ� >= 60) {
		text += "#4#�����鴬";
}
	if (�ȼ� >= 40) {
		text += "#5#���صĽ�����";
}
	if (�ȼ� >= 25 && �ȼ� <= 200) {
		text += "#6#�����ĵ�����̨";
}
		text += "#7#�Ҹ���";
		text += "#8#�ƽ���Ժ";
	if (�ȼ� >= 10) {
		text += "#9#��������";
}
	if (�ȼ� >= 20) {
		text += "#10#��������";
}
	if (�ȼ� >= 30) {
		text += "#11#��Ԫ�ѷ�";
}
	if (�ȼ� >= 40) {
		text += "#12#����ɭ��";
}
	if (�ȼ� >= 50) {
		text += "#13#Ů��ĺۼ�";
}
	if (�ȼ� >= 60) {
		text += "#14#������";
}
	if (�ȼ� >= 70) {
		text += "#15#����ŷ������Ҷ";
}
	if (�ȼ� >= 70) {
		text += "#16#٪��ֻʵ۵ĸ���";
}
	if (�ȼ� >= 100) {
		text += "#17#����ħ";
}
	if (�ȼ� >= 30) {
		text += "#18#��ͽ��������";
}
	if (�ȼ� >= 50) {
		text += "#19#�[��լۡ�ⲿ";
}
	if (�ȼ� >= 50) {
		text += "#21#����Σ�յĿ���";
}
	if (�ȼ� >= 50) {
		text += "#22#����";
}
	if (�ȼ� >= 50) {
		text += "#23#���Tʿ���{��";
}
	if (�ȼ� >= 10) {
		text += "#25#���С��";
}
	if (�ȼ� >= 10) {
		text += "#87#ħŮ��";
}
	if (�ȼ� >= 30) {
		text += "#98#���ǻ���";
}
	cm.askMapSelection(text);
}

function action(mode, type, selection) {
	var �ȼ� = cm.getPlayerStat("LVL");
	if (mode == 1) {
		if (�ȼ� < 10) { // they cannot use any
		cm.dispose();
		return;
		}
	switch (selection) {
	case 0: // ��ϣ�������
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(980010000, 3);
		break;

	case 1: // �������
		if (�ȼ� >= 25) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(925020000, 4);
		}
		break;

	case 2: // ������껪1
		if (�ȼ� >= 30) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(980000000, 4);
		}
		break;

	case 3: // ������껪2
		if (�ȼ� >= 50) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(980030000, 4);
		}
		break;

	case 4: // Dual Raid
		if (�ȼ� >= 60) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(923020000, 0);
		}
		break;

	case 5: // ���صĽ�����
		if (�ȼ� >= 40) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(926010000, 4);
		}
		break;

	case 6: // �����ĵ�����̨
		if (�ȼ� >= 25 && �ȼ� <= 30) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(910320000, 2);
		}
		break;

	case 7: // �Ҹ���
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(209000000, 0);
		break;

	case 8: // �ƽ���Ժ
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(950100000, 9);
		break;

	case 9: // ��������
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(910010500, 0);
		break;

	case 10: // ��������
		if (�ȼ� >= 20) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(910340700, 0);
		}
		break;

	case 11: // �����
		if (�ȼ� >= 30) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(221023300, 2);
		}
		break;

	case 12: //����ɭ��
		if (�ȼ� >= 40) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(300030100, 1);
		}
		break;

	case 13: // Ů����
		if (�ȼ� >= 50) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(200080101, 1);
		}
		break;

	case 14: // ������
		if (�ȼ� >= 60) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(251010404, 1);
		}
		break;

	case 15: // ����ŷ������Ҷ
		if (�ȼ� >= 70) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(261000011, 0);
		}
		break;

	case 16: // аĦ˹�ķ���
		if (�ȼ� >= 30) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(211000002, 0);
		}
		break;

	case 17: // ����ħ
		if (�ȼ� >= 100) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(240080000, 2);
		}
		break;

	case 18: //��ͽ��������
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(674030100, 0);
		break;

	case 19: //�[��լۡ�ⲿ
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(682000000, 0);
		break;

	case 21: //Σ����·
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(923040000, 0);
		break;

	case 22: //���ص������
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(921160000, 0);
		break;

	case 23: //���Tʿ���{��
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(932000000, 0);
		break;

	case 25: //���С��
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(670010000, 0);
		break;

	case 87: //ħŮ��
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(980040000, 0);
		break;

	case 98: //���ǻ���
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(502029000, 0);
		break;
		}
		}
	cm.dispose();
}