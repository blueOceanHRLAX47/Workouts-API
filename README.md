# Workouts.api

## Accessing Workout API from cultiveight.net:
  http://cultiveight.net/api/workouts/[endpoints]


## Testing in local server:
  localhost:3001/[endpoints]
  in database/index.js, change the host ip to public (line5)

  NOTE: Making POST request to 'savedworkouts' endpoint for a user does not work in local server. User_id is required in the body, while it will be auto-generated and get passed after the user sign up in the deployed version.

## Endpoints:

### GET ('/')
=> get first 10 workouts information
  - params: null,
  - body: null
  - return data example:
  ```
  [
    {   // *workout 1*
        "id": 1,
        "name": "Dumbbell Only Workouts",
        "type": "Strength",
        "likes": 55,
        "duration": "45-60 min",
        "body_group": "chest,  shoulder,  triceps",
        "description": "only requires dumbbells and is perfect for those looking to build lean muscle mass at home or on the go!",
        "equipment": "bodyweight, dumbbells",
        "workout_exercises": [
            {   // *exercise 1*
                "id": 1,
                "exercise_id": 1,
                "sets": 5,
                "reps": "8-10",
                "exercise": {
                    "id": 1,
                    "name": "Dumbbell Bench Press",
                    "video": "https://youtu.be/dGqI0Z5ul4k"
                }
            },
            {
                // *exercise 2*
                ...
            },...
        ]
    },
    {
      // *workout 2*
    },...
  ]
  ```


### GET ('/savedworkouts')
=> get user's saved workouts list
  - params: null,
  - body example: null *don't need a body for GET request in the deployed service*
    *for testing*
    ```
      body: {
        user: {
          id:3
        }
      }
    ```
  - return data example: same as GET('/'), but only get the workouts saved by the users



### POST ('/savedworkouts')
=> save a workout to calendar
  - params: null,
  - body example:
    ```
    {
      //  user: {
      //    id:3 (*INT*)
      //  }
      workout_id: 5 (*INT*)
      time_on_calendar: (*STRING*)
    }
    ```


### GET ('/oneworkout/:workout_id')
=> get a certain workout by given workout_id
  - params: workout_id,
  - body: null
  - return data example:
  ```
    {
      "id": 1,
      "name": "Dumbbell Only Workouts",
      "type": "Strength",
      "likes": 55,
      "duration": "45-60 min",
      "body_group": "chest,  shoulder,  triceps",
      "description": "only requires dumbbells and is perfect for those looking to build lean muscle mass at home or on the go!",
      "equipment": "bodyweight, dumbbells",
      "workout_exercises": [
          {   // *exercise 1*
              "id": 1,
              "exercise_id": 1,
              "sets": 5,
              "reps": "8-10",
              "exercise": {
                  "id": 1,
                  "name": "Dumbbell Bench Press",
                  "video": "https://youtu.be/dGqI0Z5ul4k"
              }
          },
          {
              // *exercise 2*
              ...
          },...
      ]
    },
  ```





