/*
	����:	�ܿ˶�
	�؈D:	��������
	����:	610030100
*/

// սʿ ���Թ���
// ����  ��ɨ��
// ��ʦ����  ħ��˫��
// ����  ��Ǯը��
//����  ����ȭ

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	var em = cm.getEventManager("CWKPQ");
	if (em == null) {
		cm.sendNext("�_���e�`��Ո����Lԇ��");
		cm.dispose();
		return;
		}
	if (!cm.isLeader()) {
		cm.sendNext("�ܱ�Ǹ���Ҳ����c����Մ��Ո׌���ĽM�L�c��ՄԒ��");
		cm.dispose();
		return;
		}
	switch(cm.getPlayer().getMapId()) {
	case 610030100:
		if (status == 0)
			cm.sendNext("�҂����M���@���^�򣬾��ѽ������l���������X�������҂����Ҫ�ӿ��ٶȡ�");
		if (status == 1)
			cm.sendNextPrev("֮ǰ���Йz���^��ͨ��Ť���󎟵Ĵ��T���ݚ��ˣ��҂�����ҵ���һ�l·��һ�l�܎��҂����^�S�����������·��");
		if (status == 2) {
			cm.sendOk("�F�ڣ��҂�������@����������һ�£��R�ϣ�����t���l�ߕ��s��ġ�");
			cm.dispose();
			em.setProperty("glpq1", "1");
			}
			break;
	case 610030200:
		if (status == 0)
			cm.sendNext("�@�ǂ��韩�����飬����@�l·���������҂���Ҫ���R5�Nð�U���I����ͨ�^��ϣ���҂��ĈF��������ģ���tֻ�ܻ�ȥ�ˡ�");
		if (status == 1) {
			cm.sendPrev("5�Nð�U���I��Ҫ���@Щ������Ӎ̖��ƽ�_���\�������ļ��ܣ����Ӹ��I�Ę��I���@���������ᣬ�҂������_�������T��");
			cm.dispose();
			}
			break;
	case 610030300:
		if (status == 0)
			cm.sendNext("�@���ط��c֮ǰ�������࣬Ҳ��ͨ�^�I�����_�����I�������������������ģ�ϣ��һ�ж��������");
		if (status == 1) {
			cm.sendPrev("ֻҪ�ܶ��^��Щ�������壬�������҂��ܿ�����^�mǰ�M��");
			cm.dispose();
			}
			break;
	case 610030400:
		if (status == 0)
			cm.sendNext("Ŷ�������ҵ����ģ�������Щ���µęC�P���@���҂�Ψһ�ĳ�·��ֻ���^�mǰ�С�");
		if (status == 1) {
			cm.sendPrev("�@���҂�Ψһ�ĳ�·��ֻ���^�mǰ�У��҂���ÿ�һ�c��Ҫ�������l���s����韩�ˡ�");
			cm.dispose();
			}
			break;
	case 610030500:
		if (status == 0)
			cm.sendNext("�㿴���Ǹ����Ƶĵ�����ô�����Л]���κ����������Ʊ���ֿ��ˡ�");
		if (status == 1)
			cm.sendNextPrev("�����܇����傀���g��ÿ�����g��������һ������");
		if (status == 2)
			cm.sendNextPrev("�ґ���ÿ�����g���е������������е�һ����");
		if (status == 3){
			cm.sendPrev("���k�����������؁��������֏͵�ԭ�������λ�ã�");
			cm.dispose();
			}
			break;
	case 610030700:
		cm.sendOk("�@�l·ͨ��Ť���󎟵�܊е�죬�����҂����_Ŀ�ĵ��ˡ�");
		cm.dispose();
		break;
}
}