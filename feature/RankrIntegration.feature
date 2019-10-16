# Manual - TODO: implement browser automation
Feature: Rankr Browser Automation

Background: View application landing page
    Given I am viewing the application landing page

Scenario: Render random article on page
    Then a random article is displayed
    And the page footer article count displays "1 of 5 articles read"

Scenario: Render new article on button click
    When I click the 'next article' button 1 time
    Then a new article is displayed
    And the page footer article count displays "2 of 5 articles read"

Scenario: Article ranking page displayed when all articles have been read
    When I click the 'next article' button 5 times
    Then 'You have read all articles'
    And the article ranking page is displayed
