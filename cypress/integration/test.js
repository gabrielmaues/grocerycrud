import signup from '../pages/signupPage'
import signupFactory from '../factories/signupFactory'

describe('DBC', () => {
    it('Desafio 1', () => {

        var test = signupFactory.test()

        signup.go()

        signup.addCustomerV4()

        signup.createUser(test)

        signup.submit()
       
    })
    it.only('Desafio 2', () => {

        var test = signupFactory.test()

        signup.go()

        signup.addCustomerV4()

        signup.createUser(test)

        signup.submit()
       
       signup.return() 

       signup.filterAndCheck(test)
        
       signup.deleteAndCheck()
        
    })

})
