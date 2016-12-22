
/* var wdier = {
  'type': 'human',
  'location': 'Singapore',
  'klass': 'WDI7'
}
*/
/*
var student = ['YiSheng', 'YiWen', 'YiLin', 'YiNi', 'YIEn', 'YiWei', 'YiShan', 'YiMin', 'YiKeong', 'YiTing']

for (var i = 0; i < student.length; i++) {
  var name = student[i]
  student[i] = Object.create(wdier)
  student[i].name = name
}
*/
/*
var YiSheng = Object.create(wdier)
YiSheng.name = 'YiSheng'

var YiWen = Object.create(wdier)
YiWen.name = 'YiWen'
var YiLin = Object.create(wdier)
YiLin.name = 'YiLin'
var YiNi = Object.create(wdier)
YiNi.name = 'YiNi'
var YiEn = Object.create(wdier)
YiEn.name = 'YiEn'
var YiWei = Object.create(wdier)
YiWei.name = 'YiWei'
var YiShan = Object.create(wdier)
YiShan.name = 'YiShan'
var YiMin = Object.create(wdier)
YiMin.name = 'YiMin'
var YiKeng = Object.create(wdier)
YiKeng.name = 'YiKeng'
var YiTing = Object.create(wdier)
YiTing.name = 'YiTing'
*/

function wdier (name) {
  this.name = name
  this.type = 'human'
  this.location = 'singapore'
  this.klass = 'WDI7'
}

var YiSheng = new wdier('YiSheng')

console.log(YiSheng)
