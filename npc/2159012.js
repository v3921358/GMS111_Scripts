/*
	����:	����÷��
	�؈D:	��ֵ�ʵ����
	����:	931000011
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) 
	status++;
	else 
	status--;
	if (status == 0)
		cm.sendNext("�š�����ƺ��M�е��ஔ������ͺ�ɫ֮�������Ȼ������֮�e���ǺǺ�");
	if (status == 1)
		cm.sendNextPrev("��Ȼ����Ҋ֮����", 2159008);
	if (status == 2)
		cm.sendNextPrev("��ɫ֮���޿����޵Ļ����ˣ��Ϳ�Ҫ����ˡ�����ʵ��Ҫ��ʼ��һ���׶��ˡ�");
	if (status == 3)
		cm.sendNextPrev("��һ���A�Σ�", 2159008);
	if (status == 4)
		cm.sendNextPrev("�����������ڻ���Ӧ�������𣿹⿴���ʵ���Ҿ�Ӧ��֪����������Ҫ����ʲô������ֻ���������˲������棬����������˻���Ȥ��");
	if (status == 5)
		cm.sendNextPrev("�ţ���ʵ��������������Щʵ������ʲô����", 2159008);
	if (status == 6)
		cm.sendNextPrev("���ܲt���������У��������@����҂���ĵط��� ������أ� ֻҪ������΄����þ����ˡ� �������@�e��ÿһ������ߣ��e׌�������ܾ����ˡ�");
	if (status == 7)
		cm.sendNextPrev("���ţ� �Л]�� ��ʲ�N��ֵ�����");
	if (status == 8)
		cm.sendNextPrev("�ţ� ��ֵ����� �@��һ�f��������ʲ�N����", 2159008);
	if (status == 9){
		cm.updateInfoQuest(23007, "vel00=2;vel01=1");
		cm.trembleEffect(0,500);
		cm.MovieClipIntroUI(true);
		cm.showWZEffect("Effect/Direction4.img/Resistance/TalkInLab");
		cm.dispose();
}
}