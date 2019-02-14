# gmac (Give Me a Component)

_Scaffolding for the Component era_

**gmac** aims to save time by making the repetitive task of intializing new Components easier and faster. The main goals are:

- Support multiple component frameworks and styling tools (React, Vue, Styled Component, SCSS, etc.)
- Extensible through plugins and templates
- Backward compatability for all templates, always (even with major version changes)

## Getting Started

### Install

> `npm install --save gmac`

or

> `yarn add gmac`

### Configure

By default, gmac will use `gmac-react-sass` as the template. In order to change this specify a `.gmac` config file in the root directory of your projects with the following options:

```json
{
  "template": "<name of the template>"
}
```

You can read about other options in the [usage section](##usage).

### Run

> `gmac -n MyComponent ./src/components`

By configuring your project settings, this could be shortened to:

> `gmac MyComponent`

## Usage
