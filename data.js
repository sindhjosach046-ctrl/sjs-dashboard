// ╔══════════════════════════════════════════════════════════════════╗
// ║  SJS DASHBOARD DATA — Claude updates this after every carousel  ║
// ║  DO NOT manually edit. index.html reads from this file.         ║
// ╚══════════════════════════════════════════════════════════════════╝

const SJS_DATA = {
  platform: {
    name: "Sindh Jo Sach",
    urdu: "سندھ جو سچ",
    tagline: "The Truth of Sindh",
    mission: "Pakistani investigative counter-narrative media. Exposing double standards, challenging anti-Pakistan narratives, holding political and media establishments accountable.",
    handles: {
      facebook:  { label: "FB",  handle: "Sindh Jo Sach",      url: "https://facebook.com" },
      instagram: { label: "IG",  handle: "@sindh_josach",       url: "https://instagram.com/sindh_josach" },
      tiktok:    { label: "TT",  handle: "@sindh.jo.sach",      url: "https://tiktok.com" },
      twitter:   { label: "X",   handle: "@sindhJoSach",        url: "https://x.com/sindhJoSach" },
      youtube:   { label: "YT",  handle: "@sindhJosach-truth",  url: "https://youtube.com" }
    },
    lastUpdated: "2026-05-15"
  },

  carousels: [
    {
      id: "double-standard",
      date: "2026-05-15",
      topic: "Double Standard",
      subtitle: "Imtiaz Chandio / Interpol Case vs Anti-Islam Content Abroad",
      slideCount: 5,
      costUSD: 0.20,
      model: "gpt-image-2",
      quality: "medium",
      caption: `The Sindh government used Interpol to bring Imtiaz Chandio back from the US.\n\nThe legal tools exist. The precedent is set. The mechanism worked.\n\nSo why is there silence when the same tools could be used against those producing blasphemous content from abroad?\n\nOne law for all — or no law at all. Which is it?`,
      hashtags: "#SindhJoSach #سندھ_جو_سچ #ImtiazChandio #Interpol #DoubleStandard #Pakistan #Sindh #SindhGovernment #PPP #IslamicRepublicOfPakistan #MediaDoubleStandard #AntiPakistan #AccountabilityForAll #SindhJoSachOfficial #قانون_سب_کے_لیے",
      slides: [
        { num: 1, type: "COVER",     file: "carousels/double-standard/sjsach_01_cover.png" },
        { num: 2, type: "PRECEDENT", file: "carousels/double-standard/sjsach_02_precedent.png" },
        { num: 3, type: "SILENCE",   file: "carousels/double-standard/sjsach_03_silence.png" },
        { num: 4, type: "PATTERN",   file: "carousels/double-standard/sjsach_04_pattern.png" },
        { num: 5, type: "DEMAND",    file: "carousels/double-standard/sjsach_05_demand.png" }
      ],
      notes: "First gpt-image-2 carousel. System rebuilt from scratch this session."
    }
    // Claude appends new carousel objects here after each generation
  ]
};
