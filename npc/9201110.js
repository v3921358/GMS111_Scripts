/*
	����:	ħ����ʦ
	�؈D:	����������
	����:	610030500
*/

function action(mode,type,selection) {
	switch(cm.getPlayer().getMapId()) {
		case 610030500:
			cm.sendOk("����ÿ��С͵��֪�����ǘӣ���õĹ����������h�������ģ����ԣ����˸��õ��f���@һ�c���㌢��һ��δ֪�ķ��g�Y������һ���ϵK���C���Լ��Ĵ��ڡ�");
			break;
		case 610030000:
			cm.sendOk("Once known as the 'Prince of Shadows', Grandmaster Ryo possessed supreme speed and power with short-ranged daggers and longer chain-like Claw. A part-time memeber of the Bosshunters, he was reowned for unparalleled ability to blend into the very nigth itself. His legend grew during a battle with Crimson Balrog, where he moved so swiftly that Balrog's attacks only caught air. Ryo also performed occasional 'retrievals' for those less fortunate than himself.");
			break;
		case 610030530:
			if (cm.isAllReactorState(6108004, 1) && !cm.haveItem(4001256, 1)) {
				cm.gainItem(4001256,1);
				cm.sendOk("Good job.");
			} else {
				cm.sendOk("�������������ܼ��ı��I����������е��۾���Ȼ��؁����ҏ����Iȡ�㑪�еĪ���-�^����צ��");
				}
				break;
				}
			cm.dispose();
}