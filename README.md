# vestaboard-plus-plus
Vestaboard+, but with another +

## Vision
- Clean UI
- Lightweight and performant
- Fun

### References
- [Vestaboard+](https://www.vestaboard.com/plus)
- [Vestaboard dev docs](https://docs.vestaboard.com/docs/local-api/introduction/?_gl=1*tzsb1s*_gcl_au*MjA0NDc4OTkwLjE3NDAyNDYwNjM.*_ga*NTkzMjIyNTI1LjE3NDAyNDYwNjM.*_ga_JE1QENZVTH*MTc0MTE0NDAyNi4xMC4xLjE3NDExNDQ0OTUuMjcuMC43MDQ5NjM5MjQ.&_ga=2.32622909.284988025.1741060193-593222525.1740246063)

### Tech stack
- React + TypeScript + Vite (for frontend)
- Backend repo: [dynamic-display-backend](https://github.com/NahItsFine/dynamic-display-backend)

### Features
- settings
  - quiet hours
- sync channels
  - push - message (reflect current state, option to clear, button to push)
  - mode - spotify (ON/OFF)
- async channels (ON/OFF, recurrence rule via cron)
  - news
  - sports
  - calendar
  - quote of the day
  - random facts
  - stocks

## Nerd stuff
- Git
  - git branch convention: `<initials>/<branch name>`
  - git commit convention: `<feat/fix/chore>: <description>`
  - dev flow (* denotes if no feature branch): 
    - `git checkout -b tn/update-readme`
    - *do stuff
    - *`git add . && git commit -m "chore: update readme"`
    - `git checkout main && git pull origin main`
    - `git merge tn/update-readme`
    - *`git push origin main`
- Getting Started
  - Update dependencies: `npm install`
  - Run locally: `npm run dev`
  - Run within the local server: `npm run dev --host`
- What's next?
  - Sync channel for Spotify, NBA Scoreboard