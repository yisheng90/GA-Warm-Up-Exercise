function HTMLElement (tagname, klass, id) {
  this.tagname = tagname
  this.klass = klass || null
  this.id = id || null
}

HTMLElement.prototype.make = function () {
  $('body').append("<"+this.tagname.toString()+">")
  console.log('A', this.tagname, 'has been created')
}

var li = new HTMLElement('li')
li.make()
