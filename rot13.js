const rot13 = (message) =>
  message.replace(/[a-z]/gi, (a) =>
    /[a-m]/i.test(a)
      ? String.fromCharCode(a.charCodeAt(0) + 13)
      : String.fromCharCode(a.charCodeAt(0) - 13)
  );

