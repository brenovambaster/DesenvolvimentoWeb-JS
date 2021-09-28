// Callback no browser 
document.getElementsByTagName('body')[0].onclick = (e) => {
    return console.log(`O evento ocorreu.${e}`)
}