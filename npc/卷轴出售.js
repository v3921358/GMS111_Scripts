/*
	����: 	������ŷ	
	�؈D: 	������	
	����: 		
*/

var status = 0;
var choice;
var scrolls = Array(2040807,2040006,2040007,2040303,2040403,2040506,2040507,2040603,2040709,2040711,2040806,2040903,2041024,2041025,2043003,2043103,2043203,2043303,2043703,2043803,2044003,2044103,2044203,2044303,2044403,2044503,2044603,2044703,2044815,2044908);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("�ðɣ���ӭ�´μ������٣�.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            var choices = "\r\n�����������ѡ��Ĺ�����Ʒ: ";
            for (var i = 0; i < scrolls.length; i++) {
                    choices += "\r\n#L" + i + "##v" + scrolls[i] + "##t" + scrolls[i] + "##l";
            }
            cm.sendSimple("��ӭ����#rð�յ������̵�#k ,�����������̵����Ʒô������ѡ��ɣ�ÿ����Ҫ70000��." + choices);
        } else if (status == 1) {
            cm.sendYesNo("��ȷ����Ҫ���������Ʒô���⽫������70000��ң���" +"\r\n#v" + scrolls[selection] + "##t" + scrolls[selection] + "#");
            choice = selection;
        } else if (status == 2) {
            if (cm.getMeso() >= 70000) {
                cm.gainMeso(-70000);
                cm.gainItem(scrolls[choice], 1);
                cm.sendOk("лл��Ĺ�ˣ��㹺�����Ʒ�Ѿ�������ı�����.");
                cm.dispose();
            } else {
                    cm.sendOk("��Ǹ����û�㹻��Ǯ��.");
                    cm.dispose();
            }
        }
    }
}