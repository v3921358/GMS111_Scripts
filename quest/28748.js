/*
	����:	�ƻ��ж�
	�؈D:	��Ҷ��
	����:	600000000
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
		qm.sendNext("���ǲ�������Щ������͵�����Ǳ���Ŀ�ʯ�����ǵã������룬�ƻ����ǵ���ҵ���ԣ�����������ȥ�����Ƕ�����һ���ɣ�");
	if (status == 1)
		qm.sendNextPrev("���ˣ�Ҫ�ƻ����ǵ���ҵ���ȵ��ƶ�һ�����ܵļƻ�����������ĸ����⣡");
	if (status == 1)
		qm.sendNextPrev("��ĵ�һ��Ŀ��λ��ɭ��Ͽ�ȡ����������Ƕ����˲��ٻ�ҩ�ѡ�������Ƕ����ҵ��ˣ�˳���ٰ���Щ�Ǽʾ�����ٵ����ˡ����ǿ��žͺܴ��������ӣ������������ڵĶ��ﶪ����ʯͷ���ǾͲ����ˣ�");
	if (status == 2)
		qm.sendPrev("�ޣ��һ��뵽��һ�����������ǵ����⣡ȥ�����ǵ�������͵�ߣ���Ū�����ǵĵ��ԣ�������������ˣ����ҿ϶������Щ���������Ǽʲɿ���ص���ڸ�����ϣ������������õ���ҵϵͳ�����ǵ���һ���ġ���");
	if (status == 3){
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
		qm.sendNext("�ƻ������չ�û�˳�������кúý�ѵ������");
	if (status == 1)
		//qm.sendNextPrev("�Ҿ�֪�����������ǳ�����ͷ���㻹û�ƻ����أ�����������ƻ��Ķ�����\r\n\r\n #b�ƻ����ǵĵ��ԣ�" + qm.getQuestStatus(28761) == 0 ? #k δ���"");
		qm.sendNextPrev("�Ҿ�֪�����������ǳ�����ͷ��");
	if (status == 1)
		qm.sendNextPrev("�����˹�Ѻ��������ʣ��Ҹо�������Ҫ�����������ԣ��Ҷ��ˣ���������˿϶����Ǽʴ����");
	if (status == 2)
		qm.sendPrev("�ţ�������ۼȿ�Ц�ֲ��������һ����벻����Ŀ��ܣ�������������Щ�������ڻ����š�");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.dispose();
}
}