// for([начало];[условие]; [шаг])(действие)

var num =prompt("Ввидите число элементов массива")

//создаем пустой массив
var arr = []

for (i=0; i<num; i++) {
    arr.push(prompt("Введите "+ Number (i+1)+"элемент"))
}

alert(arr)