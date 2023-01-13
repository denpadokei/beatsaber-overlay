# BeatSaber Overlay with real-time data from HttpSiraStatus

The project is on my [GitLab](https://git.fascinated.cc/Fascinated/beatsaber-overlay) now, but the repo will be kept in sync here. <br />
The public url to view/use: <https://bs-overlay.fascinated.cc> <br />
Need help? Feel free to message me at: Fascinated#4719

## Usage

Go to the [Wiki](wikis/Usage)

## Preview

![Overlay](./static/overlay.png)
![Builder Menu](./static/builder.png)

## Todo

- Add toggle for showing pp
- Change the song time to a circular style in the song art
- Add overall stream stats (avg acc, misses, highest combo)
- Add option to scale the ui using css scale

## Getting started with developent

- Clone the repo
- Move into the cloned directory
- Run `npm install`
- Rename the `.env-example` to `.env`
- Create a redis server with a password
- Setup the `.env`
- Run `npm run dev`
- Open <http://localhost:3000>

If you want your changes to be in the main branch, feel free to open a pull request :)
