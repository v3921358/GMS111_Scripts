/*
	����:	�ǻ�үү
	�؈D:	�����
	����:	104000000
*/

function start() {
	cm.sendYesNo("��ã��㿴�����������һ������ѵ��ˣ��벻��Uչ��ĺ����б� ֻ�軨�M#b100,000#k���ţ��ҕ�����ĺ����б������#b 2�����#k������������İlչ���@���r�X�K���F��");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("�㌢����кܶ����ѣ���ֻ�ǲ��뻨#b100000 #k���ŗ��Ł�U���Լ��ĺ��љڣ�");
	} else {
		var capacity = cm.getBuddyCapacity();
		if (capacity >= 50 || cm.getMeso() < 100000) {
		cm.sendOk("�٣���Ҫ���������^�Ӿ���ؓ�ң���_����������#b100,000 #k���ţ� ��������㹻���Ǿ�����ĺ����б��ѽ����^������ƣ�#b 50�����#k��");
	} else {
		var newcapacity = capacity + 2;
		cm.gainMeso(-100000);
		cm.updateBuddyCapacity(newcapacity);
		cm.sendOk("�����б�������ӳɹ�����һ��ֻ�m���һ����ɫ����˲���Ӱ��������ϵ��κ�������ɫ��");
		}
		}
	cm.dispose();
}