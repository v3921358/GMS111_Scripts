/*
	����:	��������
	�؈D:	��ħ��ʦ����ǰ������1
	����:	927000020
*/

var status = -1;

function action(mode, type, selection) {
	if (cm.getMap().getAllMonstersThreadsafe().size() > 0) {
		cm.dispose();
		return;
	}
	if (mode == 1) {
	status++;
	} else {
	if (status == 0) {
	cm.dispose();
	}
	status--;
	}
	if (status == 0)
		cm.sendNextNoESC("������#h0#�� ����������N�ӣ� ����������ֵ�Æ᣿ ��ļ������N�ӣ� �ٺ١�����", 2159308);
	if (status == 1)
		cm.sendPlayerToNpc("�қ]�Еr�g���㡣 ׌�_��");
	if (status == 2){
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/14");
		cm.sendDirectionStatus(0, 325);
		cm.showMapEffect("demonSlayer/31111003");
		cm.sendDirectionInfo("Skill/3111.img/skill/31111003/effect");
		cm.sendDirectionStatus(1, 1000);
		cm.sendNextNoESC("��ģ� ��֪�����@���ч��� ��������Nܛ�������ʧȥ����׌���@�N���᣿", 2159308);
		}
	if (status == 3){
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/15");
		cm.sendDirectionStatus(0, 365);
		cm.showMapEffect("demonSlayer/31121001");
		cm.sendDirectionInfo("Skill/3112.img/skill/31121001/effect");
		cm.sendDirectionStatus(1, 1000);
		cm.sendNextNoESC("��׌��ʧ���ˡ� �㲻�t���ħ������ ������ͽ��", 2159308);
		}
	if (status == 4){
		cm.sendDirectionStatus(4, 0);
		cm.EnableUI(0);
		cm.DisableUI(false);
		cm.MovieClipIntroUI(false);
		cm.spawnMonster(9300455, 3);
		cm.forceStartQuest(23205);
		cm.showWZEffect("Effect/Direction6.img/DemonTutorial/Scene4");
		importPackage(Packages.client.messages.commands.player);
		cm.dispose();
		var dispose = new DisposeCommand();
		dispose.execute(cm.getClient(), null);
}
}

function end() {
	action(1, 0, 0);
}