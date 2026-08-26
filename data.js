// data.js
window.AIData1 = {
  // 特定キーワードへの応答パターン (正規表現または文字列)
  patternDict: {
    ja: [
      {
        pattern: "こんにちは|ハロー|こんばんは",
        responses: ["こんにちは！配信を楽しんでいってね！", "やあやあ！いらっしゃい！"]
      },
      {
        pattern: "おすすめ|何が好き",
        responses: ["雑談とゲーム配信が好きだよ！君の趣味も教えて？", "みんなとお喋りするのが一番の楽しみかな！"]
      }
    ],
    en: [
      {
        pattern: "hello|hi|hey",
        responses: ["Hello there! Welcome to the stream!", "Hi! Glad to have you here!"]
      },
      {
        pattern: "favorite|like",
        responses: ["I love chatting with everyone in the stream!", "Playing games and hanging out with you is the best!"]
      }
    ]
  },

  // 抽出キーワードを組み込む返答テンプレート ({topic} が置換される)
  templates: {
    ja: [
      "{topic}の話だね！もっと詳しく聞かせて！",
      "{topic}って面白いよね！最近すごく気になってるんだ。"
    ],
    en: [
      "Speaking of {topic}, tell me more about it!",
      "{topic} sounds interesting! I've been curious about that."
    ]
  },

  // パターンにマッチしなかった場合の相づち
  fillerResponses: {
    ja: ["うんうん、聞いてるよ！", "なるほどね！", "ふむふむ、それで？"],
    en: ["I hear you!", "I see!", "Aha, go on!"]
  },

  // 初回・低確率でランダム再生される単発フレーズ
  oncePhrases: {
    ja: [
      "今日も見に来てくれてありがとう！ゆっくりしていってね！",
      "初見さんも大歓迎だよ！気軽にコメントしてね。"
    ],
    en: [
      "Thank you for stopping by today! Hope you enjoy your stay!",
      "First-time viewers are always welcome! Feel free to leave a comment."
    ]
  },

  // 巡回して定期的に読み上げられるループフレーズ
  loopPhrases: {
    ja: [
      "次はどんな話をしようか？",
      "チャンネル登録や高評価もよろしくね！",
      "みんなの今日の出来事も教えてね！"
    ],
    en: [
      "What should we talk about next?",
      "Don't forget to like and subscribe!",
      "Tell me about how your day went!"
    ]
  },

  // スーパーチャット検知用キーワード
  scKeywords: {
    ja: ["スパチャ", "スーパーチャット", "ナイスパ", "ありがとう", "感謝"],
    en: ["superchat", "super chat", "thanks for the support", "thank you"]
  },

  // カットイン演出を発動するキーワードと表示テキスト
  cutInRules: {
    ja: [
      { keywords: ["ここだ", "ここぞ"], text: "ここだ！" },
      { keywords: ["必殺", "決めろ", "これで決める"], text: "これで決める！" }
    ],
    en: [
      { keywords: ["this is it", "here goes"], text: "THIS IS IT!" },
      { keywords: ["finish this", "let's do this"], text: "LET'S DO THIS!" }
    ]
  },
};
