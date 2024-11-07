import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage' 
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    
    
  }
  
 it('User Info Update - Success', () => {
    loginPage.accesLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
  
    menuPage.accesMyInfo()

    myInfoPage.fillPersonalDetails('First Name','Last Name')
    myInfoPage.fillEmployeeDetails('EmployId', 'otherId', 'Drivers Number', '2025-07-29')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    


  
  
  })
  it('Login - Fail', () => {
    loginPage.accesLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()

    
    
    
  })
  
})