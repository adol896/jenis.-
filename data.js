// data2.js (または data.js への追加用)
window.AIData1 = {
  patternDict: {
    ja: [
      // --------------------------------------------------
      // 1. 嬉しい・楽しい (喜・楽)
      // --------------------------------------------------
      {
        pattern: "嬉しい|うれしい|やった|最高|たのしい|よっしゃ|やったー|神|神回",
        responses: [
          "やったー！私もすごく嬉しいよ！",
          "最高だね！この瞬間をみんなと共有できて幸せ！",
          "楽しんでもらえて何より！今日は最高の配信だね！"
        ]
      },
      {
        pattern: "おめでとう|ナイス|ナイシュー|うま|上手|すご|凄い|さすが",
        responses: [
          "ありがとうー！みんなの応援のおかげだよ！",
          "えへへ、見せてしまったか…！褒めてくれてありがとう！",
          "ナイスいただきましたー！この調子でどんどんいこう！"
        ]
      },

      // --------------------------------------------------
      // 2. 怒り・プンプン (怒)
      // --------------------------------------------------
      {
        pattern: "ムカつく|むかつく|腹立つ|おこ|はあ|許せない|ズルい|ずるい|理不尽",
        responses: [
          "ちょっと今の理不尽じゃない！？激おこだよー！",
          "キーッ！許せない！次は絶対見返してやるんだから！",
          "落ち着け私…！でも今の判定は納得いかないよ～！"
        ]
      },

      // --------------------------------------------------
      // 3. 悲しい・しょんぼり (哀)
      // --------------------------------------------------
      {
        pattern: "悲しい|かなしい|泣|ツライ|つらい|ショック|萎え|ガメオベ|全滅|負けた",
        responses: [
          "ううっ…悲しすぎる…涙が止まらないよ…",
          "あんなに頑張ったのに…しょんぼりだよぅ…",
          "負けちゃった…でも次は絶対にリベンジするからね！よしよしして…！"
        ]
      },

      // --------------------------------------------------
      // 4. 困った・ピンチ (困)
      // --------------------------------------------------
      {
        pattern: "困った|やばい|ヤバい|ヤバい|やば|ピンチ|詰んだ|たすけて|助けて|無理",
        responses: [
          "ちょっと待って！大ピンチなんだけど！誰か助けてー！",
          "やばいやばい！完全に詰んだかもしれない…！どうしよう！？",
          "これはマズいですよ！リスナーさん、打開策を教えてー！"
        ]
      },

      // --------------------------------------------------
      // 5. 迷った・選択肢 (迷)
      // --------------------------------------------------
      {
        pattern: "迷う|どうしよう|どっち|どれ|悩み|選べない|決められない",
        responses: [
          "うーん、どっちにするかすごく迷うなぁ…！",
          "決められないよ～！みんなならAとB、どっちを選ぶ？",
          "直感を信じるか、堅実にいくか…運命の分かれ道だね！"
        ]
      },

      // --------------------------------------------------
      // 6. 疲れた・ねむい (疲)
      // --------------------------------------------------
      {
        pattern: "疲れた|つかれた|限界|ねむい|眠い|ねむ|へとへと|休憩|おやすみ",
        responses: [
          "ふぅ…お疲れ様！ちょっとあたたかいお茶でも飲んで一息つこうね。",
          "今日も一日頑張ったね！えらい！無理しないでゆっくり休んでね。",
          "なんだか眠くなってきたかも…みんなのコメントでパワーを充電させて！"
        ]
      }
    ],

    en: [
      {
        pattern: "happy|glad|awesome|fun|great|yay|pog",
        responses: [
          "Yay! I'm so happy right now!",
          "This is awesome! Glad you're enjoying the stream!",
          "We're having so much fun today!"
        ]
      },
      {
        pattern: "mad|angry|unfair|cheat|hate|rage",
        responses: [
          "That was so unfair! I'm so mad right now!",
          "No way! That game mechanics is broken!",
          "Calm down... calm down... but still, that's absurd!"
        ]
      },
      {
        pattern: "sad|cry|sobb|lose|lost|game over",
        responses: [
          "Oh no... that breaks my heart...",
          "We worked so hard... I'm so sad now.",
          "Game over... but we won't give up! Next time for sure!"
        ]
      },
      {
        pattern: "help|stuck|trouble|danger|noob|panic",
        responses: [
          "Wait wait wait! I'm in big trouble! Help me chat!",
          "Panic mode activated! What should I do now?!",
          "This is super dangerous! Any suggestions?"
        ]
      },
      {
        pattern: "tired|sleepy|exhausted|rest|break",
        responses: [
          "You've worked so hard today! Make sure to get some rest!",
          "Getting a bit sleepy... send me some energy in the chat!",
          "Take a deep breath and relax. You're doing great!"
        ]
      }
    ]
  },

  // 定期雑談（ループ再生）用に追加する感情表現フレーズ
  loopPhrases: {
    ja: [
      "みんな、最近何かスカッとする嬉しい出来事ってあった？",
      "ゲームでピンチになった時って、ゴリ押し派？それとも慎重派？",
      "疲れた時は甘いものが一番だよね！みんなの推しスイーツはある？"
    ],
    en: [
      "Has anything super exciting happened to you recently?",
      "When you're stuck in a game, do you rush in or plan carefully?",
      "Remember to stay hydrated and take breaks when you're tired!"
    ]
  }
};
