# gmac (Give Me a Component)

**gmac** aims to save time by making the repetitive task of intializing new Components easier and faster. The main goals are:

- Support multiple component frameworks and styling tools (React, Vue, Styled Component, SCSS, etc.)
- Extensible through plugins and templates
- Easy to use and fast
  - Benchmark standards
- Secure


> *Note on the scope of work:*
**gmac** is an opinionated library in that it assumes the presence of two concepts, **components** and **styles**, with no plans to break away from these for the forseeable future.

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
