document.getElementById('generate').addEventListener('click', event => {
  event.preventDefault()

  const lower = 'abcdefghijklmnopqrstuvwxyz'
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const num = '1234567890'
  const spcl = '!@#$%&*'
  let chars = ''
  let password = ''


  let length = prompt('Enter the length of password between 8 and 128 characters')
  while (length < 8 || length > 128 || isNaN(length) == true) {
    length = prompt('Enter the length of password between 8 and 128 characters')
  }
  let lowercase = prompt('lowercase? y/n')
  while (lowercase !== 'y' && lowercase !== 'n') {
    lowercase = prompt('lowercase? y/n')
  }
  let uppercase = prompt('uppercase? y/n')
  while (uppercase !== 'y' && uppercase !== 'n') {
    uppercase = prompt('uppercase? y/n')
  }
  let numeric = prompt('numeric? y/n')
  while (numeric !== 'y' && numeric !== 'n') {
    numeric = prompt('numeric? y/n')
  }
  let special = prompt('special? y/n')
  while (special !== 'y' && special !== 'n') {
    special = prompt('special? y/n')
  }
  while (lowercase == 'n' && uppercase == 'n' && numeric == 'n' && special == 'n') {
    lowercase = prompt('lowercase? y/n')
    while (lowercase !== 'y' && lowercase !== 'n') {
      lowercase = prompt('lowercase? y/n')
    }
    uppercase = prompt('uppercase? y/n')
    while (uppercase !== 'y' && uppercase !== 'n') {
      uppercase = prompt('uppercase? y/n')
    }
    numeric = prompt('numeric? y/n')
    while (numeric !== 'y' && numeric !== 'n') {
      numeric = prompt('numeric? y/n')
    }
    special = prompt('special? y/n')
    while (special !== 'y' && special !== 'n') {
      special = prompt('special? y/n')
    }
  }

  if (lowercase == 'y') {
    chars = chars.concat(lower)
  }
  if (uppercase == 'y') {
    chars = chars.concat(upper)
  }
  if (numeric == 'y') {
    chars = chars.concat(num)
  }
  if (special == 'y') {
    chars = chars.concat(spcl)
  }
 
  for (i = 0; i < length; i++) {
    //add random char from chars Math.floor(Math.random()*chars.length)
    password = password.concat(chars.charAt(Math.floor(Math.random() * chars.length)))
  }
  alert(`Your secure password is: ${password}`)
})
