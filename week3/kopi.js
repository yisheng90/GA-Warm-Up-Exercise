var order = 'tea'

var recipe = {
  kopi: 1,
  tea:1,
  sugar: 2,
  evaporatedMilk: false,
  condensedMilk: true,
  ice: false,
  cost: 1.50
}

function orderKopi (order) {
  if (order.match(/\A*\s\o\s/)) {
    recipe['sugar'] = 0
  }

  if (order.match(/\A*\s*\bkosong\b/)) {
    recipe['condensedMilk'] = false
  }

  if (order.match(/(\A*\s*\bsiew dai\b)|(\A*\s*\bsiewdai\b)/)) {
    recipe['sugar'] = 1
  }

  if (order.match(/\A*\s\bsi\b/)) {
    recipe['evaporatedMilk'] = true
    recipe['condensedMilk'] = false
  }

  if (order.match(/\A*\s\bice\b/)) {
    recipe['ice'] = true
    recipe['cost'] = 1.80
  }

  if (order.match(/\A*\s*\bgau\b/)) {
    if (order.match(/^kopi/)) {
      recipe['kopi'] += 1
      delete recipe['tea']
    } else {
      recipe['tea'] += 1
      delete recipe['kopi']
    }
  }

  if (order.match(/^tea/)) {
    delete recipe['kopi']
    recipe['tea'] = 1
  }

  recipe['step'] = []
  for (var key in recipe) {
    if ((key !== 'cost') && (key !== 'step')) {
      if (typeof (recipe[key]) === 'boolean' && recipe[key] === true) {
        recipe['step'].push('Pour in 1 portion of ' + key)
      } else if (typeof (recipe[key]) !== 'boolean') {
        recipe['step'].push('Pour in ' + recipe[key] + ' portion of ' + key)
      }
    }
  }
  console.log(recipe)
}

orderKopi(order)
