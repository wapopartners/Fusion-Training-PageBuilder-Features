# Environment

Environment values are global and should only be accessed on the server (not in client code). For this reason, they are appropriate for secrets.

Environment values may be accessed by importing `fusion:environment`, which provides an object consisting of all environment values (including both those defined here, as well as those provided by the system).

## Secrets

Secrets are also supported as environment values. In order to avoid checking secrets into your repository, they should be encrypted at rest and percent-bracket wrapped (e.g., `%{CIPHERTEXT}`). Your secrets will automatically be decrypted at deploy time.

## Local development

For local development, any environment values defined in `.env` will take precedence over anything defined here. In this way, you may set the decrypted plaintext versions of your secrets there where they will be available for local testing, but gitignored and will not be accidentally checked into the repository.
