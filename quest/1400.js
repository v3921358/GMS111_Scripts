/*
	����:	����ð�յķ���
	�؈D:	ð�ռ����������
	����:	1010000
*/

var status = -1;
var selctioned = 0;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("���ˮ���������õ������� ��F�ھ���������Ҫ���I�ˆ᣿ ����Գɞ�һ������ǿ�������cHP�đ�ʿ��һ�������S�෨�g��ħ������һ���ü�ʸ���m����Ĺ����֡�һ��ʹ�ÿ��ٹ������w�b������ʹ�ø��N�A���B�i���ĺ��I��");
	if (status == 1){
		var chat = "�����ð�U���I�������x���Ă��I\r\n#b";
		chat += "\r\n#L0#����ɞ��ʿ";
		chat += "\r\n#L1#����ɞ�ħ����";
		chat += "\r\n#L2#����ɞ鹭����";
		chat += "\r\n#L3#����ɞ��w�b";
		chat += "\r\n#L4#����ɞ麣�I";
		qm.sendSimple(chat);
		}
	if (status == 2){
		if (selection == 0)
			qm.sendNext("����ɞ�һ����ʿ���ţ����׃�ø��Ӆ����ģ� �ðɣ��ҕ����ҵ����]�żĽo#b��ʿ�I�̾�#k��ȥ�ɞ邥��đ�ʿ�ɣ�");
		if (selection == 1)
			qm.sendNext("����ɞ�һ��ħ�������ţ����׃�ø��Ӆ����ģ� �ðɣ��ҕ����ҵ����]�żĽo#bħ�����I�̾�#k��ȥ�ɞ邥���ħ�����ɣ�");
		if (selection == 2)
			qm.sendNext("����ɞ�һ�������֣��ţ����׃�ø��Ӆ����ģ� �ðɣ��ҕ����ҵ����]�żĽo#b�������I�̾�#k��ȥ�ɞ邥��Ĺ����ְɣ�");
		if (selection == 3)
			qm.sendNext("����ɞ�һ���w�b���ţ����׃�ø��Ӆ����ģ� �ðɣ��ҕ����ҵ����]�żĽo#b�w�b�I�̾�#k��ȥ�ɞ邥����w�b�ɣ�");
		if (selection == 4){
			qm.sendNext("����ɞ�һ�����I���ţ����׃�ø��Ӆ����ģ� �ðɣ��ҕ����ҵ����]�żĽo#b���I�I�̾�#k��ȥ�ɞ邥��ĺ��I�ɣ�");
		}
		selctioned = selection;
		}
	if (status == 3){
		if (selctioned == 0){
			qm.sendOk("�ȼ���10���ĕr��#b��ʿ�I�̾�#k��ϵ��ġ�");
			qm.forceStartQuest(1406,"1");
			qm.forceCompleteQuest();
			}
		if (selctioned == 1){
			qm.sendOk("�ȼ���8���ĕr��#bħ�����I�̾�#k��ϵ��ġ�");
			qm.forceStartQuest(1406,"2");
			qm.forceCompleteQuest();
			}
		if (selctioned == 2){
			qm.sendOk("�ȼ���10���ĕr��#b�������I�̾�#k��ϵ��ġ�");
			qm.forceStartQuest(1406,"3");
			qm.forceCompleteQuest();
			}
		if (selctioned == 3){
			qm.sendOk("�ȼ���10���ĕr��#b�w�b�I�̾�#k��ϵ��ġ�");
			qm.forceStartQuest(1406,"4");
			qm.forceCompleteQuest();
			}
		if (selctioned == 4){
			qm.sendOk("�ȼ���10���ĕr��#b���I�I�̾�#k��ϵ��ġ�");
			qm.forceStartQuest(1406,"5");
			qm.forceCompleteQuest();
		}
		qm.dispose();
}
}