// data2.js
window.AIData2 = {
  patternDict: {
    ja: [
      {
        pattern: "バイバイ|またね|おつかれ",
        responses: ["また遊びに来てね！おつかれさま！", "ばいばーい！良い一日を！"]
      }
    ],
    en: [
      {
        pattern: "bye|goodnight|see ya",
        responses: ["See you next time! Take care!", "Bye bye! Have a great day!"]
      }
    ]
  },

  templates: {
    ja: ["実は {topic} について最近勉強中なんだ！"],
    en: ["I'm actually learning more about {topic}!"]
  },

  fillerResponses: {
    ja: ["そうなんだ！", "へぇー！"],
    en: ["Oh really?", "That's cool!"]
  },

  oncePhrases: {
    ja: ["お知らせ！今週末に特別配信を予定してるよ！"],
    en: ["Announcement! Special stream coming up this weekend!"]
  },

  loopPhrases: {
    ja: ["SNSのフォローもよろしくね！"],
    en: ["Don't forget to follow on social media as well!"]
  },

  scKeywords: {
    ja: ["赤スパ", "ギフト", "ドネーション"],
    en: ["donation", "tip"]
  },

  cutInRules: {
    ja: [
      { keywords: ["勝利", "勝ち", "ビクトリー"], text: "VICTORY!" }
    ],
    en: [
      { keywords: ["victory", "win"], text: "VICTORY!" }
    ]
  },

  silencePhrases: {
    ja: ["コメント待ってるよ〜！"],
    en: ["Waiting for your comments!"]
  }
};