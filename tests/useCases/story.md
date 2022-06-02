# Story: Available Positions Method

## Use Case 01

As a system user

In order to get a list of available positions

Given a range from 1 to 100 positions

When the position is divisible by 3, should return "Visual" as string

When the position is divisible by 5, should return "Nuts" as string

When the position is divisible by both, should return "Visual Nuts" as string

Then it should return a list of positions available

## Use Case 02

As a system user

In order to get a list of available positions

Given a range from 1 to 500 positions

When the position is divisible by 3, should return "Visual" as string

When the position is divisible by 5, should return "Nuts" as string

When the position is divisible by both, should return "Visual Nuts" as string

Then it should return a list of positions available
