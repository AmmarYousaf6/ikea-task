# Take home assignment (backend engineer)

Imagine a store that has trucks deliver the goods every day. People in the store would like to see how many (and which) things will come in the following days in order to plan their workload, as well as to track the status of each delivery.

Another team will develop a dashboard that will display information about deliveries and their statuses. You are tasked with creating a service for that application.

## Data

The store has multiple systems that communicate mainly with events. As such, information about the deliveries arrives via events like this:

```json
{
  "id": "TR12370",
  "status": "planned",
  "plannedDeliveryDate": "2022-11-01T10:47:30.641Z",
  "category": "truck",
  "items": [
    {
      "name": "chair",
      "quantity": 3
    },
    {
      "name": "leg",
      "quantity": 12
    }
  ]
}
```

Each event has these fields:
- `id`: string, an identifier of the delivery
- `category`: string, either one of `truck` or `parcel`
- `items`: list, each having a `name` (string) and a `quantity` (number)
- `plannedDeliveryDate`: string in ISO 8601 format
- `actualDeliveryDate`: optional, string in ISO 8601 format
- `status`: string, one of: `planned`, `in-progress`, `delivered`, `unknown`

Part of your assignment is to decide how to represent this data when storing it, and when serving it.

In order to "consume" the event, implement a class extending the following interface (example is in Kotlin, but the idea should be clear):

```kotlin
interface DeliveryEventConsumer {
  fun consume(event: DeliveryEvent)
}
```

And assume it will be called from some messaging platform library.

## API
The service should be able to return the delivery information through an API; the structure and the functionality of that API is up to you.

The frontend team will want at least the following:
- Viewing all planned deliveries for tomorrow
- Viewing all deliveries within a time period

For simplicity's sake, assume there is no authentication.

## Persistence
You are free to choose any type of database that you feel is suitable for this problem.

## Testing
Application should be tested.

## Bonus points
Here's a list of additional features, or topics to address. Keep in mind that it's totally fine to *not implement any of these*, but be prepared to talk about them. Don't spend too much time completing these, an outline of a solution is fine too.

- Filtering and/or sorting deliveries by one or more properties
- An endpoint for a given delivery
- Pagination
- Dealing with out-of-order events

## Tech stack
Preferably Kotlin, otherwise any JVM language.
