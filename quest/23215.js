/*
	����:	�����ľ���
	�؈D:	���ܹ㳡
	����:	310010000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("#h0#��������չ˳����");
	if (status == 1)
		qm.sendNextPrevS("#b#p2151009#���Ҹպ������˵���ء�");
	if (status == 2)
		qm.sendNextPrev("(����#h0#�����˵������)�ţ���ʲô���𣿣�");
	if (status == 3)
		qm.sendNextPrevS("#b�����ٽ���һ���ϴε�������");
	if (status == 4)
		qm.sendNextPrev("�ϴε��������š�����������������ϰ��������������ڵ�ˮƽ�������������񲻻���ʲô��������");
	if (status == 5)
		qm.sendNextPrevS("#b�ðɣ�֪���ˡ�");
	if (status == 6)
		qm.sendNextPrev("��һ�¡�����һ�¡������Ҫ�����𡭡�����֮ǰ����������뵽���������������㡣#h0#����ʵ�������а������������Ǻ͹�ȥ���Լ�ս�����������뵽��һ���취�������ͻع�ȥ���͹�ȥ���Լ�������");
	if (status == 7)
		qm.sendNextPrev("Ҫ����ʱ�䵹ת�����뵽#m270000100#ȥ������#h0#�������ڵ�����˵̫Σ���ˡ�������ҵ���һ���ط�����˵#m220000000#��ʱ�������е��쳣��");
	if (status == 8)
		qm.sendNextPrev("��#m220000000#��ʱ�����²㣬�и�����#b#m220050300##k�ĵط�����������Խ���ʱ���϶���㵽����ȥ���һ�Ϊ���ʱ���϶��");
	if (status == 9)
		qm.sendNextPrev("��Ȼ�ұ�����ٻ��޵����ӣ���������Ϊ��ˣ��ҿ����ƶ���ͨ��������Ԫ�Ŀռ䡣�һ��ƶ���ֻ���Ҳ���ȥ��ͨ��ȥ����������㡣");
	if (status == 10)
		qm.sendPrev("���ڽ������ʱ���϶����˿��ܻᵽ���ȥ��ĳ��ʱ��㣬���ǲ���ı��ȥ�����飬�����ڻ�δ�������Ӱ�졣������ĵغ͹�ȥ���Լ�ս������");
	if (status == 11){
		qm.forceStartQuest();
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("#h0#�������������״̬��ô����");
	if (status == 1)
		qm.sendNextPrev("�͹�ȥ���Լ�ս�����Ƿǳ����ѵ��¡��͹�ȥ���Լ�����֮����Ӧ�û������ȥ�����˵ļ��ܡ�");
	if (status == 2)
		qm.sendNextPrev("�ɹ��ˡ�#h0#���Ҹо����˺�ȫʢʱ�ڵ��������Ϣ�������˽��п�ӡ��Ҫ�Ұ����ӡ��");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.changeJob(3112);
		qm.sendOk("�������Ѿ����ָ��˹�ȥ�������������ڿ�ʼ����Ҫ�����Լ������ˡ����뾡��ָ�ԭ�������ӡ�");
		}
	if (status == 4){
		qm.dispose();
}
}