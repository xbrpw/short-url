$(function() {
  $("#keyboard")
    .keyboard({
      language: ['Icelandic'],
      is: ['is'],
      layout: "custom",
      customLayout: {
        normal: [
          "1 2 3 4 5 6 7 8 9 0 ö {bksp}",
          "q w e r t y u i o p ð",
          "a s d f g h j k l æ \' {enter}",
          "{shift} z x c v b n m þ {shift}",
          "{accept} {space} {alt} {cancel}"
        ],
        shift: [
          "1 2 3 4 5 6 7 8 9 0 Ö {bksp}",
          "Q W E R T Y U I O P Ð",
          'A S D F G H J K L Æ \' {enter}',
          "{shift} Z X C V B N M Þ {shift}",
          "{accept} {space} {cancel}"
        ],
        // latin characters
        "alt": [
          "{empty} @ {empty} {empty} {empty} {empty} {empty} {empty} {empty}{empty} {empty} {bksp}",
          "@ {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
          "{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}  {enter}",
          "{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}  {shift}",
          "{accept} {space} {alt} {cancel}"
        ],
      }
    })
    // activate the typing extension
    .addTyping({
      showTyping: true,
      delay: 250
    });
});