# Find the Pair

http://pairs.wojtekdudek.xyz

## Hosted

- DigitalOcean VPS
- Nginx
- http-server

## Tools Used

- React 16.4
- Redux / react-redux
- Styled Components
- Flow (static type checker)
- ESLint

## ToDo

- [x] create a sandbox Square component with div that will rotate in x axis on click event - each side should have a different color
- [x] Square component should return to it's original position after a specified amount of time
- [x] images will return to initial position only if two are selected
- [x] and only two images may be activated at the same time
- [x] create random array of cards (odd number, 2 for each selected image)
- [x] allow player to choose game's board size
- [x] add reset button
- [x] restyling
- [x] make it fully responsive
- [x] add animation for SuccessModal (to appear & disappear)
- [x] while responsive, it's still not to convenient to play on small screen - resize cards depending on viewport size
- [ ] gameReducer cleanup - now it's messy and ugly (extract, when necessary, helper functions)...
- [ ] add prettier animations for SuccessModal?
- [ ] add timer
- [ ] add warning when player tries to change board size during the game
- [ ] add score table (top x)
- [ ] move state to Redux store
- [ ] add persistence (localstore would be best here, I guess)
- [ ] add themes (plants, animals, GoT characters, etc...)
- [ ] add tests ;D

## Bugs

- [ ] - number of tries is incremented after timeout (hence the delay) - should be increased immediately
- [x] - success modal needs to be centered vertically (now its position depends on board size)
- [x] - ~~~clicking on matched images multiple times increments "matched" counter~~~
- [x] - ~~~successfull match must reset timeout~~~