Feature: Task Screen

    Scenario: See Task Screen
        Given any
        And that I have '3 tasks'
        And that I have 'first task' 'id is 1, name is Task A, 0 completedCount, 1 notCompleted Count'
        And that I have 'second task' 'id is 2, name is Task B, 2 completedCount, 1 notCompleted Count'
        And that I have 'third task' 'id is 3, name is Task C, 0 completedCount, 1 notCompleted Count'
        When I am at 'Task Screen'
        Then I should see 'Tasks'
        And I should see 'Create Button'
        And I should see 'tasks names'
        And I should see '1 unchecked checkbox' for 'first task'
        And I should see '1 unchecked and 2 checked checkbox' for 'second task'
        And I should see '1 unchecked checkbox' for 'third task'

