/*
	����:	�ࡤ�װ�
	�؈D:	ʱ��������2
	����:	927000010
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
		cm.sendNextNoESC("���е�ָ�]�ٶ����ˆ᣿ �ܺã��҂��_ʼ�ɡ�");
	if (status == 1)
		cm.sendNextNoESC("�ڂ���ĺ�ħ�������Ӌ��֮ǰ���҂�һ��Ҳ���ܷ�󠣡#h0#���� �f��l�F����Ȥ���YӍ��", 2159308);
	if (status == 2)
		cm.sendPlayerToNpc("�ǵġ��Ұl�Fһ���ֿ��M�����ܳ��������ڽ���һ֧�����҂���������");
	if (status == 3)
		cm.sendNextNoESC("�ֿ��� ���� ���ϛ]�����ܿ����҂��� ������ �^һЩ����֮��������#rӢ�ۣ�#k���Ǻܸ�Ц�᣿", 2159308);
	if (status == 4)
		cm.sendNextNoESC("���������@��ʧ��ص�̎�y�ܣ��Ҿ͕��d�^��", 2159339);
	if (status == 5)
		cm.sendNextNoESC("���Y�����ף�������к�ħ�����ڡ�", 2159308);
	if (status == 6)
		cm.sendNextNoESC("��߀�]�M�d�ء�", 2159339);
	if (status == 7)
		cm.sendPlayerToNpc("������������");
	if (status == 8)
		cm.sendNextNoESC("��߀���Ҹ����������", 2159339);
	if (status == 9)
		cm.sendNextNoESC("�@�Ε��h���@�Ӱɡ�");
	if (status == 10)
		cm.sendNextNoESC("���Ӣ�ۂ����ҿ϶�#h0#�Ќ���������Ӌ���� �������@Щ�ɱ��ġ�Ӣ�ۡ��������_��á�", 2159308);
	if (status == 11)
		cm.sendPlayerToNpc("�c��������˲�ͬ���ǣ�Ӣ�ۂ������˶��𣬶����Ǟ��Լ����𡣡��� �������؄e����������뱣�o���硣 �@���˺�Σ�U�� ���ң��҂�ֻ��ץס��Ů�� ��ħ�������Ǵ������ˡ�");
	if (status == 12)
		cm.sendNextNoESC("������t̓�� ����Ǻ�ħ�����������ε����ء�", 2159308);
	if (status == 13){
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10");
		cm.sendNextNoESC("�Ǻǡ�");
		}
	if (status == 14)
		cm.sendNextNoESC("����⡣", 2159339);
	if (status == 15)
		cm.sendNextNoESC("��ֻ����ד���҂�܊꠵�����Ӣ�ۣ���ǿ��#h0#�� ������������", 2159308);
	if (status == 16){
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10");
		cm.sendNextNoESC("�ܽ�һ�£�Ů��ץס�ˣ����ǻ����ʤ������ˣ�#h0#����������Ҫ�ġ�");
		}
	if (status == 17)
		cm.sendNextNoESC("���Ӣ�ۂ���������ˣ�ʣ�µĵֿ��M�����N�k�ź��أ�", 2159308);
	if (status == 18)
		cm.sendNextNoESC("�҂��r�g��������ȫ����ɡ�");
	if (status == 19)
		cm.sendNextNoESC("���^������ ��ʲ�N��ħ����Ҫ�҂��ݚ�һ���أ� ���ʲ�N���]���ˣ��͛]��ʲ�N���Կ��Ƶ��ˡ�", 2159339);
	if (status == 20){
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/18");
		cm.sendPlayerToNpc("ʲ�N�� ��ħ����ʲ�N�r��ӆ��Ҫ�� �ҏě] �f�^�@����");
		}
	if (status == 21)
		cm.sendNextNoESC("�����Ҳ��c���˸��V�㣬��ħ����Ҫ�҂������ˣ�����һ�С�", 2159308);
	if (status == 22)
		cm.sendNextNoESC("���磬���������������ɻҠa����");
	if (status == 23){
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/3");
		cm.sendPlayerToNpc("(�������� �x�ҼҺܽ�������)");
		}
	if (status == 24)
		cm.sendNextNoESC("�҂����úܺá� ���������еֿ�������ֻʣ�ׂ�ū�W��", 2159308);
	if (status == 25)
		cm.sendPlayerToNpc("��ħ����Ҳȥ���������᣿ ��Щ�؅^���Ɖ��ˣ�");
	if (status == 26)
		cm.sendNextNoESC("��ʲ�N�̶Ȱ��š���ȻҪ�ú��յkָ�ǵ�ȥ������ ��ȡ���Ɖ�ȫ�������xԒ��ȻҪ�����һǬ���Q���� ��������������ķ������@�N���У� ��ʲ�N���ĵ�����᣿", 2159308);
	if (status == 27){
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/11");
		cm.sendPlayerToNpc("ՈԭՏ�� �м����ұ��Ҫȥ̎��һ�¡�#b�����S����ĸ�H��ϣ���ゃ�]�¡���");
		}
	if (status == 28)
		cm.sendNextNoESC("�ȵȣ� ߀�]���_����أ����ܵ���ħ�����Č��ہK������������S�����¡� �қ]�fҪ���҂�������᣿ �F���x�_��Ԓ���ǲ��������", 2159308);
	if (status == 29){
		cm.sendDirectionStatus(3, 2);
		cm.sendDirectionStatus(4, 0);
		cm.dispose();
		cm.warp(924020010,0);
}
}