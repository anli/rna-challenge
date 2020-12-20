Feature: Task Create Screen

    Scenario: See Task Create Screen
        Given any
        When I am at 'Task Create Screen'
        Then I should see 'Name Input'
        And I should see 'Interval Input'
        And I should see 'Frequency Input'
        And I should see 'Save Button'

    Scenario: Update fields
        Given any
        When I am at 'Task Create Screen'
        Then I update 'Name Input' with 'Task Name'
        And I update 'Interval Input' with 'Weekly'
        And I update 'Frequency Input' with '2'
