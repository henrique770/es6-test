const vowelsAndConsonants = (s) => {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) > -1) {
      console.log(s[i]);
    }
  }

  for (var i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) < 0) {
      console.log(s[i]);
    }
  }
};

vowelsAndConsonants('javascriptloops');
