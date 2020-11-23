## first thing you should do is to create af file `.env` in the root of the project with this content

DB_URI=REPLACE_WITH_YOUR_DATABASE_CONNECTION_STRING

DB_TEST_URI=REPLACE_WITH_YOUR_DATABASE_CONNECTION_STRING

DB_DEV=dev_game

DB_TEST=test_game

PORT=5555


## Basic Setup

## Dockerhub
1. Lav en konto på hub.docker.com
2. Klik på din konto og vælg 'Account Settings'
3. Klik på fanen 'Security'
4. Klik på 'New Access Token'
5. indtast 'Github Actions' og klik create
6. Kopier og gem denne access token (denne har samme vigtighed, som jeres SSH keys, og SKAL gemmes)

## Nyt repo
1. lav et nyt github repository med start koden. (husk at slette .git, så du kan lave git init) (H)
2. Klik settings fanen og derefter secrets under dit repository på github.com
3. Klik på 'New repository secret'
4. indtast 'DOCKERHUB_IMAGENAME' under Name og sæt value til et navn, som bliver dit imagename(imagename SKAL være med lowercase) og klik 'Add secret'
5. gør dette for følgende 2 værdier:
* Name = DOCKERHUB_TOKEN   Value = Access Token som du har oprettet på dockerhub
* Name = DOCKERHUB_USERNAME   value = dit dockerhub brugernavn
