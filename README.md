# gmac (Give Me a Component)

**gmac** aims to save time by making the repetitive task of intializing new Components easier and faster. The main goals are:

- Support multiple component frameworks and styling tools (React, Vue, Styled Component, SCSS, etc.)
- Extensible through plugins and templates
- Easy to use and fast
  - Benchmark standards
- Secure


> *Note on the scope of work:*
**gmac** is an opinionated library in that it assumes the presence of two concepts, **components** and **styles**, with no plans to break away from these for the forseeable future.

### Contributing & Development
**gmac** is still pre 1.0.0 and needs a lot more work and figuring out. It is my (original author, @rocbear) belief that this can be a valuable tool and is needed in a world where boilerplate is powerful, but experienced developers could save time by not having to write it so often. If anyone shares in this feeling and would like to help out all suggestions and contributions are welcome!

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

You can read about other options in the [usage section](#usage).

### Run

> `gmac -n MyComponent ./src/components`

By configuring your project settings, this could be shortened to:

> `gmac MyComponent`

## Usage

## Design Decisions

### Interpolated vs Cloned Templates

When creating new templates, some thought needs to be given to how the template contents are stored, eg. handlebars templates, template literal or raw files (for cloning instead of compiling).

Some things that came up when writing `gmac-react-sass` include:
- Writing template literals can be annoying with regards to indentation.
- Any kind of string interpolated template generally doesn't come with syntax highlighting or linting, meaning it's easy to generate unsound code.
- Raw files (eg. cloning a copy of a `.js` file) allow for editor integration, but require some level of parsing or string replacement.

### Template Flexibility

**gmac** is intended to be flexible in that it should cater for real world scenarios. For example, if every one of your Component files imports an i18n plugin, you should be able to modify the template to support that. Or, if you want to have a seperate template for generating `Containers` and `Components`, that should be possible too.

Obviously how this is acheived depends on the approach chosen for [how a template is generated](#interpolated-vs-cloned-templates), but the following points might be of interest:
- Template Literals [can be tagged](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates), giving us access to the literals and variables to be interpolated. This is powerful for basic parsing and transformation.
- Cloning raw files will require either complicated parsing and mutation or string replacement which can be clumsy and lacks power.
- Some concepts, for example dependencies (`import`, `require`, DI), can apply at a higher level than the specific component framework and should be configurable in **gmac** itself, instead of needing to be handled by the chosen template plugin. This also applies to some stylistic properties such as `prettier`, `linters` or general indentation preferences.

## Benchmark

**⚠️ Benchmarks are not yet ready, this section outlines what we hope for them to be in the near future.**

In order to make sure that **gmac** is *actually helpful*, we will measure the ease-of-use and speed by testing each new major version in real world scenarios. The test criteria are as follows:

```
  Metric            | Target
=======================================
| Sample size       | 10              |
|-------------------------------------|
| Full ROI          | 5               |
|-------------------------------------|
| Time improvment   | 75%             |
|-------------------------------------|
| Pass ratio        | 100%            |
=======================================
```

In short, this means that in order for us to consider **gmac** to be "actually helpful", the following needs to be true: For **10** random users, the time taken to install, set up and use **gmac** to create **5** component skeletons should be faster than the time taken to create the same **5** skeletons, **100%** of the time. Additionally, assuming that **gmac** has been set up, the average improvement in time-to-create should be not less than **75%** over **5** creations.
