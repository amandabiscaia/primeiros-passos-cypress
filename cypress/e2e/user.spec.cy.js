import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance();
const loginPage = new LoginPage
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accesLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accesMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.string({ length: 5 }), chance.string(), chance.cpf(), '2025-07-29')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    
  })
 
})
  