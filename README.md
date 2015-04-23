# livefyre-profile-faker

An experiment to describe Livefyre SSO Profile objects with [JSON Schema](http://json-schema.org/) such that fake profiles can be easily generated.

Faking provided by [json-schema-faker](https://www.npmjs.com/package/json-schema-faker)

## Usage

### Just want the Schema?

Check out [schema.json](./schema.json).

### Generate a fake Profile

`node index.js`

JSON will be printed to stdout.

### Generate multiple fake Profiles

e.g. 5

`N=5; for i in $(seq 1 $N); do node index.js; done;`

```
⚡ N=5; for i in $(seq 1 $N); do node index.js; done;
{
  "id": "quia voluptatum",
  "display_name": "aut est",
  "settings_url": "esse qui dolorum",
  "profile_url": "nobis quae at excepturi minus"
}
{
  "id": "sed consequatur id quibusdam et",
  "display_name": "quod et omnis",
  "profile_url": "placeat",
  "gravatar_disabled": false,
  "websites": [
    "minima ratione facilis"
  ],
  "bio": "sit"
}
{
  "id": "est nulla omnis et",
  "display_name": "tempore fugiat inventore odio rerum",
  "gravatar_disabled": true,
  "email": "quo voluptates nam"
}
{
  "id": "assumenda in quidem inventore asperiores",
  "display_name": "iste",
  "gravatar_disabled": "false",
  "bio": "quia et nihil eos",
  "display_rules": {
    "name": "false",
    "bio": "true",
    "location": false
  },
  "location": "et assumenda est reiciendis",
  "tags": [
    "ea dolorem aperiam"
  ]
}
{
  "id": "voluptatem soluta ut",
  "display_name": "quam maxime fugit",
  "email_notifications": {
    "comments": "often",
    "moderator_flags": "never",
    "moderator_comments": "immediately",
    "likes": "immediately"
  },
  "email": "quo et ipsum eveniet",
  "websites": [
    "quis earum"
  ],
  "profile_url": "earum",
  "location": "voluptatem rem reprehenderit et"
}
```
