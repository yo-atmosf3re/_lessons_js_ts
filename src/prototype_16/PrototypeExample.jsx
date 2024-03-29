import React from 'react'

const userPrototype = {
   showName() {
      console.log(this.name)
   },
   showAge() {
      console.log(this.age)
   },
}

const alex = {
   name: 'Alex',
   age: 16,
}
alex.__proto__ = userPrototype


const hanna = {
   name: 'Hanna',
   showName() {
      console.log(this.name)
   }
}

alex.showName()
alex.showAge()
hanna.showName()

function User(name) {
   this.name = name
}

const user = new User('Alex')

user.toString()

const PrototypeExample = () => {
   return (
      <div>
         Prototype example!
      </div>
   )
}

export default PrototypeExample
