/*
	����:	�����ִ�ʦ
	�؈D:	����������
	����:	610030500
*/

function start() {
	if (cm.getPlayer().getMap().getId() == 610030500) {
		cm.sendOk("һ�����Q�����o�󎟵Ă���r����������ĵ��������Ҫ�ɞ����ߣ��ͱ��ͨ�^���ҵĿ����C���Լ�������������ʹ������ǿ��Ĺ���������һ����K��Ĺ���K���_�����ֵ����ԫ@�����ȵĹ������Դ��C����");
		cm.dispose();
	} else if (cm.getPlayer().getMap().getId() == 610030000) {
		cm.sendOk("One of the only known Holy Archers, Lockewood is one of the Keep's most famous heroes. Of particular note is his custom white and gold battle barb, said to be blessed by a powerfull goddess. His aim was tremendously accurate over long distanes. Feared and respected for his 'Genesis Arrow' and 'Doom Phoenix', he once struck down six Typhons from the Valley of Heroes.");
		cm.dispose();
	} else if (cm.getPlayer().getMapId() == 610030540) {
		if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() == 0) {
			if (!cm.haveItem(4001258,1)) {
			cm.gainItem(4001258,1);
			}
			cm.warp(610030500,0);
		} else {
			cm.sendOk("�������е����o�ߡ�");
			}
		cm.dispose();
}
}