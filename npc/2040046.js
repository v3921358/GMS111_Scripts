/*
	����:	������
	�؈D:	��߳�
	����:	220000000
*/

function start() {
	cm.sendYesNo("��ã��㲻��U����ĺ������Ά᣿ֻ�軨�M#b100,000#k���ţ��ҕ�����ĺ����б������#b 2�����#k������������İlչ���@���r�X�K���F��");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("�Ҷ��ˡ�������]������������N�����ѣ��������ӣ�������׃���⣬�؁��҂�Մ���⡣��Ȼ��Ҳ�����f��һ����õ���һЩ�����ϵľȝ������Ǻǡ���");
	} else {
		var capacity = cm.getBuddyCapacity();
		if (capacity >= 50 || cm.getMeso() < 100000) {
		cm.sendOk("�٣���_����������#b100,000 #k���ţ� ��������㹻���Ǿ�����ĺ����б��ѽ����^������ƣ�#b 50�����#k��");
	} else {
		var newcapacity = capacity + 2;
		cm.gainMeso(-100000);
		cm.updateBuddyCapacity(newcapacity);
		cm.sendOk("�����б�������ӳɹ�����һ��ֻ�m���һ����ɫ����˲���Ӱ��������ϵ��κ�������ɫ��");
		}
		}
	cm.dispose();
}