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

The HideableHeaderModule provides a single `forRoot` configuration to add to an applications root module. This configuration provides
several options to make sure the directive is set to handle the correct size of header. When you want to include the directive in any feature
modules of your application you only have to import the `HideableHeaderModule` module

The only required value is `height` and this should match the height of the element CSS value. The default units for this value is pixels (`px`).

```typescript
import { HideableHeaderModule } from 'ngx-hideable-header';

@NgModule({
  ...
  imports: [
    BrowserModule,
    HideableHeaderModule.forRoot({
      height: 80,
      // The rest of these are optional
      units: 'px',
      position: 'fixed',
      top: '0',
      left: '0',
      transition: 'all 0.5s'
    })
  ]
  ...
})
export class AppModule {}
```

### Directive Use

Attach the directive to any header component you want to be hidable. The directive has two configuration attributes - `disable` and `reverse`.

- `disable`: This property stops the default behaviour of the directive.
- `reverse`: This property will reverse when the show/hide triggers, useful for things you would like to appear after the user scrolls.

```html
<div class="container">
  <nav hideableHeader [disable]=true [reverse]=false>
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
