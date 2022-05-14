import mainPage from "../pageObjects/mainPage";



context("Automation page", () => {
      beforeEach(() => {
        mainPage.visit();
      });


      it("Filling in Text Boxes", () => {
        cy.fixture("bigSmokeForm").then((data) => {
        mainPage.firstName.type("Big");
        mainPage.lastName.type("Smoke");
        mainPage.userEmail.type("bigsmoke@lossantos.com");
        mainPage.gender.click();
        mainPage.userNumber.type("6942069420");
        mainPage.dateOfBirthInput.click();
        mainPage.year.select("1930");
        mainPage.month.select("February");
        mainPage.day.click();
        mainPage.addSubject.type("Economics");
        mainPage.subject.click();
        mainPage.selectHobby.click();
        mainPage.photoYour.selectFile('C:/Studies/TEST_DEV/WEB_AUT_EGIDIJS_VAITKUS/cypress/Files/download.jfif');
        mainPage.stateSelect.click();
        mainPage.state.click();
        mainPage.selectCity.click();
        mainPage.city.click();
        mainPage.submitButton.click();
        mainPage.studentName.should("contain",data.studentName);
        mainPage.dateOfBirth.should("contain",data.dateOfBirth);
        mainPage.studentEmail.should("contain",data.studentEmail);
        mainPage.hisGender.should("contain",data.hisGender);
        mainPage.mobile.should("contain",data.mobile);
        mainPage.subjects.should("contain",data.subjects);
        mainPage.hobbies.should("contain",data.hobbies);
        mainPage.stateAndCity.should("contain",data.stateAndCity);
        });
      });
    })
