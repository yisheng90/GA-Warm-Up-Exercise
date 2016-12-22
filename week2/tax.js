
/*
 *var yisheng = new taxPayer()
 *yisheng.name = 'Yi Sheng'
 *yisheng.income = 3000
 *
 *var x = new taxPayer()
 *x.name = 'x'
 *x.income = 4000

 *array = [yisheng, x]

 *array.forEach(function (element) {
 * calcTaxLiability(prepareTax, element['name'], element['income'])
 *})
*/
var taxPayer = {
  'YiSheng': 3000,
  'YiWen': 6000
}

function fileTax (customer, income, taxToPay) {
  console.log('Tax Office: Processing tax return')
  var recipt = 'Tax Office: Dear ' + customer + ', you earnt $' + income + '. Please pay $' + taxToPay + '.'
  return recipt
}

function prepareTax (income, tax, name) {
  var myName = name
  console.log('Accountant: Dear ' + name + ', you earnt $' + income + '. Your tax payable is $' + tax)
  console.log(name, ': my accoutant told me I have $' + tax + " tax payable. Let's inform tax office")
  var r = fileTax(myName, income, tax)
  console.log(r)
}

function calcTaxLiability (callback, name) {
  console.log('Accountant: Dear ' + name + ', We will get back to you shortly.')
  setTimeout(function () {
    console.log('Accountant: We are back.')
    var income = taxPayer[name]
    var taxToPay = income * 0.2

    callback(income, taxToPay, name)
  }, 2000)
}

var me = 'YiWen'
console.log(me, ': Ask acountant to calculate my tax')
calcTaxLiability(prepareTax, me)
console.log(me, ': Well. They are slow. ')

/*
 *function taxPayer (name, income) {
 *this.name = name
 *this.income = income
 *}
 */
