# State Machines - Naming Conventions (Draft)

> The following naming conventions are simply recommendations and are completely optional.
> Feel free to use whatever naming conventions you prefer.
> These conventions are strongly recommended for large projects with multiple developers.

For both states and events SCREAMING_SNAKE_CASE should be used.
For single items singular should be used and for collections plural.

## States

> States should be nouns because a state is just a snapshot at a particular point in time.

**State:** Action + Status  
**Action:** Verb (infinitive - optional) + Noun  
**Status:** INITIAL | IN_PROGRESS | SUCCESS | FAILURE | FINAL

The status "FINAL" can be either "SUCCESS" or "FAILURE".

Examples:

- 'ADD_USER_INITIAL'
- 'FETCH_ORGANIZATION_ROLES_IN_PROGRESS'
- 'FETCH_USERS_SUCCESS'
- 'FETCH_DETAILS_FAILURE'
- 'UPDATE_USER_ROLES_FINAL'

**Initial state:** Modul + INITIAL  
Example: 'ADMIN_INITIAL'

## Events

> Events should be named in the past tense because events are things
> that have already occurred from the state machine's perspective.

**Event:** Noun | Action + Verb (event)  
Example: 'SEARCH_BOX_VALUE_SET'

### Special events

**Initial load events:** Action + STARTED  
Example: 'ADD_USER_STARTED'

**Events aborted by the user:** Action + ABORTED  
Example: 'ADD_USER_ABORTED'

**Events related to Api requests through Effects:**

- Action + REQUESTED - request was sent to API
- Action + RESOLVED - request was resolved by API
- Action + REJECTED - request was rejected by API
- Action + SETTLED - request was either resolved or rejected by API

Examples:

- 'FETCH_USERS_REQUESTED'
- 'FETCH_USERS_RESOLVED'
- 'FETCH_USERS_REJECTED'
- 'UPDATE_USER_ROLES_SETTLED'

## Inspiration

- <https://github.com/felangel/bloc/blob/master/docs/blocnamingconventions.md>
- <https://youtu.be/2f-jEz1zoPM?t=558>
