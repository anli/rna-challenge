Feature: Task Screen

    Scenario: See Task Screen
        Given any
        And I have '3 tasks'
        When I am at Task Screen
        Then I should see 'Tasks'
        And I should see 'Create Button'
        And I should see 'tasks items'
