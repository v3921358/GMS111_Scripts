/*
	����:	������˹���ռ�
	�؈D:	������˹�ķ���
	����:	931050220
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0){
	if (cm.haveItem(4350003)) {
		cm.sendOk("�õ�#v4350003:#��Ƭ�ˣ�ȥ�����ط�������");
		cm.dispose();
		return;
		}
		cm.sendNext("Ǭ�Q����ӛ���� ���挑��#r�������ż�����m��˹����ӛ�����^����Ҫ͵����#k��������");
		}
	if (status == 1)
		cm.sendNextPrevS("#b��ɫ֮��ֲ�����ӛ���� Ҫ�����᣿");
	if (status == 2)
		cm.sendNextPrevS("#b�mȻ�������˵���ӛ���������f������ʲ�N��Ҫ����󣬑�ԓ��һ���� ��ɫ֮��Ďֲ�����ԭՏ�ҡ�");
	if (status == 3)
		cm.sendNextPrev("�����������Y������ײ��һ�¡� �����nײ�ң� ���ҵ�ħ������΢̧һ̧�֣����͕�׃���W�ۡ� ����Ҫ�Ǳ��ߵ�Ԓ������͕�������");
	if (status == 4)
		cm.sendNextPrevS("#b(���X�ֽű����� ���ǿ����@Щ�֣����X����ĳ�N�{��Ч��������ɫ֮���Ȼ������ͨ�ĽM����)");
	if (status == 5)
		cm.sendNextPrevS("#b(��o��������һ퓰ɡ�)");
	if (status == 6)
		cm.sendNextPrev("������λ�ɐ۵Ĵ��ˣ������ֳ�M�������� Ҫ����λ������Ҫ�����������ϵ�������Ҳ������ժ����\r\n\r\n#b(ʲ�N�|��������)#k");
	if (status == 7)
		cm.sendPrevS("(#v4350003:#�@��ʲ�N��������ȥ��������Ƭ����",3);
	if (status == 8){
		cm.gainItem(4350003, 1);
		cm.dispose();
}
}