/*
	����:	������ɳ��ͼ��
	�؈D:	���ﰲ����լ
	����:	260000200
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("�]�뵽����@�N��ǿ�������ˮ׼Ҳ�S���Գɞ�ɳ�ӈD�F�ĈF�TҲ�f������ ��ɳ�ӈD�F�T���f������Ҫ�ľ���������ǿ�󣬶��㡭�����ѽ��߂����㹻�Č����� ����߀��Ҫ���M��һ�Μyԇ����Σ� ���Խ��܆᣿");
	if (status == 1)
		qm.sendPrev("����Ҫ���H�yԇ�����������ԓ��Ҫ�H��ȥ�w�ɣ� ��������M��һ������ �e���ģ���Ҳ��������㡭�����ҵķ���팦������ˣ�");
	if (status == 2){
		qm.forceStartQuest();
		qm.warp(926000000,1);
		qm.spawnMonster(9100013,80,275);//�ٻ�����
		qm.dispose();
}
}