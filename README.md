# Workouts.api

## Accessing Workout API from cultiveight.net:
  http://cultiveight.net/api/workouts/[endpoints]

  in database/index.js, change the host ip to private (line4)

## Testing in local server:
  localhost:3001/[endpoints]

  in database/index.js, change the host ip to public (line5)

## Endpoints:
- '/' => defaulted, get first 10 workouts information
  request: GET,
  params: null,

- '/savedworkouts/:user_id' => get user's saved workouts list
  reuqest: GET,
  params: user_id,

- '/oneworkout/:workout_id' => get a certain workout
  request: GET,
  params: workout_id,

- '/savedworkouts' => save a workout (to calendar)
  request: POST,
  body: {
      user_id:
      workout_id:
      time_on_calendar:
  }




