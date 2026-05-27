//1. String
//set of characters enclosed within quotes.
//Quotes - '',"",and ``(Backtick)
print = console.log.bind()

let username = 'Jspiders'
print("Username: ",username)

let student="jspider's students"
print("we are: ", student)

let location = `BTM Layout`
print("Location: ",location)

// print("We are" + student+","+username+"located in"+location)

//Template literal method - string interpolation
print(`We are ${student},${username} located in ${location}`)
print(typeof(username),typeof(student),typeof(location))
print("------------------------------")
// print("-"*50)
print("2.Number")

const num=12345
print("Number: ",num)

const decNum = 9.8
print("Gravity: ", decNum)
print(typeof(num),typeof(decNum))

const someNum = 1230
print("Some Number: ", someNum)

//Limitation
const limit= 1234567890123456
print("Correct numbers: ",limit)



