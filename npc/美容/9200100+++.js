/*
	����:	Dr. Lenu
	�؈D:	���ִ�����Ժ
	����:	100000103
*/

function start() {
	cm.sendOk("�������ݵ�������RƬ���҂�������һֱ�������������^~�������ı��Լ���ͫ�ף��뵽�̳Ǵ������Լ�ϲ���ľ�Ƭ��");
	cm.dispose();
}

/*
var status = -1;
var beauty = 0;
var hair_Colo_new;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("���~��������Ŭ�t����ؓ؟�����������ݵ�������RƬ���҂�������һֱ�������������^~��ӛס��ÿ����ע�⵽�ĵ�һ���¾�������۾����҂����Ԏ������ҵ����m����Ļ��y�R���F�ڣ�������ʲ�N��\r\n#L0#Cosmetic Lenses: #i5152010##t5152010##l\r\n#L1#Cosmetic Lenses: #i5152013##t5152013##l");
    } else if (status == 1) {
	hair_Colo_new = [];

	var teye = cm.getPlayerStat("FACE") % 100;

	if (cm.getPlayerStat("GENDER") == 0) {
	    teye += 20000;
	} else {
	    teye += 21000;
	}
	hair_Colo_new[0] = teye + 100;
	hair_Colo_new[1] = teye + 200;
	hair_Colo_new[2] = teye + 300;
	hair_Colo_new[3] = teye + 400;
	hair_Colo_new[4] = teye + 500;
	hair_Colo_new[5] = teye + 600;
	hair_Colo_new[6] = teye + 700;

	if (selection == 0) {
	    beauty = 1;
	    cm.sendYesNo("�����ʹ����ͨ����ȯ���㌢�S�C�@��һ�����y�RƬ��������� #b#t5152010##k ��׃����۾���?");
	} else if (selection == 1) {
	    beauty = 2;
	    cm.askAvatar("With our specialized machine, you can see yourself after the treatment in advance. What kind of lens would you like to wear? Choose the style of your liking.", hair_Colo_new);
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setRandomAvatar(5152010, hair_Colo_new) == 1) {
		cm.sendOk("��θı�������в�ͬ�����飡��");
	    } else {
		cm.sendOk("����������]���@������ȯ���ܱ�Ǹ�@�N�f���ҾͲ��܎������������g�ˡ�����.");
	    }
	} else {
	    if (cm.setAvatar(5152013, hair_Colo_new[selection]) == 1) {
		cm.sendOk("��θı�������в�ͬ�����飡��");
	    } else {
		cm.sendOk("����������]���@������ȯ���ܱ�Ǹ�@�N�f���ҾͲ��܎������������g�ˡ�����");
	    }
	}
	cm.dispose();
    }
}
*/