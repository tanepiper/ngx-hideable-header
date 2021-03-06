# Hideable Header for Angular 2+ with Universal support

Hideable Header is a directive for Angular that provides and easy and convenient API to add to any header element giving you full control
to show and hide it.

The default behaviour is that the element will hide once you have scrolled passed a distance equal to the height of your header. Scrolling up
the header will reappear.  You can also reverse this functionality and have headers be default by hidden and visible on scroll (useful for utility bars)

### Installation

Add the NPM package to your project

```
npm install ngx-hideable-header
```

## Usage

The HideableHeaderModule should be imported into any module you want to use it in. This will provide the `hideableHeader` directive to use in your components.

```typescript
import { HideableHeaderModule } from 'ngx-hideable-header';

@NgModule({
  ...
  imports: [
    BrowserModule,
    HideableHeaderModule,
  ]
  ...
})
export class AppModule {}
```

### Directive Use

Attach the directive to any header component you want to be hidable. The directive has some configuration attributes:

- `[scrollAt]=<number>`: Property to start hiding the element at, the default is 2 x the height of the component clientHeight.
- `[transition]="1s linear"`: Property defining the transition of the animation.  This property supports all transition types via sanitization.
- `[disable]=false`: This property stops the default behaviour of the directive.
- `[reverse]=false`: This property will reverse when the show/hide triggers, useful for things you would like to appear after the user scrolls.
- `[height]=<number>`: Property to overide the height of the transition
- `[units]="px"`: Property to define the style of units for transition

There are also some style properties set to the host element of this directive.  You can change these with element attributes:

- `[style.position]="fixed"`
- `[style.top]="0"`
- `[style.left]="0"`

```html
<div class="container">
  <nav hideableHeader
    [disable]=true
    [reverse]=false
    [transition]="1s ease-out"
    [scrollAt]=200
    [style.position]="relative"
    >
    <a href="#" id="brand">Brand</a>
  </nav>
</div>
```

### Public API

The directive instance has two methods that can be called, and two `Observable` properties that can be subscribed to:

#### Methods
- `instance.hide()` - Hides the element the directive is bound to.
- `instance.show()` - Shows the element the directive is bound to.

### Subscriptions
- `instance.viewProperties` - An object containing properties used in the directive
- `instance.isHidden` - A boolean value available to show what state the attached element is in.

To see how you use these in your code, check out the demo application and how to use `ViewChild` in your components.

## Demos

To see an online demo, visit https://ngx-hideable-header.firebaseapp.com. You can also run a local demo by cloning this repo and typing the following;

```bash
> npm install
> npm run start
```
