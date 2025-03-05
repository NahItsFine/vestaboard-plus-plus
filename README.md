# vestaboard-plus-plus
Vestaboard+, but with another +

## Vision
- Clean UI
- Lightweight and performant
- Fun

### Tech stack
- React
- Django
- SQLite

### POV: Product manager
- 2 types of channels, sync (i.e. push message, spotify-mode) and async (show news every hour)
- settings (i.e. quiet hours)

### POV: Engineer
- this one repo runs both FE and BE
- eventually export to docker or something

## Nerd stuff
- git branch convention: `<initials>/<frontend/backend/(none)>/<branch name>`
- git commit convention: `<feat/fix/chore>: <description>`
- dev flow: 
    - `git checkout -b tn/update-readme`
    - do stuff
    - `git add . && git commit -m "chore: update readme"`
    - `git checkout main && git pull origin main`
    - `git merge tn/update-readme`
    - `git push origin main`