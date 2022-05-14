import BasePage from "./basePage";

class mainPage extends BasePage {
  static get url () {
    return '/automation-practice-form';
    }
 static get firstName(){
     return cy.get ("#firstName");
 }
 static get lastName(){
    return cy.get ("#lastName");
}
static get userEmail(){
    return cy.get ("#userEmail");
}
static get gender(){
    return cy.get ("#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label");
}
static get userNumber(){
    return cy.get ("#userNumber");
}
static get dateOfBirthInput(){
    return cy.get ("#dateOfBirthInput");
}
static get year(){
    return cy.get ('*[class^="react-datepicker__year-select"]');
}
static get month(){
    return cy.get ('*[class^="react-datepicker__month-select"]');
}
static get day(){
    return cy.get ('*[class^="react-datepicker__day react-datepicker__day--013"]');
}
static get addSubject(){
    return cy.get ("#subjectsInput");
}
static get subject(){
    return cy.get ("#react-select-2-option-0");
}
static get selectHobby(){
    return cy.get ("label[for='hobbies-checkbox-3']");
}
static get photoYour(){
    return cy.get ("input[type=file]");
}
static get stateSelect(){
    return cy.get ("#state > div > div.css-1hwfws3");
}
static get state(){
    return cy.get ("#react-select-3-option-0");
}
static get selectCity(){
    return cy.get ("#city > div > div.css-1hwfws3");
}
static get city(){
    return cy.get ("#react-select-4-option-0");
}
static get submitButton(){
    return cy.get ("#submit");
}
static get studentName(){
    return cy.get ("body > div.fade.modal.show > div > div > div.modal-body > div > table > tbody > tr:nth-child(1) > td:nth-child(2)");
}
static get dateOfBirth(){
    return cy.get ("body > div.fade.modal.show > div > div > div.modal-body > div > table > tbody > tr:nth-child(5) > td:nth-child(2)");
}
static get studentEmail(){
    return cy.get ("body > div.fade.modal.show > div > div > div.modal-body > div > table > tbody > tr:nth-child(2) > td:nth-child(2)");
}
static get hisGender(){
    return cy.get ("body > div.fade.modal.show > div > div > div.modal-body > div > table > tbody > tr:nth-child(3) > td:nth-child(2)");
}
static get mobile(){
    return cy.get ("body > div.fade.modal.show > div > div > div.modal-body > div > table > tbody > tr:nth-child(4) > td:nth-child(2)");
}
static get subjects(){
    return cy.get ("body > div.fade.modal.show > div > div > div.modal-body > div > table > tbody > tr:nth-child(6) > td:nth-child(2)");
}
static get hobbies(){
    return cy.get ("body > div.fade.modal.show > div > div > div.modal-body > div > table > tbody > tr:nth-child(7) > td:nth-child(2)");
}
static get stateAndCity(){
    return cy.get ("body > div.fade.modal.show > div > div > div.modal-body > div > table > tbody > tr:nth-child(10) > td:nth-child(2)");
}
}
export default mainPage;