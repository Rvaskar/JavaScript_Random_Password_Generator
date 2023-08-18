

    class Password {
        constructor() {
        console.log('Welcome to password generator')
        this.pass = " "
    }
    generateStrongPassword(password) {
        let p =  Math.random().toString(36).slice(2) +
            Math.random().toString(36)
            .toUpperCase().slice(2)
            return p;
    }
    generateWeekPassword(len) {
        let chars = "abcdefghijklmnopqrstuvwxyz"
        let number = '1234567890'
        // let special = "!@#$%^&*"
        if (len < 3) {
            console.log("Your password should be atleast 3 characters long")
        }
        else{
            let i = 0
            while (i < len){
                this.pass += chars[Math.floor(Math.random() * chars.length)]
                this.pass += number[Math.floor(Math.random() * number.length)]
                i += 3
            }
            this.pass = this.pass.substring(0, len)
            return this.pass
        }
    }
    generateSuperStrongPassword(password) {
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$' +
            'abcdefghijklmnopqrstuvwxyz0123456789@#$ '+ '!@#$%^&*()-_/';

        for (let i = 1; i <= 18; i++) {
            let char = Math.floor(Math.random() *
                str.length + 1);

            pass += str.charAt(char)
        }

        return pass;
    }
    generateFunnyPassword(password) {
        let funnyPass = ['raju','monkey','heyjoker','canyouseeme','i_am_your_password','password','justignoreme']
        let funPass = funnyPass[Math.floor(Math.random() * funnyPass.length + 1)]

        return funPass
    }

}

// let b = new Password()


// // console.log(b.generateStrongPassword())


// //superStrong pass 

// let superstrongPass = b.generateSuperStrongPassword()
// // console.log(b.generateSuperStrongPassword())

// const e = () =>{
//     let d = document.getElementById('showPass')
//     d.innerHTML =  superstrongPass
// }

// let superstrongPass1 = document.getElementById('superstrongPass')
// superstrongPass1.addEventListener('click', e)

// //strong pass
// let strongPass = b.generateStrongPassword()
// // console.log(strongPass)

// const a = () =>{
//     let b = document.getElementById('showPass')
//     b.innerHTML =  strongPass
// }

// let strongPass1 = document.getElementById('strongPass')
// strongPass1.addEventListener('click', a)


// //fun pass creating
// let fun = b.generateFunnyPassword()
// // console.log(fun)


// const funMade = () =>{
//     let x = document.getElementById('showPass')
//     x.innerHTML =  fun
// }
// let FunnyPass1 = document.getElementById('funnyPass')
// FunnyPass1.addEventListener('click', funMade)

// // Week pass creating
// console.log(b.generateWeekPassword(8))
// let WeekP = b.generateWeekPassword(6)
// // console.log(fun)


// const WeekPassC = () =>{
//     let y = document.getElementById('showPass')
//     y.innerHTML = WeekP
// }
// let WeekPass1 = document.getElementById('weekPass')
// WeekPass1.addEventListener('click', WeekPassC)


const PassWS = () => {
    let b = new Password()
    let d = document.getElementById('showPass')

//superStrong pass 

let superstrongPass = b.generateSuperStrongPassword()

const e = () =>{
    d.innerHTML =  superstrongPass
}

let superstrongPass1 = document.getElementById('superstrongPass')
superstrongPass1.addEventListener('click', e)

//strong pass
let strongPass = b.generateStrongPassword()

const a = () =>{
    d.innerHTML =  strongPass
}

let strongPass1 = document.getElementById('strongPass')
strongPass1.addEventListener('click', a)


//fun pass creating
let fun = b.generateFunnyPassword()

const funMade = () =>{
    d.innerHTML =  fun
}
let FunnyPass1 = document.getElementById('funnyPass')
FunnyPass1.addEventListener('click', funMade)

// Week pass creating

let WeekP = b.generateWeekPassword(8)  //6 is length we define

const WeekPassC = () =>{
    d.innerHTML = WeekP
}
let WeekPass1 = document.getElementById('weekPass')
WeekPass1.addEventListener('click', WeekPassC)
}
PassWS()