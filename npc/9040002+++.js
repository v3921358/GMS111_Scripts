/*
	����:	ɼ��
	�؈D:	�ż�������Ӫ��
	����:	102040200
*/

var status;
var selectedOption;

function start() {
    selectedOption = -1;
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (mode == 1 && status == 3) {
	status = 0;
    }
    if (status == 0) {
	if (cm.getQuestStatus(6201) == 1) {
	    var dd = cm.getEventManager("Relic");
	    if (dd != null) {
		dd.startInstance(cm.getPlayer());
	    } else {
                cm.sendOk("δ֪���e�`��");
	    }
	    cm.dispose();
	} else {
            var prompt = "\r\n#b#L0#�����Ĺű���ʲ�N�ط�?#l\r\n#b#L1##t4001024#?#l\r\n#b#L2#���������o��?#l\r\n#b#L3#�ѽ��]�І��}�ˡ�#l";
	    if (selectedOption == -1) {
                prompt = "\r\n�҂��������Ǐĺܾ���ǰ���_ʼ��һֱ��Ŭ�����x�Ŵ����z�E'��ĸ�G��'���õ��Y���ǰl�F��ĸ�G��ӛ�d���@�e�䌍���Ǘ�֮�ȹ������İlԴ̎'�����Ĺű�'������߀�˽⵽���f�еČ�ʯ���̰�����'�����Ĺű�'���z�E�У�����춌�ʯ���̰��������ص������o��˱�'���`13'���ԁ��ˡ����ˊZ�����̰��������_ʼ�˹������o��" + prompt;
	    } else {
                prompt = "߀��Ҫ������?" + prompt;
	    }
	    cm.sendSimple(prompt);
	}
    } else if (status == 1) {
	selectedOption = selection;
	if (selectedOption == 0) {
            cm.sendNext("'�����Ĺű�'�������y�ξS�������uȫ���ĹŴ������lԴ�ء���ʯ����Ժ��ɭ����̎�����֮ĹŴ����B�ﶼ��'�����Ĺű�'���zַ��");
        } else if (selectedOption == 1) {
            cm.sendNext("#t4001024#�ǂ��f�е��܉�ʹ�����h���p�Č�ʯ�� �f����#t4001024#���˶������˩oҲ�S'�����Ĺű�'�Ĝ���Ҳ춴����P��");
	    status = -1;
        } else if (selectedOption == 2) {
            cm.sendNext("�^ȥ����ɿ���'�����Ĺű�'�����ǟo�˚w߀�������҂��@�ΛQ�����Y����֮��չ�_�������o���������ゃ�@Щһֱ��Ŭ�����������Ĺ�����");
        } else if (selectedOption == 3) {
            cm.sendOk("�ǆ᣿����ʲ�N���}��Ո�S�r�����");
	    cm.dispose();
        } else {
	    cm.dispose();
	}
    } else if (status == 2) {
	if (selectedOption == 0) {
            cm.sendNextPrev("'�����Ĺű�'������������������o���f���ǳ��������ʴȡ�������ĳһ��ͻȻ�����˩o��ԭ��߀�]Ū�����");
        } else if (selectedOption == 2) {
            cm.sendNextPrev("�@�ι������o���Ŀ���ǵ�'�����Ĺű�'̽�U�o�K�Z��#t4001024#���@���΄ՁK���ǿ����������������ɵġ�����Ҫ����Ҫ�cͬ�������");
        } else {
	    cm.dispose();
	}
    }
}