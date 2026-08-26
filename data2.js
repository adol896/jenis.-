// data2.js - ゲーム配信特化型 AI辞書・演出データ
window.AIData2 = {
  // 1. チャットコメント・音声認識に対するキーワード反応パターン
  patternDict: {
    ja: [
      {
        pattern: "うまい|上手|すげ|OKOK|やった|行けた",
        responses: ["ナイスプレイ！今の動き完璧だったね！", "さすが！見ててスカッとするね！", "魅せてくれるなぁ！"]
      },
      {
        pattern: "あくむ|難易度|むずい|無理|無理ゲー|死にゲー",
        responses: ["ここ激ムズゾーンだよね……集中していこう！", "一筋縄ではいかないか……！頑張って！", "あきらめたらそこで試合終了だよ！"]
      },
      {
        pattern: "初見|はじめまして|新顔",
        responses: ["初見さんいらっしゃい！気軽にコメントしていってね！", "いらっしゃい！一緒にゲーム楽しんでいこう！"]
      },
      {
        pattern: "草|www|笑|うける|ウケる",
        responses: ["今の面白すぎるでしょ！w", "腹筋崩壊するわこんなのw", "神展開すぎて草"]
      },
      {
        pattern: "ガンバ|がんばれ|応援|ファイティン",
        responses: ["みんなの応援が力になる！応援ありがとう！", "気合入れていくよー！絶対勝つ！"]
      },
      {
        pattern: "GG|gg|ジージー|おつ|対戦ありがとうございました",
        responses: ["GG！ナイスゲームだったね！", "対戦ありがとうございました！いい勝負だった！"]
      }
    ],
    en: [
      {
        pattern: "clutch|pog|poggers|nice play|insane|pro",
        responses: ["What a play! That was clean!", "POG! Incredible skills!", "Insane movement!"]
      },
      {
        pattern: "hard|so hard|impossible|so close|unlucky",
        responses: ["This part is tough! You've got this!", "Unlucky, but we can do this!", "Don't give up!"]
      },
      {
        pattern: "first time|new viewer|hello|hi",
        responses: ["Welcome to the stream! Great to have you here!", "Welcome in! Hope you enjoy the game!"]
      },
      {
        pattern: "lol|lmao|omg|funny|haha",
        responses: ["LMAO that was priceless!", "I can't stop laughing lol", "Pure comedic timing!"]
      },
      {
        pattern: "gg|good game|well played",
        responses: ["GG! That was an awesome match!", "GGs everyone! Well played!"]
      }
    ]
  },

  // 2. 定期・アナウンス単発フレーズ（ゲーム配信仕様）
  oncePhrases: {
    ja: [
      "高評価ボタンを押してもらえると、配信のモチベーションが爆上がりします！",
      "みんなの好きなゲームのキャラクターや武器もぜひ教えてね！",
      "チャンネル登録や高評価、いつも本当にありがとう！"
    ],
    en: [
      "Hitting that like button really boosts the stream, thank you!",
      "Let me know your favorite characters or weapons in the chat!",
      "Thank you all so much for subscribing and supporting the stream!"
    ]
  },

  // 3. ループ巡回用フレーズ（ゲーム・雑談まったり用）
  loopPhrases: {
    ja: [
      "今日のプレイング、みんなの調子はどんな感じ？",
      "この場面、みんなならどう立ち回る？",
      "画面から目が離せない、手に汗握る展開だね……！"
    ],
    en: [
      "How are we feeling about today's gameplay so far?",
      "How would you guys handle this tricky situation?",
      "Can't take my eyes off the screen, this is so intense!"
    ]
  },

  // 4. 20秒無言検知時にAIが自動で喋るゲーム実況風独り言
  silencePhrases: {
    ja: [
      "（画面に集中しながら）よし……このタイミングで詰めて、一気に叩く！",
      "（コントローラーを握り直しながら）待って、今のエイム怪しくなかった！？ギリギリセーフ！",
      "（マップを確認しながら）次のエリアの安全地帯、どっち寄るかな……こっちから回り込もう",
      "（足を止めて息をひそめながら）……ん？ 今、奥で足音がしなかった？ 気のせい？",
      "（敵の動きを見ながら）相手もかなり慎重だな。焦って突っ込んだら狩られるパターンだこれ",
      "（回復アイテムを使いながら）体力がミリ残りで耐えた……！ 一旦体制整えよう",
      "（画面を見つめて苦笑いしながら）あーーー！悔しい！今の完全に判断ミスだったわ！",
      "（宝箱を開けながら）頼む……いい装備入っててくれ！ レア出ろー！"
    ],
    en: [
      "(Focusing on the screen) Alright... let's close the distance now and strike!",
      "(Gripping the controller) Wait, was my aim a bit off just now?! Barely made it!",
      "(Checking the map) Where is the safe zone closing in... Let's flank from here.",
      "(Pausing to listen) ...Wait, did I hear footsteps over there? Or am I imagining things?",
      "(Studying the enemy) They're playing super passive too. Pushing recklessly would be a trap.",
      "(Using a healing item) Survived on 1 HP...! Let's fall back and reset.",
      "(Staring at screen, laughing wryly) Ahhh! So frustrating! That was totally bad positioning!",
      "(Opening a chest) Please... give me good loot! Come on, legendary drop!"
    ]
  }
};
