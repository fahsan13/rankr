# Manual - TODO: implement browser automation
Feature: Rankr Browser Automation

Background: View application landing page
    Given I am viewing the application landing page

Scenario: Render random article on page
    Then a random article is displayed

Scenario: Render new article on button click
    When I click the 'next article' button 1 time
    Then a new article is displayed

Scenario: Article ranking page displayed when all articles have been read
    When I click the 'next article' button 5 times
    Then the message 'You have read all articles' is displayed
    And the article ranking form component is displayed

Scenario: Message displayed on successful ranking submission
    Given I click the 'next article' button 5 times
    And I enter an article ranking of '1, 3, 4, 5, 2'
    When I click the 'submit ranking' button
    Then the message 'Thanks for submitting your ranking of: 1, 3, 4, 5, 2' is displayed

Scenario: Alert displayed on failed ranking validation
    Given I click the 'next article' button 5 times
    And I enter an article ranking of '1, 3, 4, 2, 2'
    When I click the 'submit ranking' button
    Then the message 'There was an error: Please ensure that each article is ranked only once.' is displayed
 
Scenario: Simulating error results shows error message
    When I click the 'simulate network error' button
    Then the message 'Sorry, we've encountered an error. Please reload the page and try again.' is displayed