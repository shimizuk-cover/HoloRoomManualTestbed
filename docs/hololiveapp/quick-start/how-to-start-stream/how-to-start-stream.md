---
sidebar_position: 1
---
# 配信の始め方

## OBSにモデルを入れる

1. **Spout2**というプラグインを以下のリンクからインストールします。  
https://github.com/Off-World-Live/obs-spout2-plugin/releases
![img.png](img.png)
2. OBSのソースから「**Spout2 Capture**」を追加してください。  
![img_1.png](img_1.png)
3. プロパティを以下のように設定します。
- SpoutSenders : HoloLiveApp_Build_Spout 
- composite : Default
- Poll time for new senders : fast  
![img_2.png](img_2.png)

:::info
キャラクターだけ送信したい場合は、以下の手順を行ってください。
1. **SETTINGS**をクリックします。  
![image](../initialization/img.png)
2. **背景透過**にチェックを入れます。  
![img_3.png](img_3.png)
:::
