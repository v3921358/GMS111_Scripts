/*
	����:	Dr. Bosch
	�؈D:	��߳�����ҽԺ
	����:	220000003
*/

var status = -1;
var beauty = 0;
var hair_Colo_new;

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("���ǲ���ҽ��������Ludibrium������Ƶ��һλ��Ƭ����ר�ҡ�����������۾���������������Ҫ������������ #i" + 5152012 + "# #i" + 5152015 + "#, ���ҿ���Ϊ�㿪һ�ֺ��ʵĻ�ױ��Ƭ\r\n#L0#Cosmetic Lenses: #i5152012##t5152012##l\r\n#L1#Cosmetic Lenses: #i5152015##t5152015##l");
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
	    cm.sendYesNo("�����ʹ��#i" + 5152012 + "#�����ԭò���ܕ�׃��һ���S�C���������㻹����ʹ��ô��");
	} else if (selection == 1) {
	    beauty = 2;
	    cm.askAvatar("With our new computer program, you can see yourself after the treatment in advance. What kind of lens would you like to wear? Please choose the style of your liking.", hair_Colo_new);
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setRandomAvatar(5152012, hair_Colo_new) == 1) {
		cm.sendOk("��θı�������в�ͬ�����飡��");
	    } else {
		cm.sendOk("����������]���@������ȯ���ܱ�Ǹ�@�N�f���ҾͲ��܎������������g�ˡ�����");
	    }
	} else {
	    if (cm.setAvatar(5152015, hair_Colo_new[selection]) == 1) {
		cm.sendOk("Enjoy your new and improved cosmetic lenses!");
	    } else {
		cm.sendOk("����������]���@������ȯ���ܱ�Ǹ�@�N�f���ҾͲ��܎������������g�ˡ�����");
	    }
	}
	cm.safeDispose();
    }
}