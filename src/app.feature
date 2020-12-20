Feature: App

	Scenario: Can see Tasks Screen on App load
		Given any
		When App load
		Then I should see "Tasks"