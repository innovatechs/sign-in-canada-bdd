@live @saved @multiple

Feature: CATSLAB - GCKey Login
    Background:
        Given I have a saved username <gckey user>
        And I have a saved password <gckey password>
        And I have a saved password <gckey user 2>
        And I have a saved password <gckey password 2>
        And I open the Relying Party simulator page
        And I click on the button "English"


    Scenario: Shared computer auto logout from first credentials when logging into different Relying Party with different credentials
        When I click on the checkbox "Level 2"
        And I click on the checkbox "Force Authn"
        And I click on the link "Login"
        Then I should be on the RP simulator English chooser page 

        When I choose the SIC CSP
        And the element "Sign in with GCKey" is displayed
        And I click on the button "Sign in with GCKey"
        And I should see "Welcome to GCKey"
        And I set the inputfield "Username" to <gckey user>
        And I set the inputfield "Password" to <gckey password>
        And I click on the button "Sign In"
        And the element "Continue" is displayed
        And I click on the button "Continue"
        And I should be on the RP simulator response page
        Then I should see "urn:oasis:names:tc:SAML:2.0:status:Success"

        # second RP

        #When I open a new tab
        When I open the Relying Party 2 simulator page
        And I click on the button "English"
        And I click on the checkbox "Level 2"
        And I click on the checkbox "Force Authn"
        And I click on the link "Login"
        And I should be on the RP simulator 2 English chooser page
        And I choose the GCKey CSP
        And I should see "Welcome to GCKey"
        And I set the inputfield "Username" to <gckey user 2>
        And I set the inputfield "Password" to <gckey password 2>
        And I click on the button "Sign In"
        Then I should see "IDP initiated single logout succeeded"
