/*
	����:	��������
	�؈D:	��غ��
	����:	900030000
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
	if (status == 0)
		cm.sendNext("��]�°ɣ����ˣ� �㿴��ȥ������ۡ���");
	if (status == 1)
		cm.sendNextPrevS("#b�қ]�¡� վ����ǰ����Y�đ����������һ�c�����������˶��]�¡� ��]�°ɣ�");
	if (status == 2)
		cm.sendNextPrev("�]�¡� ���Y���ҁ��f�]���κΆ��}��");
	if (status == 3)
		cm.sendNextPrevS("#b�ғ��ĵĲ���������w�� ���ͬ���ѽ�ȫ������");
	if (status == 4)
		cm.sendNextPrev("��������");
	if (status == 5)
		cm.sendNextPrevS("#b�������Ҳ���ԓ����������Y�� �ґ�ԓ׌����S��ħ�����ģ��ǘӵ�Ԓ����������Ϳ����^�m������ȥ������");
	if (status == 6)
		cm.sendNextPrev("�e�fɵԒ�����ˡ� �҂�������ӑ��Y�ģ���������e��");
	if (status == 7)
		cm.sendNextPrevS("#b���ǡ�����");
	if (status == 8)
		cm.sendNextPrev("�mȻ��ħ�����J�D�҂��������������҂��^����վ�ں�ħ����һ߅�ġ� �҂���������Ǻ͓���ǿ���`�������໥�����ķN�壬�����ܺͺ�ħ����֮�а�����˴���һ��");
	if (status == 9)
		cm.sendNextPrev("�������ò�����Ǹ�����ˡ� �������e�¡� ��ʹ�҂��ڑ��Y��ȫ����ȥ����Ҳ���҂�������Լ����x�� ϣ�����������҂����x��");
	if (status == 10)
		cm.sendNextPrevS("#b������������");
	if (status == 11)
		cm.sendNextPrev("�������Ђ�Ո���ںͺ�ħ������������Y�С���������ڑ��Y����ȥ��Ո���o���ҵĺ��ӡ� ��߀Ҫ�ܾòŕ��с��������������ε��ˡ� ");
	if (status == 12)
		cm.sendNextPrevS("#b�e�f�@�NԒ������������ ��Ҫ����ȥ�����o�Լ��ĺ��ӣ�");
	if (status == 13)
		cm.sendNextPrev("��֪���҂�֮���l������ȥ�������Ҳŕ��@�Ӱ�Ӛ�㡣 ���ܴ��҆ᣬ���ˣ�");
	if (status == 14)
		cm.sendNextPrevS("#b�����ˡ� �ҡ������㡣 ������ҲҪ���ң�һ��Ҫ����");
	if (status == 15)
		cm.sendNextPrev("��Ȼ�����ˡ�");
	if (status == 16)
		cm.sendPrevS("#b�^����Ҫ�����Ҷ���������",3);
	if (status == 17){
		cm.forceStartQuest(22601, "1");
		cm.dispose();
}
}