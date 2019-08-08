# Clockify Poster

Create a batch of entries in CSV (and convert to JSON or capture direct as JSON) and then use this code to post the batch to the Clockify online timesheeting service.

## Clockify Settings

See the [Clockify Developer API](https://clockify.me/developers-api) to get your own developer API key.

You need the workspace ID for the overall config and the project IDs of the projects you want to record time against for the entries.

Use _insomnia_ or similar to get workspace ID and project IDs.  The poster assumes one workspace with more than one project in it.  For multiple workspaces, just do several runsm chaning the workspace between runs as necessary.
