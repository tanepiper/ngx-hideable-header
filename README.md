# Hideable Header for Angular 2+ with Universal support

This is a library with directive to easily make header hideable (or sticky).


### Online demo

``` 
 https://ngx-hideable-header.firebaseapp.com
```

### Local Demo

For a demo just run:
```
npm install
npm run start
```

### Installation

```
npm install --save ngx-hideable-header
```

Include the HideableHeaderModule.
```js
import {HideableHeaderModule} from 'ngx-hideable-header';

@NgModule({
  ...
  imports: [
    BrowserModule,
    HideableHeaderModule.forRoot({
      heightTransform: -80,
      units: 'px',
      position: 'fixed',
      top: '0',
      left: '0',
      transition: 'all 0.5s'
    })
  ]
  ...
})
export class AppModule {
  ...
}
```

### Usage

When importing use the `forRoot` method on the module and pass it the height of your header in and the units you
want to use, as well as positional css.  The only value required is the `heightTransform` and the default units value is `px`.

```js
  //add hideableHeader directive to object with optional 'hideOnScrollDown' parameter">
   <div class="container">
    <nav hideableHeader [hideOnScrollDown]=true>
        <a href="#" id="brand">Brand</a>
    </nav>
</div>
</div>

```


