const $date = document.getElementById('date')
const $submit = document.getElementById('submit')
const $output = document.getElementById('output')

$submit.addEventListener('click', function () {
  let number = $date.value
  number = shift(number)
  if (number.length < 8) {
    alert('Date must be formatted mmddyyyy')
  } else {
    const values = {
      first: Number(number.slice(0, 2)),
      second: Number(number.slice(2, 4)),
      third: Number(number.slice(4, 6)),
      fourth: Number(number.slice(6, 8))
    }
    let radius = values.third % 20
    if (radius < 5) {
      radius = 5
    }

    let mainBranchLength = values.second % 40
    if (mainBranchLength < 15) {
      mainBranchLength += 15
    }
    let offset = 3
    let mainBranchThickness = Math.floor(values.first / 2) % 3 + 1
    if (mainBranchThickness < 3) {
      mainBranchThickness += 2
    }
    let sideArmThickness = 1
    let sideArmLength = Math.floor(mainBranchLength * 0.85)
    if (sideArmLength < 15) {
      sideArmLength += 15
    }
    let angle = values.fourth
    if (angle > 90) {
      angle = 90
    }
    if (angle > 45) {
      angle = Math.floor(angle / 2)
    }
    $output.innerHTML = (
      `<p><strong>Polygon Radius:</strong> ${radius}</p>
      <p><strong>Main Branch Length:</strong> ${mainBranchLength}</p>
      <p><strong>Internal Offset:</strong> ${offset}</p>
      <p><strong>Main Arm Thickness:</strong> ${mainBranchThickness}</p>
      <p><strong>Side Branch Thickness:</strong> ${sideArmThickness}</p>
      <p><strong>Side Branch Length:</strong> ${sideArmLength}</p>
      <p><strong>Side Branch Angle:</strong> ${angle}</p>`
    )
  }
})

function shift(string) {
  const array = Array.from(string)
  const iterator = array[2]
  const tail = array.slice(0, iterator).join('')
  array.splice(0, iterator)
  array.push(tail)
  const output = array.join('')
  return output
}

/* Based on Steve Griffith's array shuffle prototype */
const shuffle = function (array) {
  const length = array.length
  for (let i = 0; i < length; i++) {
    const temp = array[i]
    const pos = Math.floor(Math.random() * length)
    const other = array[pos]
    array[i] = other
    array[pos] = temp
  }
  return array
}