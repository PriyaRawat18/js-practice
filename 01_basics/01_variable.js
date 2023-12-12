const accountId = 12656;
let accountEmail = "priya@goggle.com"
var accountPassword = "12345"  // prefer not to use var bcz of issue in block and functional scope
accountCity = "Jaipur"

//accountId = 2  // not alllowed
accountEmail = "ac@abs.com"
accountPassword = "3678"
accountCity = "Mathura"
console.log(accountId);
console.table([accountEmail, accountId, accountPassword, accountCity]) // good way