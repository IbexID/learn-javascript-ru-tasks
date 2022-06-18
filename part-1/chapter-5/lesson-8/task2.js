let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let messagesReadTime = new WeakMap();
  
  messagesReadTime.set(messages[0], new Date.now());