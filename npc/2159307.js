/*
	����:	��˹����
	�؈D:	ʱ��������1
	����:	927000000
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	if (status == 0) {
	cm.dispose();
	}
	status--;
	}
	if (status == 0)
		cm.sendNextNoESC("ָ�]�٣� �������e��");
	if (status == 1)
		cm.sendNextNoESC("�F�ڵ�������������⣬���������ץס�r�gŮ����ˡ� �ǂ����ֻ���O���ɱ������������J�����еĹ��ڶ���ԓ�����ģ�����");
	if (status == 2){
		cm.sendDirectionStatus(3, 2);
		cm.sendNextNoESC("��]�°ɣ� �㿴�������c��һ�ӡ����� ÿ�����f���@Щ����ĕr���㶼��Ӗ�ң����ǬF�ڡ����� �٣��㿴����̫�á� �l��ʲ�N���ˆ᣿ ���܂��ˆ᣿");
		}
	if (status == 3)
		cm.sendPlayerToNpc("�������V�ң��R˹�ج�������lЧ�ң� ���ң�߀�Ǻ�ħ������");
	if (status == 4)
		cm.sendNextNoESC("ʲ�N��");
	if (status == 5)
		cm.sendPlayerToNpc("�ش��ң�");
	if (status == 6)
		cm.sendNextNoESC("�mȻ�Ҍ���ħ���������\�� �����҂�һ�������������߀���^�ҡ� �� ��ġ�");
	if (status == 7)
		cm.sendPlayerToNpc("����Ո��͂�æ������ ���@���Ž��oӢ�ۂ���");
	if (status == 8)
		cm.sendNextNoESC("ʲ�N���� ��ʲ�N�� ������ʲ�N�� ����׌�������᣿ һ�����˰l�F�����Ӣ�ۂ���������ָ�]�ٵ�λ�Ӿ͛]�ˣ�");
	if (status == 9)
		cm.sendPlayerToNpc("���ѽ�������ָ�]�١�");
	if (status == 10)
		cm.sendNextNoESC("ʲ�N�� ���ڱ��Ѻ�ħ�����᣿ ���ʲ�N�@�N����");
	if (status == 11)
		cm.sendPlayerToNpc("�]�r�g����ˡ����� Ո�����f����������");
	if (status == 12)
		cm.sendNextNoESC("�ҕ��ģ���ֻ�Ǔ��ġ� ��ļ����أ�");
	if (status == 13)
		cm.sendPlayerToNpc("�e�����ҵļ����ˣ�");
	if (status == 14)
		cm.sendNextNoESC("ʲ�N�� �����ѽ������ˆ᣿");
	if (status == 15)
		cm.sendPlayerToNpc("������������");
	if (status == 16)
		cm.sendNextNoESC("�Ҷ��ˡ����� ��һֱ���ǳ�Ĭ���ԣ����Еr��Ĭ������f���ˆ��}�� �ðɡ� �ҕ����@���ŽoӢ�ۂ���");
	if (status == 17)
		cm.sendPlayerToNpc("�x�x�㡣 �ܱ�Ǹ��������@�ӵ�Ҫ��");
	if (status == 18)
		cm.sendNextNoESC("�e�y�^������ ��������߀Ƿ��һ�l���ء� �ðɣ���Ҫ���ˡ� ף����\��");
	if (status == 19){
		cm.removeNpc(2159307);
		cm.sendDirectionStatus(1, 720);
		cm.sendPlayerToNpc("������\�������x�ش󡣡��� �x�x�㡣");
		}
	if (status == 20){
		cm.sendDirectionStatus(3, 2);
		cm.sendDirectionStatus(4, 0);
		cm.dispose();
		cm.warp(927000080,0);
}
}