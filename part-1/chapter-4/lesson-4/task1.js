let user = {
    name: "Джон",
    go: function() { alert(this.name) }
  }
  
  (user.go)()

  //выдаст ошибку, потому что после user нет точки с запятой